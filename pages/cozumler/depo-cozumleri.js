import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'
import { isMobile } from 'react-device-detect';

export default function UretimCozumleri() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Depo Çözümleri</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Depo Çözümleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>çözümler</a></Link>
                        <Link href=''><a>depo çözümleri</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            {!isMobile ?
                <div className={styles.subpage_horizontal_nav}>
                    <div className='container'>
                        <div className={styles.subpage_nav_container}>
                            <Link href='/cozumler/uretim-cozumleri'><a>Üretim Çözümleri</a></Link>
                            <Link href=''><a className={styles.active}>Depo Çözümleri</a></Link>
                            <Link href='/cozumler/saha-satis-cozumleri'><a>Saha Satış Çözümleri</a></Link>
                            <Link href='/cozumler/finansal-cozumler'><a>Finansal Çözümler</a></Link>
                            <Link href='/cozumler/eticaret-entegrasyon'><a>E-Ticaret Entegrasyon</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Depo Çözümleri</h3>
                        <p>Üretimden satışa kadar, değer zincirinin bütünleşik yönetiminde depo yönetim sistemi kilit rol oynamaktadır. Bütünleşik ve otomatize depo yönetimi sayesinde işletmelerin maliyetleri düşerken verimlilikleri de artıyor. Terapi’nin Depo Yönetim Sistemi portföyündeki ürünü ile her ölçekten işletmelerin malzeme, personel yönetimi açısından da önemlidir. Bu sayede müşterilerine ürünü, gerçek zamanda, istenilen yerde ve talep edilen miktarda sunan işletmeler, verimli depo süreçleri oluşturarak kârlılık ve rekabet avantajı sağlar.</p>
                        <p>Depo yönetimi, üretim süreçlerinin teknolojik gelişmelere göre şekil almasından sonra en önemli alanlardan birisi haline geldi.</p>
                        <p>Terapi, depo çözümlerinde ETU ismiyle geliştirdiği ürün ile üretime destek vermektedir. ETU’ da satınalma irsaliyesi, satınalma iade irsaliyesi, satış siparişi, satış irsaliyesi, satış iade irsaliyesi, sayım, depolar arası sevkiyat, ürün barkod doğrulama, stok yeri takibi gibi işlemlerinizi hızlı ve kolay bir şekilde yönetebilirsiniz.</p>
                        <p>Logo ERP çözümleriyle entegre çalışan Depo Yönetim Sistemi çözümleri, üretimden satışa kadar her noktada etkili kontrol ve yönetim sağlıyor. El terminallerinin sisteme entegrasyonu, en son teknolojili barkod sistemleri, farklı modüllerin kullanılabilmesi, ihtiyaca göre uyarlamalar yapılabilmesi gibi özellikler sunan Terapi, depo çözümleriyle işletmeler maliyetlerini düşürürken verimliliklerini artırabiliyor.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/solutions/warehouse.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
