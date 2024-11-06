import { Router } from "express";
import { userRegister } from "../controllers/userRegister";

export const router = Router();

// Escribe aqui tus rutas...
router.get("/home", (req, res) => {
  res.send("esta es una prueba del homee");
});

router.get("/info", (req, res) => {
  userRegister();
  res.send("esta es una prueba de info");
});

router.get("/", (req, res) => {
  res.send("Bienvenido a la API de Nutriapp");
});

router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

router.get("/api/data", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM nutriologo");
    res.json(rows); // Devuelve los resultados en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al consultar la base de datos" });
  }
});
