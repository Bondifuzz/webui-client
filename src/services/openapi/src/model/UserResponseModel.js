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
 * The UserResponseModel model module.
 * @module model/UserResponseModel
 * @version 0.1.0
 */
class UserResponseModel {
    /**
     * Constructs a new <code>UserResponseModel</code>.
     * @alias module:model/UserResponseModel
     * @param displayName {String} 
     * @param email {String} 
     * @param id {String} 
     * @param isAdmin {Boolean} 
     * @param isConfirmed {Boolean} 
     * @param isDisabled {Boolean} 
     * @param isSystem {Boolean} 
     * @param name {String} 
     */
    constructor(displayName, email, id, isAdmin, isConfirmed, isDisabled, isSystem, name) { 
        
        UserResponseModel.initialize(this, displayName, email, id, isAdmin, isConfirmed, isDisabled, isSystem, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayName, email, id, isAdmin, isConfirmed, isDisabled, isSystem, name) { 
        obj['display_name'] = displayName;
        obj['email'] = email;
        obj['id'] = id;
        obj['is_admin'] = isAdmin;
        obj['is_confirmed'] = isConfirmed;
        obj['is_disabled'] = isDisabled;
        obj['is_system'] = isSystem;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UserResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserResponseModel} obj Optional instance to populate.
     * @return {module:model/UserResponseModel} The populated <code>UserResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponseModel();

            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('erasure_date')) {
                obj['erasure_date'] = ApiClient.convertToType(data['erasure_date'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('is_confirmed')) {
                obj['is_confirmed'] = ApiClient.convertToType(data['is_confirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('is_disabled')) {
                obj['is_disabled'] = ApiClient.convertToType(data['is_disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('is_system')) {
                obj['is_system'] = ApiClient.convertToType(data['is_system'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} display_name
 */
UserResponseModel.prototype['display_name'] = undefined;

/**
 * @member {String} email
 */
UserResponseModel.prototype['email'] = undefined;

/**
 * @member {String} erasure_date
 */
UserResponseModel.prototype['erasure_date'] = undefined;

/**
 * @member {String} id
 */
UserResponseModel.prototype['id'] = undefined;

/**
 * @member {Boolean} is_admin
 */
UserResponseModel.prototype['is_admin'] = undefined;

/**
 * @member {Boolean} is_confirmed
 */
UserResponseModel.prototype['is_confirmed'] = undefined;

/**
 * @member {Boolean} is_disabled
 */
UserResponseModel.prototype['is_disabled'] = undefined;

/**
 * @member {Boolean} is_system
 */
UserResponseModel.prototype['is_system'] = undefined;

/**
 * @member {String} name
 */
UserResponseModel.prototype['name'] = undefined;






export default UserResponseModel;

