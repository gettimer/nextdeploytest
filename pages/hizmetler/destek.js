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
                <title>Terapi Yazılım - Destek Hizmetleri</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Destek Hizmetleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>destek hizmetleri</a></Link>
                    </div>
                </div>
                <img src='/img/producttop.jpg' />
            </div>
            <div className={styles.products}>
                <div className='container'>
                    <div className={styles.split_layout}>

                        <div className={styles.vert_nav}>
                            <ul>
                                <li><Link href='/hizmetler/egitim'><a>Eğitim Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/destek'><a className={styles.active}>Destek Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/danismanlik'><a>Danışmanlık Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link></li>
                            </ul>
                        </div>

                        <div className={styles.product_content}>
                            <h2>Destek Hizmetlerimiz İle Yanınızdayız...</h2>
                            <div>
                                <p>Siz de ürünlerinizle ilgili teknik destek almak için 0(224) 271 75 80 numaralı Teknik Destek Hattımızı arayabilirsiniz.</p>
                                <p><strong>Vermekte Olduğumuz Hizmetler:  </strong></p>
                                <p>Mali dönem devir işlemleri</p>
                                <p>Proje Danışmanlığı</p>
                                <p>Logo Destek (Teledestek, Yerinde Destek, Uzak Erişim)</p>
                                <p>Kurumsal ve Bireysel Eğitimler</p>
                                <p>Özel Çözümler (İşlem Kolaylığı, İş Pratikliği)</p>
                                <p>Raporlama Çözümleri</p>
                                <p>Veri Bakımı ve Güvenliği</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}