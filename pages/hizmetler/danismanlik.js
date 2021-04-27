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
                    <h1>Danışmanlık Hizmetleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmetler</a></Link>
                        <Link href=''><a>danışmanlık hizmetleri</a></Link>
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
                        <h3>Danışmanlık Hizmetleri</h3>
                        <p>İşletmelerin iş çözümlerine değer üretmek, işin verim ve kalitesini arttırmak amacıyla Logo ürünlerini yeni kullanmaya başlamış ya da uzun süredir kullanan ancak yeterli verimi alamadıklarını düşünen, programın özelliklerinin ne kadarını kullandığını bilmeyen müşterilerimize verdiğimiz hizmettir.</p>
                        <p>ERP’nin her şeyden önce bir <b>“bilgi sistemi”</b> olduğunu belirtmemiz gerekiyor. Daha da ötesinde, farklı departmanlardaki tüm verileri bir araya getirip, yöneten ve bu özelliği sayesinde yüzyılımızın vazgeçilmez sistemidir. Bunun çok iddialı bir tanım olduğunu düşünebilirsiniz ama asla değil! Eğer bir sistem, işletmenin stratejik amaç ve hedefleri doğrultusunda müşteri taleplerini en uygun şekilde karşılayabilmek için farklı coğrafi yerlerde bulunan tedarik, üretim ve dağıtım kaynaklarını en etkin şekilde planlayabiliyorsa, süper bir sistem olduğu konusunda herkes hem fikir olacaktır. Üstelik ERP bunlara ilaveten, bünyesinde müşteri ilişkileri yönetimi, insan kaynakları uygulamaları gibi güncel yaklaşımları da barındırmaktadır. Ama hepsi bu kadar değil! Şimdi ERP sisteminin genel özelliklerine birlikte göz atalım.</p>
                        <p>1.Özelleştirilebilen standart yazılımlardır.</p>
                        <p>2.Veritabanı yönetimi yazılımı veya işletim sisteminden ziyade ERP bir uygulama yazılımıdır.</p>
                        <p>3.Temel iş süreçleri hakkında çözümler üretir.</p>
                        <p>4.İşlevselliği yüksektir.</p>
                        <p>5.ERP çözümleri ülkeden ülkeye farklılık gösteren muhasebe işlemleri, fatura, irsaliye, makbuz gibi özel biçimli belgeler oluşturulması ve insan kaynakları yönetimi gibi işlevleri, ülkesel gereksinimlere uygun bir biçimde yerine getirirler.</p>
                        <p>6.ERP sistemleri tedarik yönetimi, sipariş yönetimi ve ödeme işlemleri gibi tekrar eden iş süreçlerini de destekler.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/services/consultancy.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>

        </Layout>
    )
}

