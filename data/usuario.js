const bcrypt = require("bcrypt");
const mongoose = require("../data/conexao");
const tabela = new mongoose.Schema({
  nomeusuario: { type: String },
  email: { type: String },
  senha: String,
  nomecompleto: { type: String },
  telefone: { type: String },
  datacadastro: { type: Date, default: Date.now() },
});

// tabela.pre("save", function (next) {
//   let usuario = this;
//   if (!usuario.isModified("senha")) return next();
//   bcrypt.hash(usuario.senha, 10, (err, encr) => {
//     usuario.senha = encr;
//     return next();
//   });
// });

// tabela.pre("findOneAndUpdate", function (next) {
//   bcrypt.hash(this._update.senha, 10, (err, encr) => {
//     this._update.senha = encr;
//     return next();
//   });   
// });

const Usuario = mongoose.model("usuario", tabela);

module.exports = Usuario;
