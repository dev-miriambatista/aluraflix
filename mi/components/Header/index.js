import React from 'react';
import './header.css'; // Certifique-se de que header.css está na mesma pasta
import Api from '../Api';

Api.getVideos().then(videos => console.log(videos));


function Header() {
    return (
        <header className="header">
            <h1>AluraFlix</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/novo-video">Adicionar Vídeo</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
