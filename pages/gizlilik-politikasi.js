import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages/about.module.scss'

export default function GizlilikPolitikasi() {

    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Gizlilik Politikası</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Gizlilik Politikası</h1>
                    <div className={styles.breadcrumb}>
                        <Link href=''><a>anasayfa</a></Link>
                        <Link href=''><a>gizlilik politikası</a></Link>
                    </div>
                </div>
                <img src='/img/abouttop.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href=''><a className={styles.active}>Gizlilik Politikası</a></Link>
                        <Link href='/cerez-politikasi'><a>Çerez Politikası</a></Link>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.split_content_view}>
                    <div className={styles.content}>
                        <p>Bu beyan Terapi Yazılım'ın gizlilik politikasını içermek ile beraber bütün hakları saklıdır. www.terapiyazilim.com web sayfasını ziyaret ederek “Gizlilik Politikası”nın tamamını okuduğunuzu, içeriğini tamamen anladığınızı; aşağıda sayılanlarla sınırlı olmaksızın belirtilen tüm hususları kayıtsız ve şartsız olarak kabul ettiğinizi, belirtilen bu hususlar ile ilgili olarak herhangi bir itiraz ve defi ileri sürmeyeceğinizi açıkça beyan ve taahhüt etmiş oluyorsunuz. Terapi Yazılım, sitenin kullanımından doğacak zararlardan sorumlu değildir. </p>
                        <p>Terapi Yazılım sitesindeki içerikler izin alınmadan kopyalanamaz ve başka bir mecrada kullanılamaz. Terapi Yazılım, kendisine elektronik ortamdan iletilen kişisel bilgileri kanunlarda belirtilen hallerde, belirlenen amaçlar ve kapsamlar içerisinde kullanabilir. Toplanan bu bilgiler; iş süreçlerinize yönelik özel çalışma faaliyetlerinin yapılabilmesi için kullanılmaktadır.</p>
                        <p>Sistemle ilgili sorunların tespiti ve söz konusu sorunların en hızlı şekilde giderilebilmesi için Terapi Yazılım, gerektiğinde kullanıcıların IP adresini tespit etmekte ve bunu kullanmaktadır. IP adresleri, kullanıcıları genel bir şekilde tanımlamak ve kapsamlı demografik bilgi toplamak amacıyla da kullanılabilir.</p>
                        <p>Terapi Yazılım, güvenlik nedeniyle kullanıcının site üzerindeki her türlü aktivitesini izleyebilir, kayda alabilir. Toplanılan kişisel bilgiler, yasaların getirdiği zorunluluklara uyma amacıyla veya yetkili adli veya idari otoritenin yürüttüğü soruşturma veya araştırma açısından talep edilmesi durumunda veya kullanıcıların hak ve güvenliklerinin korunması amacıyla üçüncü kişilerle paylaşılabilir.</p>
                        <p>Terapi Yazılım, kullanıcı profili ve pazar araştırmaları yapmak, site kullanım istatistikleri oluşturmak gibi amaçlar dâhil ancak bunlarla sınırlı olmamak üzere tüm yasal amaçlar için, üyenin kimlik, iletişim, IP ve site kullanım bilgilerini bir veri tabanında toplayabilir ve bu bilgileri herhangi bir kısıtlama olmaksızın kullanabilir. </p>
                        <p>Kullanıcıların diğer kullanıcılara veya üçüncü kişilere kendilerinin açıkladıkları kişisel bilgilerinin kullanılması veya üçüncü kişilere açıklanması gibi hususlarda Terapi Yazılım hiçbir sorumluluk kabul etmemektedir.</p>
                        <p>Sitede hizmetlerin geliştirilmesi, tanıtım ve reklamların etkinliğinin analiz edilebilmesi gibi amaçlarla kullanıcının sabit diskinde çalışan cookieler kullanılabilir.</p>
                        <p>Terapi Yazılım, "Gizlilik Politikası"nın herhangi bir maddesini, bildirimde bulunmaksızın değiştirme, yenileme veya iptal hakkına sahiptir. Değiştirilen, yenilenen ya da yürürlükten kaldırılan her hüküm, yayın tarihinde tüm kullanıcılar bakımından hüküm ifade edecektir. Bu nedenle “Gizlilik Politikası” sayfası düzenli olarak takip edilmelidir.</p>
                    </div>
                    <div className={styles.media}>
                        <img src='/img/about.jpg' />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
