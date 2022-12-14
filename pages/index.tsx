import { useState } from 'react';
import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.scss';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Person from '@mui/icons-material/Person';
import { topBanners, banners, news } from '../components/site-info';
import _ from 'lodash';

import HomeIcon from '@mui/icons-material/Home';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentsIcon from '@mui/icons-material/Payments';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import FloodIcon from '@mui/icons-material/Flood';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';


SwiperCore.use([Pagination, Navigation, Autoplay]);


const TopPage = () => {
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
            <span>?????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <PregnantWomanIcon className={styles.life_icon} />
            <span>???????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <SchoolIcon className={styles.life_icon} />
            <span>??????????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <DeleteIcon className={styles.life_icon} />
            <span>???????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <PaymentsIcon className={styles.life_icon} />
            <span>??????????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <WheelchairPickupIcon className={styles.life_icon} />
            <span>???????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <FloodIcon className={styles.life_icon} />
            <span>???????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <WorkIcon className={styles.life_icon} />
            <span>??????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <GroupIcon className={styles.life_icon} />
            <span>???????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <Person className={styles.life_icon} />
            <span>??????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <LocalHospitalIcon className={styles.life_icon} />
            <span>???????????????</span>
          </div>
        </Link>

        <Link href='/unproduced'>
          <div className={styles.life_box}>
            <DirectionsBoatIcon className={styles.life_icon} />
            <span>???????????????</span>
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
                <span className={styles.date}>{n.date.year}???{n.date.month}???{n.date.day}???</span>
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
          >????????????</li>
          <li
            className={selectTab == 1 ? styles.active : ''}
            onClick={() => setSelectTab(1)}
          >????????????</li>
        </ul>

        <div className={styles.contents}>
          <div className={`${styles.news_section} ${selectTab == 0 ? styles.active : ''}`}>
            <Newscontents />

            <div className={styles.more_info}>
              <Link href='/unproduced' className={styles.link}>
                ???????????????
              </Link>
            </div>
          </div>

          <div className={`${styles.news_section} ${selectTab == 1 ? styles.active : ''}`}>
            <ul className={styles.content_list}>
              <li>
                <Link href="/unproduced">?????????????????????????????????????????????????????????</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  const Linklist = () => {
    return (
      <div className={styles.link_area}>
        <div className={styles.politics_container}>
          <Link className={styles.box} href='/unproduced'>
            ???????????????
            <AccountBoxIcon className={styles.icon} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ?????????
            <GroupsIcon className={styles.icon} />
          </Link>
        </div>

        <div className={styles.link_container}>
          <Link className={styles.box} href='/unproduced'>
            ?????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>
        </div>

        <div className={styles.link_container}>
          <Link className={styles.box} href='/unproduced'>
            ?????????????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ??????????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ??????????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>
        </div>

        <div className={styles.link_container}>
          <Link className={styles.box} href='/unproduced'>
            ??????????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ??????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>
        </div>

        <div className={styles.link_container}>
          <Link className={styles.box} href='/unproduced'>
            ????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>

          <Link className={styles.box} href='/unproduced'>
            ????????????
            <KeyboardArrowRightIcon className={styles.arrow} />
          </Link>
        </div>
      </div>
    )
  }

  const Banner = () => {
    return (
      <div className={styles.banner_wrap}>
        <h2>???????????????</h2>
        <ul className={styles.banner_conteiner}>
          {banners.map((banner, index) => {
            return (
              <li className={styles.banner} key={index}>
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
      </div>
    )
  }

  return (
    <Layout>
      <Head>
        <title>?????????????????????????????????</title>
      </Head>

      <main>
        <Topbanner />

        <Lifebox />

        <News />

        <Linklist />

        <Banner />
      </main>
    </Layout>
  )
}


export default TopPage;
