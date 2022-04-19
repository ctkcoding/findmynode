let express = require("express");
let app = express();

// Here, we will require the configuration files
require("./config/static-files")(express, app);

module.exports = app;