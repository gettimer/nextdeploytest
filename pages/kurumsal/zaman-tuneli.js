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
                        <Link href='/kurumsal/vizyon-misyon'><a>Vizyon & Misyon</a></Link>
                        <Link href='/kurumsal/zaman-tuneli'><a className={styles.active}>Zaman Tüneli</a></Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Kurulduğu günden bugüne</h3>
                        <p>Bilişim teknolojileri sektöründe operasyonel veya sektörel iş ihtiyaçlarına, günün teknolojisine uygun çözümler üretmektedir.</p>

                        <div className={styles.timeline}>
                            <div className={styles.item}>
                                <div className={styles.year}>
                                    <span>2012</span>
                                    <svg width="86px" height="83px" viewBox="0 0 86 83" version="1.1">
                                        <g id="Group-255" fill="#D3D3D3">
                                            <path d="M86.006168,42.9854843 C86.0159989,59.1085593 77.0032979,73.8816056 62.662168,81.2494843 C58.9971074,83.1274692 54.5156752,82.1524436 51.962168,78.9214843 C49.7970292,76.1835292 46.4982588,74.5865849 43.007668,74.5865849 C39.5170772,74.5865849 36.2183068,76.1835292 34.053168,78.9214843 C31.5022709,82.1513284 27.0242415,83.1279266 23.360168,81.2534843 C4.5632067,71.5988776 -4.43291506,49.717285 2.13772325,29.6333637 C8.70836157,9.54944233 28.8981506,-2.78371299 49.7667677,0.538636594 C70.6353847,3.86098618 85.9971426,21.8540598 86.006168,42.9854843 Z" id="Path"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className={styles.desc}>
                                    <strong>16 Kasım tarihinde "Değişimi başlatır, geleceğe taşır" sloganıyla faaliyetlerimize başladık.</strong><br />
                                    <small>Yıl içinde 13.910 Dk. / 94 Farklı çağrı ile servis hizmeti sağlandı.</small>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.year}>
                                    <span> 2013</span>
                                    <svg width="86px" height="79px" viewBox="0 0 86 79" version="1.1">
                                        <g id="Group-255" transform="translate(0.000000, -174.000000)" fill="#D3D3D3">
                                            <path d="M86.0061812,213.202899 C86.0112522,229.323991 76.9965952,244.092972 62.6561812,251.457899 C58.9899182,253.334364 54.5085304,252.357254 51.9561812,249.124899 C49.7909889,246.388068 46.4929236,244.791896 43.0031812,244.791896 C39.5134387,244.791896 36.2153735,246.388068 34.0501812,249.124899 C31.4978319,252.357254 27.0164442,253.334364 23.3501812,251.457899 C9.01325762,244.089189 0,229.322615 0,213.202899 C0,197.083182 9.01325762,182.316609 23.3501812,174.947899 C27.0164442,173.071434 31.4978319,174.048544 34.0501812,177.280899 C36.2153735,180.01773 39.5134387,181.613902 43.0031812,181.613902 C46.4929236,181.613902 49.7909889,180.01773 51.9561812,177.280899 C54.5085304,174.048544 58.9899182,173.071434 62.6561812,174.947899 C76.9965952,182.312826 86.0112522,197.081807 86.0061812,213.202899 Z" id="Path"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className={styles.desc}>
                                <strong>Logo Yazılım ailesine, Kobi & Kurumsal İş Ortağı aynı zamanda Logo Çözüm Ortağı ünvanı ile katıldık.</strong><br />
                                <strong>7 şehirde destek faaliyetlerimizi sürdürdük.</strong><br />
                                <strong>Kalıcı çözümler üretmek için, yazılım departmanımızı kurduk.</strong><br />
                                <strong>Türkiye' nin ilk J-Platformunda İK projesi gerçekleştirdik.</strong><br />
                                    <small>Yıl içinde 255.069 Dk. / 2.285 Farklı çağrı ile servis hizmeti sağlandı.</small>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.year}>
                                    <span>2016</span>
                                    <svg width="86px" height="79px" viewBox="0 0 86 79" version="1.1">
                                        <g id="Group-255" transform="translate(0.000000, -174.000000)" fill="#D3D3D3">
                                            <path d="M86.0061812,213.202899 C86.0112522,229.323991 76.9965952,244.092972 62.6561812,251.457899 C58.9899182,253.334364 54.5085304,252.357254 51.9561812,249.124899 C49.7909889,246.388068 46.4929236,244.791896 43.0031812,244.791896 C39.5134387,244.791896 36.2153735,246.388068 34.0501812,249.124899 C31.4978319,252.357254 27.0164442,253.334364 23.3501812,251.457899 C9.01325762,244.089189 0,229.322615 0,213.202899 C0,197.083182 9.01325762,182.316609 23.3501812,174.947899 C27.0164442,173.071434 31.4978319,174.048544 34.0501812,177.280899 C36.2153735,180.01773 39.5134387,181.613902 43.0031812,181.613902 C46.4929236,181.613902 49.7909889,180.01773 51.9561812,177.280899 C54.5085304,174.048544 58.9899182,173.071434 62.6561812,174.947899 C76.9965952,182.312826 86.0112522,197.081807 86.0061812,213.202899 Z" id="Path"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className={styles.desc}>
                                    <span>Y Projesi</span>
                                    İlk büyük projemiz olan x projesi faaliyete geçti.
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.year}>
                                    <span>2018</span>
                                    <svg width="86px" height="83px" viewBox="0 0 86 83" version="1.1">
                                        <g id="Group-255" transform="translate(0.000000, -317.000000)" fill="#D3D3D3">
                                            <path d="M62.662168,398.249484 C58.9971074,400.127469 54.5156752,399.152444 51.962168,395.921484 C49.7970292,393.183529 46.4982588,391.586585 43.007668,391.586585 C39.5170772,391.586585 36.2183068,393.183529 34.053168,395.921484 C31.5022709,399.151328 27.0242415,400.127927 23.360168,398.253484 C4.5632067,388.598878 -4.43291506,366.717285 2.13772325,346.633364 C8.70836157,326.549442 28.8981506,314.216287 49.7667677,317.538637 C70.6353847,320.860986 85.9971426,338.85406 86.006168,359.985484 C86.0159989,376.108559 77.0032979,390.881606 62.662168,398.249484 Z" id="Path" transform="translate(43.003088, 358.100088) rotate(180.000000) translate(-43.003088, -358.100088) "></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className={styles.desc}>
                                    <span>Yeni Anlaşma</span>
                                    İlk büyük projemiz olan x projesi faaliyete geçti.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/zamantuneli.jpg' />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
