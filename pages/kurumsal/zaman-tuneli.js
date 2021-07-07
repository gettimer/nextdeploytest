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
                            <div>
                                <section className={styles.year}>
                                    <h6>2012</h6>
                                    <section>
                                        <ul>
                                            <li><strong>16 Kasım tarihinde "Değişimi başlatır, geleceğe taşır" sloganıyla faaliyetlerimize başladık.</strong></li>
                                            <li>Yıl içinde 13.910 Dk. / 94 Farklı çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>
                                <section className={styles.year}>
                                    <h6>2013</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Logo Yazılım ailesine, Kobi & Kurumsal İş Ortağı aynı zamanda Logo Çözüm Ortağı ünvanı ile katıldık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>7 şehirde destek faaliyetlerimizi sürdürdük.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>Kalıcı çözümler üretmek için, yazılım departmanımızı kurduk.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>Türkiye' nin ilk J-Platformunda İK projesi gerçekleştirdik.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 255.069 Dk. / 2.285 Farklı çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>
                                <section className={styles.year}>
                                    <h6>2014</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Destek ve yazılım ofislerimizi ayırarak, Teknoloji Geliştirme Merkezinde ARGE ofisimizi kurduk.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>Sektöre uygun çözümlerle, özel uygulamalar geliştirmeye başladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 322.826 Dk. / 4.100 çağrı ile servis hizmeti sağlandı. </li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2015</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Üretim, satınalma, satış, depo, yönetim araçları vb. çözümlerle kendi ürün grubumuzu geliştirmeye başladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>Organizasyon şemasında, yazılım ve destek ekiplerimizin kadrolaşması sağladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>48 projeyi başarılı şekilde tamamladık ve teslim ettik.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 357.445 Dk./ 4.044 çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2016</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Otomotiv ana sanayide yer alan; Ford, Renault, Tofaş, Toyota ve Mercedes üreticileri ile entegrasyon çözümleri geliştirdik.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>Masaüstü uygulamalarına ilave mobil ve web platformunda çözümler geliştirmeye başladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>ARGE ofisinde geliştirdiğimiz çözümleri işletmelerle buluşturmaya başladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 535.470 Dk./ 8.026 çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2017</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Hizmet ağımızı 34 ile ulaştırmayı başardık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>5 yılda 100 e yakın projeyi başarılı şekilde tamamladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 726.594 Dk./ 9.506 çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2018</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Otomotiv sektöründe yapılan çözümler ile iş ortaklarımıza Ford Otosan Q1 denetimlerinden başarılı olmalarını sağladık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>Batıkent Merkez Binası temelleri attık.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde  1.000.315 Dk./ 13.494 çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2019</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Logo Yazılım tarafından, Türkiye' nin "En İyi Proje Yapan Bayisi" ödülüne layik görüldük.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 853.980 Dk./ 14.432 çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2020</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Yazılım ve destek birimlerimizi, Batıkent merkez ofisinde bir araya getirdik.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li><strong>ARGE faaliyetlerimize teknoloji geliştirme bölgesinde devam ettirdik.</strong></li>
                                        </ul>
                                    </section>
                                    <section>
                                        <ul>
                                            <li>Yıl içinde 969.355 Dk./ 19.598 çağrı ile servis hizmeti sağlandı.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className={styles.year}>
                                    <h6>2021</h6>
                                    <section>
                                        <ul>
                                            <li><strong>Yol haritaları güncellendi, yeni Amiral Gemimizi inşa ediyoruz..</strong></li>
                                        </ul>
                                    </section>
                                </section>

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
