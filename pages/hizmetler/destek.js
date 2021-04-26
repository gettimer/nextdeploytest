import React from 'react'
const { useState, useEffect } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'
import { isMobile } from 'react-device-detect';


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

            {!isMobile ?
                <div className={styles.subpage_horizontal_nav}>
                    <div className='container'>
                        <div className={styles.subpage_nav_container}>
                            <Link href='/hizmetler/egitim'><a>Eğitim Hizmetleri</a></Link>
                            <Link href='/hizmetler/destek'><a className={styles.active}>Destek Hizmetleri</a></Link>
                            <Link href='/hizmetler/danismanlik'><a>Danışmanlık Hizmetleri</a></Link>
                            <Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link>
                            <Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Destek Hizmetlerimiz İle Yanınızdayız...</h3>
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
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>

        </Layout>
    )
}