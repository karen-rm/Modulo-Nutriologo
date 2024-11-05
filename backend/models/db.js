import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import path from 'path';

// Calcular __dirname para módulos ES
const __dirname = path.dirname(new URL(import.meta.url).pathname).replace(/^\/+/, ''); // Eliminar barras iniciales

// Configura dotenv para que cargue el archivo .env desde la raíz del proyecto
dotenv.config({ path: path.resolve(__dirname, '../.env/.env') });

// Imprimir el contenido de las variables de entorno
// Asignar las credenciales manualmente
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const connection = mysql.createPool(dbConfig);

export default connection;
