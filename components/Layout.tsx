import Head from "next/head";
import Header from './Header';
import Footer from './footer';
import styles from '../styles/Layout.module.scss'


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"></link>
      </Head>

      <Header />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}


export default Layout;