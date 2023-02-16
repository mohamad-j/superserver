const express = require('express')
const app = express()
const fs = require('fs');



//setting view engine to ejs
app.set("view engine", "ejs");


module.exports = app;