"use strict";
var Swagmock = require("swagmock");
var Path = require("path");
var ApiPath = Path.resolve(__dirname, "../config/swagger.json");
var Mockgen;

module.exports = function() {
    /**
     * Cached mock generator
     */
    Mockgen = Mockgen || Swagmock(ApiPath);
    return Mockgen;
};