import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'

export default function Hakkimizda() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Hakkımızda</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Hakkımızda</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>kurumsal</a></Link>
                        <Link href=''><a>hakkımızda</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href=''><a className={styles.active}>Hakkımızda</a></Link>
                        <Link href='/kurumsal/vizyon-misyon'><a>Vizyon & Misyon</a></Link>
                        <Link href='/kurumsal/zaman-tuneli'><a>Zaman Tüneli</a></Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Hızla gelişmekte olan bilişim sektöründe</h3>
                        <p>Yazılım teknolojisini, deneyimli ve konusunda uzman sertifikalı kadrosuyla müşterinin ihtiyaçlarına farklı bir bakış açısı ile yaklaşan Terapi Yazılım, rekabetin gitgide arttığı ülkemizde KOBI ve Kurumsal işletmelere <strong>“İş’te Çözüm”</strong> ve <strong>“Değişimi Başlatır, Geleceğe Taşır”</strong> misyonu ile sunmaktadır.</p>
                        <p>Terapi Yazılım; araştıran ve geliştiren, müşteri memnuniyetine önem veren, iş ahlakından taviz vermeyen, güvenilir, yenilikçi ve çağdaş görüşü kendisine benimseyen ve bu ilkeler doğrultusunda hareket eden kuruluştur.</p>
                        <p><strong>Terapi Yazılım; Proje Danışmanlığı, Logo Destek Hizmetleri, Logo Raporlama Çözümleri</strong> ve <strong>Logoya Entegre Yazılımlarla</strong> firmaların daha hızlı ve aktif bir şekilde finansmanını, üretim yönetimini, firma giderlerini yönetebileceği uygulamalarla destek vermektedir.</p>

                        <p><strong>Müşteri Avantajları</strong></p>
                        <p>Genç ve dinamik kadrosuyla yenilikçi çözümler sunar. Sektörel tecrübesi ve konusunda uzman sertifikalı kadroya sahiptir.</p>
                        <p>Acil problemleri çözmesi için ofiste devamlı yetkin personel bulundurur.</p>
                        <p>Sadece bir destek firması değil, ihtiyaçlarınızın analizi için gerekli zamanı ayırarak proje bazlı çözümler sunar.</p>
                        <p>Bilgi-İşlem sektörünü takip ederek yenilikleri firmaların bilgisi doğrultusunda uygular ve irmaların bilişim sektöründe güncel kalmasını sağlar.</p>

                    </div>
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
