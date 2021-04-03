import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages/referans.module.scss'
import { references } from '../lib/contents'

export default function Referanslar() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Referanslar</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Referanslar</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>referanslar</a></Link>
                    </div>
                </div>
                <img src='/img/ref.jpg' />
            </div>
            <div className={styles.references}>
                <div className='container'>
                    <h3>Bizi Tercih Edenler</h3>

                    <div className={styles.ref_grid}>
                        {references.map(ele => (
                            <div className={styles.ref}>
                                <img src={`/img/ref/${ele.image}`} />
                                <strong>{ele.name}</strong>
                                <small>{ele.count}+ Müşteri</small>
                            </div>
                        ))}


                    </div>

                </div>
            </div>

        </Layout>
    )
}
