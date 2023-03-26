# FastApi.PoolsAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminCreatePool**](PoolsAdminApi.md#adminCreatePool) | **POST** /api/v1/admin/pools | Admin Create Pool
[**adminDeletePool**](PoolsAdminApi.md#adminDeletePool) | **DELETE** /api/v1/admin/pools/{pool_id} | Admin Delete Pool
[**adminGetPool**](PoolsAdminApi.md#adminGetPool) | **GET** /api/v1/admin/pools/{pool_id} | Admin Get Pool
[**adminGetPoolsCount**](PoolsAdminApi.md#adminGetPoolsCount) | **GET** /api/v1/admin/pools/count | Admin Get Pools Count
[**adminListPools**](PoolsAdminApi.md#adminListPools) | **GET** /api/v1/admin/pools | Admin List Pools
[**adminUpdatePoolInfo**](PoolsAdminApi.md#adminUpdatePoolInfo) | **PATCH** /api/v1/admin/pools/{pool_id} | Admin Update Pool Info
[**adminUpdatePoolNodeGroup**](PoolsAdminApi.md#adminUpdatePoolNodeGroup) | **PUT** /api/v1/admin/pools/{pool_id}/node_group | Admin Update Pool Node Group



## adminCreatePool

> PoolResponseModel adminCreatePool(body)

Admin Create Pool

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let body = new FastApi.CreatePoolRequestModel(); // CreatePoolRequestModel | 
apiInstance.adminCreatePool(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreatePoolRequestModel**](CreatePoolRequestModel.md)|  | 

### Return type

[**PoolResponseModel**](PoolResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminDeletePool

> Object adminDeletePool(poolId)

Admin Delete Pool

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let poolId = "poolId_example"; // String | 
apiInstance.adminDeletePool(poolId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetPool

> PoolResponseModel adminGetPool(poolId)

Admin Get Pool

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let poolId = "poolId_example"; // String | 
apiInstance.adminGetPool(poolId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**|  | 

### Return type

[**PoolResponseModel**](PoolResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminGetPoolsCount

> ItemCountResponseModel adminGetPoolsCount(opts)

Admin Get Pools Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'userId': "userId_example" // String | 
};
apiInstance.adminGetPoolsCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pgSize** | **Number**|  | [optional] [default to 100]
 **userId** | **String**|  | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminListPools

> ListPoolsResponseModel adminListPools(opts)

Admin List Pools

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'userId': "userId_example" // String | 
};
apiInstance.adminListPools(opts).then((data) => {
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
 **userId** | **String**|  | [optional] 

### Return type

[**ListPoolsResponseModel**](ListPoolsResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## adminUpdatePoolInfo

> Object adminUpdatePoolInfo(poolId, body)

Admin Update Pool Info

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let poolId = "poolId_example"; // String | 
let body = new FastApi.AdminUpdatePoolInfoRequestModel(); // AdminUpdatePoolInfoRequestModel | 
apiInstance.adminUpdatePoolInfo(poolId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**|  | 
 **body** | [**AdminUpdatePoolInfoRequestModel**](AdminUpdatePoolInfoRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## adminUpdatePoolNodeGroup

> Object adminUpdatePoolNodeGroup(poolId, body)

Admin Update Pool Node Group

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.PoolsAdminApi();
let poolId = "poolId_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.adminUpdatePoolNodeGroup(poolId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poolId** | **String**|  | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

