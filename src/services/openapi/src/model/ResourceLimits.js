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
 * The ResourceLimits model module.
 * @module model/ResourceLimits
 * @version 0.1.0
 */
class ResourceLimits {
    /**
     * Constructs a new <code>ResourceLimits</code>.
     * @alias module:model/ResourceLimits
     * @param maxValue {Number} 
     * @param minValue {Number} 
     */
    constructor(maxValue, minValue) { 
        
        ResourceLimits.initialize(this, maxValue, minValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, maxValue, minValue) { 
        obj['max_value'] = maxValue;
        obj['min_value'] = minValue;
    }

    /**
     * Constructs a <code>ResourceLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceLimits} obj Optional instance to populate.
     * @return {module:model/ResourceLimits} The populated <code>ResourceLimits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceLimits();

            if (data.hasOwnProperty('max_value')) {
                obj['max_value'] = ApiClient.convertToType(data['max_value'], 'Number');
            }
            if (data.hasOwnProperty('min_value')) {
                obj['min_value'] = ApiClient.convertToType(data['min_value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} max_value
 */
ResourceLimits.prototype['max_value'] = undefined;

/**
 * @member {Number} min_value
 */
ResourceLimits.prototype['min_value'] = undefined;






export default ResourceLimits;

