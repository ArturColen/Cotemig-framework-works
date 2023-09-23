import styles from './Contact.module.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

function Contact() {
    return (
        <>
            <section className={styles.contact}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar</p>
                <div className={styles.icons}>
                    <a href='mailto:arturbcolen@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icon} />
                    </a>
                    <a href='https://www.instagram.com/bomtempo_artur/' target='_blank' rel='noopener noreferrer'>
                        <BsInstagram className={styles.icon} />
                    </a>
                    <a href='https://github.com/ArturColen' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icon} />
                    </a>
                    <a href='https://www.linkedin.com/in/artur-bomtempo/' target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icon} />
                    </a>
                </div>
            </section>
        </>
    );
};

export default Contact;