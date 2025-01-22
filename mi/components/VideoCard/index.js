import React from 'react';
import './VideoCard.css'; // Opcional: para estilização específica do cartão

export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      {/* Thumbnail ou imagem do vídeo */}
      <img 
        src={video.thumbnail || 'default-thumbnail.jpg'} 
        alt={`Thumbnail de ${video.title}`} 
        className="video-thumbnail" 
      />
      
      {/* Informações do vídeo */}
      <div className="video-details">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-description">{video.description || 'Sem descrição disponível'}</p>
        <a 
          href={video.url || '#'} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="watch-button"
        >
          Assistir
        </a>
      </div>
    </div>
  );
}
