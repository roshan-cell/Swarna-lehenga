import '@/styles/globals.css'
import Footer from '../../components/Footer'
import NavBar from '../../components/Navbar'

export default function App({ Component, pageProps }) {
  return <> <NavBar/> <Component {...pageProps} />  <Footer/> </>
}
