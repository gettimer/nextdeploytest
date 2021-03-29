import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/refs.module.scss'
import Link from 'next/link'

export default function Refs() {
    return (<div className={styles.refs}>
        <div className={styles.link_block}>
            <Link href=''>
                <a>
                    <img src='/img/ref/tekstil.jpeg' />
                    <span>Tekstil, hazır giyim ve deri üretimi</span>
                </a>
            </Link>
            <Link href=''>
                <a>
                    <img src='/img/ref/otomotiv.jpeg' />
                    <span>Otomotiv ve otomotiv yan sanayi</span>
                </a>
            </Link>
        </div>
        <Link href=''>
            <a className={styles.big_link}>
                <img src='/img/ref/elektonik.jpeg' />
                <span>Elektrik ve elektronik</span>
            </a>
        </Link>
        <div className={styles.content_block}>
            <div className={styles.title_badge}>
                REFERANSLAR
            </div>
            <h2>Sektörel Referanslar</h2>
            <p>Çalıştığımız firmaları sektörel olarak görüntüleyin. Siz de bize katılın, işinizde verimliliğiniz artsın.</p>
        </div>
    </div>)
}