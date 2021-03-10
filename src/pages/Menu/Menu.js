import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={styles.Menu}>
            <h1>
                Yuwen
                <br/>
                Memon
            </h1>
            <ul className={styles.menu}>
                <li>My Liiife</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Menu;
