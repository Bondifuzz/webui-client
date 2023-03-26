# FastApi.RevisionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyCorpusFiles**](RevisionsApi.md#copyCorpusFiles) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{dst_rev_id}/files/corpus | Copy Corpus Files
[**createRevision**](RevisionsApi.md#createRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions | Create Revision
[**deleteRevision**](RevisionsApi.md#deleteRevision) | **DELETE** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id} | Delete Revision
[**downloadRevisionBinaries**](RevisionsApi.md#downloadRevisionBinaries) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/binaries | Download Revision Binaries
[**downloadRevisionConfig**](RevisionsApi.md#downloadRevisionConfig) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/config | Download Revision Config
[**downloadRevisionSeeds**](RevisionsApi.md#downloadRevisionSeeds) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/seeds | Download Revision Seeds
[**getActiveRevision**](RevisionsApi.md#getActiveRevision) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/active | Get Active Revision
[**getRevision**](RevisionsApi.md#getRevision) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id} | Get Revision
[**getRevisionByName**](RevisionsApi.md#getRevisionByName) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/lookup | Get Revision By Name
[**getRevisionCount**](RevisionsApi.md#getRevisionCount) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/count | Get Revision Count
[**listRevisions**](RevisionsApi.md#listRevisions) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions | List Revisions
[**restartRevision**](RevisionsApi.md#restartRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/actions/restart | Restart Revision
[**setActiveRevision**](RevisionsApi.md#setActiveRevision) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/active | Set Active Revision
[**startRevision**](RevisionsApi.md#startRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/actions/start | Start Revision
[**stopRevision**](RevisionsApi.md#stopRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/actions/stop | Stop Revision
[**updateRevisionInformation**](RevisionsApi.md#updateRevisionInformation) | **PATCH** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id} | Update Revision Information
[**updateRevisionResources**](RevisionsApi.md#updateRevisionResources) | **PATCH** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/resources | Update Revision Resources
[**uploadRevisionBinaries**](RevisionsApi.md#uploadRevisionBinaries) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/binaries | Upload Revision Binaries
[**uploadRevisionConfig**](RevisionsApi.md#uploadRevisionConfig) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/config | Upload Revision Config
[**uploadRevisionSeeds**](RevisionsApi.md#uploadRevisionSeeds) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/seeds | Upload Revision Seeds



## copyCorpusFiles

> Object copyCorpusFiles(dstRevId, userId, projectId, fuzzerId, body)

Copy Corpus Files

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let dstRevId = "dstRevId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let body = new FastApi.CopyCorpusRequestModel(); // CopyCorpusRequestModel | 
apiInstance.copyCorpusFiles(dstRevId, userId, projectId, fuzzerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dstRevId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **body** | [**CopyCorpusRequestModel**](CopyCorpusRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRevision

> RevisionResponseModel createRevision(userId, projectId, fuzzerId, body)

Create Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let body = new FastApi.CreateRevisionRequestModel(); // CreateRevisionRequestModel | 
apiInstance.createRevision(userId, projectId, fuzzerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **body** | [**CreateRevisionRequestModel**](CreateRevisionRequestModel.md)|  | 

### Return type

[**RevisionResponseModel**](RevisionResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRevision

> Object deleteRevision(revisionId, fuzzerId, userId, projectId, action, opts)

Delete Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let action = "action_example"; // String | An enumeration.
let opts = {
  'newName': "newName_example", // String | 
  'noBackup': false // Boolean | 
};
apiInstance.deleteRevision(revisionId, fuzzerId, userId, projectId, action, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **action** | **String**| An enumeration. | 
 **newName** | **String**|  | [optional] 
 **noBackup** | **Boolean**|  | [optional] [default to false]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadRevisionBinaries

> Object downloadRevisionBinaries(revisionId, userId, projectId, fuzzerId)

Download Revision Binaries

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.downloadRevisionBinaries(revisionId, userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream


## downloadRevisionConfig

> Object downloadRevisionConfig(revisionId, userId, projectId, fuzzerId)

Download Revision Config

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.downloadRevisionConfig(revisionId, userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream


## downloadRevisionSeeds

> Object downloadRevisionSeeds(revisionId, userId, projectId, fuzzerId)

Download Revision Seeds

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.downloadRevisionSeeds(revisionId, userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream


## getActiveRevision

> RevisionResponseModel getActiveRevision(userId, projectId, fuzzerId)

Get Active Revision

Get active revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.getActiveRevision(userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

[**RevisionResponseModel**](RevisionResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRevision

> RevisionResponseModel getRevision(revisionId, fuzzerId, userId, projectId)

Get Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.getRevision(revisionId, fuzzerId, userId, projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 

### Return type

[**RevisionResponseModel**](RevisionResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRevisionByName

> RevisionResponseModel getRevisionByName(fuzzerId, userId, projectId, name)

Get Revision By Name

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let name = "name_example"; // String | 
apiInstance.getRevisionByName(fuzzerId, userId, projectId, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **name** | **String**|  | 

### Return type

[**RevisionResponseModel**](RevisionResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRevisionCount

> ItemCountResponseModel getRevisionCount(fuzzerId, userId, projectId, opts)

Get Revision Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'removalState': "removalState_example", // String | An enumeration.
  'statuses': [new FastApi.ORMRevisionStatus()], // [ORMRevisionStatus] | 
  'health': [new FastApi.ORMHealth()] // [ORMHealth] | 
};
apiInstance.getRevisionCount(fuzzerId, userId, projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **removalState** | **String**| An enumeration. | [optional] 
 **statuses** | [**[ORMRevisionStatus]**](ORMRevisionStatus.md)|  | [optional] 
 **health** | [**[ORMHealth]**](ORMHealth.md)|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRevisions

> ListRevisionsResponseModel listRevisions(fuzzerId, userId, projectId, opts)

List Revisions

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'removalState': "removalState_example", // String | An enumeration.
  'statuses': [new FastApi.ORMRevisionStatus()], // [ORMRevisionStatus] | 
  'health': [new FastApi.ORMHealth()] // [ORMHealth] | 
};
apiInstance.listRevisions(fuzzerId, userId, projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]
 **removalState** | **String**| An enumeration. | [optional] 
 **statuses** | [**[ORMRevisionStatus]**](ORMRevisionStatus.md)|  | [optional] 
 **health** | [**[ORMHealth]**](ORMHealth.md)|  | [optional] 

### Return type

[**ListRevisionsResponseModel**](ListRevisionsResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restartRevision

> Object restartRevision(revisionId, userId, projectId, fuzzerId)

Restart Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.restartRevision(revisionId, userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setActiveRevision

> Object setActiveRevision(userId, projectId, fuzzerId, body)

Set Active Revision

Set active revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let body = new FastApi.SetActiveRevisionRequestModel(); // SetActiveRevisionRequestModel | 
apiInstance.setActiveRevision(userId, projectId, fuzzerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **body** | [**SetActiveRevisionRequestModel**](SetActiveRevisionRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startRevision

> Object startRevision(revisionId, userId, projectId, fuzzerId)

Start Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.startRevision(revisionId, userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopRevision

> Object stopRevision(revisionId, userId, projectId, fuzzerId)

Stop Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
apiInstance.stopRevision(revisionId, userId, projectId, fuzzerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRevisionInformation

> Object updateRevisionInformation(revisionId, fuzzerId, userId, projectId, body)

Update Revision Information

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let body = new FastApi.UpdateRevisionInfoRequestModel(); // UpdateRevisionInfoRequestModel | 
apiInstance.updateRevisionInformation(revisionId, fuzzerId, userId, projectId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **body** | [**UpdateRevisionInfoRequestModel**](UpdateRevisionInfoRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRevisionResources

> Object updateRevisionResources(fuzzerId, revisionId, userId, projectId, body)

Update Revision Resources

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let fuzzerId = "fuzzerId_example"; // String | 
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let body = new FastApi.UpdateRevisionResourcesRequestModel(); // UpdateRevisionResourcesRequestModel | 
apiInstance.updateRevisionResources(fuzzerId, revisionId, userId, projectId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **body** | [**UpdateRevisionResourcesRequestModel**](UpdateRevisionResourcesRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadRevisionBinaries

> Object uploadRevisionBinaries(revisionId, userId, projectId, fuzzerId, body)

Upload Revision Binaries

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let body = "/path/to/file"; // File | 
apiInstance.uploadRevisionBinaries(revisionId, userId, projectId, fuzzerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **body** | **File**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## uploadRevisionConfig

> Object uploadRevisionConfig(revisionId, userId, projectId, fuzzerId, body)

Upload Revision Config

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let body = "/path/to/file"; // File | 
apiInstance.uploadRevisionConfig(revisionId, userId, projectId, fuzzerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **body** | **File**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## uploadRevisionSeeds

> Object uploadRevisionSeeds(revisionId, userId, projectId, fuzzerId, body)

Upload Revision Seeds

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.RevisionsApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let body = "/path/to/file"; // File | 
apiInstance.uploadRevisionSeeds(revisionId, userId, projectId, fuzzerId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **revisionId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **body** | **File**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

