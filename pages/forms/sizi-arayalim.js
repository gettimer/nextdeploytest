import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/contact.module.scss'
import Select from 'react-select'
import { toast } from 'react-toastify';

const options = [
    {
        "value": "BURDUR",
        "label": "BURDUR"
    },
    {
        "value": "ESKİŞEHİR",
        "label": "ESKİŞEHİR"
    },
    {
        "value": "ÇANKIRI",
        "label": "ÇANKIRI"
    },
    {
        "value": "OSMANİYE",
        "label": "OSMANİYE"
    },
    {
        "value": "KOCAELİ",
        "label": "KOCAELİ"
    },
    {
        "value": "GAZİANTEP",
        "label": "GAZİANTEP"
    },
    {
        "value": "HATAY",
        "label": "HATAY"
    },
    {
        "value": "KAYSERİ",
        "label": "KAYSERİ"
    },
    {
        "value": "GÜMÜŞHANE",
        "label": "GÜMÜŞHANE"
    },
    {
        "value": "SAKARYA",
        "label": "SAKARYA"
    },
    {
        "value": "BURSA",
        "label": "BURSA"
    },
    {
        "value": "BAYBURT",
        "label": "BAYBURT"
    },
    {
        "value": "ÇANAKKALE",
        "label": "ÇANAKKALE"
    },
    {
        "value": "SİNOP",
        "label": "SİNOP"
    },
    {
        "value": "BARTIN",
        "label": "BARTIN"
    },
    {
        "value": "MAĞUSA (KIBRIS)",
        "label": "MAĞUSA (KIBRIS)"
    },
    {
        "value": "MERSİN",
        "label": "MERSİN"
    },
    {
        "value": "NİĞDE",
        "label": "NİĞDE"
    },
    {
        "value": "KONYA",
        "label": "KONYA"
    },
    {
        "value": "TOKAT",
        "label": "TOKAT"
    },
    {
        "value": "ADIYAMAN",
        "label": "ADIYAMAN"
    },
    {
        "value": "ANKARA",
        "label": "ANKARA"
    },
    {
        "value": "YOZGAT",
        "label": "YOZGAT"
    },
    {
        "value": "ORDU",
        "label": "ORDU"
    },
    {
        "value": "RİZE",
        "label": "RİZE"
    },
    {
        "value": "ADANA",
        "label": "ADANA"
    },
    {
        "value": "KIRŞEHİR",
        "label": "KIRŞEHİR"
    },
    {
        "value": "IĞDIR",
        "label": "IĞDIR"
    },
    {
        "value": "MANİSA",
        "label": "MANİSA"
    },
    {
        "value": "DİYARBAKIR",
        "label": "DİYARBAKIR"
    },
    {
        "value": "UŞAK",
        "label": "UŞAK"
    },
    {
        "value": "LEFKOŞE (KIBRIS)",
        "label": "LEFKOŞE (KIBRIS)"
    },
    {
        "value": "AMASYA",
        "label": "AMASYA"
    },
    {
        "value": "ERZİNCAN",
        "label": "ERZİNCAN"
    },
    {
        "value": "ISPARTA",
        "label": "ISPARTA"
    },
    {
        "value": "GİRNE (KIBRIS)",
        "label": "GİRNE (KIBRIS)"
    },
    {
        "value": "ELAZIĞ",
        "label": "ELAZIĞ"
    },
    {
        "value": "KARABÜK",
        "label": "KARABÜK"
    },
    {
        "value": "HAKKARİ",
        "label": "HAKKARİ"
    },
    {
        "value": "KARS",
        "label": "KARS"
    },
    {
        "value": "ZONGULDAK",
        "label": "ZONGULDAK"
    },
    {
        "value": "AKSARAY",
        "label": "AKSARAY"
    },
    {
        "value": "MALATYA",
        "label": "MALATYA"
    },
    {
        "value": "BALIKESİR",
        "label": "BALIKESİR"
    },
    {
        "value": "DENİZLİ",
        "label": "DENİZLİ"
    },
    {
        "value": "MUŞ",
        "label": "MUŞ"
    },
    {
        "value": "ŞIRNAK",
        "label": "ŞIRNAK"
    },
    {
        "value": "MUĞLA",
        "label": "MUĞLA"
    },
    {
        "value": "TEKİRDAĞ",
        "label": "TEKİRDAĞ"
    },
    {
        "value": "KIRKLARELİ",
        "label": "KIRKLARELİ"
    },
    {
        "value": "SİİRT",
        "label": "SİİRT"
    },
    {
        "value": "GİRESUN",
        "label": "GİRESUN"
    },
    {
        "value": "ŞANLIURFA",
        "label": "ŞANLIURFA"
    },
    {
        "value": "AYDIN",
        "label": "AYDIN"
    },
    {
        "value": "BATMAN",
        "label": "BATMAN"
    },
    {
        "value": "BİTLİS",
        "label": "BİTLİS"
    },
    {
        "value": "AFYONKARAHİSAR",
        "label": "AFYONKARAHİSAR"
    },
    {
        "value": "ARTVİN",
        "label": "ARTVİN"
    },
    {
        "value": "AĞRI",
        "label": "AĞRI"
    },
    {
        "value": "YALOVA",
        "label": "YALOVA"
    },
    {
        "value": "NEVŞEHİR",
        "label": "NEVŞEHİR"
    },
    {
        "value": "TRABZON",
        "label": "TRABZON"
    },
    {
        "value": "SİVAS",
        "label": "SİVAS"
    },
    {
        "value": "ANTALYA",
        "label": "ANTALYA"
    },
    {
        "value": "KASTAMONU",
        "label": "KASTAMONU"
    },
    {
        "value": "MARDİN",
        "label": "MARDİN"
    },
    {
        "value": "KAHRAMANMARAŞ",
        "label": "KAHRAMANMARAŞ"
    },
    {
        "value": "ERZURUM",
        "label": "ERZURUM"
    },
    {
        "value": "ARDAHAN",
        "label": "ARDAHAN"
    },
    {
        "value": "DÜZCE",
        "label": "DÜZCE"
    },
    {
        "value": "SAMSUN",
        "label": "SAMSUN"
    },
    {
        "value": "ÇORUM",
        "label": "ÇORUM"
    },
    {
        "value": "VAN",
        "label": "VAN"
    },
    {
        "value": "BOLU",
        "label": "BOLU"
    },
    {
        "value": "KÜTAHYA",
        "label": "KÜTAHYA"
    },
    {
        "value": "BİLECİK",
        "label": "BİLECİK"
    },
    {
        "value": "İSTANBUL",
        "label": "İSTANBUL"
    },
    {
        "value": "KİLİS",
        "label": "KİLİS"
    },
    {
        "value": "TUNCELİ",
        "label": "TUNCELİ"
    },
    {
        "value": "BİNGÖL",
        "label": "BİNGÖL"
    },
    {
        "value": "EDİRNE",
        "label": "EDİRNE"
    },
    {
        "value": "KIRIKKALE",
        "label": "KIRIKKALE"
    },
    {
        "value": "KARAMAN",
        "label": "KARAMAN"
    },
    {
        "value": "İZMİR",
        "label": "İZMİR"
    }
]
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#fff',
        borderWidth: '2px',
        borderRadius: '0px',
        borderColor: 'rgba(119, 123, 134, 0.5)',
        borderLeft: '0px',
        borderRight: '0px',
        borderTop: '0px',
        minHeight: '47px',
        height: '47px',
        boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        height: '47px',
        padding: '0 0',
        fontSize: '14px'
    }),

    input: (provided, state) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorSeparator: state => ({
        display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '47px',
    }),
    option: (styles, { isDisabled, isFocused }) => {
        return {
            ...styles,
            color: isDisabled ? '#e1e2e3' : 'black',
            cursor: isDisabled ? 'not-allowed' : 'default',
            backgroundColor: isFocused ? "rgba(211, 217, 220,1)" : null,
            fontSize: '12px'
        };
    },
    multiValue: (provided, state) => ({
        ...provided,
        backgroundColor: 'var(--lightbluegray)',
        color: 'white',
        padding: '5px'
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        color: 'white'
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        cursor: 'pointer'
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: '#0F192B'
    })
};

export default function Iletisim() {
    const [queryData, setQueryData] = useState({
        company_name: '',
        city_name: '',
        name_surname: '',
        phone_number: '',
        email: '',
        message: ''
    });

    const [validationData, setValidationData] = useState({
        company_name: true,
        city_name: true,
        name_surname: true,
        phone_number: true,
        email: true
    });
    const [process, setProcess] = useState(false);
    const [refresh, setRefresh] = useState(0);


    const handleChange = e => {
        const { name, value } = e.target;
        setQueryData(data => ({
            ...data,
            [name]: value
        }));

        setValidationData(data => ({
            ...data,
            [name]: true
        }));
    };

    const handleChangeCity = e => {
        const { value } = e;
        setQueryData(data => ({
            ...data,
            ['city_name']: value
        }));
        setValidationData(data => ({
            ...data,
            ['city_name']: true
        }));
    }

    function validateTextField(str) {
        if (str.length > 2) {
            return true
        }
        else {
            return false
        }
    }
    function validateEmail(str) {
        return /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(str)
    }

    function validatePhone(str) {
        return /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/.test(str)
    }

    function validate() {

        let temp = validationData;

        Object.entries(queryData).map(([key, value], i) => {
            if (key === 'email') {
                temp[key] = validateEmail(value)
            }
            else if (key === 'phone_number') {
                temp[key] = validatePhone(value)
            }
            else if (key === 'name_surname' || key === 'company_name' || key === 'city_name') {
                temp[key] = validateTextField(value)
            }
        });

        setValidationData(temp);
        setRefresh(refresh + 1);

        if (!Object.values(temp).includes(false)) {
            send();
        }

    }

    function send() {
        setProcess(true);
        fetch('/api/contact?data=' + JSON.stringify(queryData)).then(res => res.json()).then(data => {
            setProcess(false);
            if (data.status === 'success') {
                toast.success('Mesajınız başarıyla gönderildi');
                setTimeout(() => {
                    location.reload();
                }, 1000)

            }
        });
    }

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
                            <div className={`${styles.contact_title} ${styles.contact_title_p0}`}>
                                <h3>Sizi Arayalım</h3>
                            </div>
                            <p className={styles.form_desc}>
                                Devir işlemleri en fazla 2 kez yapılabilecektir. (Kart veya rakam devri farketmeksizin) 3. veya daha sonraki devir talepleriniz ayrıca ücretlendirilecektir.
                            </p>

                            <div className={styles.form_body}>
                                <div className={!validationData.company_name ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Firma" name='company_name' onChange={handleChange} />
                                    <p className={styles.field__label}>Firma <small>(Firma adı boş bırakılamaz)</small></p>
                                    <small>Lüften çalıştığınız ya da sahibi olduğunuz firma ismini yazınız</small>
                                </div>
                                <div className={!validationData.city_name ? `${styles.field_select} ${styles.field_select_error}` : `${styles.field_select}`}>
                                    <small>Lütfen Şehir Seçiniz</small>
                                    <Select options={options} styles={customStyles} placeholder={'İL SEÇİNİZ'} onChange={handleChangeCity} />
                                </div>
                                <div className={!validationData.name_surname ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Adınız Soyadınız" name='name_surname' onChange={handleChange} />
                                    <p className={styles.field__label}>Adınız Soyadınız <small>(Lütfen isim giriniz)</small></p>
                                </div>
                                <div className={!validationData.phone_number ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Telefon Numaranız" name='phone_number' onChange={handleChange} />
                                    <p className={styles.field__label}>Telefon Numaranız <small>(Lütfen Telefon Numarası Giriniz)</small></p>
                                </div>
                                <div className={!validationData.email ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="E-Posta Adresiniz" name='email' onChange={handleChange} />
                                    <p className={styles.field__label}>E-Posta Adresiniz <small>(Lütfen geçerli bir e-posta adresi giriniz)</small></p>
                                </div>
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="Varsa Mesajınız" name='message' onChange={handleChange} />
                                    <p className={styles.field__label}>Varsa Mesajınız</p>
                                </div>

                                <button className={styles.send} onClick={() => validate()}>Formu Gönder</button>
                            </div>

                        </div>
                        <div className={styles.form_selection}>
                            <div className={`${styles.contact_title} ${styles.contact_title_p0}`}>
                                <h3>Formlar</h3>
                            </div>
                            <p>Lütfen iletişim kurmak istediğiniz konu ile ilgili formu seçiniz.</p>

                            <div className={styles.form_select_grid}>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28.652" height="29.056" viewBox="0 0 28.652 29.056"><defs></defs><g transform="translate(-1031.139 -398.32)"><path class="a" d="M1044.2,422.43a11.047,11.047,0,0,1-8.522-18.092l2.978,2.978,1.414-1.414-2.981-2.981a11.047,11.047,0,0,1,17.722,5.339l1.919-.56a13.052,13.052,0,1,0-7.962,15.907l-.7-1.875A11.091,11.091,0,0,1,1044.2,422.43Z" /><path class="a" d="M1040.475,411.376a3.723,3.723,0,1,0,3.722-3.723A3.727,3.727,0,0,0,1040.475,411.376Zm5.445,0a1.723,1.723,0,1,1-1.723-1.723A1.725,1.725,0,0,1,1045.92,411.376Z" /><path class="a" d="M1059.791,416.685a4.969,4.969,0,1,0-7.614,4.19v6.5l2.714-1.277,2.713,1.277V420.8A4.966,4.966,0,0,0,1059.791,416.685Zm-4.969,2.968a2.969,2.969,0,1,1,2.969-2.968A2.971,2.971,0,0,1,1054.822,419.653Z" /></g></svg>
                                        Yıl Sonu Devir İşlemi
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.244" height="25.352" viewBox="0 0 23.244 25.352"><defs></defs><g transform="translate(-866.463 -368.928)"><path class="a" d="M887.937,385.946H876.729v-2h10.978V372.555H875.331v-2h12.606a1.772,1.772,0,0,1,1.77,1.77v11.851A1.772,1.772,0,0,1,887.937,385.946Z" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(867.345 368.928)" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(867.345 388.99)" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(875.355 388.99)" /><circle class="a" cx="2.645" cy="2.645" r="2.645" transform="translate(883.417 388.99)" /><path class="a" d="M873.82,385.946h-7.357v-7.535a2.449,2.449,0,0,1,2.447-2.446h13.109v2h-8.2Zm-5.357-2h3.357v-5.981h-2.91a.447.447,0,0,0-.447.446Z" /></g></svg>
                                        Ürün Tanıtım Demosu
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28.55" height="25.685" viewBox="0 0 28.55 25.685"><defs></defs><g transform="translate(-1027.674 -525.763)"><path class="a" d="M1041.9,531.646l-13.659,6.434,4.724,2.17v6.991l9.165,4.207,8.995-4.019v-6.991l4.669-2.091Zm-.01,2.216,9.16,4.417-8.906,3.99-9.162-4.212Zm7.235,12.27-6.985,3.119-7.175-3.293v-4.789l7.169,3.295,6.991-3.131Z" /><path class="a" d="M1041.835,527.978l13.521,6.513.867-1.8-14.379-6.926-14.171,6.672.852,1.81Z" /></g></svg>
                                        Ürün Satınalma Talebi
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26.696" height="26.72" viewBox="0 0 26.696 26.72"><defs></defs><g transform="translate(-864.67 -524.953)"><rect class="a" width="5.386" height="5.386" transform="translate(864.67 532.887)" /><rect class="a" width="5.386" height="5.386" transform="translate(864.67 539.587)" /><rect class="a" width="5.386" height="5.386" transform="translate(864.67 546.287)" /><rect class="a" width="5.386" height="5.386" transform="translate(871.346 546.287)" /><rect class="a" width="5.386" height="5.386" transform="translate(871.346 539.587)" /><rect class="a" width="5.386" height="5.386" transform="translate(885.979 524.953)" /><rect class="a" width="5.386" height="5.386" transform="matrix(0.797, -0.604, 0.604, 0.797, 880.134, 538.251)" /><rect class="a" width="5.386" height="5.386" transform="matrix(0.807, 0.59, -0.59, 0.807, 878.556, 526.229)" /><rect class="a" width="5.386" height="5.386" transform="translate(878.021 546.287)" /></g></svg>
                                        Versiyon Güncelleme İşlemi
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.989" height="26.107" viewBox="0 0 25.989 26.107"><defs></defs><g transform="translate(-865.045 -684.212)"><path class="a" d="M885.153,698.776l-.844,1.379a12.115,12.115,0,0,0-1.781,6.324v1.84h-7.455v-3.925h-4.638a.727.727,0,0,1-.726-.726v-5.305l-2.243-.916,1.307-2.139a4.506,4.506,0,0,0,.685-1.995,7.784,7.784,0,0,1,6.043-6.921l-.43-1.954a9.8,9.8,0,0,0-7.606,8.712,2.534,2.534,0,0,1-.4,1.116l-1.862,3.048a1.1,1.1,0,0,0-.1.915l.2.495,2.406.983v3.961a2.729,2.729,0,0,0,2.726,2.726h2.638v3.925h11.455v-3.84a10.1,10.1,0,0,1,1.487-5.279l.844-1.379a6.661,6.661,0,0,0,.872-2.27l-1.965-.367A4.675,4.675,0,0,1,885.153,698.776Z" /><path class="a" d="M888.936,684.212h-8.411a2.1,2.1,0,0,0-2.1,2.1v7h-.009v4.995l4.076-4.076h6.442a2.1,2.1,0,0,0,2.1-2.1v-5.824A2.1,2.1,0,0,0,888.936,684.212Zm.1,7.923a.1.1,0,0,1-.1.1h-8.509v-5.922a.1.1,0,0,1,.1-.1h8.411a.1.1,0,0,1,.1.1Z" /></g></svg>
                                        Danışmanlık/Eğitim Talebi
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.989" height="26.107" viewBox="0 0 25.989 26.107"><defs></defs><g transform="translate(-865.045 -684.212)"><path class="a" d="M885.153,698.776l-.844,1.379a12.115,12.115,0,0,0-1.781,6.324v1.84h-7.455v-3.925h-4.638a.727.727,0,0,1-.726-.726v-5.305l-2.243-.916,1.307-2.139a4.506,4.506,0,0,0,.685-1.995,7.784,7.784,0,0,1,6.043-6.921l-.43-1.954a9.8,9.8,0,0,0-7.606,8.712,2.534,2.534,0,0,1-.4,1.116l-1.862,3.048a1.1,1.1,0,0,0-.1.915l.2.495,2.406.983v3.961a2.729,2.729,0,0,0,2.726,2.726h2.638v3.925h11.455v-3.84a10.1,10.1,0,0,1,1.487-5.279l.844-1.379a6.661,6.661,0,0,0,.872-2.27l-1.965-.367A4.675,4.675,0,0,1,885.153,698.776Z" /><path class="a" d="M888.936,684.212h-8.411a2.1,2.1,0,0,0-2.1,2.1v7h-.009v4.995l4.076-4.076h6.442a2.1,2.1,0,0,0,2.1-2.1v-5.824A2.1,2.1,0,0,0,888.936,684.212Zm.1,7.923a.1.1,0,0,1-.1.1h-8.509v-5.922a.1.1,0,0,1,.1-.1h8.411a.1.1,0,0,1,.1.1Z" /></g></svg>
                                        Hizmet Bakım Anlaşması
                                    </a>
                                </Link>
                                <Link href="">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.989" height="26.107" viewBox="0 0 25.989 26.107"><defs></defs><g transform="translate(-865.045 -684.212)"><path class="a" d="M885.153,698.776l-.844,1.379a12.115,12.115,0,0,0-1.781,6.324v1.84h-7.455v-3.925h-4.638a.727.727,0,0,1-.726-.726v-5.305l-2.243-.916,1.307-2.139a4.506,4.506,0,0,0,.685-1.995,7.784,7.784,0,0,1,6.043-6.921l-.43-1.954a9.8,9.8,0,0,0-7.606,8.712,2.534,2.534,0,0,1-.4,1.116l-1.862,3.048a1.1,1.1,0,0,0-.1.915l.2.495,2.406.983v3.961a2.729,2.729,0,0,0,2.726,2.726h2.638v3.925h11.455v-3.84a10.1,10.1,0,0,1,1.487-5.279l.844-1.379a6.661,6.661,0,0,0,.872-2.27l-1.965-.367A4.675,4.675,0,0,1,885.153,698.776Z" /><path class="a" d="M888.936,684.212h-8.411a2.1,2.1,0,0,0-2.1,2.1v7h-.009v4.995l4.076-4.076h6.442a2.1,2.1,0,0,0,2.1-2.1v-5.824A2.1,2.1,0,0,0,888.936,684.212Zm.1,7.923a.1.1,0,0,1-.1.1h-8.509v-5.922a.1.1,0,0,1,.1-.1h8.411a.1.1,0,0,1,.1.1Z" /></g></svg>
                                        Pazaryeri Entegrasyon İşlemi
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
