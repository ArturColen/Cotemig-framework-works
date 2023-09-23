import { Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import styles from './BackButton.module.css';

function BackButton() {
    return (
        <>
            <Link to="/">
                <IoMdArrowBack className={styles.icon} />
            </Link>
        </>
    );
};

export default BackButton;