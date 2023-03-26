# FastApi.StatisticsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countFuzzerStatisticsRecords**](StatisticsApi.md#countFuzzerStatisticsRecords) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/statistics/count | Count Fuzzer Statistics Records
[**countRevisionStatisticsRecords**](StatisticsApi.md#countRevisionStatisticsRecords) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/statistics/count | Count Revision Statistics Records
[**listFuzzerStatistics**](StatisticsApi.md#listFuzzerStatistics) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/statistics | List Fuzzer Statistics
[**listRevisionStatistics**](StatisticsApi.md#listRevisionStatistics) | **GET** /api/v1/users/{user_id}/projects/{project_id}/fuzzers/{fuzzer_id}/revisions/{revision_id}/statistics | List Revision Statistics



## countFuzzerStatisticsRecords

> ItemCountResponseModel countFuzzerStatisticsRecords(userId, projectId, fuzzerId, groupBy, opts)

Count Fuzzer Statistics Records

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.StatisticsApi();
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


## countRevisionStatisticsRecords

> ItemCountResponseModel countRevisionStatisticsRecords(userId, projectId, fuzzerId, revisionId, groupBy, opts)

Count Revision Statistics Records

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.StatisticsApi();
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


## listFuzzerStatistics

> ListStatisticsResponseModel listFuzzerStatistics(userId, projectId, fuzzerId, groupBy, opts)

List Fuzzer Statistics

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.StatisticsApi();
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


## listRevisionStatistics

> ListStatisticsResponseModel listRevisionStatistics(userId, projectId, fuzzerId, revisionId, groupBy, opts)

List Revision Statistics

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.StatisticsApi();
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

