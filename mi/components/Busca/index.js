import React, { useState } from "react";
import './busca.css'; // Estilos específicos da busca
import Api from '../Api';

Api.getVideos().then(videos => console.log(videos));


function Busca() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Buscando por: ${query}`);
    // Lógica de busca
  };

  return (
    <div className="busca-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquise um vídeo..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Busca;
