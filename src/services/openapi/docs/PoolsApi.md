# FastApi.PoolsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePool**](PoolsApi.md#deletePool) | **DELETE** /api/v1/users/{user_id}/pools/{pool_id} | Delete Pool
[**getAvailablePoolsCount**](PoolsApi.md#getAvailablePoolsCount) | **GET** /api/v1/users/{user_id}/pools/count | Get Available Pools Count
[**getPool**](PoolsApi.md#getPool) | **GET** /api/v1/users/{user_id}/pools/{pool_id} | Get Pool
[**listPools**](PoolsApi.md#listPools) | **GET** /api/v1/users/{user_id}/pools | List Pools
[**updatePool**](PoolsApi.md#updatePool) | **PATCH** /api/v1/users/{user_id}/pools/{pool_id} | Update Pool



## deletePool

> Object deletePool(poolId, userId)

Delete Pool

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsApi();
let poolId = "poolId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.deletePool(poolId, userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailablePoolsCount

> ItemCountResponseModel getAvailablePoolsCount(userId, opts)

Get Available Pools Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsApi();
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100 // Number | 
};
apiInstance.getAvailablePoolsCount(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPool

> PoolResponseModel getPool(userId, poolId)

Get Pool

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsApi();
let userId = "userId_example"; // String | 
let poolId = "poolId_example"; // String | 
apiInstance.getPool(userId, poolId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **poolId** | **String**|  | 

### Return type

[**PoolResponseModel**](PoolResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPools

> ListPoolsResponseModel listPools(userId, opts)

List Pools

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsApi();
let userId = "userId_example"; // String | 
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listPools(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **pgSize** | **Number**|  | [optional] [default to 100]
 **pgNum** | **Number**|  | [optional] [default to 0]

### Return type

[**ListPoolsResponseModel**](ListPoolsResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePool

> Object updatePool(userId, poolId, body)

Update Pool

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsApi();
let userId = "userId_example"; // String | 
let poolId = "poolId_example"; // String | 
let body = new FastApi.UpdatePoolInfoRequestModel(); // UpdatePoolInfoRequestModel | 
apiInstance.updatePool(userId, poolId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **poolId** | **String**|  | 
 **body** | [**UpdatePoolInfoRequestModel**](UpdatePoolInfoRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

