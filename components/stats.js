import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/stats.module.scss'
import Link from 'next/link'

export default function Stats() {
    return (<div className={styles.stats}>
        <div className='container'>
            <div className={styles.stats_wrapper}>
                <div className={styles.stats_block}>
                    <h4>300+</h4>
                    <p>Aktif Müşteri</p>
                </div>
                <div className={styles.stats_block}>
                    <h4>40+</h4>
                    <p>Tamamlanmış Proje</p>
                </div>
                <div className={styles.stats_block}>
                    <h4>10000+</h4>
                    <p>Saat Yazılım Geliştirme</p>
                </div>
                <div className={styles.stats_block}>
                    <h4>100+</h4>
                    <p>Referans</p>
                </div>
            </div>
        </div>
    </div>)
}
