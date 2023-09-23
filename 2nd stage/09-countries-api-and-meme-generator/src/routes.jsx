import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import Meme from './pages/Meme';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/paises" element={<Countries />} ></Route>
                <Route path="/meme" element={<Meme />} ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;