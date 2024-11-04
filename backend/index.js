const express = require('express');

const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api', authRoutes);


const port = 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
  });
}

module.exports = app;