# FastApi.IntegrationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBugTrackerIntegration**](IntegrationsApi.md#createBugTrackerIntegration) | **POST** /api/v1/users/{user_id}/projects/{project_id}/integrations | Create Bug Tracker Integration
[**deleteIntegration**](IntegrationsApi.md#deleteIntegration) | **DELETE** /api/v1/users/{user_id}/projects/{project_id}/integrations/{integration_id} | Delete Integration
[**getBugTrackerIntegration**](IntegrationsApi.md#getBugTrackerIntegration) | **GET** /api/v1/users/{user_id}/projects/{project_id}/integrations/{integration_id} | Get Bug Tracker Integration
[**getBugTrackerIntegrationByName**](IntegrationsApi.md#getBugTrackerIntegrationByName) | **GET** /api/v1/users/{user_id}/projects/{project_id}/integrations/lookup | Get Bug Tracker Integration By Name
[**getBugTrackerIntegrationConfig**](IntegrationsApi.md#getBugTrackerIntegrationConfig) | **GET** /api/v1/users/{user_id}/projects/{project_id}/integrations/{integration_id}/config | Get Bug Tracker Integration Config
[**getCountOfBugTrackerIntegrations**](IntegrationsApi.md#getCountOfBugTrackerIntegrations) | **GET** /api/v1/users/{user_id}/projects/{project_id}/integrations/count | Get Count Of Bug Tracker Integrations
[**listIntegrations**](IntegrationsApi.md#listIntegrations) | **GET** /api/v1/users/{user_id}/projects/{project_id}/integrations | List Integrations
[**updateBugTrackerIntegration**](IntegrationsApi.md#updateBugTrackerIntegration) | **PATCH** /api/v1/users/{user_id}/projects/{project_id}/integrations/{integration_id} | Update Bug Tracker Integration
[**updateBugTrackerIntegrationConfig**](IntegrationsApi.md#updateBugTrackerIntegrationConfig) | **PUT** /api/v1/users/{user_id}/projects/{project_id}/integrations/{integration_id}/config | Update Bug Tracker Integration Config



## createBugTrackerIntegration

> IntegrationResponseModel createBugTrackerIntegration(projectId, userId, body)

Create Bug Tracker Integration

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let body = new FastApi.CreateIntegrationRequestModel(); // CreateIntegrationRequestModel | 
apiInstance.createBugTrackerIntegration(projectId, userId, body).then((data) => {
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
 **body** | [**CreateIntegrationRequestModel**](CreateIntegrationRequestModel.md)|  | 

### Return type

[**IntegrationResponseModel**](IntegrationResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteIntegration

> Object deleteIntegration(integrationId, projectId, userId)

Delete Integration

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let integrationId = "integrationId_example"; // String | 
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.deleteIntegration(integrationId, projectId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**|  | 
 **projectId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBugTrackerIntegration

> IntegrationResponseModel getBugTrackerIntegration(integrationId, projectId, userId)

Get Bug Tracker Integration

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let integrationId = "integrationId_example"; // String | 
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.getBugTrackerIntegration(integrationId, projectId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**|  | 
 **projectId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

[**IntegrationResponseModel**](IntegrationResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBugTrackerIntegrationByName

> IntegrationResponseModel getBugTrackerIntegrationByName(projectId, userId, name)

Get Bug Tracker Integration By Name

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let name = "name_example"; // String | 
apiInstance.getBugTrackerIntegrationByName(projectId, userId, name).then((data) => {
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

[**IntegrationResponseModel**](IntegrationResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBugTrackerIntegrationConfig

> Object getBugTrackerIntegrationConfig(integrationId, projectId, userId)

Get Bug Tracker Integration Config

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let integrationId = "integrationId_example"; // String | 
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.getBugTrackerIntegrationConfig(integrationId, projectId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**|  | 
 **projectId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCountOfBugTrackerIntegrations

> ItemCountResponseModel getCountOfBugTrackerIntegrations(projectId, userId, opts)

Get Count Of Bug Tracker Integrations

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'types': [new FastApi.ORMIntegrationTypeID()], // [ORMIntegrationTypeID] | 
  'statuses': [new FastApi.ORMIntegrationStatus()] // [ORMIntegrationStatus] | 
};
apiInstance.getCountOfBugTrackerIntegrations(projectId, userId, opts).then((data) => {
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
 **types** | [**[ORMIntegrationTypeID]**](ORMIntegrationTypeID.md)|  | [optional] 
 **statuses** | [**[ORMIntegrationStatus]**](ORMIntegrationStatus.md)|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listIntegrations

> ListIntegrationsResponseModel listIntegrations(projectId, userId, opts)

List Integrations

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'types': [new FastApi.ORMIntegrationTypeID()], // [ORMIntegrationTypeID] | 
  'statuses': [new FastApi.ORMIntegrationStatus()] // [ORMIntegrationStatus] | 
};
apiInstance.listIntegrations(projectId, userId, opts).then((data) => {
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
 **types** | [**[ORMIntegrationTypeID]**](ORMIntegrationTypeID.md)|  | [optional] 
 **statuses** | [**[ORMIntegrationStatus]**](ORMIntegrationStatus.md)|  | [optional] 

### Return type

[**ListIntegrationsResponseModel**](ListIntegrationsResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBugTrackerIntegration

> Object updateBugTrackerIntegration(integrationId, projectId, userId, body)

Update Bug Tracker Integration

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let integrationId = "integrationId_example"; // String | 
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let body = new FastApi.UpdateIntegrationRequestModel(); // UpdateIntegrationRequestModel | 
apiInstance.updateBugTrackerIntegration(integrationId, projectId, userId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**|  | 
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **body** | [**UpdateIntegrationRequestModel**](UpdateIntegrationRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBugTrackerIntegrationConfig

> Object updateBugTrackerIntegrationConfig(integrationId, projectId, userId, body)

Update Bug Tracker Integration Config

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.IntegrationsApi();
let integrationId = "integrationId_example"; // String | 
let projectId = "projectId_example"; // String | 
let userId = "userId_example"; // String | 
let body = new FastApi.UpdateIntegrationConfigRequestModel(); // UpdateIntegrationConfigRequestModel | 
apiInstance.updateBugTrackerIntegrationConfig(integrationId, projectId, userId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**|  | 
 **projectId** | **String**|  | 
 **userId** | **String**|  | 
 **body** | [**UpdateIntegrationConfigRequestModel**](UpdateIntegrationConfigRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

