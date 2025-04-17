import styles from '../styles/App.module.scss';
import {Header} from '../components/Header.jsx'
import Converter from '../components/Converter.jsx';


export function Home(){
    return (
        <div className={styles.Home}>
            <Header/>
            <div className={styles.wrapper}>
                <Converter />
            </div>
        </div>
    )
}