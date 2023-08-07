import styles from './Page404.module.css';

function Page404() {
    return (
        <>
            <h2 className={styles.title2}>Algo de errado não está certo!</h2>
            <div className={styles.texts}>
                <span className={styles.big_text}>404</span> <br />
                <strong className={styles.green_text}>Página não encontrada.</strong>
            </div>
        </>
    )
}

export default Page404;