import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Outlet } from 'react-router-dom';

export default function BasePage() {
    return (
        <main>
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}