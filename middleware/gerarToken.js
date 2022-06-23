const jwt = require("jsonwebtoken");

function gerarToken(id, usuario, email) {
  return jwt.sign(
    { idusuario: id, nomeusuario: usuario, email: email },
    "FIAP",
    { expiresIn: "1d" }
  );
}
module.exports = gerarToken;
