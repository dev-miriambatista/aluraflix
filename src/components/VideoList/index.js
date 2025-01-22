import React from 'react';
import { Link } from 'react-router-dom';
import './videoList.css';

function VideoList({ videos, excluirVideo }) {
  return (
    <div className="video-list-container">
      <h2>Lista de Vídeos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index} className="video-item">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <div className="video-container">
              <img
                src={`https://img.youtube.com/vi/${new URL(video.url).searchParams.get('v')}/0.jpg`}
                alt="Capa do vídeo"
                className="video-thumbnail"
              />
              <div className="botoes">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-card"
                >
                  Assistir
                </a>
                <Link
                  className="button-card"
                  to={`/editar-video/${index}`}
                >
                  Editar
                </Link>
                <button
                  className="button-card"
                  onClick={() => excluirVideo(index)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
