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
 * The CreateUserRequestModel model module.
 * @module model/CreateUserRequestModel
 * @version 0.1.0
 */
class CreateUserRequestModel {
    /**
     * Constructs a new <code>CreateUserRequestModel</code>.
     * @alias module:model/CreateUserRequestModel
     * @param displayName {String} 
     * @param email {String} 
     * @param isAdmin {Boolean} 
     * @param name {String} 
     * @param password {String} 
     */
    constructor(displayName, email, isAdmin, name, password) { 
        
        CreateUserRequestModel.initialize(this, displayName, email, isAdmin, name, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayName, email, isAdmin, name, password) { 
        obj['display_name'] = displayName;
        obj['email'] = email;
        obj['is_admin'] = isAdmin;
        obj['name'] = name;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>CreateUserRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserRequestModel} obj Optional instance to populate.
     * @return {module:model/CreateUserRequestModel} The populated <code>CreateUserRequestModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserRequestModel();

            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} display_name
 */
CreateUserRequestModel.prototype['display_name'] = undefined;

/**
 * @member {String} email
 */
CreateUserRequestModel.prototype['email'] = undefined;

/**
 * @member {Boolean} is_admin
 */
CreateUserRequestModel.prototype['is_admin'] = undefined;

/**
 * @member {String} name
 */
CreateUserRequestModel.prototype['name'] = undefined;

/**
 * @member {String} password
 */
CreateUserRequestModel.prototype['password'] = undefined;






export default CreateUserRequestModel;

