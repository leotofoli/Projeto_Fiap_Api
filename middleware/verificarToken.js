const jwt = require("jsonwebtoken");

function verificaToken(req, res, next) {
  const token_enviado = req.headers.token;

  if (!token_enviado) {
    return res
      .status(401)
      .send({ output: `Não há token. realize o processo de autenticação` });
  }
  jwt.verify(token_enviado, "FIAP", (erro, resultado) => {
    if (erro)
      return res
        .status(403)
        .send({ output: `Problemas com o token -> ${erro}` });
    return next();
  });
}
module.exports = verificaToken;
