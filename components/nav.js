import React from 'react'
const { useState, useEffect, useRef } = React;
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/nav.module.scss'
import ContactButtons from './contactbuttons'

export default function Nav() {

    const [subMenu, setSubmenu] = useState(false);

    return (<header className={styles.main_nav}>
        <div className='container'>
            <div className={styles.nav_wrapper}>
                <Link href='/'>
                    <a className={styles.nav_logo}>
                        <img src="/img/terapinavlogo.svg" alt="Terapi Yazılım" />
                    </a>
                </Link>
                <nav className={styles.nav_list}>
                    <ul>
                        <li><Link href=''><a><span>Kurumsal</span></a></Link></li>
                        <li><Link href=''><a><span>Hizmetler</span></a></Link></li>
                        <li className={subMenu && `${styles.active}`}>
                            <Link href=''>
                                <a onClick={() => setSubmenu(!subMenu)}><span>Ürünler</span></a>
                            </Link>
                        </li>
                        <li><Link href=''><a><span>Çözümler</span></a></Link></li>
                        <li><Link href=''><a><span>Referanslar</span></a></Link></li>
                        <li><Link href=''><a><span>Başarı Hikayeleri</span></a></Link></li>
                        <li><Link href=''><a><span>İletişim</span></a></Link></li >
                    </ul>
                </nav>
                <ContactButtons />
                {subMenu ? <div className={styles.sub_menu}>
                    <img src='/img/submenu.jpg' />
                    <div className={styles.sub_menu_content}>
                        <span className={styles.sub_menu_title}>Ürünler</span>
                        <div className={styles.sub_menu_grid}>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/kobi.svg' />KOBİ
                                </div>
                                <Link href=''>
                                    <a>İş Başı</a>
                                </Link>
                                <Link href=''>
                                    <a>Start 3</a>
                                </Link>
                                <Link href=''>
                                    <a>Go3</a>
                                </Link>
                                <Link href=''>
                                    <a>Go Wings</a>
                                </Link>

                            </div>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/hr.svg' />HR
                                </div>
                                <Link href=''>
                                    <a>j-HR</a>
                                </Link>
                                <Link href=''>
                                    <a>Tiger HR</a>
                                </Link>
                                <Link href=''>
                                    <a>Bordro Plus</a>
                                </Link>
                            </div>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/perakende.svg' />PERAKENDE
                                </div>
                                <Link href=''>
                                    <a>Diva Retail</a>
                                </Link>
                                <Link href=''>
                                    <a>Diva Service</a>
                                </Link>
                            </div>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/diger.svg' />DİĞER
                                </div>
                                <Link href=''>
                                    <a>WMS</a>
                                </Link>
                                <Link href=''>
                                    <a>İSG</a>
                                </Link>
                                <Link href=''>
                                    <a>B2B</a>
                                </Link>
                            </div>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/erp.svg' />ERP
                                </div>
                                <Link href=''>
                                    <a>Tiger Wings</a>
                                </Link>
                                <Link href=''>
                                    <a>Tiger 3</a>
                                </Link>
                                <Link href=''>
                                    <a>Enterprise</a>
                                </Link>
                                <Link href=''>
                                    <a>Tiger 3</a>
                                </Link>
                            </div>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/crm.svg' />CRM
                                </div>
                                <Link href=''>
                                    <a>CRM Ürünü</a>
                                </Link>

                            </div>
                            <div className={styles.sub_menu_block}>
                                <div className={styles.block_title}>
                                    <img src='/img/navicons/edevlet.svg' />E-DEVLET
                                </div>
                                <Link href=''>
                                    <a>E-Fatura</a>
                                </Link>
                                <Link href=''>
                                    <a>E-Arşiv</a>
                                </Link>
                                <Link href=''>
                                    <a>E-Defter</a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>

    </header>)
}
