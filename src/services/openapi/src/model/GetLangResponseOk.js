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
import GetLangResponseModel from './GetLangResponseModel';

/**
 * The GetLangResponseOk model module.
 * @module model/GetLangResponseOk
 * @version 0.1.0
 */
class GetLangResponseOk {
    /**
     * Constructs a new <code>GetLangResponseOk</code>.
     * @alias module:model/GetLangResponseOk
     * @param operation {String} 
     * @param result {module:model/GetLangResponseModel} 
     */
    constructor(operation, result) { 
        
        GetLangResponseOk.initialize(this, operation, result);
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
     * Constructs a <code>GetLangResponseOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLangResponseOk} obj Optional instance to populate.
     * @return {module:model/GetLangResponseOk} The populated <code>GetLangResponseOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLangResponseOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = GetLangResponseModel.constructFromObject(data['result']);
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
GetLangResponseOk.prototype['operation'] = undefined;

/**
 * @member {module:model/GetLangResponseModel} result
 */
GetLangResponseOk.prototype['result'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
GetLangResponseOk.prototype['status'] = 'OK';






export default GetLangResponseOk;

