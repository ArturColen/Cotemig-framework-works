import styles from './About.module.css';
import profile from './images/profile.jpg';
import html from './images/html.svg';
import css from './images/css.svg';
import js from './images/js.svg';
import ts from './images/ts.svg';
import react from './images/react.svg';
import node from './images/node.svg';
import python from './images/python.svg';
import django from './images/django.svg';
import kotlin from './images/kotlin.svg';
import swift from './images/swift.svg';
import sql from './images/sql.svg';

function About() {
    return (
        <>
            <section className={styles.about}>
                <div className={styles.bio}>
                    <img className={styles.profile} src={profile} alt="Imagem de perfil" />
                    <div className={styles.texts}>
                        <h2>Sobre</h2>
                        <p>Sou <span>Artur Bomtempo</span> <br />
                            <strong>Desenvolvedor web e mobile</strong></p>
                        <p>
                            Sempre tive o anseio por ajudar as pessoas ao meu redor a terem <br /> uma vida melhor
                            e percebi que o mundo do desenvolvimento de software <br /> é uma excelente possiblidade
                            para que o meu desejo seja concretizado.
                        </p>
                        <div className={styles.techs}>
                            <h3>Techs</h3>
                            <div className={styles.icons}>
                                <img src={html} alt="Ícone do HTML" />
                                <img src={css} alt="Ícone do CSS" />
                                <img src={js} alt="Ícone do JavaScript" />
                                <img src={ts} alt="Ícone do TypeScript" />
                                <img src={react} alt="Ícone do React" />
                                <img src={node} alt="Ícone do Node.js" />
                                <img src={python} alt="Ícone do Python" />
                                <img src={django} alt="Ícone do Django" />
                                <img src={kotlin} alt="Ícone do Kotlin" />
                                <img src={swift} alt="Ícone do Swift" />
                                <img src={sql} alt="Ícone do SQL" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;