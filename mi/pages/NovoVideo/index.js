const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Vídeo salvo!');
};

return (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Título do vídeo" />
    <input type="url" placeholder="URL do vídeo" />
    <button type="submit">Salvar</button>
  </form>
);
