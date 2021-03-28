import React from 'react'
const { useState, useEffect } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/product.module.scss'



export default function Hizmetler() {

    return (
        <Layout>

            <Head>
                <title>Terapi Yazılım - Eğitim Hizmetleri</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Eğitim Hizmetleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>eğitim hizmetleri</a></Link>
                    </div>
                </div>
                <img src='/img/producttop.jpg' />
            </div>
            <div className={styles.products}>
                <div className='container'>
                    <div className={styles.split_layout}>

                        <div className={styles.vert_nav}>
                            <ul>
                                <li><Link href='/hizmetler/egitim'><a className={styles.active}>Eğitim Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/destek'><a>Destek Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/danismanlik'><a>Danışmanlık Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link></li>
                            </ul>
                        </div>

                        <div className={styles.product_content}>
                            <h2>Eğitim Hizmetlerimiz İle Yanınızdayız...</h2>
                            <div>
                                <p>Terapi Yazılım, deneyimli ve konusunda uzman sertifikalı kadrosuyla iş ortaklarının, bilgi altyapılarında meydana gelen sorun ve ihtiyaçlara anında çözüm geliştirmek amacıyla geniş bir yelpazede eğitim hizmetleri sunmaktadır.</p>
                                <p>Kurumsal ve bireysel eğitimler ile iş ortaklarının program bilgilerini analiz ederek en verimli şekilde kullanmalarına olanak sağlamaktadır.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}