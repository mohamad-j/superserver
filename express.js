const express = require('express')
const app = express()
const fs = require('fs');
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//setting view engine to ejs
app.set("view engine", "ejs");
/// TODO set defsult layout
app.set( 'layout', './layouts/default' );

module.exports = app;