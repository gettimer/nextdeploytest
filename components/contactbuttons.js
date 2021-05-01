import React from 'react'
const { useState, useEffect, useRef } = React;
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components/contactbuttons.module.scss'

export default function ContactButtons() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (<div className={styles.contact_line}>
        <Link href=''>
            <a className={styles.call_btn}>
                <img src='/img/call.svg' />
                {seconds % 2 === 0 ? <>0224 < span > 271 75 80</span></> : <>0224 <span> 442 80 42</span></>}
            </a>
        </Link>
        <Link href='http://destek.terapiyazilim.com'>
            <a className={styles.support_btn}>
                Kurumsal Destek
            </a>
        </Link>
    </div>)
}
