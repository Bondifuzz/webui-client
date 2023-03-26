# FastApi.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /api/v1/auth/login | Login
[**logout**](AuthApi.md#logout) | **POST** /api/v1/auth/logout | Logout



## login

> LoginResponseModel login(body)

Login

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AuthApi();
let body = new FastApi.LoginRequestModel(); // LoginRequestModel | 
apiInstance.login(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginRequestModel**](LoginRequestModel.md)|  | 

### Return type

[**LoginResponseModel**](LoginResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logout

> Object logout()

Logout

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.AuthApi();
apiInstance.logout().then((data) => {
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

