# FastApi.EnginesAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEngine**](EnginesAdminApi.md#createEngine) | **POST** /api/v1/admin/engines | Create Engine
[**deleteEngine**](EnginesAdminApi.md#deleteEngine) | **DELETE** /api/v1/admin/engines/{engine_id} | Delete Engine
[**disableEngineLang**](EnginesAdminApi.md#disableEngineLang) | **DELETE** /api/v1/admin/engines/{engine_id}/langs/{lang} | Disable Engine Lang
[**enableEngineLang**](EnginesAdminApi.md#enableEngineLang) | **POST** /api/v1/admin/engines/{engine_id}/langs/{lang} | Enable Engine Lang
[**getEngine**](EnginesAdminApi.md#getEngine) | **GET** /api/v1/admin/engines/{engine_id} | Get Engine
[**listEngines**](EnginesAdminApi.md#listEngines) | **GET** /api/v1/admin/engines | List Engines
[**setEngineLangs**](EnginesAdminApi.md#setEngineLangs) | **PUT** /api/v1/admin/engines/{engine_id}/langs | Set Engine Langs
[**updateEngine**](EnginesAdminApi.md#updateEngine) | **PATCH** /api/v1/admin/engines/{engine_id} | Update Engine



## createEngine

> EngineResponseModel createEngine(body)

Create Engine

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let body = new FastApi.CreateEngineRequestModel(); // CreateEngineRequestModel | 
apiInstance.createEngine(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateEngineRequestModel**](CreateEngineRequestModel.md)|  | 

### Return type

[**EngineResponseModel**](EngineResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEngine

> Object deleteEngine(engineId)

Delete Engine

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let engineId = "engineId_example"; // String | An enumeration.
apiInstance.deleteEngine(engineId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | **String**| An enumeration. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disableEngineLang

> Object disableEngineLang(engineId, lang)

Disable Engine Lang

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let engineId = "engineId_example"; // String | An enumeration.
let lang = "lang_example"; // String | An enumeration.
apiInstance.disableEngineLang(engineId, lang).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | **String**| An enumeration. | 
 **lang** | **String**| An enumeration. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## enableEngineLang

> Object enableEngineLang(engineId, lang)

Enable Engine Lang

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let engineId = "engineId_example"; // String | An enumeration.
let lang = "lang_example"; // String | An enumeration.
apiInstance.enableEngineLang(engineId, lang).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | **String**| An enumeration. | 
 **lang** | **String**| An enumeration. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEngine

> EngineResponseModel getEngine(engineId)

Get Engine

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let engineId = "engineId_example"; // String | An enumeration.
apiInstance.getEngine(engineId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | **String**| An enumeration. | 

### Return type

[**EngineResponseModel**](EngineResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listEngines

> ListEnginesResponseModel listEngines(opts)

List Engines

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'lang': "lang_example" // String | An enumeration.
};
apiInstance.listEngines(opts).then((data) => {
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
 **lang** | **String**| An enumeration. | [optional] 

### Return type

[**ListEnginesResponseModel**](ListEnginesResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setEngineLangs

> Object setEngineLangs(engineId, body)

Set Engine Langs

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let engineId = "engineId_example"; // String | An enumeration.
let body = [new FastApi.ORMLangID()]; // [ORMLangID] | 
apiInstance.setEngineLangs(engineId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | **String**| An enumeration. | 
 **body** | [**[ORMLangID]**](ORMLangID.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEngine

> Object updateEngine(engineId, body)

Update Engine

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.EnginesAdminApi();
let engineId = "engineId_example"; // String | An enumeration.
let body = new FastApi.UpdateEngineRequestModel(); // UpdateEngineRequestModel | 
apiInstance.updateEngine(engineId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **engineId** | **String**| An enumeration. | 
 **body** | [**UpdateEngineRequestModel**](UpdateEngineRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

