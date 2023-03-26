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
 * The CrashResponseModel model module.
 * @module model/CrashResponseModel
 * @version 0.1.0
 */
class CrashResponseModel {
    /**
     * Constructs a new <code>CrashResponseModel</code>.
     * @alias module:model/CrashResponseModel
     * @param archived {Boolean} 
     * @param brief {String} 
     * @param created {String} 
     * @param duplicateCount {Number} 
     * @param id {String} 
     * @param output {String} 
     * @param preview {String} 
     * @param reproduced {Boolean} 
     * @param type {String} 
     */
    constructor(archived, brief, created, duplicateCount, id, output, preview, reproduced, type) { 
        
        CrashResponseModel.initialize(this, archived, brief, created, duplicateCount, id, output, preview, reproduced, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, archived, brief, created, duplicateCount, id, output, preview, reproduced, type) { 
        obj['archived'] = archived;
        obj['brief'] = brief;
        obj['created'] = created;
        obj['duplicate_count'] = duplicateCount;
        obj['id'] = id;
        obj['output'] = output;
        obj['preview'] = preview;
        obj['reproduced'] = reproduced;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>CrashResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CrashResponseModel} obj Optional instance to populate.
     * @return {module:model/CrashResponseModel} The populated <code>CrashResponseModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CrashResponseModel();

            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('brief')) {
                obj['brief'] = ApiClient.convertToType(data['brief'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('duplicate_count')) {
                obj['duplicate_count'] = ApiClient.convertToType(data['duplicate_count'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('output')) {
                obj['output'] = ApiClient.convertToType(data['output'], 'String');
            }
            if (data.hasOwnProperty('preview')) {
                obj['preview'] = ApiClient.convertToType(data['preview'], 'String');
            }
            if (data.hasOwnProperty('reproduced')) {
                obj['reproduced'] = ApiClient.convertToType(data['reproduced'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} archived
 */
CrashResponseModel.prototype['archived'] = undefined;

/**
 * @member {String} brief
 */
CrashResponseModel.prototype['brief'] = undefined;

/**
 * @member {String} created
 */
CrashResponseModel.prototype['created'] = undefined;

/**
 * @member {Number} duplicate_count
 */
CrashResponseModel.prototype['duplicate_count'] = undefined;

/**
 * @member {String} id
 */
CrashResponseModel.prototype['id'] = undefined;

/**
 * @member {String} output
 */
CrashResponseModel.prototype['output'] = undefined;

/**
 * @member {String} preview
 */
CrashResponseModel.prototype['preview'] = undefined;

/**
 * @member {Boolean} reproduced
 */
CrashResponseModel.prototype['reproduced'] = undefined;

/**
 * @member {String} type
 */
CrashResponseModel.prototype['type'] = undefined;






export default CrashResponseModel;

