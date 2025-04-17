import styles from '../styles/App.module.scss';
import { Header } from '../components/Header.jsx';
import { Link } from 'react-router-dom';

export function About() {
    return (
        <>
        <Header />
            <div className={styles.About}>
                <h1 className={styles.Title}> Работу выполнил </h1>
                <div className={styles.wrapper}>
                    <p className={styles.Text}>Cсылка на гитхаб: </p>
                    <Link to="https://github.com/ag824pro/CONVERTER" className={styles.Text}>https://github.com/ag824pro/CONVERTER</Link>
                </div>
            </div>
        </>
    )
}