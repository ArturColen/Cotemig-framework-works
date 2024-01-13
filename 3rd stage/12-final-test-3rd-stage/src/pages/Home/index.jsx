import { HomePageButton, PageSubtitle, PageTitle } from '../../assets/styles/pages/GeneralPages/GeneralPages.style';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            <PageTitle>Avaliação final de Framework</PageTitle>
            <PageSubtitle>Notas de recados</PageSubtitle>
            <Link to="/notas">
                <HomePageButton>Testar projeto</HomePageButton>
            </Link>
        </>
    );
}