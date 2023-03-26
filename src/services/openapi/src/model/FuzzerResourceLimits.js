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
import ResourceLimits from './ResourceLimits';

/**
 * The FuzzerResourceLimits model module.
 * @module model/FuzzerResourceLimits
 * @version 0.1.0
 */
class FuzzerResourceLimits {
    /**
     * Constructs a new <code>FuzzerResourceLimits</code>.
     * @alias module:model/FuzzerResourceLimits
     * @param cpu {module:model/ResourceLimits} 
     * @param ram {module:model/ResourceLimits} 
     * @param ramTotal {module:model/ResourceLimits} 
     * @param tmpfs {module:model/ResourceLimits} 
     */
    constructor(cpu, ram, ramTotal, tmpfs) { 
        
        FuzzerResourceLimits.initialize(this, cpu, ram, ramTotal, tmpfs);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cpu, ram, ramTotal, tmpfs) { 
        obj['cpu'] = cpu;
        obj['ram'] = ram;
        obj['ram_total'] = ramTotal;
        obj['tmpfs'] = tmpfs;
    }

    /**
     * Constructs a <code>FuzzerResourceLimits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FuzzerResourceLimits} obj Optional instance to populate.
     * @return {module:model/FuzzerResourceLimits} The populated <code>FuzzerResourceLimits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FuzzerResourceLimits();

            if (data.hasOwnProperty('cpu')) {
                obj['cpu'] = ResourceLimits.constructFromObject(data['cpu']);
            }
            if (data.hasOwnProperty('ram')) {
                obj['ram'] = ResourceLimits.constructFromObject(data['ram']);
            }
            if (data.hasOwnProperty('ram_total')) {
                obj['ram_total'] = ResourceLimits.constructFromObject(data['ram_total']);
            }
            if (data.hasOwnProperty('tmpfs')) {
                obj['tmpfs'] = ResourceLimits.constructFromObject(data['tmpfs']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResourceLimits} cpu
 */
FuzzerResourceLimits.prototype['cpu'] = undefined;

/**
 * @member {module:model/ResourceLimits} ram
 */
FuzzerResourceLimits.prototype['ram'] = undefined;

/**
 * @member {module:model/ResourceLimits} ram_total
 */
FuzzerResourceLimits.prototype['ram_total'] = undefined;

/**
 * @member {module:model/ResourceLimits} tmpfs
 */
FuzzerResourceLimits.prototype['tmpfs'] = undefined;






export default FuzzerResourceLimits;

