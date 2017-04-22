'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: GetCCDSection
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */

            Mockgen().responses({
                path: '/section/{id}',
                operation: 'post',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/section/{id}',
                operation: 'post',
                response: '400'
            }, callback);
        }
    }
};
