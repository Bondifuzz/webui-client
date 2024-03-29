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
import ErrorModel from '../model/ErrorModel';
import HTTPValidationError from '../model/HTTPValidationError';
import ItemCountResponseModel from '../model/ItemCountResponseModel';
import ListPoolsResponseModel from '../model/ListPoolsResponseModel';
import PoolResponseModel from '../model/PoolResponseModel';
import UpdatePoolInfoRequestModel from '../model/UpdatePoolInfoRequestModel';

/**
* Pools service.
* @module api/PoolsApi
* @version 0.1.0
*/
export default class PoolsApi {

    /**
    * Constructs a new PoolsApi. 
    * @alias module:api/PoolsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete Pool
     * @param {String} poolId 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deletePoolWithHttpInfo(poolId, userId) {
      let postBody = null;
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling deletePool");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deletePool");
      }

      let pathParams = {
        'pool_id': poolId,
        'user_id': userId
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
        '/api/v1/users/{user_id}/pools/{pool_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Pool
     * @param {String} poolId 
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deletePool(poolId, userId) {
      return this.deletePoolWithHttpInfo(poolId, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Available Pools Count
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemCountResponseModel} and HTTP response
     */
    getAvailablePoolsCountWithHttpInfo(userId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getAvailablePoolsCount");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'pg_size': opts['pgSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ItemCountResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/pools/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Available Pools Count
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemCountResponseModel}
     */
    getAvailablePoolsCount(userId, opts) {
      return this.getAvailablePoolsCountWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Pool
     * @param {String} userId 
     * @param {String} poolId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PoolResponseModel} and HTTP response
     */
    getPoolWithHttpInfo(userId, poolId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPool");
      }
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling getPool");
      }

      let pathParams = {
        'user_id': userId,
        'pool_id': poolId
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
      let returnType = PoolResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/pools/{pool_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Pool
     * @param {String} userId 
     * @param {String} poolId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PoolResponseModel}
     */
    getPool(userId, poolId) {
      return this.getPoolWithHttpInfo(userId, poolId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Pools
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListPoolsResponseModel} and HTTP response
     */
    listPoolsWithHttpInfo(userId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listPools");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListPoolsResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/pools', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Pools
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPoolsResponseModel}
     */
    listPools(userId, opts) {
      return this.listPoolsWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Pool
     * @param {String} userId 
     * @param {String} poolId 
     * @param {module:model/UpdatePoolInfoRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updatePoolWithHttpInfo(userId, poolId, body) {
      let postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePool");
      }
      // verify the required parameter 'poolId' is set
      if (poolId === undefined || poolId === null) {
        throw new Error("Missing the required parameter 'poolId' when calling updatePool");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePool");
      }

      let pathParams = {
        'user_id': userId,
        'pool_id': poolId
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
        '/api/v1/users/{user_id}/pools/{pool_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Pool
     * @param {String} userId 
     * @param {String} poolId 
     * @param {module:model/UpdatePoolInfoRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updatePool(userId, poolId, body) {
      return this.updatePoolWithHttpInfo(userId, poolId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
