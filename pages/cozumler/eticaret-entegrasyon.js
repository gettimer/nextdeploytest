import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'
import { isMobile } from 'react-device-detect';

export default function UretimCozumleri() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - E-Ticaret Entegrasyon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>E-Ticaret Entegrasyon</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>çözümler</a></Link>
                        <Link href=''><a>eticaret entegrasyon</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            {!isMobile ?
                <div className={styles.subpage_horizontal_nav}>
                    <div className='container'>
                        <div className={styles.subpage_nav_container}>
                            <Link href='/cozumler/uretim-cozumleri'><a>Üretim Çözümleri</a></Link>
                            <Link href='/cozumler/depo-cozumleri'><a>Depo Çözümleri</a></Link>
                            <Link href='/cozumler/saha-satis-cozumleri'><a>Saha Satış Çözümleri</a></Link>
                            <Link href='/cozumler/finansal-cozumler'><a>Finansal Çözümler</a></Link>
                            <Link href='/cozumler/eticaret-entegrasyon'><a className={styles.active}>E-Ticaret Entegrasyon</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>E-Ticaret Entegrasyon</h3>
                        <p><strong>Her işletmenin ihtiyacı olan Pazaryeri Entegrasyonu, tüm popüler sanal pazar yerlerine entegre olduğu gibi, özel e-ticaret siteleri ile de entegre olarak verimliliği artırıyor.</strong></p>
                        <p>E-ticaret kullanıcıları; iş akış süreçlerini her geçen gün iyileştirip, geliştirerek devam ettirirken Pazaryeri Entegrasyonu ile tüm mağazalarınızı hızlı, hatasız ve tam anlamıyla parametrik bir şekilde entegre olmasını sağlayıp, satışlarınızı tek bir ekrandan yönetebilirsiniz.</p>
                        <p>Farklı Ambarlarınızdaki stokları tek bir panelde yönetimini sağlayabilirsiniz. Entegrasyon paneliniz ile ERP programınız arasında farklı bağlantı noktaları belirleyerek farklı ürün kodlamaları kullanabilirsiniz. Ürün kartlarınızı Tekil, Paket veya Varyantlı açabilirsiniz. Kolay bir şekilde, varyantlarınızı pazaryeri bazında eşleme yapıp ürünlerinizi pazaryerlerinde yayınlayabilirsiniz.</p>
                        <p>Trenyol, N11, Gittigidiyor, Hepsiburada, Çiçeksepeti, Amazon vb. platformları tekbir ekran üzerinden yönetebilirsiniz. Karlılık tanımları veya kampanya tanımları ile ürün fiyatlarında hızlı ve kolay bir şekilde güncelleme yapabilirsiniz. Kargo etiketleri tekil veya toplu bir şekilde basılabilir, pazaryeri bazında parametreleri güncelleme imkanına sahip olabilirsiniz.</p>
                        <p>Kullanıcı dostu ekran tasarımları ile zaman kaybetmeden pazaryeri entegrasyon sürecinizi yönetebilir, rekabet robotu ile ürünlerinizi pazaryerlerinde satış potansiyelini artırabilirsiniz.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/solutions/ecommerce.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
