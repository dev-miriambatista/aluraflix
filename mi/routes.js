import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NovoVideo from './pages/NovoVideo'; // Certifique-se de que o caminho está correto
import EditarVideo from './pages/EditarVideo'; // Certifique-se de que o caminho está correto

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/novo-video" element={<NovoVideo />} />
                <Route path="/editar-video" element={<EditarVideo />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
