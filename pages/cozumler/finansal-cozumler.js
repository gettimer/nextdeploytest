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
                        <p>İÇERİK</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
