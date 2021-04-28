import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'
import { isMobile } from 'react-device-detect';

export default function UretimCozumleri() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Üretim Çözümleri</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Üretim Çözümleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>çözümler</a></Link>
                        <Link href=''><a>üretim çözümleri</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            {!isMobile ?
                <div className={styles.subpage_horizontal_nav}>
                    <div className='container'>
                        <div className={styles.subpage_nav_container}>
                            <Link href=''><a className={styles.active}>Üretim Çözümleri</a></Link>
                            <Link href='/cozumler/depo-cozumleri'><a>Depo Çözümleri</a></Link>
                            <Link href='/cozumler/saha-satis-cozumleri'><a>Saha Satış Çözümleri</a></Link>
                            <Link href='/cozumler/finansal-cozumler'><a>Finansal Çözümler</a></Link>
                            <Link href='/cozumler/eticaret-entegrasyon'><a>E-Ticaret Entegrasyon</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Üretim Çözümleri</h3>
                        <p>Terapi, Logo ERP çözümlerini her ölçekten ve her sektörden işletmenin tüm verileri ve iş süreçlerini merkezi bir şekilde uçtan uca yönetmesini sağlıyor. Üretimden satın almaya, dış ticaretten satışa kadar tüm operasyonlarda görünürlük, etkin kontrol ve veri güvenilirliği sağlayan Logo ERP ile daha fazla verimlilik elde ediliyor. Üretimde Entegreli çözümleri ile faydalı ürün kullanımını artırıyoruz.  Operasyonel süreçleri otomatik hale getiren ERP iş yükünü de önemli ölçüde azaltarak zaman ve maliyet tasarrufu kazandırıyor.</p>
                        <p>Terapi, Kobi ve kurumsal alanda birden fazla sektörde, sektöre özel çözümleri bulunan bir kuruluşdur. Üretim çözümlerimiz, KOBİ alanında TPM (Terapi Production Manager) ürünü ile üretime destek vermektedir. Bu ürün sayesinde Logonun Kobi ürünlerini kullanan işletmeler kurumsal segmentteki birçok özelliğe sahip olarak, kobi ürününü kullanmaya devam etmektedirler.  Reçete grupları, rota grupları, reçeteler, reçete süreleri, çalışanlar, hata tanımları, duruş tanımları vb. özelliklerin tamamı TPM ürünümüzde mevcuttur. </p>
                        <p>Kurumsal segmentte işletmelerin isteklerine, sektörlerine göre çözümler üretiyoruz. Genel veri tabanı mimarisi olarak Logo kurumsal ürünlerini kullanırken, Entegrasyonlarımızı son teknolojiler ile destekliyoruz. Üretimde, MPS, MRP gibi süreçlerin yanı sıra yapay zekâ ile planlama algoritmaları geliştiriyoruz. Sahadaki verileri DIP (Data Input Panel) uygulamamız ile topluyor, muhasebe departmanının maliyet muhasebesi yapması için zemin oluşturuyoruz.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/solutions/production.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
