# FastApi.SecurityApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**refreshCsrfToken**](SecurityApi.md#refreshCsrfToken) | **POST** /api/v1/security/csrf-token | Refresh Csrf Token



## refreshCsrfToken

> Object refreshCsrfToken()

Refresh Csrf Token

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.SecurityApi();
apiInstance.refreshCsrfToken().then((data) => {
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

