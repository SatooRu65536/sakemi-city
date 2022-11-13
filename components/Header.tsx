import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/header.module.scss';
import SearchIcon from '@mui/icons-material/Search';


const switch_color = (n: number) => {
    const logos = [...document.getElementsByClassName('city-logo')];

    switch (n) {
        case 0:
            document.documentElement.style.setProperty('--color-font-1', '#000000');
            document.documentElement.style.setProperty('--color-font-2', '#ffffff');
            document.documentElement.style.setProperty('--color-bg-1', '#F9F9F9');
            document.documentElement.style.setProperty('--color-bg-2', '#DDF3F5');
            document.documentElement.style.setProperty('--color-bg-2-dark', '#A6DCEF');
            // document.documentElement.style.setProperty('--color-primary', '#');
            // document.documentElement.style.setProperty('--color-secound', '#');
            // document.documentElement.style.setProperty('--color-secound-thin', '#');
            // document.documentElement.style.setProperty('--color-accent-1', '#');
            // document.documentElement.style.setProperty('--color-accent-2', '#');

            logos.forEach(logo => logo.getAttribute('src', 'logo-reverse.svg'));
            break;
        case 1:
            document.documentElement.style.setProperty('--color-font-1', '#ffffff');
            document.documentElement.style.setProperty('--color-font-2', '#000000');
            document.documentElement.style.setProperty('--color-bg-1', '#000000');
            document.documentElement.style.setProperty('--color-bg-2', '#111111');
            document.documentElement.style.setProperty('--color-bg-2-dark', '#393e46');
            break;
        case 2:
            document.documentElement.style.setProperty('--color-font-1', '#ffffff');
            break;
    }
}

const switch_fontsize = (n: number) => {
    switch (n) {
        case 0:
            document.documentElement.style.fontSize = '13px';
            break;
        case 1:
            document.documentElement.style.fontSize = '16px';
            break;
        case 2:
            document.documentElement.style.fontSize = '20px';
            break;
    }
}


const Header = () => {
    return (
        <div>
            <div className={styles.top_menu_wrap}>
                <input type="checkbox" id="hamburger_cbx" className={styles.hamburger_cbx} />

                <label htmlFor="hamburger_cbx" className={styles.hamburger_wrap}>
                    <span />
                    <span />
                    <span />
                </label>

                <div className={styles.drawer}>
                    <ul>
                        <li><Link href={'/'}>トップ</Link></li>
                        <li><Link href={'/unproduced'}>暮らし情報</Link></li>
                        <li><Link href={'/unproduced'}>子育て・教育</Link></li>
                        <li><Link href={'/unproduced'}>健康・福祉</Link></li>
                        <li><Link href={'/unproduced'}>観光情報</Link></li>
                        <li><Link href={'/unproduced'}>文化・歴史</Link></li>
                        <li><Link href={'/unproduced'}>産業・農業</Link></li>
                        <li><Link href={'/unproduced'}>市政情報</Link></li>
                    </ul>
                </div>
            </div>

            <header className={styles.header}>

                <div className={styles.header_container}>
                    <Link href={'/'}>
                        <Image className='city-logo' src="/logo.svg" alt="Logo" width={250} height={80} />
                    </Link>

                    <div className={styles.site_setting}>
                        <div className={styles.color_wrap}>
                            <span>表示色</span>
                            <span onClick={() => switch_color(0)} className={styles.color_button}>白</span>
                            <span onClick={() => switch_color(1)} id='switch_color_black' className={styles.color_button}>黒</span>
                            <span onClick={() => switch_color(2)} id='switch_color_gray' className={styles.color_button}>灰</span>
                        </div>

                        <div className={styles.fontsize_wrap}>
                            <span className={styles.size_title}>文字サイズ</span>
                            <span onClick={() => switch_fontsize(0)} className={styles.size_button}>小</span>
                            <span onClick={() => switch_fontsize(1)} className={styles.size_button}>中</span>
                            <span onClick={() => switch_fontsize(2)} className={styles.size_button}>大</span>
                        </div>

                        <div className={styles.search_wrap}>
                            <form id="cse-search-box" action="http://google.com/cse" className={styles.serch_forn}>
                                <input type="hidden" name="cx" value="YOUR SEARCH ENGINE ID goes here" />
                                <input type="hidden" name="ie" value="UTF-8" />
                                <label htmlFor="serch_txt">
                                    <SearchIcon className={styles.serch_icon} />
                                    <input type="text" name="q" className={styles.search_box} id="serch_txt" />
                                </label>
                                <input type="submit" name="sa" className={styles.search_submit} value="検索" />
                            </form>
                        </div>
                    </div>
                </div>

                <div className={styles.menu_wrap}>
                    <span><Link href={'/unproduced'}>暮らし情報</Link></span>
                    <span><Link href={'/unproduced'}>子育て・教育</Link></span>
                    <span><Link href={'/unproduced'}>健康・福祉</Link></span>
                    <span><Link href={'/unproduced'}>観光情報</Link></span>
                    <span><Link href={'/unproduced'}>文化・歴史</Link></span>
                    <span><Link href={'/unproduced'}>産業・農業</Link></span>
                    <span><Link href={'/unproduced'}>市政情報</Link></span>
                </div>
            </header>
        </div>
    )
}


export default Header;