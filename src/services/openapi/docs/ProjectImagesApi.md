# FastApi.ProjectImagesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countProjectImages**](ProjectImagesApi.md#countProjectImages) | **GET** /api/v1/users/{user_id}/projects/{project_id}/images/count | Count Project Images
[**getProjectImage**](ProjectImagesApi.md#getProjectImage) | **GET** /api/v1/users/{user_id}/projects/{project_id}/images/{image_id} | Get Project Image
[**listProjectImages**](ProjectImagesApi.md#listProjectImages) | **GET** /api/v1/users/{user_id}/projects/{project_id}/images | List Project Images



## countProjectImages

> ItemCountResponseModel countProjectImages(projectId, userId, opts)

Count Project Images

Returns count of docker images corresponding to provided programming fuzzer engine in project

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ProjectImagesApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'engines': [new FastApi.ORMEngineID()] // [ORMEngineID] | 
};
apiInstance.countProjectImages(projectId, userId, opts).then((data) => {
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

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectImage

> ImageResponseModel getProjectImage(projectId, imageId, userId)

Get Project Image

Returns project image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ProjectImagesApi();
let projectId = "projectId_example"; // String | 
let imageId = "imageId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.getProjectImage(projectId, imageId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **imageId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**ImageResponseModel**](ImageResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listProjectImages

> ListImagesResponseModel listProjectImages(projectId, userId, opts)

List Project Images

Returns list of docker images corresponding to provided fuzzer type in project

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ProjectImagesApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'engines': [new FastApi.ORMEngineID()] // [ORMEngineID] | 
};
apiInstance.listProjectImages(projectId, userId, opts).then((data) => {
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

### Return type

[**ListImagesResponseModel**](ListImagesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

