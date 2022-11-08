import Image from 'next/image';
import styles from '../styles/components/header.module.scss';
import SearchIcon from '@mui/icons-material/Search';


export default () => {
    return (
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
    )
}