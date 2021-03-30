import React from 'react'
const { useState, useEffect } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { isMobile } from 'react-device-detect';
import { products } from '../../lib/contents'
import styles from '../../styles/pages/product.module.scss'
import slug from 'slug'


export default function Product({ prod, category_id }) {

    const [openSubState, setOpenSubState] = useState(null);

    useEffect(() => {
        setOpenSubState(parseFloat(category_id));
    }, [category_id]);

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - {prod[0].metatitle}</title>
                <meta name="keywords" content={prod[0].metakeys} />
                <meta name="description" content={prod[0].metadesc} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>{prod[0].name}</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>ürünler</a></Link>
                        <Link href=''><a>{prod[0].name}</a></Link>
                    </div>
                </div>
                <img src='/img/producttop.jpg' />
            </div>
            <div className={styles.products}>
                <div className='container'>
                    <div className={styles.split_layout}>

                        <div className={styles.vert_nav}>
                            <ul>
                                {products.map((ele, index) =>
                                    <li key={ele.category_id}>
                                        <a className={ele.category_id === parseFloat(category_id) ? `${styles.active}` : null} onClick={() => openSubState === ele.category_id ? setOpenSubState(null) : setOpenSubState(ele.category_id)}>{ele.category}</a>
                                        {openSubState === ele.category_id ?
                                            <ul>
                                                {ele.contents.map(p =>
                                                    <li key={p.id}>
                                                        <Link href='/urun/[slug]' as={`/urun/${slug(p.name)}-${ele.category_id}-${p.id}`}>
                                                            <a className={p.id === prod[0].id ? `${styles.active_prod}` : null}>{p.name}</a>
                                                        </Link>
                                                    </li>
                                                )}
                                            </ul> : null}
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className={styles.product_content}>
                            <h2>{prod[0].name}</h2>
                            <div>
                                {prod[0].texts.map(e => (
                                    <p>{e.p}</p>
                                ))}
                            </div>
                            <div className={styles.splash}>
                                <img src={`/img/${prod[0].img}`} />
                                <span>{prod[0].name} Uygulama Detayları</span>
                            </div>
                            <div>
                                <ul>
                                    {prod[0].props.map(e => (
                                        <li><strong>{e.p}</strong></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const Temp = [];
    products.map(p => {
        p.contents.map(e => {
            e.category_id = p.category_id
            Temp.push(e);
        })
    });
    const paths = Temp.map(p => {

        return {
            params:
            {
                slug: `${slug(p.name)}-${p.category_id}-${p.id}`
            }
        }

    });
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const id = params.slug.split('-').slice(-1)[0];
    const category_id = params.slug.split('-').slice(-2)[0];
    let prod = [];

    products.map(e => {
        if (e.category_id === parseFloat(category_id)) {
            e.contents.map(ele => {
                if (ele.id === parseFloat(id)) {
                    prod.push(ele);
                }
            })
        }
    });
    return {
        props: {
            prod,
            category_id
        }
    }
}

