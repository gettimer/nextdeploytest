import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/contact.module.scss'


export default function Iletisim() {


    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - İletişim</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Sizi Arıyalım</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>sizi arıyalım</a></Link>
                    </div>
                </div>
                <img src='/img/contact.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href='/iletisim'><a>İletişim</a></Link>
                        <Link href='/sizi-arayalim'><a className={styles.active}>Sizi Arayalım</a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.contact}>


                <div className='container'>
                    <div className={styles.form_layout}>
                        <div className={styles.form_content}>
                            <div className={styles.contact_title}>
                                <h3>İletişim Bilgileri</h3>
                            </div>
                            <p className={styles.form_desc}>
                                Devir işlemleri en fazla 2 kez yapılabilecektir. (Kart veya rakam devri farketmeksizin) 3. veya daha sonraki devir talepleriniz ayrıca ücretlendirilecektir.
                            </p>

                            <div className={styles.form_body}>
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="Firma" />
                                    <p className={styles.field__label}>Firma</p>
                                    <small>Lüften çalıştığınız ya da sahibi olduğunuz firma ismini yazınız</small>
                                </div>
                                <div className={styles.field_select}>
                                    <select>
                                        <option value="Adana">İL SEÇİNİZ</option>
                                        <option value="Adana">Adana</option>
                                        <option value="Adiyaman">Adiyaman</option>
                                        <option value="Afyonkarahisar">Afyonkarahisar</option>
                                        <option value="Agri">Agri</option>
                                        <option value="Aksaray">Aksaray</option>
                                        <option value="Amasya">Amasya</option>
                                        <option value="Ankara">Ankara</option>
                                        <option value="Antalya">Antalya</option>
                                        <option value="Ardahan">Ardahan</option>
                                        <option value="Artvin">Artvin</option>
                                        <option value="Aydin">Aydin</option>
                                        <option value="Balikesir">Balikesir</option>
                                        <option value="Bartin">Bartin</option>
                                        <option value="Batman">Batman</option>
                                        <option value="Bayburt">Bayburt</option>
                                        <option value="Bilecik">Bilecik</option>
                                        <option value="Bingol">Bingol</option>
                                        <option value="Bitlis">Bitlis</option>
                                        <option value="Bolu">Bolu</option>
                                        <option value="Burdur">Burdur</option>
                                        <option value="Bursa">Bursa</option>
                                        <option value="Canakkale">Canakkale</option>
                                        <option value="Cankiri">Cankiri</option>
                                        <option value="Corum">Corum</option>
                                        <option value="Denizli">Denizli</option>
                                        <option value="Diyarbakir">Diyarbakir</option>
                                        <option value="Duzce">Duzce</option>
                                        <option value="Edirne">Edirne</option>
                                        <option value="Elazig">Elazig</option>
                                        <option value="Erzincan">Erzincan</option>
                                        <option value="Erzurum">Erzurum</option>
                                        <option value="Eskisehir">Eskisehir</option>
                                        <option value="Gaziantep">Gaziantep</option>
                                        <option value="Giresun">Giresun</option>
                                        <option value="Gumushane">Gumushane</option>
                                        <option value="Hakkari">Hakkari</option>
                                        <option value="Hatay">Hatay</option>
                                        <option value="Igdir">Igdir</option>
                                        <option value="Isparta">Isparta</option>
                                        <option value="Istanbul">Istanbul</option>
                                        <option value="Izmir">Izmir</option>
                                        <option value="Kahramanmaras">Kahramanmaras</option>
                                        <option value="Karabuk">Karabuk</option>
                                        <option value="Karaman">Karaman</option>
                                        <option value="Kars">Kars</option>
                                        <option value="Kastamonu">Kastamonu</option>
                                        <option value="Kayseri">Kayseri</option>
                                        <option value="Kilis">Kilis</option>
                                        <option value="Kirikkale">Kirikkale</option>
                                        <option value="Kirklareli">Kirklareli</option>
                                        <option value="Kirsehir">Kirsehir</option>
                                        <option value="Kocaeli">Kocaeli</option>
                                        <option value="Konya">Konya</option>
                                        <option value="Kutahya">Kutahya</option>
                                        <option value="Malatya">Malatya</option>
                                        <option value="Manisa">Manisa</option>
                                        <option value="Mardin">Mardin</option>
                                        <option value="Mersin">Mersin</option>
                                        <option value="Mugla">Mugla</option>
                                        <option value="Mus">Mus</option>
                                        <option value="Nevsehir">Nevsehir</option>
                                        <option value="Nigde">Nigde</option>
                                        <option value="Ordu">Ordu</option>
                                        <option value="Osmaniye">Osmaniye</option>
                                        <option value="Rize">Rize</option>
                                        <option value="Sakarya">Sakarya</option>
                                        <option value="Samsun">Samsun</option>
                                        <option value="Sanliurfa">Sanliurfa</option>
                                        <option value="Siirt">Siirt</option>
                                        <option value="Sinop">Sinop</option>
                                        <option value="Sirnak">Sirnak</option>
                                        <option value="Sivas">Sivas</option>
                                        <option value="Tekirdag">Tekirdag</option>
                                        <option value="Tokat">Tokat</option>
                                        <option value="Trabzon">Trabzon</option>
                                        <option value="Tunceli">Tunceli</option>
                                        <option value="Usak">Usak</option>
                                        <option value="Van">Van</option>
                                        <option value="Yalova">Yalova</option>
                                        <option value="Yozgat">Yozgat</option>
                                        <option value="Zonguldak">Zonguldak</option>
                                    </select>
                                </div>
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="Adınız Soyadınız" />
                                    <p className={styles.field__label}>Adınız Soyadınız</p>
                                </div>
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="Telefon Numaranız" />
                                    <p className={styles.field__label}>Telefon Numaranız</p>
                                </div>
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="E-Posta Adresiniz" />
                                    <p className={styles.field__label}>E-Posta Adresiniz</p>
                                </div>
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="Varsa Mesajınız" />
                                    <p className={styles.field__label}>Varsa Mesajınız</p>
                                </div>

                                <button className={styles.send}>Formu Gönder</button>
                            </div>

                        </div>
                        <div className={styles.form_selection}>
                            <div className={styles.contact_title}>
                                <h3>Formlar</h3>
                            </div>
                            <p>Lütfen iletişim kurmak istediğiniz konu ile ilgili formu seçiniz.</p>

                            <div className={styles.form_select_grid}>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.244" height="25.352" viewBox="0 0 23.244 25.352"><defs></defs><g transform="translate(-866.463 -368.928)"><path class="a" d="M887.937,385.946H876.729v-2h10.978V372.555H875.331v-2h12.606a1.772,1.772,0,0,1,1.77,1.77v11.851A1.772,1.772,0,0,1,887.937,385.946Z" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(867.345 368.928)" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(867.345 388.99)" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(875.355 388.99)" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(883.417 388.99)" /><path class="a" d="M873.82,385.946h-7.357v-7.535a2.449,2.449,0,0,1,2.447-2.446h13.109v2h-8.2Zm-5.357-2h3.357v-5.981h-2.91a.447.447,0,0,0-.447.446Z" /></g></svg>
                                        Tanıtım demosu talebi formu
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28.652" height="29.056" viewBox="0 0 28.652 29.056"><defs></defs><g transform="translate(-1031.139 -398.32)"><path class="a" d="M1044.2,422.43a11.047,11.047,0,0,1-8.522-18.092l2.978,2.978,1.414-1.414-2.981-2.981a11.047,11.047,0,0,1,17.722,5.339l1.919-.56a13.052,13.052,0,1,0-7.962,15.907l-.7-1.875A11.091,11.091,0,0,1,1044.2,422.43Z" /><path class="a" d="M1040.475,411.376a3.723,3.723,0,1,0,3.722-3.723A3.727,3.727,0,0,0,1040.475,411.376Zm5.445,0a1.723,1.723,0,1,1-1.723-1.723A1.725,1.725,0,0,1,1045.92,411.376Z" /><path class="a" d="M1059.791,416.685a4.969,4.969,0,1,0-7.614,4.19v6.5l2.714-1.277,2.713,1.277V420.8A4.966,4.966,0,0,0,1059.791,416.685Zm-4.969,2.968a2.969,2.969,0,1,1,2.969-2.968A2.971,2.971,0,0,1,1054.822,419.653Z" /></g></svg>
                                        Ticari yazılım satın alma formu
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26.696" height="26.72" viewBox="0 0 26.696 26.72"><defs></defs><g transform="translate(-864.67 -524.953)"><rect class="a" width="5.386" height="5.386" transform="translate(864.67 532.887)" /><rect class="a" width="5.386" height="5.386" transform="translate(864.67 539.587)" /><rect class="a" width="5.386" height="5.386" transform="translate(864.67 546.287)" /><rect class="a" width="5.386" height="5.386" transform="translate(871.346 546.287)" /><rect class="a" width="5.386" height="5.386" transform="translate(871.346 539.587)" /><rect class="a" width="5.386" height="5.386" transform="translate(885.979 524.953)" /><rect class="a" width="5.386" height="5.386" transform="matrix(0.797, -0.604, 0.604, 0.797, 880.134, 538.251)" /><rect class="a" width="5.386" height="5.386" transform="matrix(0.807, 0.59, -0.59, 0.807, 878.556, 526.229)" /><rect class="a" width="5.386" height="5.386" transform="translate(878.021 546.287)" /></g></svg>                                        Versiyon güncelleme talebi formu
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28.55" height="25.685" viewBox="0 0 28.55 25.685"><defs></defs><g transform="translate(-1027.674 -525.763)"><path class="a" d="M1041.9,531.646l-13.659,6.434,4.724,2.17v6.991l9.165,4.207,8.995-4.019v-6.991l4.669-2.091Zm-.01,2.216,9.16,4.417-8.906,3.99-9.162-4.212Zm7.235,12.27-6.985,3.119-7.175-3.293v-4.789l7.169,3.295,6.991-3.131Z" /><path class="a" d="M1041.835,527.978l13.521,6.513.867-1.8-14.379-6.926-14.171,6.672.852,1.81Z" /></g></svg>                                        Eğitim talebi formu
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.989" height="26.107" viewBox="0 0 25.989 26.107"><defs></defs><g transform="translate(-865.045 -684.212)"><path class="a" d="M885.153,698.776l-.844,1.379a12.115,12.115,0,0,0-1.781,6.324v1.84h-7.455v-3.925h-4.638a.727.727,0,0,1-.726-.726v-5.305l-2.243-.916,1.307-2.139a4.506,4.506,0,0,0,.685-1.995,7.784,7.784,0,0,1,6.043-6.921l-.43-1.954a9.8,9.8,0,0,0-7.606,8.712,2.534,2.534,0,0,1-.4,1.116l-1.862,3.048a1.1,1.1,0,0,0-.1.915l.2.495,2.406.983v3.961a2.729,2.729,0,0,0,2.726,2.726h2.638v3.925h11.455v-3.84a10.1,10.1,0,0,1,1.487-5.279l.844-1.379a6.661,6.661,0,0,0,.872-2.27l-1.965-.367A4.675,4.675,0,0,1,885.153,698.776Z" /><path class="a" d="M888.936,684.212h-8.411a2.1,2.1,0,0,0-2.1,2.1v7h-.009v4.995l4.076-4.076h6.442a2.1,2.1,0,0,0,2.1-2.1v-5.824A2.1,2.1,0,0,0,888.936,684.212Zm.1,7.923a.1.1,0,0,1-.1.1h-8.509v-5.922a.1.1,0,0,1,.1-.1h8.411a.1.1,0,0,1,.1.1Z" /></g></svg>                                        Danışmanlık talebi formu
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </Layout>
    )
}
