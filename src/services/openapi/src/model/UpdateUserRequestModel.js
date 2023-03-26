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
 * The UpdateUserRequestModel model module.
 * @module model/UpdateUserRequestModel
 * @version 0.1.0
 */
class UpdateUserRequestModel {
    /**
     * Constructs a new <code>UpdateUserRequestModel</code>.
     * @alias module:model/UpdateUserRequestModel
     */
    constructor() { 
        
        UpdateUserRequestModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateUserRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserRequestModel} obj Optional instance to populate.
     * @return {module:model/UpdateUserRequestModel} The populated <code>UpdateUserRequestModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUserRequestModel();

            if (data.hasOwnProperty('current_password')) {
                obj['current_password'] = ApiClient.convertToType(data['current_password'], 'String');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new_password')) {
                obj['new_password'] = ApiClient.convertToType(data['new_password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} current_password
 */
UpdateUserRequestModel.prototype['current_password'] = undefined;

/**
 * @member {String} display_name
 */
UpdateUserRequestModel.prototype['display_name'] = undefined;

/**
 * @member {String} email
 */
UpdateUserRequestModel.prototype['email'] = undefined;

/**
 * @member {String} name
 */
UpdateUserRequestModel.prototype['name'] = undefined;

/**
 * @member {String} new_password
 */
UpdateUserRequestModel.prototype['new_password'] = undefined;






export default UpdateUserRequestModel;

