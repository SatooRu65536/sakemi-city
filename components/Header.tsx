import Image from 'next/image';
import styles from '../styles/Header.module.scss';


export default () => {
    return (
        <header className={styles.header}>
            <Image src="/logo.svg" alt="Logo" width={250} height={60} />
        </header>
    )
}