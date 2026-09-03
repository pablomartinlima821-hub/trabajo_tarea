import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.json({ mensaje: "API funcionando correctamente" });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ estado: "ok" });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});

export default app;
