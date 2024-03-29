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
* Enum class ORMIntegrationTypeID.
* @enum {}
* @readonly
*/
export default class ORMIntegrationTypeID {
    
        /**
         * value: "jira"
         * @const
         */
        "jira" = "jira";

    
        /**
         * value: "youtrack"
         * @const
         */
        "youtrack" = "youtrack";

    

    /**
    * Returns a <code>ORMIntegrationTypeID</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ORMIntegrationTypeID} The enum <code>ORMIntegrationTypeID</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

