import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/about.module.scss'
import Link from 'next/link'

export default function About() {
    return (<div className={styles.about}>
        <div className={styles.about_picture_block}>
            <div className={styles.picture_relative}>
                <img src="/img/home/about.jpg" />
            </div>
        </div>
        <div className={styles.about_content_block}>
            <div className={styles.title_badge}>HAKKIMIZDA</div>
            <h2>Hızla gelişmekte olan bilişim sektöründe</h2>
            <p>
                Yazılım teknolojisini, deneyimli ve konusunda uzman sertifikalı kadrosuyla müşterinin ihtiyaçlarına farklı bir bakış açısı ile yaklaşan Terapi Yazılım, rekabetin gitgide arttığı ülkemizde KOBI ve Kurumsal işletmelere <strong>“İş’te Çözüm”</strong> ve <strong>“Değişimi Başlatır, Geleceğe Taşır”</strong> misyonu ile sunmaktadır.
            </p>

            <Link href=''><a>Tümünü görüntüle…</a></Link>
        </div>
    </div>)
}
