'use strict';
var dataProvider = require("../../data/section/{id}.js");
/**
 * Operations on /section/{id}
 */
module.exports = {
    /**
     * summary: Creates a Json document for CCD Section
     * description: Creates a Json document for CCD Section
     * parameters: XmlDoc, id
     * produces: application/json
     * responses: 200, 400
     */
    post: function GetCCDSection(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        //var bb = require("blue-button");

        //if (req.query.id && req.body.XmlDoc) {

        //    var doc = req.body.XmlDoc;
        //    var section = req.query.id;


        //    var result = bb.parseString(doc, { component: section });

        //    if (result) {

        //        res.writeHead(200, { 'Content-Type': "application/json", 'x-ms-description': "Success" });
        //        res.end(JSON.stringify(result, null, 4));

        //    } else {

        //        res.writeHead(400,
        //            "Invalid Document Type",
        //            { 'Content-Type': "application/json", 'x-ms-description': "Bad Request" });
        //        res.end();
        //    }
        //} else {
        //    res.writeHead(405,
        //        "Missing XmlDoc or Section Id",
        //        { 'Content-Type': "application/json", 'x-ms-description': "Method No Allowed" });
        //    res.end();
        //}

        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
