import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'
import { isMobile } from 'react-device-detect';

export default function UretimCozumleri() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Finansal Çözümler</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Finansal Çözümler</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>çözümler</a></Link>
                        <Link href=''><a>finansal çözümler</a></Link>
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
                            <Link href=''><a className={styles.active}>Finansal Çözümler</a></Link>
                            <Link href='/cozumler/eticaret-entegrasyon'><a>E-Ticaret Entegrasyon</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Finansal Çözümler</h3>
                        <p>Finans sektörü, küresel ve yerel gelişmelerden hızlı etkilenen yapısıyla, son derece çevik hareket edebilmeyi ve hem değişen koşullara hem de mevzuatlara uyum sağlamayı gerektiriyor. Dolayısıyla dinamik olması kritik önem taşıyor. Logo, mikro işletmelerden büyük ölçekli işletmelere kadar tüm şirketlere yönelik uçtan uca çözümleriyle, Finansın ihtiyaç duyduğu esneklik, çeviklik ve uyumluluğu kazandırıyor.</p>
                        <p>Finans Yönetimi farklı finansal hareketleri oluşturmak, bir cari altında toplamak, depolamak ve raporlamak üzere kurgulanan yapının, sonuçta tek bir asli amacı vardır: <b>“Para”</b>.</p>
                        <p>Muhasebesini bir muhasebe yazılımı altında tutmayan ya da muhasebe yazılımı kullanmayan kurumlar yok olmaya mahkumdur. Muhasebe sistemlerinin temel amacı giriş ve çıkış yapılan para akışını yönetmektir. Fakat iyi bir finansçı: Karı düzenler, nakit akışı yönetir, vergi ve mevzuata yönelik kurumun sürdürülebilirliğini güvence altına alabilir.</p>
                        <p>İşletmeler, e-tabloların yanı sıra işlerini kolaylaştıracak stratejik muhasebesel taktiklere ihtiyaç duymaktadırlar. Terapi Yazılım olarak, sadece devlet kanadında işlerin yürütülmesi için değil tutarlı, anlaşılabilir, güvenilir, faydalı yapılar kurarak işletmelere finansal ışık tutmak için çalışıyoruz. Mevcutta yetersiz gelen standart yazılımların desteklenmesi için uyarlamalar veya hatırlatıcı uygulamalar geliştiriyoruz.  Borç / Alacak Raporları, Varlık Raporları / Personel Gider Analizi / Hizmet Raporları / Tahsilat Raporları / Risk Yönetim Raporları / Gelir Yönetimi vb. daha sağlıklı bir finans raporlaması yapılmaktadır.</p>
                        <p>Program içerisinde var olan raporlamaların daha anlamlı ve anlaşılabilir olması büyük önem arz etmektedir. Manuel olarak hazırlanan veya raporlanma süreci uzun olan her rapor, tek tek ele alınarak özel raporlama çözümleri sunulmaktadır.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/solutions/finance.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
