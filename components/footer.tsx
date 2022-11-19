import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/footer.module.scss';


export default  () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href={'/'}>
                    <Image src="/logo.svg" alt="city logo" width={150} height={50} />
                </Link>

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
                                <Link href={'/unproduced'}>
                                    <span className={styles.detail_btn}>市役所へのアクセス</span>
                                </Link>
                            </li>
                            <li className={styles.detail_list}>
                                <Link href={'/unproduced'}>
                                    <span className={styles.detail_btn}>各課のご案内</span>
                                </Link>
                            </li>
                            <li className={styles.detail_list}>
                                <Link href={'/unproduced'}>
                                    <span className={styles.detail_btn}>フロアマップ</span>
                                </Link>
                            </li>
                            <li className={styles.detail_list}>
                                <Link href={'/unproduced'}>
                                    <span className={styles.detail_btn}>市へのご意見・お問い合わせ</span>
                                </Link>
                            </li>
                            <li className={styles.detail_list}>
                                <Link href={'/unproduced'}>
                                    <span className={styles.detail_btn}>サイトマップ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <p className={styles.copyright}>Copyright © Sakemi city All right reserved.</p>
        </footer >
    )
}
