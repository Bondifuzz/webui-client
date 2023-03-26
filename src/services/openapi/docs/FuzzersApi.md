# FastApi.FuzzersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeCrashArchived**](FuzzersApi.md#changeCrashArchived) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}/archived | Change Crash Archived
[**copyCorpusFiles**](FuzzersApi.md#copyCorpusFiles) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{dst_rev_id}/files/corpus | Copy Corpus Files
[**countFuzzerCrashes**](FuzzersApi.md#countFuzzerCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/count | Count Fuzzer Crashes
[**countFuzzerStatisticsRecords**](FuzzersApi.md#countFuzzerStatisticsRecords) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/statistics/count | Count Fuzzer Statistics Records
[**countRevisionCrashes**](FuzzersApi.md#countRevisionCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/crashes/count | Count Revision Crashes
[**countRevisionStatisticsRecords**](FuzzersApi.md#countRevisionStatisticsRecords) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/statistics/count | Count Revision Statistics Records
[**createFuzzer**](FuzzersApi.md#createFuzzer) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers | Create Fuzzer
[**createRevision**](FuzzersApi.md#createRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions | Create Revision
[**deleteFuzzer**](FuzzersApi.md#deleteFuzzer) | **DELETE** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id} | Delete Fuzzer
[**deleteRevision**](FuzzersApi.md#deleteRevision) | **DELETE** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id} | Delete Revision
[**downloadFuzzerCorpus**](FuzzersApi.md#downloadFuzzerCorpus) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/files/corpus | Download Fuzzer Corpus
[**downloadFuzzerCrash**](FuzzersApi.md#downloadFuzzerCrash) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}/raw | Download Fuzzer Crash
[**downloadRevisionBinaries**](FuzzersApi.md#downloadRevisionBinaries) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/binaries | Download Revision Binaries
[**downloadRevisionConfig**](FuzzersApi.md#downloadRevisionConfig) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/config | Download Revision Config
[**downloadRevisionSeeds**](FuzzersApi.md#downloadRevisionSeeds) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/seeds | Download Revision Seeds
[**emptyProjectTrashbin**](FuzzersApi.md#emptyProjectTrashbin) | **DELETE** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/trashbin | Empty Project Trashbin
[**eraseFuzzerInTrashbin**](FuzzersApi.md#eraseFuzzerInTrashbin) | **DELETE** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/trashbin/{fuzzer_id} | Erase Fuzzer In Trashbin
[**getActiveRevision**](FuzzersApi.md#getActiveRevision) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/active | Get Active Revision
[**getFuzzer**](FuzzersApi.md#getFuzzer) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id} | Get Fuzzer
[**getFuzzerByName**](FuzzersApi.md#getFuzzerByName) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/lookup | Get Fuzzer By Name
[**getFuzzerCount**](FuzzersApi.md#getFuzzerCount) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/count | Get Fuzzer Count
[**getFuzzerCrash**](FuzzersApi.md#getFuzzerCrash) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id} | Get Fuzzer Crash
[**getRevision**](FuzzersApi.md#getRevision) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id} | Get Revision
[**getRevisionByName**](FuzzersApi.md#getRevisionByName) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/lookup | Get Revision By Name
[**getRevisionCount**](FuzzersApi.md#getRevisionCount) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/count | Get Revision Count
[**getTrashbinFuzzersCount**](FuzzersApi.md#getTrashbinFuzzersCount) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/trashbin/count | Get Trashbin Fuzzers Count
[**listFuzzerCrashes**](FuzzersApi.md#listFuzzerCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes | List Fuzzer Crashes
[**listFuzzerStatistics**](FuzzersApi.md#listFuzzerStatistics) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/statistics | List Fuzzer Statistics
[**listFuzzers**](FuzzersApi.md#listFuzzers) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers | List Fuzzers
[**listRevisionCrashes**](FuzzersApi.md#listRevisionCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/crashes | List Revision Crashes
[**listRevisionStatistics**](FuzzersApi.md#listRevisionStatistics) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/statistics | List Revision Statistics
[**listRevisions**](FuzzersApi.md#listRevisions) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions | List Revisions
[**listTrashbinFuzzers**](FuzzersApi.md#listTrashbinFuzzers) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/trashbin | List Trashbin Fuzzers
[**restartFuzzer**](FuzzersApi.md#restartFuzzer) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/actions/restart | Restart Fuzzer
[**restartRevision**](FuzzersApi.md#restartRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/actions/restart | Restart Revision
[**setActiveRevision**](FuzzersApi.md#setActiveRevision) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/active | Set Active Revision
[**startFuzzer**](FuzzersApi.md#startFuzzer) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/actions/start | Start Fuzzer
[**startRevision**](FuzzersApi.md#startRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/actions/start | Start Revision
[**stopFuzzer**](FuzzersApi.md#stopFuzzer) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/actions/stop | Stop Fuzzer
[**stopRevision**](FuzzersApi.md#stopRevision) | **POST** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/actions/stop | Stop Revision
[**updateFuzzer**](FuzzersApi.md#updateFuzzer) | **PATCH** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id} | Update Fuzzer
[**updateRevisionInformation**](FuzzersApi.md#updateRevisionInformation) | **PATCH** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id} | Update Revision Information
[**updateRevisionResources**](FuzzersApi.md#updateRevisionResources) | **PATCH** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/resources | Update Revision Resources
[**uploadRevisionBinaries**](FuzzersApi.md#uploadRevisionBinaries) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/binaries | Upload Revision Binaries
[**uploadRevisionConfig**](FuzzersApi.md#uploadRevisionConfig) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/config | Upload Revision Config
[**uploadRevisionSeeds**](FuzzersApi.md#uploadRevisionSeeds) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/files/seeds | Upload Revision Seeds



## changeCrashArchived

> Object changeCrashArchived(fuzzerId, crashId, userId, projectId, body)

Change Crash Archived

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let crashId = "crashId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let body = new FastApi.PutArchivedCrashRequestModel(); // PutArchivedCrashRequestModel | 
apiInstance.changeCrashArchived(fuzzerId, crashId, userId, projectId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **crashId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 
 **body** | [**PutArchivedCrashRequestModel**](PutArchivedCrashRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## copyCorpusFiles

> Object copyCorpusFiles(dstRevId, userId, projectId, fuzzerId, body)

Copy Corpus Files

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
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


## countFuzzerCrashes

> ItemCountResponseModel countFuzzerCrashes(fuzzerId, userId, projectId, opts)

Count Fuzzer Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example", // String | 
  'archived': true, // Boolean | 
  'reproduced': true // Boolean | 
};
apiInstance.countFuzzerCrashes(fuzzerId, userId, projectId, opts).then((data) => {
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
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 
 **archived** | **Boolean**|  | [optional] 
 **reproduced** | **Boolean**|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countFuzzerStatisticsRecords

> ItemCountResponseModel countFuzzerStatisticsRecords(userId, projectId, fuzzerId, groupBy, opts)

Count Fuzzer Statistics Records

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let groupBy = "groupBy_example"; // String | An enumeration.
let opts = {
  'pgSize': 100, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example" // String | 
};
apiInstance.countFuzzerStatisticsRecords(userId, projectId, fuzzerId, groupBy, opts).then((data) => {
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
 **groupBy** | **String**| An enumeration. | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countRevisionCrashes

> ItemCountResponseModel countRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts)

Count Revision Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example", // String | 
  'archived': true, // Boolean | 
  'reproduced': true // Boolean | 
};
apiInstance.countRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts).then((data) => {
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
 **pgSize** | **Number**|  | [optional] [default to 100]
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 
 **archived** | **Boolean**|  | [optional] 
 **reproduced** | **Boolean**|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## countRevisionStatisticsRecords

> ItemCountResponseModel countRevisionStatisticsRecords(userId, projectId, fuzzerId, revisionId, groupBy, opts)

Count Revision Statistics Records

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let revisionId = "revisionId_example"; // String | 
let groupBy = "groupBy_example"; // String | An enumeration.
let opts = {
  'pgSize': 100, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example" // String | 
};
apiInstance.countRevisionStatisticsRecords(userId, projectId, fuzzerId, revisionId, groupBy, opts).then((data) => {
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
 **revisionId** | **String**|  | 
 **groupBy** | **String**| An enumeration. | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createFuzzer

> FuzzerResponseModel createFuzzer(projectId, userId, body)

Create Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let body = new FastApi.CreateFuzzerRequestModel(); // CreateFuzzerRequestModel | 
apiInstance.createFuzzer(projectId, userId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **body** | [**CreateFuzzerRequestModel**](CreateFuzzerRequestModel.md)|  | 

### Return type

[**FuzzerResponseModel**](FuzzerResponseModel.md)

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

let apiInstance = new FastApi.FuzzersApi();
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


## deleteFuzzer

> Object deleteFuzzer(fuzzerId, userId, projectId, action, opts)

Delete Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let action = "action_example"; // String | An enumeration.
let opts = {
  'newName': "newName_example", // String | 
  'noBackup': false // Boolean | 
};
apiInstance.deleteFuzzer(fuzzerId, userId, projectId, action, opts).then((data) => {
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


## deleteRevision

> Object deleteRevision(revisionId, fuzzerId, userId, projectId, action, opts)

Delete Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
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


## downloadFuzzerCorpus

> Object downloadFuzzerCorpus(projectId, fuzzerId, userId)

Download Fuzzer Corpus

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.downloadFuzzerCorpus(projectId, fuzzerId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream


## downloadFuzzerCrash

> Object downloadFuzzerCrash(fuzzerId, crashId, userId, projectId)

Download Fuzzer Crash

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let crashId = "crashId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.downloadFuzzerCrash(fuzzerId, crashId, userId, projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **crashId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/octet-stream


## downloadRevisionBinaries

> Object downloadRevisionBinaries(revisionId, userId, projectId, fuzzerId)

Download Revision Binaries

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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


## emptyProjectTrashbin

> ProjectTrashbinEmptyResponseModel emptyProjectTrashbin(projectId, userId)

Empty Project Trashbin

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.emptyProjectTrashbin(projectId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**ProjectTrashbinEmptyResponseModel**](ProjectTrashbinEmptyResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## eraseFuzzerInTrashbin

> ProjectTrashbinEmptyResponseModel eraseFuzzerInTrashbin(projectId, fuzzerId, userId)

Erase Fuzzer In Trashbin

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.eraseFuzzerInTrashbin(projectId, fuzzerId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**ProjectTrashbinEmptyResponseModel**](ProjectTrashbinEmptyResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActiveRevision

> RevisionResponseModel getActiveRevision(userId, projectId, fuzzerId)

Get Active Revision

Get active revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
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


## getFuzzer

> FuzzerResponseModel getFuzzer(projectId, fuzzerId, userId)

Get Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.getFuzzer(projectId, fuzzerId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**FuzzerResponseModel**](FuzzerResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFuzzerByName

> FuzzerResponseModel getFuzzerByName(projectId, userId, name)

Get Fuzzer By Name

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let name = "name_example"; // String | 
apiInstance.getFuzzerByName(projectId, userId, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **name** | **String**|  | 

### Return type

[**FuzzerResponseModel**](FuzzerResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFuzzerCount

> ItemCountResponseModel getFuzzerCount(projectId, userId, opts)

Get Fuzzer Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'engines': [new FastApi.ORMEngineID()], // [ORMEngineID] | 
  'langs': [new FastApi.ORMLangID()], // [ORMLangID] | 
  'removalState': "removalState_example" // String | An enumeration.
};
apiInstance.getFuzzerCount(projectId, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **engines** | [**[ORMEngineID]**](ORMEngineID.md)|  | [optional] 
 **langs** | [**[ORMLangID]**](ORMLangID.md)|  | [optional] 
 **removalState** | **String**| An enumeration. | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFuzzerCrash

> CrashResponseModel getFuzzerCrash(fuzzerId, crashId, userId, projectId)

Get Fuzzer Crash

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let crashId = "crashId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.getFuzzerCrash(fuzzerId, crashId, userId, projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fuzzerId** | **String**|  | 
 **crashId** | **String**|  | 
 **userId** | **String**|  | 
 **projectId** | **String**|  | 

### Return type

[**CrashResponseModel**](CrashResponseModel.md)

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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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


## getTrashbinFuzzersCount

> ItemCountResponseModel getTrashbinFuzzersCount(projectId, userId, opts)

Get Trashbin Fuzzers Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100 // Number | 
};
apiInstance.getTrashbinFuzzersCount(projectId, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFuzzerCrashes

> ListCrashesResponseModel listFuzzerCrashes(fuzzerId, userId, projectId, opts)

List Fuzzer Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example", // String | 
  'archived': true, // Boolean | 
  'reproduced': true // Boolean | 
};
apiInstance.listFuzzerCrashes(fuzzerId, userId, projectId, opts).then((data) => {
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
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 
 **archived** | **Boolean**|  | [optional] 
 **reproduced** | **Boolean**|  | [optional] 

### Return type

[**ListCrashesResponseModel**](ListCrashesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFuzzerStatistics

> ListStatisticsResponseModel listFuzzerStatistics(userId, projectId, fuzzerId, groupBy, opts)

List Fuzzer Statistics

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let groupBy = "groupBy_example"; // String | An enumeration.
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example" // String | 
};
apiInstance.listFuzzerStatistics(userId, projectId, fuzzerId, groupBy, opts).then((data) => {
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
 **groupBy** | **String**| An enumeration. | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 

### Return type

[**ListStatisticsResponseModel**](ListStatisticsResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listFuzzers

> ListFuzzersResponseModel listFuzzers(projectId, userId, opts)

List Fuzzers

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'engines': [new FastApi.ORMEngineID()], // [ORMEngineID] | 
  'langs': [new FastApi.ORMLangID()], // [ORMLangID] | 
  'removalState': "removalState_example" // String | An enumeration.
};
apiInstance.listFuzzers(projectId, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]
 **engines** | [**[ORMEngineID]**](ORMEngineID.md)|  | [optional] 
 **langs** | [**[ORMLangID]**](ORMLangID.md)|  | [optional] 
 **removalState** | **String**| An enumeration. | [optional] 

### Return type

[**ListFuzzersResponseModel**](ListFuzzersResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRevisionCrashes

> ListCrashesResponseModel listRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts)

List Revision Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let revisionId = "revisionId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example", // String | 
  'archived': true, // Boolean | 
  'reproduced': true // Boolean | 
};
apiInstance.listRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts).then((data) => {
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
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 
 **archived** | **Boolean**|  | [optional] 
 **reproduced** | **Boolean**|  | [optional] 

### Return type

[**ListCrashesResponseModel**](ListCrashesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRevisionStatistics

> ListStatisticsResponseModel listRevisionStatistics(userId, projectId, fuzzerId, revisionId, groupBy, opts)

List Revision Statistics

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let revisionId = "revisionId_example"; // String | 
let groupBy = "groupBy_example"; // String | An enumeration.
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'dateBegin': "dateBegin_example", // String | 
  'dateEnd': "dateEnd_example" // String | 
};
apiInstance.listRevisionStatistics(userId, projectId, fuzzerId, revisionId, groupBy, opts).then((data) => {
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
 **revisionId** | **String**|  | 
 **groupBy** | **String**| An enumeration. | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]
 **dateBegin** | **String**|  | [optional] 
 **dateEnd** | **String**|  | [optional] 

### Return type

[**ListStatisticsResponseModel**](ListStatisticsResponseModel.md)

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

let apiInstance = new FastApi.FuzzersApi();
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


## listTrashbinFuzzers

> ListFuzzersResponseModel listTrashbinFuzzers(projectId, userId, opts)

List Trashbin Fuzzers

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listTrashbinFuzzers(projectId, userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]

### Return type

[**ListFuzzersResponseModel**](ListFuzzersResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restartFuzzer

> Object restartFuzzer(fuzzerId, userId, projectId)

Restart Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.restartFuzzer(fuzzerId, userId, projectId).then((data) => {
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

### Return type

**Object**

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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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


## startFuzzer

> Object startFuzzer(fuzzerId, userId, projectId)

Start Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.startFuzzer(fuzzerId, userId, projectId).then((data) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## startRevision

> Object startRevision(revisionId, userId, projectId, fuzzerId)

Start Revision

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
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


## stopFuzzer

> Object stopFuzzer(fuzzerId, userId, projectId)

Stop Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let projectId = "projectId_example"; // String | 
apiInstance.stopFuzzer(fuzzerId, userId, projectId).then((data) => {
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

let apiInstance = new FastApi.FuzzersApi();
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


## updateFuzzer

> Object updateFuzzer(projectId, fuzzerId, userId, body)

Update Fuzzer

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
let projectId = "projectId_example"; // String | 
let fuzzerId = "fuzzerId_example"; // String | 
let userId = "userId_example"; // String | 
let body = new FastApi.UpdateFuzzerRequestModel(); // UpdateFuzzerRequestModel | 
apiInstance.updateFuzzer(projectId, fuzzerId, userId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **fuzzerId** | **String**|  | 
 **userId** | **String**|  | 
 **body** | [**UpdateFuzzerRequestModel**](UpdateFuzzerRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRevisionInformation

> Object updateRevisionInformation(revisionId, fuzzerId, userId, projectId, body)

Update Revision Information

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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

let apiInstance = new FastApi.FuzzersApi();
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

