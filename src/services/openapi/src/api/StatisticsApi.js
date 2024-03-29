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
import HTTPValidationError from '../model/HTTPValidationError';
import ItemCountResponseModel from '../model/ItemCountResponseModel';
import ListStatisticsResponseModel from '../model/ListStatisticsResponseModel';

/**
* Statistics service.
* @module api/StatisticsApi
* @version 0.1.0
*/
export default class StatisticsApi {

    /**
    * Constructs a new StatisticsApi. 
    * @alias module:api/StatisticsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Count Fuzzer Statistics Records
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemCountResponseModel} and HTTP response
     */
    countFuzzerStatisticsRecordsWithHttpInfo(userId, projectId, fuzzerId, groupBy, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling countFuzzerStatisticsRecords");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling countFuzzerStatisticsRecords");
      }
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling countFuzzerStatisticsRecords");
      }
      // verify the required parameter 'groupBy' is set
      if (groupBy === undefined || groupBy === null) {
        throw new Error("Missing the required parameter 'groupBy' when calling countFuzzerStatisticsRecords");
      }

      let pathParams = {
        'user_id': userId,
        'project_id': projectId,
        'fuzzer_id': fuzzerId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'group_by': groupBy,
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd']
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
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/statistics/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Count Fuzzer Statistics Records
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemCountResponseModel}
     */
    countFuzzerStatisticsRecords(userId, projectId, fuzzerId, groupBy, opts) {
      return this.countFuzzerStatisticsRecordsWithHttpInfo(userId, projectId, fuzzerId, groupBy, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Count Revision Statistics Records
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {String} revisionId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ItemCountResponseModel} and HTTP response
     */
    countRevisionStatisticsRecordsWithHttpInfo(userId, projectId, fuzzerId, revisionId, groupBy, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling countRevisionStatisticsRecords");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling countRevisionStatisticsRecords");
      }
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling countRevisionStatisticsRecords");
      }
      // verify the required parameter 'revisionId' is set
      if (revisionId === undefined || revisionId === null) {
        throw new Error("Missing the required parameter 'revisionId' when calling countRevisionStatisticsRecords");
      }
      // verify the required parameter 'groupBy' is set
      if (groupBy === undefined || groupBy === null) {
        throw new Error("Missing the required parameter 'groupBy' when calling countRevisionStatisticsRecords");
      }

      let pathParams = {
        'user_id': userId,
        'project_id': projectId,
        'fuzzer_id': fuzzerId,
        'revision_id': revisionId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'group_by': groupBy,
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd']
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
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/statistics/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Count Revision Statistics Records
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {String} revisionId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ItemCountResponseModel}
     */
    countRevisionStatisticsRecords(userId, projectId, fuzzerId, revisionId, groupBy, opts) {
      return this.countRevisionStatisticsRecordsWithHttpInfo(userId, projectId, fuzzerId, revisionId, groupBy, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Fuzzer Statistics
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStatisticsResponseModel} and HTTP response
     */
    listFuzzerStatisticsWithHttpInfo(userId, projectId, fuzzerId, groupBy, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listFuzzerStatistics");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listFuzzerStatistics");
      }
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling listFuzzerStatistics");
      }
      // verify the required parameter 'groupBy' is set
      if (groupBy === undefined || groupBy === null) {
        throw new Error("Missing the required parameter 'groupBy' when calling listFuzzerStatistics");
      }

      let pathParams = {
        'user_id': userId,
        'project_id': projectId,
        'fuzzer_id': fuzzerId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum'],
        'group_by': groupBy,
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListStatisticsResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Fuzzer Statistics
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStatisticsResponseModel}
     */
    listFuzzerStatistics(userId, projectId, fuzzerId, groupBy, opts) {
      return this.listFuzzerStatisticsWithHttpInfo(userId, projectId, fuzzerId, groupBy, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Revision Statistics
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {String} revisionId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListStatisticsResponseModel} and HTTP response
     */
    listRevisionStatisticsWithHttpInfo(userId, projectId, fuzzerId, revisionId, groupBy, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listRevisionStatistics");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listRevisionStatistics");
      }
      // verify the required parameter 'fuzzerId' is set
      if (fuzzerId === undefined || fuzzerId === null) {
        throw new Error("Missing the required parameter 'fuzzerId' when calling listRevisionStatistics");
      }
      // verify the required parameter 'revisionId' is set
      if (revisionId === undefined || revisionId === null) {
        throw new Error("Missing the required parameter 'revisionId' when calling listRevisionStatistics");
      }
      // verify the required parameter 'groupBy' is set
      if (groupBy === undefined || groupBy === null) {
        throw new Error("Missing the required parameter 'groupBy' when calling listRevisionStatistics");
      }

      let pathParams = {
        'user_id': userId,
        'project_id': projectId,
        'fuzzer_id': fuzzerId,
        'revision_id': revisionId
      };
      let queryParams = {
        'pg_size': opts['pgSize'],
        'pg_num': opts['pgNum'],
        'group_by': groupBy,
        'date_begin': opts['dateBegin'],
        'date_end': opts['dateEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListStatisticsResponseModel;
      return this.apiClient.callApi(
        '/api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Revision Statistics
     * @param {String} userId 
     * @param {String} projectId 
     * @param {String} fuzzerId 
     * @param {String} revisionId 
     * @param {module:model/String} groupBy An enumeration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pgSize  (default to 100)
     * @param {Number} opts.pgNum  (default to 0)
     * @param {String} opts.dateBegin 
     * @param {String} opts.dateEnd 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListStatisticsResponseModel}
     */
    listRevisionStatistics(userId, projectId, fuzzerId, revisionId, groupBy, opts) {
      return this.listRevisionStatisticsWithHttpInfo(userId, projectId, fuzzerId, revisionId, groupBy, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
