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
import ORMLangID from './ORMLangID';

/**
 * The LangResponseModel model module.
 * @module model/LangResponseModel
 * @version 0.1.0
 */
class LangResponseModel {
    /**
     * Constructs a new <code>LangResponseModel</code>.
     * @alias module:model/LangResponseModel
     * @param displayName {String} 
     * @param id {module:model/ORMLangID} 
     */
    constructor(displayName, id) { 
        
        LangResponseModel.initialize(this, displayName, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayName, id) { 
        obj['display_name'] = displayName;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>LangResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LangResponseModel} obj Optional instance to populate.
     * @return {module:model/LangResponseModel} The populated <code>LangResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LangResponseModel();

            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ORMLangID.constructFromObject(data['id']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} display_name
 */
LangResponseModel.prototype['display_name'] = undefined;

/**
 * @member {module:model/ORMLangID} id
 */
LangResponseModel.prototype['id'] = undefined;






export default LangResponseModel;

