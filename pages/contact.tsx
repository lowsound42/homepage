import Head from 'next/head';
import EmailForm from '../components/EmailForm';
const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>

            <EmailForm />
        </>
    );
};
export default Contact;
