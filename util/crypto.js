const crypto = require("crypto");
const secret = "abcdefg";
function cryptoPass(password) {
  return crypto.createHash("sha256", secret).update(password).digest("hex");
}

module.exports = cryptoPass;
