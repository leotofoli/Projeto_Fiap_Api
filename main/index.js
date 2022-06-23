const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const rotaUsuario = require("../routes/usuario");

app.use("/api/usuario", rotaUsuario);

app.listen(5000, () => console.log(`Servidor on-line`));
