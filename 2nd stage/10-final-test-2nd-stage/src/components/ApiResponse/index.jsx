import styles from './ApiResponse.module.css';
import { useEffect, useState } from 'react';

function ApiResponse() {
    const [questionsData, setQuestionsData] = useState([]);

    useEffect(() => {
        const loadQuestionsApi = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=30&category=16');

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setQuestionsData(data.results);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadQuestionsApi();
    }, []);

    const replaceHtmlEntities = (text) => {
        const htmlEntities = {
            '&quot;': '"',
            '&#039;': "'",
            '&amp;': '&'
        }

        return text.replace(/&quot;|&#039;|&amp;/g, (entity) => htmlEntities[entity]);
    }

    return (
        <div className={styles.container}>
            {questionsData.length > 0 ? (
                <div className={styles.item}>
                    {
                        questionsData.map((questions, index) => (
                            <div key={index}>
                                <h3 className={styles.question}>{replaceHtmlEntities(questions.question)}</h3>
                                <p className={styles.difficulty}>{replaceHtmlEntities(questions.difficulty)}</p>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <p>Carregando perguntas...</p>
            )}
        </div>
    );
};

export default ApiResponse;