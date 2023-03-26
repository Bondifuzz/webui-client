# FastApi.CrashesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeCrashArchived**](CrashesApi.md#changeCrashArchived) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}/archived | Change Crash Archived
[**countFuzzerCrashes**](CrashesApi.md#countFuzzerCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/count | Count Fuzzer Crashes
[**countRevisionCrashes**](CrashesApi.md#countRevisionCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/crashes/count | Count Revision Crashes
[**downloadFuzzerCrash**](CrashesApi.md#downloadFuzzerCrash) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id}/raw | Download Fuzzer Crash
[**getFuzzerCrash**](CrashesApi.md#getFuzzerCrash) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes/{crash_id} | Get Fuzzer Crash
[**listFuzzerCrashes**](CrashesApi.md#listFuzzerCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/crashes | List Fuzzer Crashes
[**listRevisionCrashes**](CrashesApi.md#listRevisionCrashes) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/crashes | List Revision Crashes



## changeCrashArchived

> Object changeCrashArchived(fuzzerId, crashId, userId, projectId, body)

Change Crash Archived

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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


## countFuzzerCrashes

> ItemCountResponseModel countFuzzerCrashes(fuzzerId, userId, projectId, opts)

Count Fuzzer Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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


## countRevisionCrashes

> ItemCountResponseModel countRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts)

Count Revision Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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


## downloadFuzzerCrash

> Object downloadFuzzerCrash(fuzzerId, crashId, userId, projectId)

Download Fuzzer Crash

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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


## getFuzzerCrash

> CrashResponseModel getFuzzerCrash(fuzzerId, crashId, userId, projectId)

Get Fuzzer Crash

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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


## listFuzzerCrashes

> ListCrashesResponseModel listFuzzerCrashes(fuzzerId, userId, projectId, opts)

List Fuzzer Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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


## listRevisionCrashes

> ListCrashesResponseModel listRevisionCrashes(revisionId, userId, projectId, fuzzerId, opts)

List Revision Crashes

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.CrashesApi();
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

