import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';
import UserContext from '../context/UserContext';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserContext.Provider value={{ user: 'lowsound42' }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UserContext.Provider>
    );
}

export default MyApp;
