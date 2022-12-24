import { useState } from 'react';
import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/site/sightseeing.module.scss';


const sightseeing = () => {
  return (
    <Layout>
      <Head>
        <title>観光 | 酒海市</title>
      </Head>

      <main>
        <Image src='/sightseeing/prefecture-map.png' width={1600} height={1200} />
      </main>
    </Layout>
  )
}

export default sightseeing;