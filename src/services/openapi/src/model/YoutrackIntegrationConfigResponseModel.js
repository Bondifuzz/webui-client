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
 * The YoutrackIntegrationConfigResponseModel model module.
 * @module model/YoutrackIntegrationConfigResponseModel
 * @version 0.1.0
 */
class YoutrackIntegrationConfigResponseModel {
    /**
     * Constructs a new <code>YoutrackIntegrationConfigResponseModel</code>.
     * @alias module:model/YoutrackIntegrationConfigResponseModel
     * @param id {String} 
     * @param project {String} 
     * @param token {String} 
     * @param url {String} 
     */
    constructor(id, project, token, url) { 
        
        YoutrackIntegrationConfigResponseModel.initialize(this, id, project, token, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, project, token, url) { 
        obj['id'] = id;
        obj['project'] = project;
        obj['token'] = token;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>YoutrackIntegrationConfigResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/YoutrackIntegrationConfigResponseModel} obj Optional instance to populate.
     * @return {module:model/YoutrackIntegrationConfigResponseModel} The populated <code>YoutrackIntegrationConfigResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new YoutrackIntegrationConfigResponseModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('project')) {
                obj['project'] = ApiClient.convertToType(data['project'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
YoutrackIntegrationConfigResponseModel.prototype['id'] = undefined;

/**
 * @member {String} project
 */
YoutrackIntegrationConfigResponseModel.prototype['project'] = undefined;

/**
 * @member {String} token
 */
YoutrackIntegrationConfigResponseModel.prototype['token'] = undefined;

/**
 * @member {String} url
 */
YoutrackIntegrationConfigResponseModel.prototype['url'] = undefined;






export default YoutrackIntegrationConfigResponseModel;

