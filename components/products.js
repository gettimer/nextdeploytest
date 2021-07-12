import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/products.module.scss'
import Link from 'next/link'

export default function Products() {
    return (<div className={styles.products}>
        <div className='container'>
            <div className={styles.product_wrapper}>
                <div className={styles.product_block}>
                    <div className={styles.title_badge}>
                        ÜRÜNLER
                    </div>
                    <h2 className={styles.block_title}>En iyi bildiğimiz işi yapıyoruz!</h2>
                    <p className={styles.block_text}>Satış noktasında işletmenin ihtiyaç duyabileceği işlemleri kullanımı kolay bir arayüz ile hızlı bir şekilde yapılması sağlanır.</p>
                </div>
                <div className={styles.product_block}>
                    <div className={styles.product_box}>
                        <div className={styles.img}>
                            <img src='/img/home/reports.jpg' />
                        </div>
                        <div className={styles.content}>
                            <h3>Hizmetler</h3>
                            <p>Destek ve danışmanlık hizmetlerimizle iş ortaklarımızın gelişimine katkı sağlıyoruz.</p>
                            <ul>
                                <li>
                                    <Link href='/hizmetler/egitim'><a>EĞİTİM</a></Link>
                                </li>
                                <li>
                                    <Link href='/hizmetler/destek'><a>DESTEK</a></Link>
                                </li>
                                <li>
                                    <Link href='/hizmetler/danismanlik'><a>DANIŞMANLIK</a></Link>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </div>
                <div className={styles.product_block}>
                    <div className={`${styles.product_box} ${styles.product_box_tobottom}`}>
                        <div className={styles.img}>
                            <img src='/img/home/logo.jpg' />
                        </div>
                        <div className={styles.content}>
                            <h3>Ürünler</h3>
                            <p>İş ortaklarımızın, en uygun yazılımı bulmalarına yardımcı oluyoruz.</p>
                            <ul>
                                <li>
                                    <Link href='/urun/logo-isbasi-1-2'><a>KOBI</a></Link>
                                </li>
                                <li>
                                    <Link href='/urun/logo-j-platform-4-1'><a>ERP</a></Link>
                                </li>
                                <li>
                                    <Link href='/urun/logo-j-hr-7-1'><a>HR</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.product_block}>
                    <div className={`${styles.product_box} ${styles.product_box_totop}`}>
                        <div className={styles.img}>
                            <img src='/img/home/logo_product.jpg' />
                        </div>
                        <div className={styles.content}>
                            <h3>Çözümler</h3>
                            <p>Hızlı ve kalıcı çözümlerle iş ortaklarımızın yanında olmaya devam etmekteyiz.</p>
                            <ul>
                                <li>
                                    <Link href='/cozumler/uretim-cozumleri'><a>ÜRETİM</a></Link>
                                </li>
                                <li>
                                    <Link href='/cozumler/depo-cozumleri'><a>DEPO</a></Link>
                                </li>
                                <li>
                                    <Link href='/cozumler/finansal-cozumler'><a>FİNANSAL</a></Link>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
