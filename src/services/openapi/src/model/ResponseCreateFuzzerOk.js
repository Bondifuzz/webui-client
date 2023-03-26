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
import CreateFuzzerResponseModel from './CreateFuzzerResponseModel';

/**
 * The ResponseCreateFuzzerOk model module.
 * @module model/ResponseCreateFuzzerOk
 * @version 0.1.0
 */
class ResponseCreateFuzzerOk {
    /**
     * Constructs a new <code>ResponseCreateFuzzerOk</code>.
     * @alias module:model/ResponseCreateFuzzerOk
     * @param operation {String} 
     * @param result {module:model/CreateFuzzerResponseModel} 
     */
    constructor(operation, result) { 
        
        ResponseCreateFuzzerOk.initialize(this, operation, result);
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
     * Constructs a <code>ResponseCreateFuzzerOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCreateFuzzerOk} obj Optional instance to populate.
     * @return {module:model/ResponseCreateFuzzerOk} The populated <code>ResponseCreateFuzzerOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCreateFuzzerOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = CreateFuzzerResponseModel.constructFromObject(data['result']);
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
ResponseCreateFuzzerOk.prototype['operation'] = undefined;

/**
 * @member {module:model/CreateFuzzerResponseModel} result
 */
ResponseCreateFuzzerOk.prototype['result'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
ResponseCreateFuzzerOk.prototype['status'] = 'OK';






export default ResponseCreateFuzzerOk;

