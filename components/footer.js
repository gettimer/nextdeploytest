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
                            <Link href=''><a>Hakkımızda</a></Link>
                            <Link href=''><a>Vizyon Misyon</a></Link>
                            <Link href=''><a>Zaman Tüneli</a></Link>
                            <Link href=''><a>Referanslar</a></Link>
                            <Link href=''><a>Başarı Hikayeleri</a></Link>
                        </div>
                        <div>
                            <Link href=''><a>Eğitim Hizmetleri</a></Link>
                            <Link href=''><a>Destek Hizmetleri</a></Link>
                            <Link href=''><a>Danışmanlık Hizmetleri</a></Link>                                                        
                            <Link href=''><a>Yazılım Hizmetleri</a></Link>
                            <Link href=''><a>Proje Yönetimi</a></Link>
                        </div>
                        <div>
                            <Link href=''><a>KOBİ</a></Link>
                            <Link href=''><a>ERP</a></Link>
                            <Link href=''><a>HR</a></Link>
                            <Link href=''><a>E-ÇÖZÜMLER</a></Link>
                            <Link href=''><a>CRM</a></Link>
                            {/*<Link href=''><a>İŞ ANALİTİĞİ</a></Link>
                            <Link href=''><a>PERAKENDE</a></Link>
                            <Link href=''><a>DEPO ÇÖZÜMLERİ</a></Link>
                            <Link href=''><a>İŞ AKIŞ YÖNETİMİ</a></Link>
                            <Link href=''><a>SAHA SATIŞ YÖNETİMİ</a></Link>
                            <Link href=''><a>İŞ SAĞLIĞI VE GÜVENLİĞİ</a></Link> */}
                        </div>
                        <div>
                            <Link href=''><a>Üretim Çözümleri</a></Link>
                            <Link href=''><a>Depo Çözümleri</a></Link>
                            <Link href=''><a>Saha Satış Çözümleri</a></Link>
                            <Link href=''><a>Finansal Çözümler</a></Link>
                            <Link href=''><a>E-Ticaret Entegrasyon</a></Link>
                        </div>
                        <div>
                            <Link href=''><a>İletişim</a></Link>
                            <Link href=''><a>Sizi Arayalım</a></Link>
                        </div>                        
                    </div>
                    <div className={styles.copyright}>
                        © 2021 Terapi Yazılım A.Ş. Tüm hakları saklıdır.
                    </div>
                    <div className={styles.footer_tools}>
                        <img src='/img/logo_partner.png' />
                        <img src='/img/logo_corporate.png' />
                        <Link href=''><a className={styles.download}>Bağlantı Programı İndir</a></Link>
                        <Link href=''><a className={styles.footer_link}>Gizlilik Politikası</a></Link>
                        <Link href=''><a className={styles.footer_link}>Çerez Politikası</a></Link>
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
                    <Link href=''><a className={styles.email}>info@terapiyazilim.com</a></Link>
                </div>
            </div>
        </div>
    </footer>)
}
