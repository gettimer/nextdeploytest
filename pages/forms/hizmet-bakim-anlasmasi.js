import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/contact.module.scss'
import Select from 'react-select'
import { toast } from 'react-toastify';
import ContactForms from '../../components/contact_forms';
import { cities } from '../../lib/contents';

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

export default function HizmetBakimAnlasmasiFormu() {
    const [queryData, setQueryData] = useState({
        name_surname: '',
        email: '',
        company_name: '',
        phone_number: '',
        city_name: '',
        product_name: '',
        message: ''
    });

    const [validationData, setValidationData] = useState({
        name_surname: true,
        email: true,
        company_name: true,
        phone_number: true,
        city_name: true,
        product_name: true,
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
            else if (key === 'name_surname' || key === 'company_name' || key === 'city_name' || key === 'product_name') {
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
        fetch('/api/contact?method=ServiceMaintenance&data=' + JSON.stringify(queryData)).then(res => res.json()).then(data => {
            setProcess(false);
            if (data.Status === 'Success') {
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
                <title>Terapi Yazılım - Hizmet Bakım Anlaşması</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Hizmet Bakım Anlaşması</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>hizmet bakım anlaşması</a></Link>
                    </div>
                </div>
                <img src='/img/contact.jpg' />
            </div>
            <div className={styles.subpage_horizontal_nav}>
                <div className='container'>
                    <div className={styles.subpage_nav_container}>
                        <Link href='/iletisim'><a>İletişim</a></Link>
                        <Link href=''><a className={styles.active}>Hizmet Bakım Anlaşması</a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <div className='container'>
                    <div className={styles.form_layout}>
                        <div className={styles.form_content}>
                            <div className={`${styles.contact_title} ${styles.contact_title_p0}`}>
                                <h3>Hizmet Bakım Anlaşması</h3>
                            </div>
                            <p className={styles.form_desc}>
                                Devir işlemleri en fazla 2 kez yapılabilecektir. (Kart veya rakam devri farketmeksizin) 3. veya daha sonraki devir talepleriniz ayrıca ücretlendirilecektir.
                            </p>

                            <div className={styles.form_body}>
                                <div className={!validationData.name_surname ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Adınız Soyadınız" name='name_surname' onChange={handleChange} />
                                    <p className={styles.field__label}>Adınız Soyadınız <small>(Lütfen isim giriniz)</small></p>
                                </div>
                                <div className={!validationData.email ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="E-Posta Adresiniz" name='email' onChange={handleChange} />
                                    <p className={styles.field__label}>E-Posta Adresiniz <small>(Lütfen geçerli bir e-posta adresi giriniz)</small></p>
                                </div>                                                               
                                <div className={!validationData.company_name ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Firma" name='company_name' onChange={handleChange} />
                                    <p className={styles.field__label}>Firma <small>(Firma adı boş bırakılamaz)</small></p>                                    
                                </div>
                                <div className={!validationData.phone_number ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Telefon Numaranız" name='phone_number' onChange={handleChange} />
                                    <p className={styles.field__label}>Telefon Numaranız <small>(Lütfen Telefon Numarası Giriniz)</small></p>
                                </div>                                
                                <div className={!validationData.city_name ? `${styles.field_select} ${styles.field_select_error}` : `${styles.field_select}`}>
                                    <small>Lütfen Şehir Seçiniz</small>
                                    <Select options={cities} styles={customStyles} placeholder={'ŞEHİR'} onChange={handleChangeCity} />
                                </div>
                                <div className={!validationData.name_surname ? `${styles.field} ${styles.field_error}` : `${styles.field}`}>
                                    <input className={styles.field__input} type="text" placeholder="Ürün Adı" name='product_name' onChange={handleChange} />
                                    <p className={styles.field__label}>Ürün Adı <small>(Lütfen ürün adını giriniz)</small></p>
                                </div>                                
                                <div className={styles.field}>
                                    <input className={styles.field__input} type="text" placeholder="Mesajınız" name='message' onChange={handleChange} />
                                    <p className={styles.field__label}>Mesajınız</p>
                                </div>

                                <button className={styles.send} onClick={() => validate()}>Formu Gönder</button>
                            </div>

                        </div>
                        <div className={styles.form_selection}>
                            <div className={`${styles.contact_title} ${styles.contact_title_p0}`}>
                                <h3>Formlar</h3>
                            </div>
                            <p>Lütfen iletişim kurmak istediğiniz konu ile ilgili formu seçiniz.</p>

                            <ContactForms />
                            
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
