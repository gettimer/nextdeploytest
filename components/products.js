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
                            <p>Hızlı ve kalıcı çözümlerle iş ortaklarımızın yanında olmaya devam etmekteyiz.</p>
                            <ul>
                                <li>
                                    <Link href=''><a>EĞİTİM</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>DESTEK</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>DANIŞMANLIK</a></Link>
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
                            <p>Hızlı ve kalıcı çözümlerle iş ortaklarımızın yanında olmaya devam etmekteyiz.</p>
                            <ul>
                                <li>
                                    <Link href=''><a>KOBI</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>ERP</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>HR</a></Link>
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
                                    <Link href=''><a>ÜRETİM</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>DEPO</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>FİNANSAL</a></Link>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
