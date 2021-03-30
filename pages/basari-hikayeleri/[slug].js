import React from 'react'
const { useState, useEffect } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { products, testimonials } from '../../lib/contents'
import styles from '../../styles/pages/testimonials.module.scss'
import slug from 'slug'


export default function Testimonial({ item }) {


    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Başarı Hikayeleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href='/basari-hikayeleri/'><a>başarı hikayeleri</a></Link>
                        <Link href=''><a>{item[0].Name}</a></Link>
                    </div>
                </div>
                <img src='/img/basari-hikayeleri.jpg' />
            </div>

            <div className={styles.story}>
                <div className={styles.story_picture_block}>
                    <div className={styles.picture_relative}>
                        <img src={"/img/testimonials/" + item[0].image} />
                    </div>
                </div>
                <div className={styles.story_content_block}>
                    <div className={styles.comp}>{item[0].Company}</div>
                    <h2>{item[0].StoryTitle}</h2>
                    <p>
                        {item[0].Text}
                    </p>
                    <p>
                        <strong>{item[0].Name}</strong>
                        {item[0].Title}
                    </p>
                    {item[0].Prods !== null && item[0].Prods.length > 0 ?
                        <div className={styles.products}>
                            <h5>Tercih Edilen Ürünler</h5>
                            {products.map(e => (
                                <>
                                    {item[0].Prods.some(p => p.category_id === e.category_id) ?
                                        <>{e.contents.map(c => (
                                            <>{item[0].Prods.some(p => p.product_id === c.id) ?
                                                <><Link href='/urun/[slug]' as={`/urun/${slug(c.name)}-${e.category_id}-${c.id}`}><a>{c.name}</a></Link></> : null
                                            }</>
                                        ))}</>
                                        : null}
                                </>
                            ))}
                        </div> : null}

                    <Link href='/basari-hikayeleri/'><a className={styles.all}>Tüm Hikayeler</a></Link>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const Temp = [];
    testimonials.map(p => {
        Temp.push(p);
    });
    const paths = Temp.map(p => {

        return {
            params:
            {
                slug: `${slug(p.Name)}-${p.id}`
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
    let item = [];

    testimonials.map(e => {
        if (e.id === parseFloat(id)) {
            item.push(e);
        }
    });
    return {
        props: {
            item
        }
    }
}

