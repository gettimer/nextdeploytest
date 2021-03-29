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
                        <Link href=''><a>iletişim</a></Link>
                    </div>
                </div>
                <img src='/img/contact.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href=''><a className={styles.active}>İletişim</a></Link>
                        <Link href='/sizi-arayalim'><a>Sizi Arayalım</a></Link>
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
                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
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
                                    Kırcaali Mah. Celal Bayar Cad. No:177-181 / D:101 (Karamanoğulları 2 Plaza) Osmangazi / Bursa
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
                    <MapWithAMarker
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                    <div className={`${styles.contact_box} ${styles.contact_box_left}`}>
                        <div className={styles.heading}>
                            Yazılım ofisi
                        </div>
                        <div className={styles.split_box}>
                            <div>
                                <span className={styles.title}>
                                    ADRES
                                </span>
                                <p>
                                    Görükle Mah. Üniversite-1 Cad. Ulutek Tekno Yazılım Geliştirme Merkezi Ar-Ge Binası No:933 / 415 Nilüfer / Bursa
                                </p>
                            </div>
                            <div>
                                <span className={styles.title}>
                                    TELEFON
                                </span>
                                <span className={styles.phone}>
                                    0 224 <strong>442 80 42</strong>
                                </span>
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


        </Layout>
    )
}
