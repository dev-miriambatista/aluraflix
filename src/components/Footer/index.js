import React from "react";
import './footer.css'; // Estilos específicos do Footer
import Api from '../../Api'; // Subindo dois níveis para alcançar o Api.js dentro de src


Api.getVideos().then(videos => console.log(videos));


function Footer() {
  return (
    <footer>
      <p>&copy; 2025 AluraFlix - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
