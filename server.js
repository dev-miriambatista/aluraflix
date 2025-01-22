const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Permite CORS para o localhost:3000

app.post('/e', (req, res) => {
  // Lógica do servidor
});

app.listen(3001, () => console.log('Server running on port 3001'));
