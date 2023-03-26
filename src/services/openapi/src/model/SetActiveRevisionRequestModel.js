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
 * The SetActiveRevisionRequestModel model module.
 * @module model/SetActiveRevisionRequestModel
 * @version 0.1.0
 */
class SetActiveRevisionRequestModel {
    /**
     * Constructs a new <code>SetActiveRevisionRequestModel</code>.
     * @alias module:model/SetActiveRevisionRequestModel
     * @param revisionId {String} 
     */
    constructor(revisionId) { 
        
        SetActiveRevisionRequestModel.initialize(this, revisionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, revisionId) { 
        obj['revision_id'] = revisionId;
    }

    /**
     * Constructs a <code>SetActiveRevisionRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetActiveRevisionRequestModel} obj Optional instance to populate.
     * @return {module:model/SetActiveRevisionRequestModel} The populated <code>SetActiveRevisionRequestModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetActiveRevisionRequestModel();

            if (data.hasOwnProperty('revision_id')) {
                obj['revision_id'] = ApiClient.convertToType(data['revision_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} revision_id
 */
SetActiveRevisionRequestModel.prototype['revision_id'] = undefined;






export default SetActiveRevisionRequestModel;

