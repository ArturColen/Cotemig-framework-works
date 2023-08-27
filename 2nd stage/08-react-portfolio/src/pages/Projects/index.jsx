import { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import Card from '../../components/Card';

function Projects() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const response = await fetch('https://api.github.com/users/ArturColen/repos');

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setRepositories(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        fetchRepositories();
    }, []);

    return (
        <>
            <section className={styles.projects}>
                <h2>Projetos</h2>
                {
                    repositories.length > 0 ? (
                        <section className={styles.list}>
                            {
                                repositories.map((repo) => (
                                    <Card
                                        key={repo.id}
                                        name={repo.name}
                                        description={repo.description}
                                        html_url={repo.html_url}
                                    />
                                ))
                            }
                        </section>
                    ) : (
                        <p>Carregando repositórios...</p>
                    )
                }
            </section>
        </>
    );
}

export default Projects;