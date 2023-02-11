import '../styles/globals.css';
import '../sass/styles.scss'
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/footer';
import { AnimatePresence } from 'framer-motion';

import { Analytics } from '@vercel/analytics/react';

// import { Poppins } from '@next/font/google'

// const roboto = Poppins({
//   weight: ['100','200','300','400','500','600','700','800','900'],
//   subsets : ['latin']
// })



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimatePresence mode="wait" initial={false} />
      {/* <Navbar /> */}
      {/* <main className={roboto.className}> */}
      <Component {...pageProps} />
      {/* </main> */}
      <Footer />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
