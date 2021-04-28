import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/about.module.scss'
import { isMobile } from 'react-device-detect';

export default function UretimCozumleri() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Saha Satış Çözümleri</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Saha Satış Çözümleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>çözümler</a></Link>
                        <Link href=''><a>saha satış çözümleri</a></Link>
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
                            <Link href=''><a className={styles.active}>Saha Satış Çözümleri</a></Link>
                            <Link href='/cozumler/finansal-cozumler'><a>Finansal Çözümler</a></Link>
                            <Link href='/cozumler/eticaret-entegrasyon'><a>E-Ticaret Entegrasyon</a></Link>
                        </div>
                    </div>
                </div> : null}
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <h3>Saha Satış Çözümleri</h3>
                        <p>Saha satış çözümüyle; Logo yazılımlarında belirlenen fiyat, ödeme politikaları, stokta olan ürünün satış kuralları gibi benzer pek çok kural merkezi olarak belirlenebiliyor ve müşteri yanında uygulanabiliyor. Saha satışın bazı özellikleri, </p>

                        <ul>
                            <li>• I0S ve Android işletim sistemine sahip tüm cep telefonları ve tabletlerle uyumludur.</li>
                            <li>• Esnek ve parametrik yapısı sayesinde kolay kullanılır, şirketinizin ihtiyaçlarını karşılar.</li>
                            <li>• Logo Kobi ve Kurumsal ürünleri ile tam entegre çalışır.</li>
                            <li>• Hybrid (online + offline) çalışma özelliği sayesinde, internet bağlantısı veya sunucu bağlantısı kesilse bile uygulama çalışmaya devam eder. Bağlantı tekrar sağlandığında binlerce kayıt, saniyeler içerisinde senkronize olur.</li>
                            <li>• Sahadaki kullanıcılar, fiş kaydı sonrasında dökümlerini WhatsApp üzerinden paylaşabilir, mail olarak gönderebilir, şirket içindeki herhangi bir yazıcıdan çıkarabilir veya bluetooth desteği olan cihazlardan çıktı alabilirler.</li>
                            <li>• Cari karta ait telefon, fax, e-mail bilgilerini hatta GPS konum bilgilerini hızlı bir şeklide görebilir, kayıtlı GPS konumlarına harita üzerinden ulaşabilirsiniz. Cari hesap ekstre raporunda, görüntülenen raporun içinden çıkmadan fatura kalemlerinin detaylarını görüntüleyebilir ve cari karta ait raporları mail olarak veya WhatsApp üzerinden gönderebilirsiniz.</li>
                            <li>• Ürünleri kod [isimden arama yaparak, barkod okutarak, stok grubundan veya resimlerinden arayarak seçebilir, ardından seçilen ürünleri 'hızlı ekleme' ya da 'detaylı ekleme' seçenekleriyle fatura/sipariş/irsaliye listesine ekleyebilirsiniz.</li>
                            <li>• Cihaz kamerası veya bluetooth barkod okuyucu ile ürüne hızlı bir şekilde ulaşıp, El terminali maliyetinden kurtulabilirsiniz.</li>
                            <li>• Nakit, çek, senet ve kredi kartı türlerinde tahsilat girişi yapabilir, yapılan tahsilatları mail olarak gönderebilir, WhatsApp üzerinden paylaşabilir ya da yazıcıdan döküm alarak müşteriye ulaştırabilirsiniz.</li>
                            <li>• Kullanıcı dostu program ara yüzü ile fatura ve siparişlerinizi hızlı bir şekilde düzenleyebilir, hızlı ürün ekleme desteği ile seçilen ürünün fiyatını, miktarını ve indirimini girerek detay ekranına gerek kalmadan listeye ekleme yapabilirsiniz.</li>
                            <li>• İşlem yapılan fatura, sipariş veya irsaliye fişini beklemeye alabilir, arada başka bir işlem yapıp, sonrasında eski fişten tekrar devam edebilirsiniz. Parametreye bağlı olarak stok eksi bakiye kontrolü, kullanıcı yetkisine bağlı olarak ise farklı depolarda işlem yapabilirsiniz</li>
                        </ul>
                        
                    </div>
                    <div className={styles.media}>
                        <img src='/img/solutions/sales.jpg' className={styles.pl_pr_60} />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
