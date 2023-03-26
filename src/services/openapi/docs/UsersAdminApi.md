# FastApi.UsersAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersAdminApi.md#createUser) | **POST** /api/v1/admin/users | Create User
[**deleteUser**](UsersAdminApi.md#deleteUser) | **DELETE** /api/v1/admin/users/{user_id} | Delete User
[**getUser**](UsersAdminApi.md#getUser) | **GET** /api/v1/admin/users/{user_id} | Get User
[**getUserByName**](UsersAdminApi.md#getUserByName) | **GET** /api/v1/admin/users/lookup | Get User By Name
[**getUserCount**](UsersAdminApi.md#getUserCount) | **GET** /api/v1/admin/users/count | Get User Count
[**listUsers**](UsersAdminApi.md#listUsers) | **GET** /api/v1/admin/users | List Users
[**updateUser**](UsersAdminApi.md#updateUser) | **PATCH** /api/v1/admin/users/{user_id} | Update User



## createUser

> UserResponseModel createUser(body)

Create User

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let body = new FastApi.CreateUserRequestModel(); // CreateUserRequestModel | 
apiInstance.createUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateUserRequestModel**](CreateUserRequestModel.md)|  | 

### Return type

[**UserResponseModel**](UserResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUser

> Object deleteUser(userId, action, opts)

Delete User

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let userId = "userId_example"; // String | 
let action = "action_example"; // String | An enumeration.
let opts = {
  'noBackup': false // Boolean | 
};
apiInstance.deleteUser(userId, action, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **action** | **String**| An enumeration. | 
 **noBackup** | **Boolean**|  | [optional] [default to false]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> UserResponseModel getUser(userId)

Get User

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let userId = "userId_example"; // String | 
apiInstance.getUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**UserResponseModel**](UserResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserByName

> UserResponseModel getUserByName(name)

Get User By Name

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let name = "name_example"; // String | 
apiInstance.getUserByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**UserResponseModel**](UserResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserCount

> ItemCountResponseModel getUserCount(opts)

Get User Count

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'removalState': "removalState_example" // String | An enumeration.
};
apiInstance.getUserCount(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pgSize** | **Number**|  | [optional] [default to 100]
 **removalState** | **String**| An enumeration. | [optional] 

### Return type

[**ItemCountResponseModel**](ItemCountResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> ListUsersResponseModel listUsers(opts)

List Users

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0, // Number | 
  'removalState': "removalState_example" // String | An enumeration.
};
apiInstance.listUsers(opts).then((data) => {
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
 **removalState** | **String**| An enumeration. | [optional] 

### Return type

[**ListUsersResponseModel**](ListUsersResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> Object updateUser(userId, body)

Update User

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.UsersAdminApi();
let userId = "userId_example"; // String | 
let body = new FastApi.AdminUpdateUserRequestModel(); // AdminUpdateUserRequestModel | 
apiInstance.updateUser(userId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **body** | [**AdminUpdateUserRequestModel**](AdminUpdateUserRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

