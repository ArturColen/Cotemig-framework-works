import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
    return (
        <>
            <section className={styles.card}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div className={styles.card_footer}>
                    <div className={styles.card_icons}>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <FaJs />
                    </div>
                    <a href={html_url} className={styles.button} target="_blank" rel="noopener noreferrer">
                        <BsArrowRight />
                    </a>
                </div>
            </section>
        </>
    );
}

export default Card;