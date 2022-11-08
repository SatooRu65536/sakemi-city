import Head from "next/head";
import Image from 'next/image';
import styles from '../styles/Layout.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { style } from "@mui/system";


export default ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_container}>
          <Image src="/logo.svg" alt="Logo" width={250} height={80} />

          <div className={styles.site_setting}>
            <div className={styles.color_wrap}>
              <span>表示色</span>
              <span className={styles.color_button}>白</span>
              <span className={styles.color_button}>黒</span>
              <span className={styles.color_button}>灰</span>
            </div>

            <div className={styles.fontsize_wrap}>
              <span>文字サイズ</span>
              <span className={styles.size_button}>小</span>
              <span className={styles.size_button}>中</span>
              <span className={styles.size_button}>大</span>
            </div>

            <div className={styles.search_wrap}>
              <form id="cse-search-box" action="http://google.com/cse" className={styles.serch_forn}>
                <input type="hidden" name="cx" value="YOUR SEARCH ENGINE ID goes here" />
                <input type="hidden" name="ie" value="UTF-8" />
                <label htmlFor="serch_txt">
                  <SearchIcon className={styles.serch_icon} />
                </label>
                <input type="text" name="q" className={styles.search_box} id="serch_txt" />
                <input type="submit" name="sa" className={styles.search_submit} value="検索" />
              </form>
            </div>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className={styles.footer}>
        <div>
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />

          <div className={styles.detail_wrap}>
            <div className={styles.detail_container}>
              <p className={styles.cityhall_name}>酒海市役所</p>
              <div className={styles.cityhall_details}>
                <p>〒443-0039</p>
                <p>愛知県酒海市中央区二の丸一丁目1番1号</p>
                <p>Tel: 0533-046-393</p>
                <p>
                  <span>開庁時間 午前9時から午後6時まで</span><br />
                  <span>（日曜日・祝日・年末年始を除く）</span>
                </p>
              </div>
            </div>

            <div className={styles.detail_container}>
              <ul>
                <li className={styles.detail_list}>
                  <span className={styles.detail_btn}>市役所へのアクセス</span>
                </li>
                <li className={styles.detail_list}>
                  <span className={styles.detail_btn}>各課のご案内</span>
                </li>
                <li className={styles.detail_list}>
                  <span className={styles.detail_btn}>フロアマップ</span>
                </li>
                <li className={styles.detail_list}>
                  <span className={styles.detail_btn}>市へのご意見・お問い合わせ</span>
                </li>
                <li className={styles.detail_list}>
                  <span className={styles.detail_btn}>サイトマップ</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <p className={styles.copyright}>Copyright © Sakemi city All right reserved.</p>
      </footer>
    </div>
  );
}
