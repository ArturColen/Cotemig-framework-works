import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './pages/Base';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/sobre" element={<About />}></Route>
                    <Route path="/projetos" element={<Projects />}></Route>
                    <Route path="/contato" element={<Contact />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;