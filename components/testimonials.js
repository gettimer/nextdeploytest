import { useKeenSlider } from "keen-slider/react"
import React from 'react'
const { useState, useEffect, useRef } = React;
import 'keen-slider/keen-slider.min.css'
import styles from '../styles/components/testimonials.module.scss'
import Link from 'next/link'
import { testimonials } from '../lib/contents'

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (<div className={styles.testimonials}>
        <div className='container'>
            <div className={styles.testimonials_wrapper}>
                <div className={styles.title_badge}>BAŞARI HİKAYELERİ</div>
                <div className={styles.testimonials_content}>
                    <div ref={sliderRef} className='keen-slider'>
                        {testimonials.map(ele => (
                            <div className={`keen-slider__slide ${styles.testimonials_view}`}>
                                <h4>{ele.Name}</h4><h5>{ele.Title}</h5>
                                <p>{ele.Text}</p>
                                <Link href=''><a>Devamını oku…</a></Link>
                            </div>
                        ))}
                    </div>
                    {
                        slider && (
                            <div className={styles.dots}>
                                {currentSlide + 1} - {slider.details().size}
                                <div className={styles.dots_container}>
                                    {[...Array(slider.details().size).keys()].map((idx) => {
                                        return (
                                            <span
                                                key={idx}
                                                onClick={() => {
                                                    slider.moveToSlideRelative(idx)
                                                }}
                                                className={currentSlide === idx ? `${styles.dot} ${styles.active}` : `${styles.dot}`}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles.testimonials_image}>
                    <img src='/img/home/testimonials.jpg' />
                </div>
            </div>
        </div>
    </div>)
}
