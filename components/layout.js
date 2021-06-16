import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'
import Alpemix from '../components/_alpemix'

function Layout({ children }) {
    return <div>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {/* <Alpemix /> */}
        </Head>
        <Nav />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}

export default Layout;