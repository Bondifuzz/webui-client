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
import ORMIntegrationStatus from './ORMIntegrationStatus';
import ORMIntegrationTypeID from './ORMIntegrationTypeID';

/**
 * The GetIntegrationResponseModel model module.
 * @module model/GetIntegrationResponseModel
 * @version 0.1.0
 */
class GetIntegrationResponseModel {
    /**
     * Constructs a new <code>GetIntegrationResponseModel</code>.
     * @alias module:model/GetIntegrationResponseModel
     * @param enabled {Boolean} 
     * @param name {String} 
     * @param numUndelivered {Number} 
     * @param status {module:model/ORMIntegrationStatus} 
     * @param type {module:model/ORMIntegrationTypeID} 
     */
    constructor(enabled, name, numUndelivered, status, type) { 
        
        GetIntegrationResponseModel.initialize(this, enabled, name, numUndelivered, status, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, enabled, name, numUndelivered, status, type) { 
        obj['enabled'] = enabled;
        obj['name'] = name;
        obj['num_undelivered'] = numUndelivered;
        obj['status'] = status;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>GetIntegrationResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetIntegrationResponseModel} obj Optional instance to populate.
     * @return {module:model/GetIntegrationResponseModel} The populated <code>GetIntegrationResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetIntegrationResponseModel();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_error')) {
                obj['last_error'] = ApiClient.convertToType(data['last_error'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('num_undelivered')) {
                obj['num_undelivered'] = ApiClient.convertToType(data['num_undelivered'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ORMIntegrationStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ORMIntegrationTypeID.constructFromObject(data['type']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enabled
 */
GetIntegrationResponseModel.prototype['enabled'] = undefined;

/**
 * @member {String} id
 */
GetIntegrationResponseModel.prototype['id'] = undefined;

/**
 * @member {String} last_error
 */
GetIntegrationResponseModel.prototype['last_error'] = undefined;

/**
 * @member {String} name
 */
GetIntegrationResponseModel.prototype['name'] = undefined;

/**
 * @member {Number} num_undelivered
 */
GetIntegrationResponseModel.prototype['num_undelivered'] = undefined;

/**
 * @member {module:model/ORMIntegrationStatus} status
 */
GetIntegrationResponseModel.prototype['status'] = undefined;

/**
 * @member {module:model/ORMIntegrationTypeID} type
 */
GetIntegrationResponseModel.prototype['type'] = undefined;






export default GetIntegrationResponseModel;

