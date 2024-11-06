import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

// TODO:
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "nombre_de_tu_base_de_datos",
};

export const registerUser = async (req, res) => {
  const { nombre, apellidos, correo, contrasena, telefono } = req.body;

  if (!nombre || !apellidos || !correo || !contrasena || !telefono) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      "SELECT * FROM usuarios WHERE correo = ?",
      [correo]
    );
    if (rows.length > 0) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    await connection.execute(
      "INSERT INTO usuarios (nombre, apellidos, correo, contrasena, telefono) VALUES (?, ?, ?, ?, ?)",
      [nombre, apellidos, correo, hashedPassword, telefono]
    );

    res.status(201).json({ message: "Usuario registrado exitosamente" });
    await connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};
