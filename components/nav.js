import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;
import Link from 'next/link'
import styles from '../styles/components/nav.module.scss'
import ContactButtons from './contactbuttons'
import { isMobile } from 'react-device-detect';
import { products } from '../lib/contents'
import slug from 'slug'

export default function Nav() {
    const [subMenu, setSubMenu] = useState(false);
    const [subMenuC, setSubMenuC] = useState(false);
    const [scr, setScr] = useState(false);
    const [pushNav, setPushNav] = useState(false);
    const [openState, setOpenState] = useState(null);
    const [openSubState, setOpenSubState] = useState(null);
    const dropdown = useRef(null);
    const navi = useRef(null);
    const dropdownC = useRef(null);
    const naviC = useRef(null);
    const handleScroll = useCallback((event) => {
        window.scrollY > 10 ? setScr(true) : setScr(false);
    })
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
    useEffect(() => {
        if (!subMenuC) return;
        function handleClickC(event) {
            if (dropdownC.current && !dropdownC.current.contains(event.target) && !naviC.current.contains(event.target)) {
                setSubMenuC(false);
            }
        }
        window.addEventListener("click", handleClickC);
        return () => window.removeEventListener("click", handleClickC);
    }, [subMenuC]);

    return (<><header className={scr ? `${styles.main_nav} ${styles.main_nav_fix}` : `${styles.main_nav}`}>
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
                            <li><Link href='/kurumsal/hakkimizda'><a><span>Kurumsal</span></a></Link></li>
                            <li><Link href='/hizmetler/danismanlik'><a><span>Hizmetler</span></a></Link></li>
                            <li className={subMenu && `${styles.active}`} ref={navi}>
                                <a onClick={() => setSubMenu(b => !b)} ><span>Ürünler</span></a>
                            </li>
                            <li className={subMenuC && `${styles.active}`} ref={naviC}>
                                <a onClick={() => setSubMenuC(b => !b)} ><span>Çözümler</span></a>
                            </li>
                            <li><Link href='/referanslar'><a><span>Referanslar</span></a></Link></li>
                            <li><Link href=''><a><span>Başarı Hikayeleri</span></a></Link></li>
                            <li><Link href=''><a><span>İletişim</span></a></Link></li >
                        </ul>
                    </nav>
                        <ContactButtons />
                        {subMenu ? <div className={styles.sub_menu} ref={dropdown}>
                            <img src='/img/submenu.jpg' className={styles.submenu_image} />
                            <div className={styles.sub_menu_content}>
                                <span className={styles.sub_menu_title}>Ürünler</span>
                                <div className={styles.sub_menu_grid}>

                                    {products.map((product, index) =>
                                        <>
                                            {index % 3 === 0 ? <div className={styles.sub_menu_block}>
                                                <>
                                                    {products.map((p, j) => <>{
                                                        <>{index <= j && j < (index + 3) ?
                                                            <>
                                                                <div className={styles.block_title}>
                                                                    <img src={'/img/navicons/' + p.category_icn} />{p.category}
                                                                </div>
                                                                {p.contents.map(ele =>
                                                                    <Link href='/urun/[slug]' as={`/urun/${slug(ele.name)}-${p.category_id}-${ele.id}`}>
                                                                        <a onClick={() => setSubMenu(false)}>{ele.name}</a>
                                                                    </Link>
                                                                )}

                                                            </>
                                                            : null}</>
                                                    }</>
                                                    )}
                                                </>
                                            </div> : null}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div> : null}
                        {subMenuC ? <div className={styles.sub_menu} ref={dropdownC}>
                            <img src='/img/submenu.jpg' />
                            <div className={styles.sub_menu_content}>
                                <span className={styles.sub_menu_title}>Çözümler</span>
                                <div className={styles.sub_menu_grid}>
                                    <div className={styles.sub_menu_block}>
                                        <Link href=''>
                                            <a>Üretim Çözümleri</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Depo Çözümleri</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Saha Satış Çözümleri</a>
                                        </Link>
                                        <Link href=''>
                                            <a>Finansal Çözümler</a>
                                        </Link>
                                        <Link href=''>
                                            <a> E-Ticaret Entegrasyon</a>
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
            <div className={styles.push_nav_handler} onClick={() => setPushNav(false)}></div>
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
                                {products.map((ele, index) =>
                                    <li key={ele.category_id}>
                                        <a onClick={() => openSubState === ele.category_id ? setOpenSubState(null) : setOpenSubState(ele.category_id)}>{ele.category}</a>
                                        {openSubState === ele.category_id ?
                                            <ul>
                                                {ele.contents.map(p =>
                                                    <li key={p.id}>
                                                        <Link href='/urun/[slug]' as={`/urun/${slug(p.name)}-${ele.category_id}-${p.id}`}>
                                                            <a onClick={() => setPushNav(false)}>{p.name}</a>
                                                        </Link>
                                                    </li>
                                                )}

                                            </ul> : null}

                                    </li>
                                )}
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
    </header>{subMenu || subMenuC ? <div className={styles.nav_layout}></div> : null}</>)
}
