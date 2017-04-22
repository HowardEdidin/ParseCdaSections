"use strict";

var Http = require("http");
var Port = process.env.PORT || 1337;

Http.createServer(function(req, res) {

    var bb = require("blue-button");

    if (req.query.id && req.body.XmlDoc) {

        var doc = req.body.XmlDoc;
        var section = req.query.id;


        var result = bb.parseString(doc, { component: section });

        if (result) {

            res.writeHead(200, { 'Content-Type': "application/json", 'x-ms-description': "Success" });
            res.end(JSON.stringify(result, null, 4));

        } else {

            res.writeHead(400,
                "Invalid Document Type",
                { 'Content-Type': "application/json", 'x-ms-description': "Bad Request" });
            res.end();
        }
    } else {
        res.writeHead(405,
            "Missing XmlDoc or Section Id",
            { 'Content-Type': "application/json", 'x-ms-description': "Method No Allowed" });
        res.end();
    }

}).listen(Port);