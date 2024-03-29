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
import UserTrashbinEmptyResponseModel from './UserTrashbinEmptyResponseModel';

/**
 * The ResponseUserTrashbinEmptyOk model module.
 * @module model/ResponseUserTrashbinEmptyOk
 * @version 0.1.0
 */
class ResponseUserTrashbinEmptyOk {
    /**
     * Constructs a new <code>ResponseUserTrashbinEmptyOk</code>.
     * @alias module:model/ResponseUserTrashbinEmptyOk
     * @param operation {String} 
     * @param response {module:model/UserTrashbinEmptyResponseModel} 
     */
    constructor(operation, response) { 
        
        ResponseUserTrashbinEmptyOk.initialize(this, operation, response);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, operation, response) { 
        obj['operation'] = operation;
        obj['response'] = response;
    }

    /**
     * Constructs a <code>ResponseUserTrashbinEmptyOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseUserTrashbinEmptyOk} obj Optional instance to populate.
     * @return {module:model/ResponseUserTrashbinEmptyOk} The populated <code>ResponseUserTrashbinEmptyOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseUserTrashbinEmptyOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = UserTrashbinEmptyResponseModel.constructFromObject(data['response']);
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
ResponseUserTrashbinEmptyOk.prototype['operation'] = undefined;

/**
 * @member {module:model/UserTrashbinEmptyResponseModel} response
 */
ResponseUserTrashbinEmptyOk.prototype['response'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
ResponseUserTrashbinEmptyOk.prototype['status'] = 'OK';






export default ResponseUserTrashbinEmptyOk;

