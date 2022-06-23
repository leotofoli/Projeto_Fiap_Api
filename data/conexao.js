const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const urldb = "mongodb://127.0.0.1:27017/";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

const tabela = new mongoose.Schema({
  nomeusuario: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  senha: String,
  nomecompleto: { type: String, required: true },
  telefone: { type: String, required: true, unique: true },
  datacadastro: { type: Date, default: Date.now() },
});

tabela.pre("save", function (next) {
  let usuario = this;
  if (!usuario.isModified("senha")) return next();
  bcrypt.hash(usuario.senha, 10, (err, encr) => {
    usuario.senha = encr;
    return next();
  });
});

const Usuario = mongoose.model("usuario", tabela);

module.exports = Usuario;
