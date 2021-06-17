import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages/about.module.scss'

export default function CerezPolitikasi() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Çerez Politikası</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Çerez Politikası</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>çerez politikası</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href='/gizlilik-politikasi'><a>Gizlilik Politikası</a></Link>
                        <Link href=''><a className={styles.active}>Çerez Politikası</a></Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <p>Çerezler Nedir? </p>
                        <p>Terapi Yazılım olarak internet sitemizde kullanılmakta olan çerezlere (cookies) ilişkin olarak bu çerezlerin türleri ve neden kullanıldıkları hakkında 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki yükümlülüklere uymak amacıyla işbu bilgilendirme metni hazırlanmıştır.</p>
                        <p>Çerezler bir web sitesini ziyaret ettiğinizde, web sunucusu tarafından sabit diskinize taşınan ve ardından bilgisayarınızda saklanan küçük metin dosyalarıdır.</p>
                        <p>Çerezler Nasıl Yönetilebilir?</p>
                        <p>İnternet tarayıcınızdaki ayarları değiştirerek çerezleri kabul veya reddetme imkanına sahipsiniz. Eğer bu çerezlerin kullanılmasını istemiyorsanız ilgili tarayıcınızın ilgili kısımlarında (Google Chrome, Internet Explorer, Mozilla Firefox, Safari, Opera) çerezlerin tamamını reddedecek şekilde ayarlayabilirsiniz.Ancak önemle belirtmek gerekir ki kullandığımız çerezleri devre dışı bırakmak internet sitemizdeki kullanıcı deneyiminizi etkileyebilecektir.</p>
                        <p>Lütfen, internet sitemize (https://www.terapiyazilim.com) girmeniz ve/veya internet sitesini kullanmakla yukarıdaki şart ve koşulları kabul etmiş olduğunuzu unutmayınız.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
