import '../styles/app.scss'
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
    return <><Component {...pageProps} />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            draggable
            pauseOnVisibilityChange
            closeOnClick
            pauseOnHover
            transition={Slide}
        /></>
}