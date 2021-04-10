import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/stats.module.scss'
import Link from 'next/link'

export default function Stats() {
    return (<div className={styles.stats}>
        <div className='container'>
            <div className={styles.stats_wrapper}>
                <div className={styles.stats_block}>
                    <h4>466+</h4>
                    <p>Aktif Müşteri</p>
                </div>
                <div className={styles.stats_block}>
                    <h4>128+</h4>
                    <p>Tamamlanmış <br />Proje</p>
                </div>
                <div className={styles.stats_block}>
                    <h4>12000+</h4>
                    <p>Saat Yazılım <br />Geliştirme</p>
                </div>
                <div className={styles.stats_block}>
                    <h4>59+</h4>
                    <p>Referans</p>
                </div>
            </div>
        </div>
    </div>)
}
