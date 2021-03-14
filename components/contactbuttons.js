import React from 'react'
const { useState, useEffect, useRef } = React;
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/contactbuttons.module.scss'

export default function ContactButtons() {

    return (<div className={styles.contact_line}>
        <Link href=''>
            <a className={styles.call_btn}>
                <img src='/img/call.svg' />0224 <span> 271 75 80</span>
            </a>
        </Link>
        <Link href=''>
            <a className={styles.support_btn}>
                Kurumsal Destek
             </a>
        </Link>
    </div>)
}
