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
                <title>Terapi Yazılım - Danışmanlık Hizmetleri</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Danışmanlık</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>danışmanlık</a></Link>
                    </div>
                </div>
                <img src='/img/producttop.jpg' />
            </div>

            {!isMobile ?
                <div className={styles.subpage_horizontal_nav}>
                    <div className='container'>
                        <div className={styles.subpage_nav_container}>
                            <Link href='/hizmetler/egitim'><a>Eğitim Hizmetleri</a></Link>
                            <Link href='/hizmetler/destek'><a>Destek Hizmetleri</a></Link>
                            <Link href='/hizmetler/danismanlik'><a className={styles.active}>Danışmanlık Hizmetleri</a></Link>
                            <Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link>
                            <Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Danışmanlık Hizmetlerimiz İle Yanınızdayız...</h3>
                        <p>İş ortaklarının, ihtiyaçları doğrultusunda ulaşmak istedikleri hedefe akılcı ve pratik çözümler ile yol göstermektedir. Proje yönetimi konusunda firma değerleri için detaylı analizler ile verimliliği artırıcı yazılımlar geliştirerek ileriye taşımaktadır. Sistem içi analizleri ve raporlamaları istenilen platformda oluşturarak zamanınızı değerlendirmektedir.</p>
                        <p>TERAPI YAZILIM, eğitim ve destek hizmetlerin temelinde bilgi birikimi ve tecrübesi yatmaktadır. TERAPI, iş ortaklarına sağladığı açık iletişim ortamı ve sürekli eğitim felsefesiyle hizmet kalitesini sürekli artırarak kullanıcılarına yüksek standartlarda danışmanlık hizmeti verilmesini sağlamaktadır.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>

        </Layout>
    )
}

