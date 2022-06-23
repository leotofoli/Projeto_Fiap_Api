const express = require("express");
const router = express.Router();
const gerarToken = require("../middleware/gerarToken");
const verificaToken = require("../middleware/verificarToken");
const Usuario = require("../data/conexao");

router.get("/", (req, res) => {
  Usuario.find((erro, dados) => {
    if (erro) {
      return res
        .status(500)
        .send({
          output: `Ocorreu um erro duarante o processo de sua requisição ${erro}`,
        });
    }
    res.status(200).send({ output: dados });
  });
});

router.post("/login", (req, res) => {
  Usuario.findOne({ usuario: req.body.usuario }, (erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao tentar localizar o usuário: ${erro}` });
    if (!dados)
      return res.status(404).send({ output: `Usuário não localizado` });
    if (dados.senha != req.body.senha)
      return res.status(400).send({ output: `Senha inválida` });

    const token = gerarToken(dados._id, dados.usuario, dados.email);
    res.status(200).send({ output: `logado`, token: token });
  });
});

router.post("/cadastro", (req, res) => {
  const dados = Usuario(req.body);
  dados
    .save()
    .then((info) => {
      res.status(201).send({ output: `Dados cadastrados`, payload: info });
    })
    .catch((erro) =>
      res.status(400).send({ erro: `Erro ao tentar cadastrar ${erro}` })
    );
});

router.put("/atualizar/:id", verificaToken, (req, res) => {
  Usuario.findOneAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        res.status(400).send({ output: `Erro ao tentar atualizar ${erro}` });
      res.status(200).send({ output: `Atualizado`, payload: dados });
    }
  );
});

router.delete("/apagar/:id", verificaToken, (req, res) => {
  Usuario.findByIdAndDelete(req.params.id, (erro, dados) => {
    if (erro)
      return res.status(400).send({ output: `Erro ao tentar apagar ${erro}` });
    res.status(204).send({ output: `Usuario apagado` });
  });
});

module.exports = router;
