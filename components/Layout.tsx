import Head from "next/head";
import Header from './Header';
import Footer from './footer';


export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
