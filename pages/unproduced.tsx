import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout';
import styles from '../styles/unproduced.module.scss';


const unproduced = () => {
    return (
        <Layout>
            <Head>
                <title>未制作 | 酒海市</title>
            </Head>

            <main className={styles.main}>
                <h1>未制作</h1>
                <h1>unproduced</h1>
            </main>

            <h3 className={styles.return}>
                <Link href={'/'}>戻る</Link>
            </h3>
        </Layout>
    )
}

export default unproduced;