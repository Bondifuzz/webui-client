# FastApi.PlatformConfigApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlatformConfig**](PlatformConfigApi.md#getPlatformConfig) | **GET** /api/v1/config | Get Platform Config
[**listPlatformEngines**](PlatformConfigApi.md#listPlatformEngines) | **GET** /api/v1/config/engines | List Platform Engines
[**listPlatformIntegrationTypes**](PlatformConfigApi.md#listPlatformIntegrationTypes) | **GET** /api/v1/config/integration_types | List Platform Integration Types
[**listPlatformLangs**](PlatformConfigApi.md#listPlatformLangs) | **GET** /api/v1/config/langs | List Platform Langs



## getPlatformConfig

> PlatformConfigResponseModel getPlatformConfig()

Get Platform Config

Returns platform configuration

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlatformConfigApi();
apiInstance.getPlatformConfig().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PlatformConfigResponseModel**](PlatformConfigResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPlatformEngines

> ListEnginesResponseModel listPlatformEngines(opts)

List Platform Engines

Returns list of supported fuzzing engines

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlatformConfigApi();
let opts = {
  'lang': "lang_example", // String | An enumeration.
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listPlatformEngines(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lang** | **String**| An enumeration. | [optional] 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]

### Return type

[**ListEnginesResponseModel**](ListEnginesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPlatformIntegrationTypes

> ListIntegrationTypesResponseModel listPlatformIntegrationTypes(opts)

List Platform Integration Types

Returns list of supported integration types

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlatformConfigApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listPlatformIntegrationTypes(opts).then((data) => {
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

### Return type

[**ListIntegrationTypesResponseModel**](ListIntegrationTypesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPlatformLangs

> ListLangsResponseModel listPlatformLangs(opts)

List Platform Langs

Returns list of supported programming languages

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PlatformConfigApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listPlatformLangs(opts).then((data) => {
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

### Return type

[**ListLangsResponseModel**](ListLangsResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

