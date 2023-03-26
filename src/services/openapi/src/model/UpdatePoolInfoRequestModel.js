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
 * The UpdatePoolInfoRequestModel model module.
 * @module model/UpdatePoolInfoRequestModel
 * @version 0.1.0
 */
class UpdatePoolInfoRequestModel {
    /**
     * Constructs a new <code>UpdatePoolInfoRequestModel</code>.
     * @alias module:model/UpdatePoolInfoRequestModel
     */
    constructor() { 
        
        UpdatePoolInfoRequestModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePoolInfoRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePoolInfoRequestModel} obj Optional instance to populate.
     * @return {module:model/UpdatePoolInfoRequestModel} The populated <code>UpdatePoolInfoRequestModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePoolInfoRequestModel();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
UpdatePoolInfoRequestModel.prototype['description'] = undefined;

/**
 * @member {String} name
 */
UpdatePoolInfoRequestModel.prototype['name'] = undefined;






export default UpdatePoolInfoRequestModel;

