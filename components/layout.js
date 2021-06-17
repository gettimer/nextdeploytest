import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'
import Alpemix from '../components/_alpemix'
import TagManagerHead from './_tagmanager_head'
import TagManagerBody from './_tagmanager_body'

function Layout({ children }) {
    return <div>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <TagManagerHead />
            {/* <Alpemix /> */}
        </Head>
        <Nav />
        <main>
            <TagManagerBody />
            {children}
        </main>
        <Footer />
    </div>
}

export default Layout;