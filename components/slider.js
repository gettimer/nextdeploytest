import { useKeenSlider } from "keen-slider/react"
import React from 'react'
const { useState, useEffect, useRef } = React;
import Social from './socialmedia'
import 'keen-slider/keen-slider.min.css'
import styles from '../styles/components/slider.module.scss'
import Link from 'next/link'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        /*loop: true,
        duration: 5000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },*/
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    /*React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 2000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])*/
    return (<div className={styles.hero}>

        <div ref={sliderRef} className="keen-slider">
            <div className={`keen-slider__slide ${styles.number_slide}`}>
                <div className={styles.content_block}>
                    <div className='container'>
                        <div className={styles.generic}>
                            Büyük Düşünenler İçin <span>Güçlü Çözüm Ortağı</span>
                        </div>
                        <Link href='/urun/logo-j-platform-4-1'>
                            <a className={styles.ghost_button}>Ürünleri İncele</a>
                        </Link>
                    </div>
                </div>
                <video className={styles.video} loop="true" autoplay="autoplay" muted>
                    <source src="/img/slider/vid.mp4" type="video/mp4" />
                </video>
            </div>            
            {/* <div className={`keen-slider__slide ${styles.number_slide}`}>
                <div className={styles.content_block}>
                    <div className='container'>
                        <div className={styles.generic}>
                            Büyük Düşünenler İçin <span>Güçlü Çözüm Ortağı</span>
                        </div>
                        <Link href='/urun/logo-j-platform-4-1'>
                            <a className={styles.ghost_button}>Ürünleri İncele</a>
                        </Link>
                    </div>
                </div>
                <video className={styles.video} loop="true" autoplay="autoplay" muted>
                    <source src="/img/slider/vid.mp4" type="video/mp4" />
                </video>
            </div>             */}
            <div className={`keen-slider__slide ${styles.number_slide}`}>
                <div className={styles.content_block}>
                    <div className='container'>
                        <div className={styles.generic}>
                        KOBİ ve ERP Çözümleri ile bütünleşik sunulan <span>e-Çözümlerle tüm süreçlerinize değer katın.</span>
                        </div>
                        <Link href='/urun/e-fatura-10-1'>
                            <a className={styles.ghost_button}>Ürünleri İncele</a>
                        </Link>
                    </div>
                </div>
                <img className={styles.slider_img} src='/img/slider/2.jpg' />
            </div>            
            <div className={`keen-slider__slide ${styles.number_slide}`}>
                <div className={styles.content_block}>
                    <div className='container'>
                        <div className={styles.generic}>
                            Değişimi Başlatır <span>Geleceğe Taşır</span>
                        </div>
                        <Link href='/urun/logo-j-platform-4-1'>
                            <a className={styles.ghost_button}>Ürünleri İncele</a>
                        </Link>
                    </div>
                </div>
                <img className={styles.slider_img} src='/img/slider/1.jpg' />
            </div>            
        </div>
        {
            slider && (
                <div className={styles.dots}>
                    {[...Array(slider.details().size).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx)
                                }}
                                className={currentSlide === idx ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
                            />
                        )
                    })}
                </div>
            )
        }
        <Social />
    </div>)
}
