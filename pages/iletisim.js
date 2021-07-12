import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages/contact.module.scss'
import { isMobile } from 'react-device-detect';
import dynamic from "next/dynamic";

const NoSSR_IFrame_MAP = dynamic(() => import("../components/map"), {
    ssr: false,
});



export default function Iletisim() {


    const [maps, setMaps] = useState([
        {
            map0: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12186.874540991887!2d29.05058280679321!3d40.21532132806919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4180aa310a4bfb9e!2zVGVyYXBpIFlhesSxbMSxbSAtIExvZ28gw4fDtnrDvG0gT3J0YcSfxLE!5e0!3m2!1str!2s!4v1435062861858',
            map1: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97482.66558840382!2d28.833334686103242!3d40.223891017490416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeba5ffff10151b00!2zVEVSQVDEsCBZQVpJTElNIC0gQVJHRSBPRsSwU8Sw!5e0!3m2!1str!2str!4v1619674802688!5m2!1str!2str'
        }
    ])
    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - İletişim</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>İletişim</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href='/forms/sizi-arayalim'><a>iletişim</a></Link>
                    </div>
                </div>
                <img src='/img/contact.jpg' />
            </div>

            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href=''><a className={styles.active}>İletişim</a></Link>
                        <Link href='/forms/sizi-arayalim'><a>Sizi Arayalım</a></Link>
                    </div>
                </div>
            </div>
            <div style={isMobile ? { paddingLeft: '30px', paddingRight: '20px' } : null}>
                <div className={styles.contact_title}>
                    <div className='container'>
                        <h3>İletişim Bilgileri</h3>
                    </div>
                </div>

                <div className={styles.split_content}>

                    <div className={styles.contact_content}>
                        <NoSSR_IFrame_MAP src={maps[0].map0} />
                        <div className={styles.contact_box}>
                            <div className={styles.heading}>
                                Merkez Ofis
                        </div>
                            <div className={styles.split_box}>
                                <div>
                                    <span className={styles.title}>
                                        ADRES
                                </span>
                                    <p>
                                        19 Mayıs Mah. Piyade Sk. No: 10 Nilüfer/Bursa
                                </p>
                                </div>
                                <div>
                                    <span className={styles.title}>
                                        TELEFON
                                </span>
                                    <span className={styles.phone}>
                                        0 224 <strong>271 75 80</strong> - 0 224 <strong>442 80 42</strong>
                                    </span>

                                    <span className={`${styles.title} ${styles.title_top}`}>
                                        E-POSTA
                                </span>
                                    <a href="mailto:destek@terapiyazilim.com">
                                    destek@terapiyazilim.com
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact_content}>
                        <NoSSR_IFrame_MAP src={maps[0].map1} />
                        <div className={`${styles.contact_box} ${styles.contact_box_left}`}>
                            <div className={styles.heading}>
                                Arge Ofis
                        </div>
                            <div className={styles.split_box}>
                                <div>
                                    <span className={styles.title}>
                                        ADRES
                                </span>
                                    <p>
                                        Ulutek Teknopark Yazılım Geliştirme Merkezi Ar-Ge Binası No:933 / 415 Nilüfer/Bursa
                                </p>
                                </div>
                                <div>
                                    <span className={`${styles.title} ${styles.title_top}`}>
                                        E-POSTA
                                </span>
                                    <a href="mailto:info@terapiyazilim.com">
                                        yazilim@terapiyazilim.com
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout >
    )
}
