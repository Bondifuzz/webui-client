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
import ProjectTrashbinEmptyResponseModel from './ProjectTrashbinEmptyResponseModel';

/**
 * The ResponseProjectTrashbinEmptyOk model module.
 * @module model/ResponseProjectTrashbinEmptyOk
 * @version 0.1.0
 */
class ResponseProjectTrashbinEmptyOk {
    /**
     * Constructs a new <code>ResponseProjectTrashbinEmptyOk</code>.
     * @alias module:model/ResponseProjectTrashbinEmptyOk
     * @param operation {String} 
     * @param response {module:model/ProjectTrashbinEmptyResponseModel} 
     */
    constructor(operation, response) { 
        
        ResponseProjectTrashbinEmptyOk.initialize(this, operation, response);
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
     * Constructs a <code>ResponseProjectTrashbinEmptyOk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseProjectTrashbinEmptyOk} obj Optional instance to populate.
     * @return {module:model/ResponseProjectTrashbinEmptyOk} The populated <code>ResponseProjectTrashbinEmptyOk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseProjectTrashbinEmptyOk();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ProjectTrashbinEmptyResponseModel.constructFromObject(data['response']);
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
ResponseProjectTrashbinEmptyOk.prototype['operation'] = undefined;

/**
 * @member {module:model/ProjectTrashbinEmptyResponseModel} response
 */
ResponseProjectTrashbinEmptyOk.prototype['response'] = undefined;

/**
 * @member {String} status
 * @default 'OK'
 */
ResponseProjectTrashbinEmptyOk.prototype['status'] = 'OK';






export default ResponseProjectTrashbinEmptyOk;

