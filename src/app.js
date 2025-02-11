require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Importar rutas
const userRoutes = require("./routes/index");
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Microservicio de Leer Usuario corriendo en el puerto ${PORT}`);
});
