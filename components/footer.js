import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/footer.module.scss'
import Link from 'next/link'
import ContactButtons from './contactbuttons'

export default function Footer() {
    return (<footer className={styles.site_footer}>
        <div className='container'>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_left}>
                    <span className={styles.footer_title}>
                        MENÜ
                    </span>
                    <div className={styles.footer_link_block}>
                        <div>
                            <Link href='/kurumsal/hakkimizda'><a>Hakkımızda</a></Link>
                            <Link href='/kurumsal/vizyon-misyon'><a>Vizyon Misyon</a></Link>
                            <Link href='/kurumsal/zaman-tuneli'><a>Zaman Tüneli</a></Link>
                            <Link href='/referanslar'><a>Referanslar</a></Link>
                            {/* <Link href='/basari-hikayeleri'><a>Başarı Hikayeleri</a></Link> */}
                        </div>
                        <div>
                            <Link href='/hizmetler/egitim'><a>Eğitim Hizmetleri</a></Link>
                            <Link href='/hizmetler/destek'><a>Destek Hizmetleri</a></Link>
                            <Link href='/hizmetler/danismanlik'><a>Danışmanlık Hizmetleri</a></Link>                                                        
                            <Link href='/hizmetler/ozel-yazilim'><a>Yazılım Hizmetleri</a></Link>
                            <Link href='/hizmetler/proje-yonetimi'><a>Proje Yönetimi</a></Link>
                        </div>
                        <div>
                            <Link href='/urun/logo-isbasi-1-2'><a>KOBİ</a></Link>
                            <Link href='/urun/logo-j-platform-4-1'><a>ERP</a></Link>
                            <Link href='/urun/logo-j-hr-7-1'><a>HR</a></Link>
                            <Link href='/urun/e-fatura-10-1'><a>E-ÇÖZÜMLER</a></Link>
                            <Link href='/urun/crm-urunu-2-7'><a>CRM</a></Link>
                        </div>
                        <div>
                            <Link href='/cozumler/uretim-cozumleri'><a>Üretim Çözümleri</a></Link>
                            <Link href='/cozumler/depo-cozumleri'><a>Depo Çözümleri</a></Link>
                            <Link href='/cozumler/saha-satis-cozumleri'><a>Saha Satış Çözümleri</a></Link>
                            <Link href='/cozumler/finansal-cozumler'><a>Finansal Çözümler</a></Link>
                            <Link href='/cozumler/eticaret-entegrasyon'><a>E-Ticaret Entegrasyon</a></Link>
                        </div>
                        <div>
                            <Link href='/iletisim'><a>İletişim</a></Link>
                            <Link href='/forms/sizi-arayalim'><a>Sizi Arayalım</a></Link>
                        </div>                        
                    </div>
                    <div className={styles.copyright}>
                        © 2021 Terapi Yazılım Tüm hakları saklıdır.
                    </div>
                    <div className={styles.footer_tools}>
                        <img src='/img/logo_partner.png' />
                        <img src='/img/logo_corporate.png' />
                        <Link href='http://bit.ly/TRPDESTEK'><a target="_blank" className={styles.download}>Bağlantı Programı İndir</a></Link>
                        <Link href='/gizlilik-politikasi'><a className={styles.footer_link}>Gizlilik Politikası</a></Link>
                        <Link href='/cerez-politikasi'><a className={styles.footer_link}>Çerez Politikası</a></Link>
                    </div>
                </div>
                <div className={styles.footer_right}>
                    <div className={styles.adress_block}>
                        <span>Merkez Ofis</span>
                        19 Mayıs Mah. Piyade Sk. No: 10 Nilüfer/Bursa
                    </div>
                    <div className={styles.adress_block}>
                        <span>Arge Ofis</span>
                        Ulutek Teknopark Yazılım Geliştirme Merkezi Ar-Ge Binası No:933 / 415 Nilüfer/Bursa
                    </div>
                    <div className={styles.contact_links}>
                        <ContactButtons />
                    </div>
                    <Link href='mailto:info@terapiyazilim.com'><a className={styles.email}>info@terapiyazilim.com</a></Link>
                </div>
            </div>
        </div>
    </footer>)
}
