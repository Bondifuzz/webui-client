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


import ApiClient from "../ApiClient";
import CreateEngineRequestModel from '../model/CreateEngineRequestModel';
import EngineResponseModel from '../model/EngineResponseModel';
import ErrorModel from '../model/ErrorModel';
import HTTPValidationError from '../model/HTTPValidationError';
import ListEnginesResponseModel from '../model/ListEnginesResponseModel';
import ORMLangID from '../model/ORMLangID';
import UpdateEngineRequestModel from '../model/UpdateEngineRequestModel';

/**
* EnginesAdmin service.
* @module api/EnginesAdminApi
* @version 0.1.0
*/
export default class EnginesAdminApi {

    /**
    * Constructs a new EnginesAdminApi. 
    * @alias module:api/EnginesAdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Engine
     * @param {module:model/CreateEngineRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EngineResponseModel} and HTTP response
     */
    createEngineWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createEngine");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EngineResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/engines', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Engine
     * @param {module:model/CreateEngineRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EngineResponseModel}
     */
    createEngine(body) {
      return this.createEngineWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Engine
     * @param {module:model/String} engineId An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteEngineWithHttpInfo(engineId) {
      let postBody = null;
      // verify the required parameter 'engineId' is set
      if (engineId === undefined || engineId === null) {
        throw new Error("Missing the required parameter 'engineId' when calling deleteEngine");
      }

      let pathParams = {
        'engine_id': engineId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/admin/engines/{engine_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Engine
     * @param {module:model/String} engineId An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteEngine(engineId) {
      return this.deleteEngineWithHttpInfo(engineId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Disable Engine Lang
     * @param {module:model/String} engineId An enumeration.
     * @param {module:model/String} lang An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    disableEngineLangWithHttpInfo(engineId, lang) {
      let postBody = null;
      // verify the required parameter 'engineId' is set
      if (engineId === undefined || engineId === null) {
        throw new Error("Missing the required parameter 'engineId' when calling disableEngineLang");
      }
      // verify the required parameter 'lang' is set
      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling disableEngineLang");
      }

      let pathParams = {
        'engine_id': engineId,
        'lang': lang
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/admin/engines/{engine_id}/langs/{lang}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Disable Engine Lang
     * @param {module:model/String} engineId An enumeration.
     * @param {module:model/String} lang An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    disableEngineLang(engineId, lang) {
      return this.disableEngineLangWithHttpInfo(engineId, lang)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Enable Engine Lang
     * @param {module:model/String} engineId An enumeration.
     * @param {module:model/String} lang An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    enableEngineLangWithHttpInfo(engineId, lang) {
      let postBody = null;
      // verify the required parameter 'engineId' is set
      if (engineId === undefined || engineId === null) {
        throw new Error("Missing the required parameter 'engineId' when calling enableEngineLang");
      }
      // verify the required parameter 'lang' is set
      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling enableEngineLang");
      }

      let pathParams = {
        'engine_id': engineId,
        'lang': lang
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/admin/engines/{engine_id}/langs/{lang}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Enable Engine Lang
     * @param {module:model/String} engineId An enumeration.
     * @param {module:model/String} lang An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    enableEngineLang(engineId, lang) {
      return this.enableEngineLangWithHttpInfo(engineId, lang)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Engine
     * @param {module:model/String} engineId An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EngineResponseModel} and HTTP response
     */
    getEngineWithHttpInfo(engineId) {
      let postBody = null;
      // verify the required parameter 'engineId' is set
      if (engineId === undefined || engineId === null) {
        throw new Error("Missing the required parameter 'engineId' when calling getEngine");
      }

      let pathParams = {
        'engine_id': engineId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EngineResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/engines/{engine_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Engine
     * @param {module:model/String} engineId An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EngineResponseModel}
     */
    getEngine(engineId) {
      return this.getEngineWithHttpInfo(engineId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Engines
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {module:model/String} opts.lang An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListEnginesResponseModel} and HTTP response
     */
    listEnginesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum'],
        'lang': opts['lang']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListEnginesResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/engines', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Engines
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {module:model/String} opts.lang An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListEnginesResponseModel}
     */
    listEngines(opts) {
      return this.listEnginesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set Engine Langs
     * @param {module:model/String} engineId An enumeration.
     * @param {Array.<module:model/ORMLangID>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    setEngineLangsWithHttpInfo(engineId, body) {
      let postBody = body;
      // verify the required parameter 'engineId' is set
      if (engineId === undefined || engineId === null) {
        throw new Error("Missing the required parameter 'engineId' when calling setEngineLangs");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setEngineLangs");
      }

      let pathParams = {
        'engine_id': engineId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/admin/engines/{engine_id}/langs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set Engine Langs
     * @param {module:model/String} engineId An enumeration.
     * @param {Array.<module:model/ORMLangID>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    setEngineLangs(engineId, body) {
      return this.setEngineLangsWithHttpInfo(engineId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Engine
     * @param {module:model/String} engineId An enumeration.
     * @param {module:model/UpdateEngineRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateEngineWithHttpInfo(engineId, body) {
      let postBody = body;
      // verify the required parameter 'engineId' is set
      if (engineId === undefined || engineId === null) {
        throw new Error("Missing the required parameter 'engineId' when calling updateEngine");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateEngine");
      }

      let pathParams = {
        'engine_id': engineId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/admin/engines/{engine_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Engine
     * @param {module:model/String} engineId An enumeration.
     * @param {module:model/UpdateEngineRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateEngine(engineId, body) {
      return this.updateEngineWithHttpInfo(engineId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
