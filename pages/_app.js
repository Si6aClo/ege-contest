import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout/Layout';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return <SSRProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SSRProvider>

}

export default MyApp
