# FastApi.ImagesAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBuiltinImage**](ImagesAdminApi.md#createBuiltinImage) | **POST** /api/v1/admin/images | Create Builtin Image
[**deleteBuiltinImage**](ImagesAdminApi.md#deleteBuiltinImage) | **DELETE** /api/v1/admin/images/{image_id} | Delete Builtin Image
[**getBuiltinImage**](ImagesAdminApi.md#getBuiltinImage) | **GET** /api/v1/admin/images/{image_id} | Get Builtin Image
[**getBuiltinImageCount**](ImagesAdminApi.md#getBuiltinImageCount) | **GET** /api/v1/admin/images/count | Get Builtin Image Count
[**listBuiltinImages**](ImagesAdminApi.md#listBuiltinImages) | **GET** /api/v1/admin/images | List Builtin Images
[**updateBuiltinImage**](ImagesAdminApi.md#updateBuiltinImage) | **PATCH** /api/v1/admin/images/{image_id} | Update Builtin Image



## createBuiltinImage

> ImageResponseModel createBuiltinImage(body)

Create Builtin Image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ImagesAdminApi();
let body = new FastApi.CreateImageRequestModel(); // CreateImageRequestModel | 
apiInstance.createBuiltinImage(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateImageRequestModel**](CreateImageRequestModel.md)|  | 

### Return type

[**ImageResponseModel**](ImageResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBuiltinImage

> Object deleteBuiltinImage(imageId)

Delete Builtin Image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ImagesAdminApi();
let imageId = "imageId_example"; // String | 
apiInstance.deleteBuiltinImage(imageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuiltinImage

> ImageResponseModel getBuiltinImage(imageId)

Get Builtin Image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ImagesAdminApi();
let imageId = "imageId_example"; // String | 
apiInstance.getBuiltinImage(imageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**|  | 

### Return type

[**ImageResponseModel**](ImageResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBuiltinImageCount

> ItemCountResponseModel getBuiltinImageCount(opts)

Get Builtin Image Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ImagesAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'engines': [new FastApi.ORMEngineID()], // [ORMEngineID] | 
  'statuses': [new FastApi.ORMImageStatus()], // [ORMImageStatus] | 
  'imageType': "imageType_example" // String | An enumeration.
};
apiInstance.getBuiltinImageCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pgSize** | **Number**|  | [optional] [default to 100]
 **engines** | [**[ORMEngineID]**](ORMEngineID.md)|  | [optional] 
 **statuses** | [**[ORMImageStatus]**](ORMImageStatus.md)|  | [optional] 
 **imageType** | **String**| An enumeration. | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBuiltinImages

> ListImagesResponseModel listBuiltinImages(opts)

List Builtin Images

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ImagesAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'engines': [new FastApi.ORMEngineID()], // [ORMEngineID] | 
  'statuses': [new FastApi.ORMImageStatus()], // [ORMImageStatus] | 
  'imageType': "imageType_example" // String | An enumeration.
};
apiInstance.listBuiltinImages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]
 **engines** | [**[ORMEngineID]**](ORMEngineID.md)|  | [optional] 
 **statuses** | [**[ORMImageStatus]**](ORMImageStatus.md)|  | [optional] 
 **imageType** | **String**| An enumeration. | [optional] 

### Return type

[**ListImagesResponseModel**](ListImagesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBuiltinImage

> Object updateBuiltinImage(imageId, body)

Update Builtin Image

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.ImagesAdminApi();
let imageId = "imageId_example"; // String | 
let body = new FastApi.UpdateImageRequestModel(); // UpdateImageRequestModel | 
apiInstance.updateBuiltinImage(imageId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**|  | 
 **body** | [**UpdateImageRequestModel**](UpdateImageRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

