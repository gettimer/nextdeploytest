import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'
function Layout({ children }) {
    return <div>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}

export default Layout;