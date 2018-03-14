"use strict";

//Dependencies
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config.json")[env];
let db = {};


//Code goes here :)




//Exports
module.exports = db;
