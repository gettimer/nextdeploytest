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
                <title>Terapi Yazılım - Danışmanlık Hizmetleri</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Özel Yazılım</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>özel yazılım</a></Link>
                    </div>
                </div>
                <img src='/img/producttop.jpg' />
            </div>
            <div className={styles.products}>
                <div className='container'>
                    <div className={styles.split_layout}>

                        <div className={styles.vert_nav}>
                            <ul>
                                <li>
                                    <Link href='/hizmetler/danismanlik'><a>Danışmanlık</a></Link>
                                </li>
                                <li>
                                    <Link href='/hizmetler/destek'><a>Destek</a></Link>
                                </li>
                                <li>
                                    <Link href='/hizmetler/egitim'><a>Eğitim</a></Link>
                                </li>
                                <li>
                                    <Link href='/hizmetler/ozel-yazilim'><a className={styles.active}>Özel Yazılım</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.product_content}>
                            <h2>Özel Yazılımlarımız İle Yanınızdayız...</h2>
                            <div>
                                <p>Yazılımda Sertifikalı Personellerimizle İhtiyacınıza Özel Yazılımlarla En etkili ve hızlı biçimde işinizi yapmanızı sağlıyoruz…
                        </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}