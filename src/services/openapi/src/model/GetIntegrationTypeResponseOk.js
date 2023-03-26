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
import GetIntegrationTypeResponseModel from './GetIntegrationTypeResponseModel';

/**
 * The GetIntegrationTypeResponseOk model module.
 * @module model/GetIntegrationTypeResponseOk
 * @version 0.1.0
 */
class GetIntegrationTypeResponseOk {
    /**
     * Constructs a new <code>GetIntegrationTypeResponseOk</code>.
     * @alias module:model/GetIntegrationTypeResponseOk
     * @param operation {String} 
     * @param result {module:model/GetIntegrationTypeResponseModel} 
     */
    constructor(operation, result) { 
        
        GetIntegrationTypeResponseOk.initialize(this, operation, result);
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
     * Constructs a <code>GetIntegrationTypeResponseOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetIntegrationTypeResponseOk} obj Optional instance to populate.
     * @return {module:model/GetIntegrationTypeResponseOk} The populated <code>GetIntegrationTypeResponseOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetIntegrationTypeResponseOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = GetIntegrationTypeResponseModel.constructFromObject(data['result']);
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
GetIntegrationTypeResponseOk.prototype['operation'] = undefined;

/**
 * @member {module:model/GetIntegrationTypeResponseModel} result
 */
GetIntegrationTypeResponseOk.prototype['result'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
GetIntegrationTypeResponseOk.prototype['status'] = 'OK';






export default GetIntegrationTypeResponseOk;

