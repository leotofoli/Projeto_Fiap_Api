const express = require("express");
const routerFinanca = express.Router();
const verificaToken = require("../middleware/verificarToken");
const Financa = require("../data/financa");

routerFinanca.get("/", (req, res) => {
    Financa.find((erro, dados) => {
    if (erro) {
      return res.status(500).send({
        output: `Ocorreu um erro duarante o processo de sua requisição ${erro}`,
      });
    }
    res.status(200).send({ output: dados });
  });
});

routerFinanca.post("/cadastro", verificaToken, (req, res) => {
  const dados = new Financa(req.body);
  dados
    .save()
    .then((info) => {
      res
        .status(201)
        .send({
          output: "Dados Financeiros Cadastro com sucesso",
          payload: info,
        });
    })
    .catch((erro) =>
      res.status(400).send({ output: `Erro ao realizar cadastro ->${erro}` })
    );
});

routerFinanca.put("/atualizar/:id", verificaToken, (req, res) => {
    Financa.findOneAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(400).send({ output: `Erro ao atualizar -> ${erro}` });
      res.status(200).send({ output: "Atualizado", payload: dados });
    }
  );
});

routerFinanca.delete("/apagar/:id", verificaToken, (req, res) => {
    Financa.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(400).send({ output: `Erro ao tentar apagar ${erro}` });
    res.status(204).send({ output: `Usuario apagado` });
  });
});

module.exports = routerFinanca;