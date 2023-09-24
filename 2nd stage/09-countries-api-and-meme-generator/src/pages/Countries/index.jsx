import { useEffect, useState } from 'react';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import styles from './Countries.module.css';
import CountryCard from '../../components/CountryCard';

function Countries() {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        const loadCountryAPI = async () => {
            try {
                const response = await fetch('https://restcountries.com/v2/all');

                if (!response.ok) {
                    throw new Error('Falha ao buscar dados');
                }

                const data = await response.json();
                setCountriesData(data);
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        loadCountryAPI();
    }, []);

    return (
        <>
            <BackButton />
            <Title text="API de países" />
            {
                countriesData.length > 0 ? (
                    <div className={styles.countries}>
                        {countriesData.map((country) => (
                            <CountryCard
                                key={country.name}
                                name={country.name}
                                flag={country.flags.png}
                                population={country.population}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles.message}>Carregando países...</p>
                )    
            }
        </>
    );
}

export default Countries;