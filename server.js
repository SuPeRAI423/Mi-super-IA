const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    nombre: "Mi Super IA",
    estado: "servidor funcionando"
  });
});

app.post("/api/chat", (req, res) => {
  const mensaje = req.body.mensaje;

  if (!mensaje) {
    return res.status(400).json({
      error: "Escribe un mensaje"
    });
  }

  res.json({
    respuesta: `Recibí tu mensaje: ${mensaje}`
  });
});

app.listen(PORT, () => {
  console.log(`Mi Super IA funcionando en el puerto ${PORT}`);
});
