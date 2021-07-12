import React from 'react'
const { useState, useEffect, useRef } = React;
import styles from '../styles/components/socialmedia.module.scss'
import Link from 'next/link'

export default function Social() {
    return (<div className={styles.social_media_links}>
        <div className='container'>
            <div className={styles.links}>
                {/* <Link href=''>
                    <a><img src='/img/linkedin.svg' /><span>Linkedin</span></a>
                </Link>
                <Link href=''>
                    <a><img src='/img/twitter.svg' /><span>Twitter</span></a>
                </Link>
                <Link href=''>
                    <a><img src='/img/instagram.svg' /><span>Instagram</span></a>
                </Link>
                <Link href=''>
                    <a><img src='/img/youtube.svg' /><span>Youtube</span></a>
                </Link> */}
            </div>
        </div>
    </div>)
}
