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
                    <h1>Danışmanlık</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>danışmanlık</a></Link>
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
                                <li><Link href='/hizmetler/destek'><a>Destek Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/danismanlik'><a className={styles.active}>Danışmanlık Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link></li>
                                <li><Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link></li>
                            </ul>
                        </div>

                        <div className={styles.product_content}>
                            <h2>Danışmanlık Hizmetlerimiz İle Yanınızdayız...</h2>
                            <div>
                                <p>İş ortaklarının, ihtiyaçları doğrultusunda ulaşmak istedikleri hedefe akılcı ve pratik çözümler ile yol göstermektedir. Proje yönetimi konusunda firma değerleri için detaylı analizler ile verimliliği artırıcı yazılımlar geliştirerek ileriye taşımaktadır. Sistem içi analizleri ve raporlamaları istenilen platformda oluşturarak zamanınızı değerlendirmektedir.</p>
                                <p>TERAPI YAZILIM, eğitim ve destek hizmetlerin temelinde bilgi birikimi ve tecrübesi yatmaktadır. TERAPI, iş ortaklarına sağladığı açık iletişim ortamı ve sürekli eğitim felsefesiyle hizmet kalitesini sürekli artırarak kullanıcılarına yüksek standartlarda danışmanlık hizmeti verilmesini sağlamaktadır.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

