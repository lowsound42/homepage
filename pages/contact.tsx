import Head from 'next/head';
import EmailForm from '../components/EmailForm';
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4
                        }
                    }
                }}
            >
                <EmailForm />
            </motion.div>
        </>
    );
};
export default Contact;
