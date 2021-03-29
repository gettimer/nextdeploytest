import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/refs.module.scss'
import Link from 'next/link'

export default function Refs() {
    return (<div className={styles.refs}>
        <div className={styles.link_block}>
            <Link href='/referanslar'>
                <a>
                    <img src='/img/ref/tekstil.jpg' />
                    <span>Tekstil, hazır giyim ve deri üretimi</span>
                </a>
            </Link>
            <Link href='/referanslar'>
                <a>
                    <img src='/img/ref/otomotiv.jpg' />
                    <span>Otomotiv ve otomotiv yan sanayi</span>
                </a>
            </Link>
        </div>
        <Link href='/referanslar'>
            <a className={styles.big_link}>
                <img src='/img/ref/elektonik.jpg' />
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