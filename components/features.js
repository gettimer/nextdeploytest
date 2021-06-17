import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/features.module.scss'
import Link from 'next/link'

export default function Features() {
    return (<div className={styles.features}>
        <div className='container'>
            <div className={styles.features_grid}>
                <div className={styles.feature}>
                    <img src='/img/edu.svg' />
                    <h4>Eğitim</h4>
                    <p>Sizler için çalışıyoruz. Verimliliğinizi en iyi seviyelere getirecek hizmetlerimizi inceleyin.</p>
                    <Link href='/hizmetler/egitim'>
                        <a>Detaylar</a>
                    </Link>
                </div>
                <div className={styles.feature}>
                    <img src='/img/support.svg' />
                    <h4>Destek</h4>
                    <p>Hızlı ve kalıcı çözümlerle iş ortaklarımızın yanında olmaya devam etmekteyiz.</p>
                    <Link href='/hizmetler/destek'>
                        <a>Detaylar</a>
                    </Link>
                </div>
                <div className={styles.feature}>
                    <img src='/img/consult.svg' />
                    <h4>Danışmanlık</h4>
                    <p>İş ortaklarının, ihtiyaçları doğrultusunda ulaşmak istedikleri hedefe akılcı ve pratik çözümler…</p>
                    <Link href='/hizmetler/danismanlik'>
                        <a>Detaylar</a>
                    </Link>
                </div>
                <div className={styles.feature}>
                    <img src='/img/dev.svg' />
                    <h4>Özel Yazılım</h4>
                    <p>Özel Yazılımlarla En etkili ve hızlı biçimde işinizi yapmanızı sağlıyoruz.</p>
                    <Link href='/hizmetler/ozel-yazilim'>
                        <a>Detaylar</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>)
}
