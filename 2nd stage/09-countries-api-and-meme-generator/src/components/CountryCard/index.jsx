import styles from './CountryCard.module.css';

// eslint-disable-next-line react/prop-types
function CountryCard({ name, flag, population }) {
    return (
        <>
            <div className={styles.country_div}>
                <img src={flag} alt={name} />
                <h2>{name}</h2>
                <hr />
                <h4>População: {population}</h4>
            </div>
        </>
    );
}

export default CountryCard;