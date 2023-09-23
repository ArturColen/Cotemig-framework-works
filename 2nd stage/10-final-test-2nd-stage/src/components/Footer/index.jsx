import styles from './Footer.module.css';

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.text}>Desenvolvido por <span className={styles.span}>Artur Bomtempo</span></p>
            </footer>
        </>
    );
};

export default Footer;