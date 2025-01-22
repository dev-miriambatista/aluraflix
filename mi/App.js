import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoList from './components/VideoList';
import NovoVideo from './pages/NovoVideo';
import Api from './Api';



function App() {
  const [videos, setVideos] = useState([]);

  // Função para adicionar um novo vídeo à lista
  const adicionarVideo = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/novo-video">Adicionar Novo Vídeo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<VideoList videos={videos} />} />
        <Route path="/novo-video" element={<NovoVideo adicionarVideo={adicionarVideo} />} />
      </Routes>
    </Router>
  );
}

export default App;
