import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/nav.module.scss'
import ContactButtons from './contactbuttons'
import { isMobile } from 'react-device-detect';

export default function Nav() {

    const [subMenu, setSubMenu] = useState(false);
    const [scrollTopOf, setScrollTopOf] = useState(false);
    const [pushNav, setPushNav] = useState(false);
    const [openState, setOpenState] = useState(null);
    const [openSubState, setOpenSubState] = useState(null);
    const dropdown = useRef(null);
    const navi = useRef(null);

    const handleScroll = useCallback((event) => {
        window.scrollY > 10 ? setScrollTopOf(true) : setScrollTopOf(false)
    });
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, []);
    useEffect(() => {
        if (!subMenu) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target) && !navi.current.contains(event.target)) {
                setSubMenu(false);
            }
        }
        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [subMenu]);

    return (<header className={scrollTopOf ? `${styles.main_nav} ${styles.main_nav_fix}` : `${styles.main_nav}`}>
        <div className='container'>
            <div className={styles.nav_wrapper}>
                <Link href='/'>
                    <a className={styles.nav_logo}>
                        <img src="/img/terapinavlogo.svg" alt="Terapi Yazılım" />
                    </a>
                </Link>
                {!isMobile ?
                    <><nav className={styles.nav_list}>
                        <ul>
                            <li><Link href=''><a><span>Kurumsal</span></a></Link></li>
                            <li><Link href=''><a><span>Hizmetler</span></a></Link></li>
                            <li className={subMenu && `${styles.active}`} ref={navi}>
                                <a onClick={() => setSubMenu(b => !b)} ><span>Ürünler</span></a>
                            </li>
                            <li><Link href=''><a><span>Çözümler</span></a></Link></li>
                            <li><Link href=''><a><span>Referanslar</span></a></Link></li>
                            <li><Link href=''><a><span>Başarı Hikayeleri</span></a></Link></li>
                            <li><Link href=''><a><span>İletişim</span></a></Link></li >
                        </ul>
                    </nav>
                        <ContactButtons />
                        {subMenu ? <div className={styles.sub_menu} ref={dropdown}>
                            <img src='/img/submenu.jpg' />
                            <div className={styles.sub_menu_content}>
                                <span className={styles.sub_menu_title}>Ürünler</span>
                                <div className={styles.sub_menu_grid}>
                                    <div className={styles.sub_menu_block}>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/kobi.svg' />KOBİ
                                </div>
                                        <Link href=''>
                                            <a>Logo İş Başı</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Start 3</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Go Wings</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Go 3</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis Wings Entegre</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis 3 Entegre</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Mali Müşavir 3</a>
                                        </Link>

                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/crm.svg' />CRM
                                </div>
                                        <Link href=''>
                                            <a>CRM Ürünü</a>
                                        </Link>
                                    </div>
                                    <div className={styles.sub_menu_block}>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/erp.svg' />ERP
                                </div>
                                        <Link href=''>
                                            <a>Logo J Platform</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Tiger Wings Enterprise</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Tiger 3 Enterprise</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Tiger Wings </a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Tiger 3</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis Wings Enterprise</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis 3 Enterprise</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis Wings</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis 3 Standart</a>
                                        </Link>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/diger.svg' />PROJE ÇÖZÜMLERİ
                                </div>
                                        <Link href=''>
                                            <a>Logo Hazine Sihirbazı</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo B2B</a>
                                        </Link>
                                    </div>
                                    <div className={styles.sub_menu_block}>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/hr.svg' />HR
                                </div>
                                        <Link href=''>
                                            <a>Logo j-HR</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Tiger HR</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Bordro Plus</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis HR</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Netsis 3 Bordro</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Payroll</a>
                                        </Link>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/perakende.svg' />PERAKENDE
                                </div>
                                        <Link href=''>
                                            <a>Logo Diva RETAIL</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Diva SERVICE</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Diva SHOP</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Diva CHANNEL</a>
                                        </Link>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/diger.svg' />SAHA SATIŞ YÖNETİMİ
                                </div>
                                        <Link href=''>
                                            <a>Logo Mobile Sales</a>
                                        </Link>

                                    </div>
                                    <div className={styles.sub_menu_block}>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/edevlet.svg' />E-ÇÖZÜMLER
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
                                        <Link href=''>
                                            <a>E-İrsaliye</a>
                                        </Link>
                                        <Link href=''>
                                            <a>E-Müstahsil Makbuzu</a>
                                        </Link>
                                        <Link href=''>
                                            <a>E-Mutabakat</a>
                                        </Link>
                                        <Link href=''>
                                            <a>E-Ekstre</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Connect Banka</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Connect B2B</a>
                                        </Link>
                                        <Link href=''>
                                            <a>E-Logo E-Tahsilat</a>
                                        </Link>
                                        <Link href=''>
                                            <a>E-Serbest Meslek Makbuzu</a>
                                        </Link>

                                    </div>
                                    <div className={styles.sub_menu_block}>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/diger.svg' />İŞ AKIŞ YÖNETİMİ
                                </div>
                                        <Link href=''>
                                            <a>Logo Flow</a>
                                        </Link>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/diger.svg' />DEPO YÖNETİM SİSTEMLERİ (WMS)
                                </div>
                                        <Link href=''>
                                            <a>Logo WMS Platform</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo WMS</a>
                                        </Link>

                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/diger.svg' />İŞ ANALİTİĞİ
                                </div>
                                        <Link href=''>
                                            <a>Logo Mind Insight</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Mind Navigator</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Logo Mind Budget</a>
                                        </Link>
                                        <div className={styles.block_title}>
                                            <img src='/img/navicons/diger.svg' />İŞ SAĞLIĞI VE GÜVENLİĞİ
                                </div>
                                        <Link href=''>
                                            <a>elogo ISG</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                    </> : <button className={styles.toggle_mobile_menu} onClick={() => setPushNav(true)}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0357 15.3125H0.964286C0.441964 15.3125 0 15.7422 0 16.25C0 16.7578 0.441964 17.1875 0.964286 17.1875H17.0357C17.558 17.1875 18 16.7578 18 16.25C18 15.7422 17.558 15.3125 17.0357 15.3125ZM17.0357 2.8125H0.964286C0.441964 2.8125 0 3.24219 0 3.75C0 4.25781 0.441964 4.6875 0.964286 4.6875H17.0357C17.558 4.6875 18 4.25781 18 3.75C18 3.24219 17.558 2.8125 17.0357 2.8125ZM17.0357 9.0625H0.964286C0.441964 9.0625 0 9.49219 0 10C0 10.5078 0.441964 10.9375 0.964286 10.9375H17.0357C17.558 10.9375 18 10.5078 18 10C18 9.49219 17.558 9.0625 17.0357 9.0625Z" fill="white" />
                        </svg>
                    </button>}
            </div>
        </div>

        {isMobile ? <div className={pushNav ? `${styles.push_nav} ${styles.push_nav_push}` : `${styles.push_nav}`}>
            <div className={styles.push_nav_handler} onClick={() => setPushNav(false)}>

            </div>
            <div className={styles.push_nav_container}>
                <ul>
                    <li>
                        <a onClick={() => openState === 1 ? setOpenState(null) : setOpenState(1)}>KURUMSAL</a>
                        {openState === 1 ?
                            <ul>
                                <li>
                                    <Link href=''><a>Hakkımmızda</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Vizyon/Misyon</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Zaman Tüneli</a></Link>
                                </li>
                            </ul> : null}
                    </li>
                    <li>
                        <a onClick={() => openState === 2 ? setOpenState(null) : setOpenState(2)}>HİZMETLER</a>
                        {openState === 2 ?
                            <ul>
                                <li>
                                    <Link href=''><a>Eğitim Hizmetleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Destek Hizmetleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Danışmanlık Hizmetleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Yazılım Hizmetleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Proje Yönetimi</a></Link>
                                </li>
                            </ul>
                            : null}
                    </li>
                    <li>
                        <a onClick={() => openState === 3 ? setOpenState(null) : setOpenState(3)}>ÜRÜNLER</a>
                        {openState === 3 ?
                            <ul>
                                <li>
                                    <a onClick={() => openSubState === 1 ? setOpenSubState(null) : setOpenSubState(1)}>KOBİ</a>
                                    {openSubState === 1 ?
                                        <ul>
                                            <li><Link href=''><a>Logo İş Başı</a></Link></li>
                                            <li><Link href=''><a>Logo Start 3</a></Link></li>
                                            <li><Link href=''><a>Logo Go Wings</a></Link></li>
                                            <li><Link href=''><a>Logo Go 3</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis Wings Entegre</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis 3 Entegre</a></Link></li>
                                            <li><Link href=''><a>Logo Mali Müşavir 3</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 2 ? setOpenSubState(null) : setOpenSubState(2)}>ERP</a>
                                    {openSubState === 2 ?
                                        <ul>
                                            <li><Link href=''><a>Logo J Platform</a></Link></li>
                                            <li><Link href=''><a>Logo Tiger Wings Enterprise</a></Link></li>
                                            <li><Link href=''><a>Logo Tiger 3 Enterprise</a></Link></li>
                                            <li><Link href=''><a>Logo Tiger Wings</a></Link></li>
                                            <li><Link href=''><a>Logo Tiger 3</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis Wings Enterprise</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis 3 Enterprise</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis Wings</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis 3 Standart</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 3 ? setOpenSubState(null) : setOpenSubState(3)}>HR</a>
                                    {openSubState === 3 ?
                                        <ul>
                                            <li><Link href=''><a>Logo j-HR</a></Link></li>
                                            <li><Link href=''><a>Logo Tiger HR</a></Link></li>
                                            <li><Link href=''><a>Logo Bordro Plus</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis HR</a></Link></li>
                                            <li><Link href=''><a>Logo Netsis 3 Bordro</a></Link></li>
                                            <li><Link href=''><a>Logo Payroll</a></Link></li>
                                        </ul> : null}
                                </li>

                                <li>
                                    <a onClick={() => openSubState === 4 ? setOpenSubState(null) : setOpenSubState(4)}>E ÇÖZÜMLER</a>
                                    {openSubState === 4 ?
                                        <ul>
                                            <li><Link href=''><a>E-Fatura</a></Link></li>
                                            <li><Link href=''><a>E-Arşiv</a></Link></li>
                                            <li><Link href=''><a>E-Defter</a></Link></li>
                                            <li><Link href=''><a>E-İrsaliye</a></Link></li>
                                            <li><Link href=''><a>E-Müstahsil Makbuzu</a></Link></li>
                                            <li><Link href=''><a>E-Mutabakat</a></Link></li>
                                            <li><Link href=''><a>E-Ekstre</a></Link></li>
                                            <li><Link href=''><a>Connect Banka</a></Link></li>
                                            <li><Link href=''><a>Connect B2B</a></Link></li>
                                            <li><Link href=''><a>E-Logo E-Tahsilat</a></Link></li>
                                            <li><Link href=''><a>E-Serbest Meslek Makbuzu</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 5 ? setOpenSubState(null) : setOpenSubState(5)}>PERAKENDE</a>
                                    {openSubState === 5 ?
                                        <ul>
                                            <li><Link href=''><a>Logo Diva RETAIL</a></Link></li>
                                            <li><Link href=''><a>Logo Diva SERVICE</a></Link></li>
                                            <li><Link href=''><a>Logo Diva SHOP</a></Link></li>
                                            <li><Link href=''><a>Logo Diva CHANNEL</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 6 ? setOpenSubState(null) : setOpenSubState(6)}>İŞ AKIŞ YÖNETİMİ</a>
                                    {openSubState === 6 ?
                                        <ul>
                                            <li><Link href=''><a>Logo Flow</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 7 ? setOpenSubState(null) : setOpenSubState(7)}>SAHA SATIŞ YÖNETİMİ</a>
                                    {openSubState === 7 ?
                                        <ul>
                                            <li><Link href=''><a>Logo Mobile Sales</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 8 ? setOpenSubState(null) : setOpenSubState(8)}>PROJE ÇÖZÜMLERİ</a>
                                    {openSubState === 8 ?
                                        <ul>
                                            <li><Link href=''><a>Logo Hazine Sihirbazı</a></Link></li>
                                            <li><Link href=''><a>Logo B2B</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 9 ? setOpenSubState(null) : setOpenSubState(9)}>CRM</a>
                                    {openSubState === 9 ?
                                        <ul>
                                            <li><Link href=''><a>Logo CRM</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 10 ? setOpenSubState(null) : setOpenSubState(10)}>İŞ ANALİTİĞİ</a>
                                    {openSubState === 10 ?
                                        <ul>
                                            <li><Link href=''><a>Logo Mind Insight</a></Link></li>
                                            <li><Link href=''><a>Logo Mind Navigator</a></Link></li>
                                            <li><Link href=''><a>Logo Mind Budget</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 11 ? setOpenSubState(null) : setOpenSubState(11)}>İŞ SAĞLIĞI VE GÜVENLİĞİ</a>
                                    {openSubState === 11 ?
                                        <ul>
                                            <li><Link href=''><a>eLogo ISG</a></Link></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <a onClick={() => openSubState === 12 ? setOpenSubState(null) : setOpenSubState(12)}>DEPO YÖNETİM SİSTEMLERİ</a>
                                    {openSubState === 12 ?
                                        <ul>
                                            <li><Link href=''><a>Logo WMS Platform</a></Link></li>
                                            <li><Link href=''><a>Logo WMS</a></Link></li>
                                        </ul> : null}
                                </li>
                            </ul> : null}
                    </li>
                    <li>
                        <a onClick={() => openState === 4 ? setOpenState(null) : setOpenState(4)}>ÇÖZÜMLER</a>
                        {openState === 4 ?
                            <ul>
                                <li>
                                    <Link href=''><a>Üretim Çözümleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Depo Çözümleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Saha Satış Çözümleri</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>Finansal Çözümler</a></Link>
                                </li>
                                <li>
                                    <Link href=''><a>E-Ticaret Entegrasyon</a></Link>
                                </li>
                            </ul>
                            : null}
                    </li>
                    <li>
                        <Link href=''><a>REFERANSLAR</a></Link>
                    </li>
                    <li>
                        <Link href=''><a>BAŞARI HİKAYELERİ</a></Link>
                    </li>
                    <li>
                        <Link href=''><a>İLETİŞİM</a></Link>
                    </li>
                </ul>
            </div>
        </div> : null}

    </header>)
}
