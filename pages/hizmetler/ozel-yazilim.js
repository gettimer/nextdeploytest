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
                <title>Terapi Yazılım - Yazılım Hizmetleri</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Yazılım Hizmetleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>yazılım hizmetleri</a></Link>
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
                            <Link href='/hizmetler/danismanlik'><a>Danışmanlık Hizmetleri</a></Link>
                            <Link href='/hizmetler/ozel-yazilim'><a className={styles.active}>Yazılım Hizmetleri</a></Link>
                            <Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Yazılım Hizmetleri</h3>                        
                        <p><strong>Ön analiz ve Geliştirme</strong></p>
                        <p>Ön analiz çalışması sonucunda işletmelerin ortaya çıkan ihtiyaçları uygulama-yazılım geliştirme kapsamında yapılmaktadır.</p>
                        <p>Uygulama-yazılım geliştirme dışında kalan ihtiyaçlar ise bütünleşik entegre projeleri dahilinde güncel teknolojileri kullanarak çözümlenir. İşletmelerin iş süreçleri analiz edildikten sonra veri tabanı, uygulama geliştirme araçları, uygulama yazılımları, eğitimler ve entegrasyon hizmetleri bir bütün olarak verilir.</p>
                        <p><strong>Yazılım, Tasarım ve Geliştirme</strong></p>
                        <p>Standart ERP yazılımları, gelişmekte olan firmaların ihtiyacını karşılamaya yetmez. Mutlaka terzi işi sektörel çözümler geliştirilmelidir. İşletmelerin ihtiyaçları, kullanıcılara ve bulundukları sektöre göre farklılık göstermektedir. </p>
                        <p>Öz cümlede ek yazılım ve uyarlama gereksinimi ortaya çıkmaktadır. İşletmelerin ihtiyaçları, uzman kadromuz tarafından tespit edilip, platform ve yazılım teknolojisine karar verilir. Sürecin değişkenliğine zaman içerisinde çıkan yeni taleplere cevap verilecek şekilde çözümler sağlanır. </p>
                        <p><strong>Yazılım Lisanslama</strong></p>
                        <p>Terapi, ARGE ofisinde geliştirmiş olduğu özel çözümlerin yanı sıra Logo yazılımın Kobi, Kurumsal ve J-Platformundaki ürünlerin hizmetlerini de sunmaktadır. </p>
                        <p>Terapi, işletmelerin taleplerinin yanı sıra gerçek ihtiyaçlarını detaylı bir şekilde analiz edip, analiz sonucuna göre lisanslama ve yazılım geliştirme hizmet sunmaktadır. İşletmelerin, maliyetlerini minimumda tutup, faydayı en üst seviyede tutmasını hedeflemektedir.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/services/software.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>


        </Layout>
    )
}