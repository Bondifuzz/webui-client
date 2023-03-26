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
import CreateUserResponseModel from './CreateUserResponseModel';

/**
 * The ResponseCreateUserOk model module.
 * @module model/ResponseCreateUserOk
 * @version 0.1.0
 */
class ResponseCreateUserOk {
    /**
     * Constructs a new <code>ResponseCreateUserOk</code>.
     * @alias module:model/ResponseCreateUserOk
     * @param operation {String} 
     * @param result {module:model/CreateUserResponseModel} 
     */
    constructor(operation, result) { 
        
        ResponseCreateUserOk.initialize(this, operation, result);
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
     * Constructs a <code>ResponseCreateUserOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCreateUserOk} obj Optional instance to populate.
     * @return {module:model/ResponseCreateUserOk} The populated <code>ResponseCreateUserOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseCreateUserOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = CreateUserResponseModel.constructFromObject(data['result']);
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
ResponseCreateUserOk.prototype['operation'] = undefined;

/**
 * @member {module:model/CreateUserResponseModel} result
 */
ResponseCreateUserOk.prototype['result'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
ResponseCreateUserOk.prototype['status'] = 'OK';






export default ResponseCreateUserOk;

