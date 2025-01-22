import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import VideoList from './components/VideoList';
import NovoVideo from './pages/NovoVideo';
import EditarVideo from './pages/EditarVideo'; // Importar a página de edição

function App() {
  // Carregar vídeos do localStorage ao inicializar o componente
  const [videos, setVideos] = useState(() => {
    const savedVideos = JSON.parse(localStorage.getItem('videos'));
    return savedVideos || [  // Caso não haja vídeos no localStorage, inicializa com um array vazio
      { title: 'Video 1', description: 'Descrição do vídeo 1', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
      { title: 'Video 2', description: 'Descrição do vídeo 2', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ];
  });

  // Salvar vídeos no localStorage sempre que o estado de vídeos mudar
  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  // Função para adicionar um novo vídeo
  const adicionarVideo = (video) => {
    setVideos([...videos, video]); // Atualiza o estado com o novo vídeo
  };

  // Função para editar um vídeo existente
  const editarVideo = (index, videoEditado) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = videoEditado; // Atualiza o vídeo no estado
    setVideos(updatedVideos);
  };

  // Função para excluir um vídeo da lista
  const excluirVideo = (index) => {
    const novosVideos = videos.filter((_, i) => i !== index);
    setVideos(novosVideos); // Atualiza o estado removendo o vídeo
  };

  return (
    <Router>
      <nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/novo-video">Adicionar Novo Vídeo</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<VideoList videos={videos} excluirVideo={excluirVideo} />}
        />
        <Route path="/novo-video" element={<NovoVideo adicionarVideo={adicionarVideo} />} />
        {/* Rota para a página de edição */}
        <Route
          path="/editar-video/:index"
          element={<EditarVideo videos={videos} editarVideo={editarVideo} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
