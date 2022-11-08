import Head from "next/head";
import Header from './Header';
import Footer from './footer';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"></link>
      </Head>

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}


export default Layout;