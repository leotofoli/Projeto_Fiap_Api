const mongoose = require("../data/conexao");
const crypto = require("../util/crypto");

const tabela = new mongoose.Schema({
  nomeusuario: { type: String },
  email: { type: String },
  senha: String,
  nomecompleto: { type: String },
  telefone: { type: String },
  datacadastro: { type: Date, default: Date.now() },
});

tabela.pre("save", function (next) {
  let usuario = this;
  if (!usuario.isModified("senha")) return next();
  const password = crypto(usuario.senha);
  usuario.senha = password;
  return next();
});

tabela.pre("findOneAndUpdate", function (next) {  
  const password = crypto(this._update.senha);
  this._update.senha = password;
  return next();
});

const Usuario = mongoose.model("usuario", tabela);

module.exports = Usuario;
