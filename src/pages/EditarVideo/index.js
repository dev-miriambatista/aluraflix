import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditarVideo({ videos, editarVideo }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    const video = videos[index];
    setTitle(video.title);
    setDescription(video.description);
    setUrl(video.url);
  }, [index, videos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { title, description, url };
    editarVideo(index, updatedVideo); // Chama a função para editar o vídeo
    navigate('/'); // Volta para a lista de vídeos
  };

  return (
    <div>
      <h2>Editar Vídeo</h2>
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

export default EditarVideo;
