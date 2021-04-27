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

            {!isMobile ?
                <div className={styles.subpage_horizontal_nav}>
                    <div className='container'>
                        <div className={styles.subpage_nav_container}>
                            <Link href='/hizmetler/egitim'><a className={styles.active}>Eğitim Hizmetleri</a></Link>
                            <Link href='/hizmetler/destek'><a>Destek Hizmetleri</a></Link>
                            <Link href='/hizmetler/danismanlik'><a>Danışmanlık Hizmetleri</a></Link>
                            <Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link>
                            <Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Eğitim Hizmetleri</h3>
                        <p>Logo ve Terapi ürünlerini yeni kullanmaya başlamış, ya da kullanım alanlarında yetersiz olduğunu düşünen kullanıcılarımıza, ihtiyaca ve firma özelliklerine göre uygun çalışma metotları ile özelliklerin sunulduğu eğitim hizmetlerini sağlamaktayız.</p>
                        <p>“İstek merağı uyandırır, merak ise eğitim ile giderilir.”</p>
                        <strong>KURUMSAL EĞİTİM HİZMETLERİ</strong>
                        <br/>
                        <small>İşinizin ihtiyaçlarına uygun özel içerikli eğitimler veriyoruz.</small><br/><br/>
                        <p>Logo ve Terapi ürünlerini kapsayan geniş bir içeriğe sahip eğitim programları sunuyoruz. Uzman, deneyimli ve sertifikalı ekibimizle, katılımcılara kullanıcı eğitimleri veya sistem uzmanlık eğitimleri vermekteyiz. İhtiyaçlar doğrultusunda kurumsal verilen eğitimler bireysel olarak da alınabilmektedir.</p>
                        <p><strong>BİREYSEL EĞİTİMLER</strong></p>
                        <p>Bir konu ya da iş konusunda öğrenilen ya da öğretilen şeylere “bilgi” denir. Hayatımız boyunca bilgi edinmeye devam ederiz. Gerçek bilgiye sahip olanlar her zaman üstündür. Bireylerin, ister özel, isterse de kurumsal etki alanlarında alacağı profesyonel eğitimler, çok önemli kazanımlar ile birlikte fark yaratmanın temellerini oluşturacaktır.</p>
                        <p>Başarının temelinde sizlere verilen eğitimlerin hayatınızda kullanımı yatmaktadır. Bu bilgileri kullandığımız sürece eğitilmiş ve uygulamada başaran bireyler ya da kurumlar olacağız. Kişiselleştirilmiş eğitimler işte tam da burada fayda sağlamaktadır. İlerlemek istediğiniz profesyonel iş hayatınızda kişisel gelişiminize veya profesyonelleşmek istediğiniz alanlara odaklanılmış özel eğitimler çok değerlidir.</p>
                        <p>Dönüşüm, hedef doğrultusunda olduğumuzdan farklı bir duruma değişme biçimidir. </p>
                        <strong>DÖNÜŞÜMÜ SAĞLAYAN KURUMSAL EĞİTİMLER</strong>
                        <br/><br/>
                        <span>1-     Standart kullanıcı modül eğitimleri,</span><br/>
                        <span>2-     Kurumun sektörüne dayalı veya iş odaklı uzmanlık eğitimleri, </span><br/>
                        <span>3-     Kişisel, uzmanlık eğitimleri,</span><br/>
                        <span>4-     Projeye bazlı özel eğitimler,  </span><br/>
                        <span>5-     Kurumsal raporlama uzmanlık eğitimleri.</span><br/><br/>

                        <p>Bilgiyi, iki şekilde elde edebiliriz; deneme yanılma ya da deneyim transferi ile!</p>
                        <p>Başlangıç aşamasında deneyim transferi pahalı gibi görünse de, işin sonunda zamandan ve tutardan fayda sağlayacaktır.</p>

                    </div>
                    <div className={styles.media}>
                        <img src='/img/services/education.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>
            
        </Layout>
    )
}