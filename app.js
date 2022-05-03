const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

// Para poder enviar datos por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuraciones generales
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

// Rutas
const mainRoutes = require("./routes/main");
const usersRoutes = require("./routes/users");

app.use("/", mainRoutes);
app.use("/users", usersRoutes);

// Levantamos el servidor
app.listen(PORT, () =>
  console.log(`Server running in http://localhost:${PORT}`)
);
