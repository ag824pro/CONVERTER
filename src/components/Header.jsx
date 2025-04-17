import styles from "../styles/App.module.scss";
import { Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from '../assets/Logo.png';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.Header}>
            <div ref={menuRef}>
                <div onClick={toggleMenu} className={styles.MenuIcon}>
                    <MenuIcon className={menuOpen ? styles.activeIcon : styles.icon}/>
                </div>
                {menuOpen && <Menu/>}
            </div>

            <div className={styles.logoContainer}>
                <img src={logo}  className={styles.logo}/>
                <h1 className={styles.Title}>Converter</h1>
            </div>

            <div/>
        </div>
    );
}

export function Menu() {
    return (
        <nav className={styles.Menu}>
            <ul className={styles.MenuList}>
                <li className={styles.MenuItem}>
                    <Link to="/" className={styles.MenuLink}>Главная</Link>
                </li>
                <li className={styles.MenuItem}>
                    <Link to="/about" className={styles.MenuLink}>О проекте</Link>
                </li>
                <li className={styles.MenuItem}>
                    <Link to="/desc" className={styles.MenuLink}>Описание</Link>
                </li>
            </ul>
        </nav>
    );
}