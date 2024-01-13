import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './pages/BasePage';
import { Home } from './pages/Home';
import { NoteApp } from './components/NoteApp';
import { Page404 } from './pages/Page404';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/notas" element={<NoteApp currentPage="adicionadas" />} />
                    <Route path="/notas-excluidas" element={<NoteApp currentPage="excluidas" />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}