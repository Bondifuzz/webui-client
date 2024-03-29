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
 * The UpdateRevisionResourcesRequestModel model module.
 * @module model/UpdateRevisionResourcesRequestModel
 * @version 0.1.0
 */
class UpdateRevisionResourcesRequestModel {
    /**
     * Constructs a new <code>UpdateRevisionResourcesRequestModel</code>.
     * @alias module:model/UpdateRevisionResourcesRequestModel
     */
    constructor() { 
        
        UpdateRevisionResourcesRequestModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateRevisionResourcesRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRevisionResourcesRequestModel} obj Optional instance to populate.
     * @return {module:model/UpdateRevisionResourcesRequestModel} The populated <code>UpdateRevisionResourcesRequestModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRevisionResourcesRequestModel();

            if (data.hasOwnProperty('cpu_usage')) {
                obj['cpu_usage'] = ApiClient.convertToType(data['cpu_usage'], 'Number');
            }
            if (data.hasOwnProperty('ram_usage')) {
                obj['ram_usage'] = ApiClient.convertToType(data['ram_usage'], 'Number');
            }
            if (data.hasOwnProperty('tmpfs_size')) {
                obj['tmpfs_size'] = ApiClient.convertToType(data['tmpfs_size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cpu_usage
 */
UpdateRevisionResourcesRequestModel.prototype['cpu_usage'] = undefined;

/**
 * @member {Number} ram_usage
 */
UpdateRevisionResourcesRequestModel.prototype['ram_usage'] = undefined;

/**
 * @member {Number} tmpfs_size
 */
UpdateRevisionResourcesRequestModel.prototype['tmpfs_size'] = undefined;






export default UpdateRevisionResourcesRequestModel;

