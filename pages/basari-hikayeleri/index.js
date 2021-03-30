import React from 'react'
const { useState, useEffect, useRef, useCallback } = React;
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/pages/testimonials.module.scss'
import { products, testimonials } from '../../lib/contents'
import slug from 'slug'


export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 4,
        mode: "free",
        spacing: 15,
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    })
    return (
        <Layout>
            <Head>
                <title>Terapi Yazılım - Başarı Hikayeleri</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.subpage_header}>
                <div className={styles.header_content}>
                    <h1>Başarı Hikayeleri</h1>
                    <div className={styles.breadcrumb}>
                        <Link href='/'><a>anasayfa</a></Link>
                        <Link href=''><a>başarı hikayeleri</a></Link>
                    </div>
                </div>
                <img src='/img/basari-hikayeleri.jpg' />
            </div>

            <div className={styles.story}>
                <div className={styles.story_picture_block}>
                    <div className={styles.picture_relative}>
                        <img src={"/img/testimonials/" + testimonials[0].image} />
                    </div>
                </div>
                <div className={styles.story_content_block}>

                    <h2>{testimonials[0].StoryTitle}</h2>
                    <p>
                        {testimonials[0].Text}
                    </p>
                    <p>
                        <strong>{testimonials[0].Name}</strong>
                        {testimonials[0].Title}
                    </p>


                    <Link href='/basari-hikayeleri/[slug]' as={`/basari-hikayeleri/${slug(testimonials[0].Name)}-${testimonials[0].id}`}><a className={styles.all}>Devamını Oku</a></Link>
                </div>
            </div>

            <div className={styles.testimonials_list}>
                <div className='container'>
                    <h6>Tüm Hikayeler</h6>
                    <div ref={sliderRef} className='keen-slider'>
                        {testimonials.map(ele => (
                            <Link href='/basari-hikayeleri/[slug]' as={`/basari-hikayeleri/${slug(ele.Name)}-${ele.id}`}>
                                <a className={`keen-slider__slide ${styles.testimonials_view}`}>
                                    <div className={styles.img}><img src={"/img/testimonials/" + ele.image} /></div>
                                    <div className={styles.content}>
                                        <span>{ele.Company}</span>
                                        <p className={styles.content_text}>{ele.Text}</p>
                                        <p className={styles.name}><strong>{ele.Name}</strong> {ele.Title}</p>
                                    </div>

                                </a>
                            </Link>
                        ))}
                    </div>
                    {
                        slider && (
                            <div className={styles.dots}>
                                <div className={styles.dots_container}>
                                    {[...Array(Math.ceil(slider.details().size / 4)).keys()].map((idx) => {
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
            </div>


        </Layout>
    )
}
