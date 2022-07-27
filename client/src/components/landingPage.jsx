import { Link } from 'react-router-dom';
import kitchen from '../util/images/kitchen.png';
import styles from './landingPage.module.css';

export default function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.kitchen}>
                <img src={kitchen} alt="kitchen"/>
            </div>

            <div className={styles.header}>
                <h1>¡Welcome to the Food App!</h1>
                <span>Find your favorites recipes</span>
                <Link to={'/home'}>
                    <button className={styles.button}>log in</button>
                </Link>
            </div>
        </div>
    );
};