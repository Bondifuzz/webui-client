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
import ErrorModel from './ErrorModel';

/**
 * The ResponseModelFailed model module.
 * @module model/ResponseModelFailed
 * @version 0.1.0
 */
class ResponseModelFailed {
    /**
     * Constructs a new <code>ResponseModelFailed</code>.
     * @alias module:model/ResponseModelFailed
     * @param error {module:model/ErrorModel} 
     */
    constructor(error) { 
        
        ResponseModelFailed.initialize(this, error);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, error) { 
        obj['error'] = error;
    }

    /**
     * Constructs a <code>ResponseModelFailed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseModelFailed} obj Optional instance to populate.
     * @return {module:model/ResponseModelFailed} The populated <code>ResponseModelFailed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseModelFailed();

            if (data.hasOwnProperty('error')) {
                obj['error'] = ErrorModel.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ErrorModel} error
 */
ResponseModelFailed.prototype['error'] = undefined;

/**
 * @member {String} status
 * @default 'FAILED'
 */
ResponseModelFailed.prototype['status'] = 'FAILED';






export default ResponseModelFailed;

