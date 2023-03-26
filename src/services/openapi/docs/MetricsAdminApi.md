# FastApi.MetricsAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics**](MetricsAdminApi.md#metrics) | **GET** /api/v1/admin/metrics | Metrics



## metrics

> Object metrics()

Metrics

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.MetricsAdminApi();
apiInstance.metrics().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

