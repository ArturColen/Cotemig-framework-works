import Title from '../../components/Title';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Title text="Revisão de React" />
            <div className={styles.container}>
                <Link to="/paises">
                    <button className={styles.btn}>API de países</button>
                </Link>
                <Link to="/meme">
                    <button className={styles.btn}>Gerador de memes</button>
                </Link>
            </div>
        </>
    );
}

export default Home;