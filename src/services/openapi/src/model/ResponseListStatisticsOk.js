/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ResponseListStatisticsOk model module.
 * @module model/ResponseListStatisticsOk
 * @version 0.1.0
 */
class ResponseListStatisticsOk {
    /**
     * Constructs a new <code>ResponseListStatisticsOk</code>.
     * @alias module:model/ResponseListStatisticsOk
     * @param operation {String} 
     * @param result {Object} 
     */
    constructor(operation, result) { 
        
        ResponseListStatisticsOk.initialize(this, operation, result);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operation, result) { 
        obj['operation'] = operation;
        obj['result'] = result;
    }

    /**
     * Constructs a <code>ResponseListStatisticsOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseListStatisticsOk} obj Optional instance to populate.
     * @return {module:model/ResponseListStatisticsOk} The populated <code>ResponseListStatisticsOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseListStatisticsOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Object);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} operation
 */
ResponseListStatisticsOk.prototype['operation'] = undefined;

/**
 * @member {Object} result
 */
ResponseListStatisticsOk.prototype['result'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
ResponseListStatisticsOk.prototype['status'] = 'OK';






export default ResponseListStatisticsOk;

