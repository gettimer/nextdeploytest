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
                    <h1>Vizyon & Misyon</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>kurumsal</a></Link>
                        <Link href=''><a>vizyon & misyon</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href='/kurumsal/hakkimizda'><a>Hakkımızda</a></Link>
                        <Link href='/kurumsal/vizyon-misyon'><a className={styles.active}>Vizyon & Misyon</a></Link>
                        <Link href='/kurumsal/zaman-tuneli'><a>Zaman Tüneli</a></Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Terapi Yazılım</h3>
                        <p>2012 yılından bu yana bilişim teknolojileri sektöründe operasyonel veya sektörel iş ihtiyaçlarına çözüm üretmektedir. 2012 yılında, kurumların iş süreçlerindeki ihtiyaç duydukları uygulamalara çözüm üretme ilkesiyle, iş dünyasına atılmıştır.</p>
                        <p>Terapi Yazılım' ın, sektör bağımsız olarak sahaya sunduğu ürün ve hizmetlerin ortak özellikleri, verimlilik ve rekabet artırıcı çözümler olmalarıdır. Bu kapsamda müşterilerine sunduğu fark yaratan hizmetler ve pazarında rekabet gücünü artıran yazılım ürünleri ile sektöründe isim yapmış birçok öncü kuruluşta uygulama ve projelere imza atmıştır.</p>

                        <p><strong>Vizyonumuz</strong></p>
                        <p>Verdiği hizmetlerin merkezinde, iş ortaklarının ihtiyaçlarına göre değişim gösteren ve geleceğe yönelik çözümler sunan global bir çözüm noktası olmaktır.</p>

                        <p><strong>Misyonumuz</strong></p>
                        <p>İş ortaklarımıza, rekabet çerçevesi doğrultusunda iş, zaman, ürün, teknoloji ve implementasyon konularında çağdaş yönetim ilkelerine uygun biçimde eksiksiz tam bir çözüm sağlayıcı olmak.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
