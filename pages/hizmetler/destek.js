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
                        <h3>Destek Hizmetleri</h3>
                        <p><strong>Logo Destek Hizmetlerimiz;</strong></p>
                        <p>Destek hizmetimizin amacı; kurulan Logo sisteminin güvenliğini ve sürekliliğini periyodik sistem denetimi ile sağlamak, ayrıca zaman içerisinde değişen ihtiyaçlara göre sistemin yeniden yapılandırılmasıdır.</p>
                        <p>Terapi Yazılım tarafından geliştirilmiş kurumsal yazılım ürünleri için destek hizmeti; 15 yılı aşkın Logo Yazılım tecrübesine sahip Terapi Yazılım’ın, sertifikalı ve alanında uzman olan Logo Destek Ekibi tarafından verilmektedir. Logo Yazılım ve Terapi Yazılım ürünleri için kullanıcılarına verilen destek hizmet içeriği, kullanıcıların talep ve ihtiyaçlarına göre belirlenmektedir. Belirlenen hizmet paketinin içerisinde; telefon destek, uzaktan destek, yerinde destek ve proje hizmet kalemleri bulunmaktadır.</p>
                        <p><strong>Tele Destek Hizmeti;</strong></p>
                        <p>Terapi Yazılım’ın bakım anlaşmalı müşterileri için uyguladığı Tele destek hizmeti ile müşteriler telefon veya “destek@terapiyazilim.com” e-mail adresinden destek taleplerini iletebilmektedir. Destek talebi destek havuzundaki ilk müsait destek uzmanı tarafından yanıtlanmaktadır. Böylece müşteri talepleri Terapi Yazılım tarafından en kısa sürede karşılanmakta ve hizmet süreçleri detaylı olarak raporlanabilmektedir. Tele destek hizmeti bütün anlaşmalarımızda mevcuttur. </p>
                        <p><strong>Uzaktan Destek Hizmeti</strong></p>
                        <p>Logo Yazılım ve Terapi Yazılım tarafından geliştirilmiş kurumsal yazılım ürünleri için uzaktan destek hizmeti; bakım anlaşmalı müşterilerimizin taleplerini, uzak bağlantı programları ile erişim sağlayarak karşılamaktayız.</p>
                        <p><strong>Yerinde Destek Hizmeti</strong></p>
                        <p>Anlaşmalı müşterilerimiz için, talepleri doğrultusunda faaliyet gösterdikleri adreslere periyodik yerinde destek hizmeti vermekteyiz. Diğer anlaşmaların içine dahil edilerek desteğin kesintisiz devam etmesi sağlanıyor.</p>
                        <p><strong>Proje Destek Hizmeti</strong></p>
                        <p>Yeni satış, yeniden yapılandırma, üretim veya dönüşüm süreçlerinde projeler anahtar teslim şeklinde uzmanlarımızca başlatılıp canlı geçişle teslim edilmektedir.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/services/support.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>

        </Layout>
    )
}