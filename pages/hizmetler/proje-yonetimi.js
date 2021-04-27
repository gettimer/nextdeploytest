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
                <title>Terapi Yazılım - Proje Yönetimi</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Proje Yönetimi</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>proje yönetimi</a></Link>
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
                            <Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link>
                            <Link href='/hizmetler/proje-yonetimi'><a className={styles.active}>Proje Yönetimi</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Proje Yönetimi</h3>
                        <p>Terapi tamamlanan sayısız projesinde uzman kadrosu ile Türkiye’nin 30’dan fazla ilinde proje geliştirmiştir.</p>
                        <p>Terapi projelerin başından sonuna kadar projenin beg/end date’lerinin ve planlanan maliyetlerle gerçekleşmesi konusunda hassasiyet göstermektedir. Alt yapının ve projeyi kullanan kullanıcıların eğitimlerini ve taleplerini en iyi şekilde tamamlamaktadır. Projenin başlangıcında işin köşelerini belirleyerek sonradan çıkabilecek olumsuzlukları öngörmektedir.</p>
                        <p>Terapi, ERP projelerinde LOGO yazılımın ürünlerini kullanmaktadır. </p>

                        <h2>ERP projelerinin aşamaları</h2>
                        <p><strong>Fazlara bölme</strong></p>
                        <p>Fazlara bölme aşaması, taleplerin ve ihtiyaçların belirlenmesi, yol haritasının çıkartılması için gerekli olan en önemli süreçtir. Analiz sürecinde standart olarak çözülecek başlıklar, uyarlama ile çözülecek konular, müdahale edilmesi gereken ihtiyaçlara göre geliştirilecek özel yazılımların köşeleri belirlenerek analiz yapılır.</p>

                        <p><strong>Gelişim</strong></p>
                        <p>Gelişim aşaması, faz bölme çalışması yapıldıktan sonra belirlenen ihtiyaçların ERP yazılımı ve özel çözümlerinin geliştirilip, bütünleşik iş yönetimine döndüğü bölümdür. Terapi proje yöneticileri ile işletmedeki proje sorumlularının aksiyon sürecidir. Yazılı örneklemeler önem taşımaktadır.</p>

                        <p><strong>Kullanıcı Eğitimleri</strong></p>
                        <p>Faz bölme ve gelişim süreçlerinin tamamlanmasını takiben, işletme proje sorumlusu eşliğinde kullanıcılar, uygulamaya yönelik detay eğitime alınır. Client kurulumu öncesinde yapılacak eğitimlere, projede aktif görev alacak proje ekibi dışında, yöneticilerin katılması, ortak dilin belirlenmesi açısından önem taşımaktadır.</p>

                        <p><strong>Client Kurulum</strong></p>
                        <p>Kullanıcı eğitimleri tamamlandıktan sonra, Client kurulum aşamasına geçilir. ERP üzerinde standart koşulları tanımlanır. Sürece hızlı bir şekilde geçilmesi için kullanıcı üzerindeki tanımların aktarımları hızlı bir şekilde tamamlanır.</p>

                        <p><strong>Canlıya Geçiş</strong></p>
                        <p>Proje kapsamında ERP ürününün kullanıma alındığı süreçtir. Bu süreçte proje ekipleri yine ortak çalışarak günlük iş akışının sistem üzerindeki denemelerini ve düzenlemeleri tamamlamış olurlar.</p>

                    </div>
                    <div className={styles.media}>
                        <img src='/img/services/project.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>


        </Layout>
    )
}