import styles from '../styles/App.module.scss';
import {Header} from '../components/Header.jsx'


export function Description(){
    return (
        <div className={styles.Desc}>
            <Header/>
            <div className={styles.wrapper}>
                <h1 className={styles.Title}> ИПР. Вариант 3 </h1>
                <p className={styles.Text}> ---------------------------------------------------------------------------------------------</p>
                <p className={styles.Text}> Создать онлайн-конвертер валют с загрузкой текущих курсов через API. </p>
            </div>
        </div>
    )
}