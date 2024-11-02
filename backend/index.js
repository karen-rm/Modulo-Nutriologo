/*import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});*/

import express from 'express';
import connection from './db.js'; // Importa la conexión de db.js

const app = express();

// Ruta para consultar la base de datos
app.get('/api/data', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM nutriologo');
    res.json(rows); // Devuelve los resultados en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al consultar la base de datos' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
