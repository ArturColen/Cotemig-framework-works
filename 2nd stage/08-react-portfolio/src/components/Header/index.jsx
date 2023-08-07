import './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <span>&#60;Bomtempo /&#62;</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    )
}

export default Header;