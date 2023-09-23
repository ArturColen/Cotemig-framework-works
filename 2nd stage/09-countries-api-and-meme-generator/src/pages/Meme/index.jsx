import { useState, useEffect } from 'react';
import styles from './Meme.module.css';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

function Meme() {
    const [memeName, setMemeName] = useState('');
    const [memeUrl, setMemeUrl] = useState('');
    const [quoteText, setQuoteText] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const loadMemesAPI = async () => {
        try {
            const memeResponse = await fetch('https://api.imgflip.com/get_memes');

            if (!memeResponse.ok) {
                throw new Error('Falha ao buscar dados da API');
            }

            const memeData = await memeResponse.json();
            const memes = memeData.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];

            const quoteResponse = await fetch('https://api.quotable.io/random');

            if (!quoteResponse.ok) {
                throw new Error('Falha ao buscar dados');
            }

            const quoteData = await quoteResponse.json();
            const quote = quoteData.content;

            setMemeName(randomMeme.name);
            setMemeUrl(randomMeme.url);
            setQuoteText(quote);
        }
        catch (error) {
            console.error('Erro nas requisições: ', error);
        }
    };

    const handleGenerateClick = async () => {
        setButtonClicked(true);
        await loadMemesAPI();
    };

    return (
        <>
            <BackButton />
            <Title text="Gerador de memes" />
            <div className={styles.container}>
                <button className={styles.generate_button} onClick={handleGenerateClick}>Clique aqui</button>
                {
                    buttonClicked && (
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
                    )
                }
            </div>
        </>
    );
};

export default Meme;