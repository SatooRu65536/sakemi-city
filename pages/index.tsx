import { useState } from 'react';
import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeIcon from '@mui/icons-material/Home';
import Pregnantwoman from '@mui/icons-material/PregnantWoman';
import School from '@mui/icons-material/School';
import Delete from '@mui/icons-material/Delete';
import Payments from '@mui/icons-material/Payments';
import Wheelchairpickup from '@mui/icons-material/WheelchairPickup';
import Flood from '@mui/icons-material/Flood';
import Work from '@mui/icons-material/Work';
import Group from '@mui/icons-material/Group';
import Localhospital from '@mui/icons-material/LocalHospital';
import Directionsboat from '@mui/icons-material/DirectionsBoat';
import Person from '@mui/icons-material/Person';
import { topBanners, banners, news } from '../components/site-info';
import _ from 'lodash';


SwiperCore.use([Pagination, Navigation, Autoplay]);


const Home = () => {
  const [selectTab, setSelectTab] = useState(0);

  const Topbanner = () => {
    return (
      <Swiper
        className={styles.swiper}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay
      >
        {topBanners.map((banner, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Link href={banner.link}>
                <Image
                  className='not-filer'
                  src={banner.path}
                  layout="responsive"
                  width={600}
                  height={200}
                  alt="banner"
                  priority
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }

  const Lifebox = () => {
    return (
      <div className={styles.life_serch}>
        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <HomeIcon className={styles.life_icon} />
            <span>引越し</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Pregnantwoman className={styles.life_icon} />
            <span>妊娠・出産</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <School className={styles.life_icon} />
            <span>子育て・教育</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Delete className={styles.life_icon} />
            <span>資源・ごみ</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Payments className={styles.life_icon} />
            <span>税金・保険料</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Wheelchairpickup className={styles.life_icon} />
            <span>介護・福祉</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Flood className={styles.life_icon} />
            <span>防災・防犯</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Work className={styles.life_icon} />
            <span>就労</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Group className={styles.life_icon} />
            <span>結婚・離婚</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Person className={styles.life_icon} />
            <span>葬儀</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Localhospital className={styles.life_icon} />
            <span>医療・保健</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Directionsboat className={styles.life_icon} />
            <span>渡船・交通</span>
          </div>
        </Link>
      </div>
    )
  }

  const News = () => {
    const Newscontents = () => {
      const sorted_news = _.orderBy(news, ['date.year', 'date.month', 'date.day'], ['desc', 'desc', 'desc']);

      return (
        <ul className={styles.content_list}>
          {sorted_news.slice(0, 10).map((n, i) => {
            return (
              <li key={i}>
                <span className={styles.date}>{n.date.year}年{n.date.month}月{n.date.day}日</span>
                <Link href={n.link}>{n.title}</Link>
              </li>
            )
          })}
        </ul>
      )
    }

    return (
      <div className={styles.news_container}>
        <ul className={styles.tabs}>
          <li
            className={selectTab == 0 ? styles.active : ''}
            onClick={() => setSelectTab(0)}
          >お知らせ</li>
          <li
            className={selectTab == 1 ? styles.active : ''}
            onClick={() => setSelectTab(1)}
          >災害情報</li>
        </ul>

        <div className={styles.contents}>
          <div className={`${styles.news_section} ${selectTab == 0 ? styles.active : ''}`}>
            <Newscontents />

            <div className={styles.more_info}>
              <Link href='/unproduced' className={styles.link}>
                もっと見る
              </Link>
            </div>
          </div>

          <div className={`${styles.news_section} ${selectTab == 1 ? styles.active : ''}`}>
            <ul className={styles.content_list}>
              <li>
                <Link href="/unproduced">現在酒海市内に災害緊急情報はありません</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const Banner = () => {
    return (
      <ul className={styles.banner_conteiner}>
        {banners.map((banner, index) => {
          return (
            <li className={styles.banner}>
              <Link href={banner.link}>
                <Image
                  src={banner.path}
                  alt='banner'
                  width={300}
                  height={90}
                />
              </Link>
            </li>
          )
        })}
      </ ul>
    )
  }

  return (
    <Layout>
      <Head>
        <title>酒海市公式ホームページ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <Topbanner />

        <Lifebox />

        <News />

        <Banner />
      </main>
    </Layout>
  )
}


export default Home;