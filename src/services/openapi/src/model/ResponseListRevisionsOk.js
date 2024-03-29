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
import ListRevisionsResponseModel from './ListRevisionsResponseModel';

/**
 * The ResponseListRevisionsOk model module.
 * @module model/ResponseListRevisionsOk
 * @version 0.1.0
 */
class ResponseListRevisionsOk {
    /**
     * Constructs a new <code>ResponseListRevisionsOk</code>.
     * @alias module:model/ResponseListRevisionsOk
     * @param operation {String} 
     * @param result {module:model/ListRevisionsResponseModel} 
     */
    constructor(operation, result) { 
        
        ResponseListRevisionsOk.initialize(this, operation, result);
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
     * Constructs a <code>ResponseListRevisionsOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseListRevisionsOk} obj Optional instance to populate.
     * @return {module:model/ResponseListRevisionsOk} The populated <code>ResponseListRevisionsOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseListRevisionsOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ListRevisionsResponseModel.constructFromObject(data['result']);
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
ResponseListRevisionsOk.prototype['operation'] = undefined;

/**
 * @member {module:model/ListRevisionsResponseModel} result
 */
ResponseListRevisionsOk.prototype['result'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
ResponseListRevisionsOk.prototype['status'] = 'OK';






export default ResponseListRevisionsOk;

