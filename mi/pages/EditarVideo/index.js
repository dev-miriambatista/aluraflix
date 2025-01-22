import React from 'react';
import './editarVideo.css'; // Certifique-se de que editarVideo.css está na mesma pasta
import Api from '../Api';

Api.getVideos().then(videos => console.log(videos));


function EditarVideo() {
    return (
        <div className="editar-video">
            <h1>Editar Vídeo</h1>
            {/* Conteúdo da página */}
        </div>
    );
}

export default EditarVideo;
