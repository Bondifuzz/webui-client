# FastApi.IntegrationTypesAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIntegrationType**](IntegrationTypesAdminApi.md#createIntegrationType) | **POST** /api/v1/admin/integration_types | Create Integration Type
[**deleteIntegrationType**](IntegrationTypesAdminApi.md#deleteIntegrationType) | **DELETE** /api/v1/admin/integration_types/{integration_type_id} | Delete Integration Type
[**getIntegrationType**](IntegrationTypesAdminApi.md#getIntegrationType) | **GET** /api/v1/admin/integration_types/{integration_type_id} | Get Integration Type
[**listIntegrationTypes**](IntegrationTypesAdminApi.md#listIntegrationTypes) | **GET** /api/v1/admin/integration_types | List Integration Types
[**updateIntegrationType**](IntegrationTypesAdminApi.md#updateIntegrationType) | **PATCH** /api/v1/admin/integration_types/{integration_type_id} | Update Integration Type



## createIntegrationType

> IntegrationTypeResponseModel createIntegrationType(body)

Create Integration Type

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationTypesAdminApi();
let body = new FastApi.CreateIntegrationTypeRequestModel(); // CreateIntegrationTypeRequestModel | 
apiInstance.createIntegrationType(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateIntegrationTypeRequestModel**](CreateIntegrationTypeRequestModel.md)|  | 

### Return type

[**IntegrationTypeResponseModel**](IntegrationTypeResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIntegrationType

> Object deleteIntegrationType(integrationTypeId)

Delete Integration Type

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationTypesAdminApi();
let integrationTypeId = "integrationTypeId_example"; // String | An enumeration.
apiInstance.deleteIntegrationType(integrationTypeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationTypeId** | **String**| An enumeration. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIntegrationType

> IntegrationTypeResponseModel getIntegrationType(integrationTypeId)

Get Integration Type

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationTypesAdminApi();
let integrationTypeId = "integrationTypeId_example"; // String | An enumeration.
apiInstance.getIntegrationType(integrationTypeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationTypeId** | **String**| An enumeration. | 

### Return type

[**IntegrationTypeResponseModel**](IntegrationTypeResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listIntegrationTypes

> ListIntegrationTypesResponseModel listIntegrationTypes(opts)

List Integration Types

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationTypesAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listIntegrationTypes(opts).then((data) => {
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


## updateIntegrationType

> Object updateIntegrationType(integrationTypeId, body)

Update Integration Type

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationTypesAdminApi();
let integrationTypeId = "integrationTypeId_example"; // String | An enumeration.
let body = new FastApi.UpdateIntegrationTypeRequestModel(); // UpdateIntegrationTypeRequestModel | 
apiInstance.updateIntegrationType(integrationTypeId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationTypeId** | **String**| An enumeration. | 
 **body** | [**UpdateIntegrationTypeRequestModel**](UpdateIntegrationTypeRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

