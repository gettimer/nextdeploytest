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
    const [playVideo, setPlayVideo] = useState(false);
    const [collapse, setCollapse] = useState(0)

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
                                        <img src="/img/navicons/kobi.svg" />
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
                            {prod[0].video !== 'undefined' && prod[0].video !== null && prod[0].video !== '' ?
                                <div className={styles.video_link} onClick={() => setPlayVideo(!playVideo)}>
                                    <svg version="1.1" id="Capa_1" x="0px" y="0px"
                                        viewBox="0 0 477.867 477.867">
                                        <g>
                                            <g>
                                                <path d="M469.777,122.01c-5.031-3.111-11.315-3.395-16.606-0.751l-111.838,55.927v-40.653c0-28.277-22.923-51.2-51.2-51.2H51.2
			c-28.277,0-51.2,22.923-51.2,51.2v204.8c0,28.277,22.923,51.2,51.2,51.2h238.933c28.277,0,51.2-22.923,51.2-51.2v-40.653
			l111.838,56.013c8.432,4.213,18.682,0.794,22.896-7.638c1.198-2.397,1.815-5.043,1.8-7.722v-204.8
			C477.87,130.617,474.809,125.122,469.777,122.01z M307.2,341.333c0,9.426-7.641,17.067-17.067,17.067H51.2
			c-9.426,0-17.067-7.641-17.067-17.067v-204.8c0-9.426,7.641-17.067,17.067-17.067h238.933c9.426,0,17.067,7.641,17.067,17.067
			V341.333z M443.733,313.72l-102.4-51.2v-47.172l102.4-51.2V313.72z"/>
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M170.667,170.667c-37.703,0-68.267,30.564-68.267,68.267s30.564,68.267,68.267,68.267s68.267-30.564,68.267-68.267
			S208.369,170.667,170.667,170.667z M170.667,273.067c-18.851,0-34.133-15.282-34.133-34.133c0-18.851,15.282-34.133,34.133-34.133
			s34.133,15.282,34.133,34.133C204.8,257.785,189.518,273.067,170.667,273.067z"/>
                                            </g>
                                        </g>
                                    </svg>
                                 Tanıtım Videosu
                            </div>
                                : null}

                            <h2>{prod[0].name}</h2>
                            <div>
                                {prod[0].texts.map(e => (
                                    <p dangerouslySetInnerHTML={{ __html: e.p }}></p>
                                ))}
                            </div>
                            <div className={styles.splash}>
                                <img src={`/img/${prod[0].img}`} />
                                <span>{prod[0].name} Uygulama Detayları</span>
                            </div>
                            <div>
                                <ul>
                                    {prod[0].props.map((e, index) => (
                                        <li key={`collapse_${index}`} className={collapse === index ? `${styles.active}` : null} onClick={() => collapse === index ? setCollapse(null) : setCollapse(index)}>
                                            <strong dangerouslySetInnerHTML={{ __html: e.p }}></strong>
                                            <p dangerouslySetInnerHTML={{ __html: e.d }}></p>
                                            <span>{collapse === index ? <>-</> : <>+</>}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {prod[0].documents.length > 0 ?
                                <div className={styles.document_list}>
                                    <strong>Dökümanlar</strong>
                                    {prod[0].documents.map(e => (
                                        e.url !== 'undefined' && e.url !== null && e.url !== '' ?
                                            <a target="_blank" href={e.url}>{e.name}</a>
                                            : null
                                    ))}
                                </div>
                                : null}

                        </div>
                    </div>
                </div>
            </div>
            {playVideo ? <div className={styles.video_modal}>
                <button className={styles.close} onClick={() => setPlayVideo(!playVideo)}>
                    <svg viewBox="0 0 512 512"><path d="M256 16C123 16 16 123 16 256S123 496 256 496C389 496 496 389 496 256S389 16 256 16ZM307 341L256 290L205 341C196 350 180 350 171 341C162 332 162 316 171 307L222 256L171 205C162 196 162 180 171 171C180 162 196 162 205 171L256 222L307 171C316 162 332 162 341 171C350 180 350 196 341 205L290 256L341 307C350 316 350 332 341 341C332 350 316 350 307 341Z" /></svg>
                </button>
                <div className={styles.video_player}>
                    <video width="700" controls autoPlay>
                        <source src={prod[0].video} type="video/mp4" />
                    </video>
                </div>
            </div> : null}
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

