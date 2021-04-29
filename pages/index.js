import Head from 'next/head'
import Layout from '../components/layout'
import Slider from '../components/slider'
import Features from '../components/features'
import About from '../components/about'
import Testimonials from '../components/testimonials'
import Products from '../components/products'
import Stats from '../components/stats'
import Refs from '../components/refs'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Terapi Yazılım</title>
        <link rel="icon" href="/favicon.ico" />   
      </Head>
      <Slider />
      <Features />
      <About />
      <Testimonials />
      <Products />
      <Stats />
      <Refs />
    </Layout>
  )
}
