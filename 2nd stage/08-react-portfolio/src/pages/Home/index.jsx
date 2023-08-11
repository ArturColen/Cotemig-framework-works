import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import developer from './Image/developer.svg';

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.presentation}>
                    <p>
                        Olá, sou <br />
                        <span>Artur Bomtempo</span> <br />
                        Dev Full Stack
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_green}`}>Saiba mais sobre mim</Link>
                </div>
                <figure>
                    <img className={styles.img_home} src={developer} alt="Imagem da home" />
                </figure>
            </section>
        </>
    );
}

export default Home;