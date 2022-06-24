const mongoose = require("mongoose");

const urldb = "mongodb://127.0.0.1:27017/";
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;