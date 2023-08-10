import { useState, useEffect } from 'react';
import styles from './Meme.module.css';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

function Meme() {
    const [memeName, setMemeName] = useState('');
    const [memeUrl, setMemeUrl] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleGenerateClick = () => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const memes = result.data.memes;
                const randomMeme = memes[Math.floor(Math.random() * memes.length)];

                setMemeName(randomMeme.name);
                setMemeUrl(randomMeme.url);
                setButtonClicked(true);
            })
            .catch(error => {
                console.log('Erro na requisição de memes: ', error);
            });

        fetch('https://api.quotable.io/random')
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const quote = result.content;
                setQuoteText(quote);
            })
            .catch(error => {
                console.log('Erro na requisição de citações: ', error);
            });
    }

    return (
        <>
            <BackButton />
            <Title text="Gerador de memes" />
            <div className={styles.container}>
                <button className={styles.generate_button} onClick={handleGenerateClick}>Clique aqui</button>
                {buttonClicked && (
                    <div className={styles.img_container}>
                        <div className={styles.subtitle}>
                            <span className={styles.meme_name}>{memeName}</span>
                        </div>
                        <div className={styles.meme_image}>
                            <img src={memeUrl} alt="Imagem do meme" />
                        </div>
                        <div className={`${styles.subtitle} ${styles.text_meme}`}>
                            <span className={styles.text}>{quoteText}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Meme;