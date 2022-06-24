const mongoose = require("./conexao");

const tabela = new mongoose.Schema({
  nome_banco: { type: String },
  tipo_conta: { type: String },
  nome_titula: String,
  limite_cartao: String
});

const Financa = mongoose.model("financa", tabela);

module.exports = Financa;