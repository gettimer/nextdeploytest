import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages/contact.module.scss'
import { references } from '../lib/contents'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

export default function Iletisim() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <Marker
                position={{ lat: -34.397, lng: 150.644 }}
            />
        </GoogleMap>
    ));
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
            <div className={styles.contact_title}>
                <div className='container'>
                    <h3>İletişim Bilgileri</h3>
                </div>
            </div>

            <div className={styles.split_content}>
                <div className={styles.contact_content}>
                    <a target="_blank" href="https://www.google.com/maps/place/TERAP%C4%B0+YAZILIM/@40.222149,28.8527686,15.21z/data=!4m5!3m4!1s0x14ca0f265139d24f:0xeba5ffff10151b00!8m2!3d40.222595!4d28.858353"><img src='/img/map1.png' /></a>
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
                                    0 224 <strong>271 75 80</strong>
                                </span>
                                <span className={`${styles.title} ${styles.title_top}`}>
                                    TELEFON 2
                                </span>
                                <span className={styles.phone}>
                                    0 224 <strong>442 80 42</strong>
                                </span>
                                <span className={`${styles.title} ${styles.title_top}`}>
                                    E-POSTA
                                </span>
                                <a href="mailto:info@terapiyazilim.com">
                                    info@terapiyazilim.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contact_content}>
                    <a target="_blank" href="https://www.google.com/maps/place/TERAP%C4%B0+YAZILIM/@40.222149,28.8527686,15.21z/data=!4m5!3m4!1s0x14ca0f265139d24f:0xeba5ffff10151b00!8m2!3d40.222595!4d28.858353"><img src='/img/map1.png' /></a>
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


        </Layout >
    )
}
