import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NovoVideo({ adicionarVideo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { title, description, url };
    adicionarVideo(newVideo); // Chama a função para adicionar o vídeo
    navigate('/'); // Volta para a lista de vídeos
  };

  return (
    <div>
      <h2>Adicionar Novo Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          Descrição:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          URL:
          <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default NovoVideo;
