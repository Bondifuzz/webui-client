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
import CrashResponseModel from '../model/CrashResponseModel';
import ErrorModel from '../model/ErrorModel';
import HTTPValidationError from '../model/HTTPValidationError';
import ItemCountResponseModel from '../model/ItemCountResponseModel';
import ListCrashesResponseModel from '../model/ListCrashesResponseModel';
import PutArchivedCrashRequestModel from '../model/PutArchivedCrashRequestModel';

/**
* Crashes service.
* @module api/CrashesApi
* @version 0.1.0
*/
export default class CrashesApi {

    /**
    * Constructs a new CrashesApi. 
    * @alias module:api/CrashesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Change Crash Archived
     * @param {String} fuzzerId 
     * @param {String} crashId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {module:model/PutArchivedCrashRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    changeCrashArchivedWithHttpInfo(fuzzerId, crashId, userId, projectId, body) {
      let postBody = body;
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling changeCrashArchived");
      }
      // verify the required parameter 'crashId' is set
      if (crashId === undefined || crashId === null) {
        throw new Error("Missing the required parameter 'crashId' when calling changeCrashArchived");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling changeCrashArchived");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling changeCrashArchived");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling changeCrashArchived");
      }

      let pathParams = {
        'fuzzer_id': fuzzerId,
        'crash_id': crashId,
        'user_id': userId,
        'project_id': projectId
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
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}/archived', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Change Crash Archived
     * @param {String} fuzzerId 
     * @param {String} crashId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {module:model/PutArchivedCrashRequestModel} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    changeCrashArchived(fuzzerId, crashId, userId, projectId, body) {
      return this.changeCrashArchivedWithHttpInfo(fuzzerId, crashId, userId, projectId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count Fuzzer Crashes
     * @param {String} fuzzerId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemCountResponseModel} and HTTP response
     */
    countFuzzerCrashesWithHttpInfo(fuzzerId, userId, projectId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling countFuzzerCrashes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling countFuzzerCrashes");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling countFuzzerCrashes");
      }

      let pathParams = {
        'fuzzer_id': fuzzerId,
        'user_id': userId,
        'project_id': projectId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd'],
        'archived': opts['archived'],
        'reproduced': opts['reproduced']
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
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Count Fuzzer Crashes
     * @param {String} fuzzerId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemCountResponseModel}
     */
    countFuzzerCrashes(fuzzerId, userId, projectId, opts) {
      return this.countFuzzerCrashesWithHttpInfo(fuzzerId, userId, projectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count Revision Crashes
     * @param {String} revisionId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemCountResponseModel} and HTTP response
     */
    countRevisionCrashesWithHttpInfo(revisionId, userId, projectId, fuzzerId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'revisionId' is set
      if (revisionId === undefined || revisionId === null) {
        throw new Error("Missing the required parameter 'revisionId' when calling countRevisionCrashes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling countRevisionCrashes");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling countRevisionCrashes");
      }
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling countRevisionCrashes");
      }

      let pathParams = {
        'revision_id': revisionId,
        'user_id': userId,
        'project_id': projectId,
        'fuzzer_id': fuzzerId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd'],
        'archived': opts['archived'],
        'reproduced': opts['reproduced']
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
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/crashes/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Count Revision Crashes
     * @param {String} revisionId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemCountResponseModel}
     */
    countRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts) {
      return this.countRevisionCrashesWithHttpInfo(revisionId, userId, projectId, fuzzerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Download Fuzzer Crash
     * @param {String} fuzzerId 
     * @param {String} crashId 
     * @param {String} userId 
     * @param {String} projectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    downloadFuzzerCrashWithHttpInfo(fuzzerId, crashId, userId, projectId) {
      let postBody = null;
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling downloadFuzzerCrash");
      }
      // verify the required parameter 'crashId' is set
      if (crashId === undefined || crashId === null) {
        throw new Error("Missing the required parameter 'crashId' when calling downloadFuzzerCrash");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling downloadFuzzerCrash");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling downloadFuzzerCrash");
      }

      let pathParams = {
        'fuzzer_id': fuzzerId,
        'crash_id': crashId,
        'user_id': userId,
        'project_id': projectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/octet-stream'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}/raw', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download Fuzzer Crash
     * @param {String} fuzzerId 
     * @param {String} crashId 
     * @param {String} userId 
     * @param {String} projectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    downloadFuzzerCrash(fuzzerId, crashId, userId, projectId) {
      return this.downloadFuzzerCrashWithHttpInfo(fuzzerId, crashId, userId, projectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Fuzzer Crash
     * @param {String} fuzzerId 
     * @param {String} crashId 
     * @param {String} userId 
     * @param {String} projectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CrashResponseModel} and HTTP response
     */
    getFuzzerCrashWithHttpInfo(fuzzerId, crashId, userId, projectId) {
      let postBody = null;
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling getFuzzerCrash");
      }
      // verify the required parameter 'crashId' is set
      if (crashId === undefined || crashId === null) {
        throw new Error("Missing the required parameter 'crashId' when calling getFuzzerCrash");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getFuzzerCrash");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getFuzzerCrash");
      }

      let pathParams = {
        'fuzzer_id': fuzzerId,
        'crash_id': crashId,
        'user_id': userId,
        'project_id': projectId
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
      let returnType = CrashResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Fuzzer Crash
     * @param {String} fuzzerId 
     * @param {String} crashId 
     * @param {String} userId 
     * @param {String} projectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CrashResponseModel}
     */
    getFuzzerCrash(fuzzerId, crashId, userId, projectId) {
      return this.getFuzzerCrashWithHttpInfo(fuzzerId, crashId, userId, projectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Fuzzer Crashes
     * @param {String} fuzzerId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCrashesResponseModel} and HTTP response
     */
    listFuzzerCrashesWithHttpInfo(fuzzerId, userId, projectId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling listFuzzerCrashes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listFuzzerCrashes");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listFuzzerCrashes");
      }

      let pathParams = {
        'fuzzer_id': fuzzerId,
        'user_id': userId,
        'project_id': projectId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum'],
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd'],
        'archived': opts['archived'],
        'reproduced': opts['reproduced']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCrashesResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Fuzzer Crashes
     * @param {String} fuzzerId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCrashesResponseModel}
     */
    listFuzzerCrashes(fuzzerId, userId, projectId, opts) {
      return this.listFuzzerCrashesWithHttpInfo(fuzzerId, userId, projectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Revision Crashes
     * @param {String} revisionId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCrashesResponseModel} and HTTP response
     */
    listRevisionCrashesWithHttpInfo(revisionId, userId, projectId, fuzzerId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'revisionId' is set
      if (revisionId === undefined || revisionId === null) {
        throw new Error("Missing the required parameter 'revisionId' when calling listRevisionCrashes");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listRevisionCrashes");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listRevisionCrashes");
      }
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling listRevisionCrashes");
      }

      let pathParams = {
        'revision_id': revisionId,
        'user_id': userId,
        'project_id': projectId,
        'fuzzer_id': fuzzerId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum'],
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd'],
        'archived': opts['archived'],
        'reproduced': opts['reproduced']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCrashesResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/crashes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Revision Crashes
     * @param {String} revisionId 
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @param {Boolean} opts.archived 
     * @param {Boolean} opts.reproduced 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCrashesResponseModel}
     */
    listRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts) {
      return this.listRevisionCrashesWithHttpInfo(revisionId, userId, projectId, fuzzerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
