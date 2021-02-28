import { GlobalLayout } from "../components/layout";
import '../bootstrap/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return ( <GlobalLayout >
        <Component {...pageProps }/> </GlobalLayout>
    );
}

export default MyApp