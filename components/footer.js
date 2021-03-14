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
                            <Link href=''><a>Bizden Haberler</a></Link>
                            <Link href=''><a>Referanslar</a></Link>
                            <Link href=''><a>Sektörler Başarı Hikayeleri</a></Link>
                        </div>
                        <div>
                            <Link href=''><a>Danışmanlık</a></Link>
                            <Link href=''><a>Destek</a></Link>
                            <Link href=''><a>Eğitim</a></Link>
                            <Link href=''><a>Özel Yazılımlar</a></Link>
                        </div>
                        <div>
                            <Link href=''><a>Raporlama</a></Link>
                            <Link href=''><a>Logo</a></Link>
                            <Link href=''><a>Özel</a></Link>
                            <Link href=''><a>MES</a></Link>
                            <Link href=''><a>ERP</a></Link>
                        </div>
                        <div>
                            <Link href=''><a>İletişim</a></Link>
                            <Link href=''><a>Sizi Arayalım</a></Link>
                            <Link href=''><a>Hata Bildirin</a></Link>
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
                        Kırcaali Mah. Celal Bayar Cad.
No:177-181 / D:101 (Karamanoğulları 2 Plaza)
Osmangazi / Bursa
                    </div>
                    <div className={styles.adress_block}>
                        <span>Yazılım Ofisi</span>
                        Görükle Mah. Üniversite-1 Cad.
Ulutek Tekno Yazılım Geliştirme Merkezi
Ar-Ge Binası No:933 / 415
Nilüfer / Bursa
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
