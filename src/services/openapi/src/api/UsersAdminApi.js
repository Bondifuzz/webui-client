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
import AdminUpdateUserRequestModel from '../model/AdminUpdateUserRequestModel';
import CreateUserRequestModel from '../model/CreateUserRequestModel';
import ErrorModel from '../model/ErrorModel';
import HTTPValidationError from '../model/HTTPValidationError';
import ItemCountResponseModel from '../model/ItemCountResponseModel';
import ListUsersResponseModel from '../model/ListUsersResponseModel';
import UserResponseModel from '../model/UserResponseModel';

/**
* UsersAdmin service.
* @module api/UsersAdminApi
* @version 0.1.0
*/
export default class UsersAdminApi {

    /**
    * Constructs a new UsersAdminApi. 
    * @alias module:api/UsersAdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create User
     * @param {module:model/CreateUserRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponseModel} and HTTP response
     */
    createUserWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createUser");
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
      let returnType = UserResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create User
     * @param {module:model/CreateUserRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponseModel}
     */
    createUser(body) {
      return this.createUserWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete User
     * @param {String} userId 
     * @param {module:model/String} action An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.noBackup  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteUserWithHttpInfo(userId, action, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }
      // verify the required parameter 'action' is set
      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling deleteUser");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
        'action': action,
        'no_backup': opts['noBackup']
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
        '/api/v1/admin/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete User
     * @param {String} userId 
     * @param {module:model/String} action An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.noBackup  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteUser(userId, action, opts) {
      return this.deleteUserWithHttpInfo(userId, action, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponseModel} and HTTP response
     */
    getUserWithHttpInfo(userId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUser");
      }

      let pathParams = {
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
      let returnType = UserResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get User
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponseModel}
     */
    getUser(userId) {
      return this.getUserWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User By Name
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserResponseModel} and HTTP response
     */
    getUserByNameWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getUserByName");
      }

      let pathParams = {
      };
      let queryParams = {
        'name': name
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/users/lookup', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get User By Name
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserResponseModel}
     */
    getUserByName(name) {
      return this.getUserByNameWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User Count
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {module:model/String} opts.removalState An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemCountResponseModel} and HTTP response
     */
    getUserCountWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'removal_state': opts['removalState']
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
        '/api/v1/admin/users/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get User Count
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {module:model/String} opts.removalState An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemCountResponseModel}
     */
    getUserCount(opts) {
      return this.getUserCountWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Users
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {module:model/String} opts.removalState An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUsersResponseModel} and HTTP response
     */
    listUsersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum'],
        'removal_state': opts['removalState']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListUsersResponseModel;
      return this.apiClient.callApi(
        '/api/v1/admin/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Users
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {module:model/String} opts.removalState An enumeration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUsersResponseModel}
     */
    listUsers(opts) {
      return this.listUsersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update User
     * @param {String} userId 
     * @param {module:model/AdminUpdateUserRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateUserWithHttpInfo(userId, body) {
      let postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateUser");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUser");
      }

      let pathParams = {
        'user_id': userId
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
        '/api/v1/admin/users/{user_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update User
     * @param {String} userId 
     * @param {module:model/AdminUpdateUserRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateUser(userId, body) {
      return this.updateUserWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
