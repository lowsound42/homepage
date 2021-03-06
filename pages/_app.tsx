import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import UserContext from "../context/UserContext";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <UserContext.Provider value={{ user: "lowsound42" }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="web-development, programming" />
        <meta name="description" content="Omar Khan Personal Web Portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <motion.div // simple animation that will work for all routers as well.
          key={router.route}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
