# FastApi.LangsAdminApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLang**](LangsAdminApi.md#createLang) | **POST** /api/v1/admin/langs | Create Lang
[**deleteLang**](LangsAdminApi.md#deleteLang) | **DELETE** /api/v1/admin/langs/{lang_id} | Delete Lang
[**getLang**](LangsAdminApi.md#getLang) | **GET** /api/v1/admin/langs/{lang_id} | Get Lang
[**listLangs**](LangsAdminApi.md#listLangs) | **GET** /api/v1/admin/langs | List Langs
[**updateLang**](LangsAdminApi.md#updateLang) | **PATCH** /api/v1/admin/langs/{lang_id} | Update Lang



## createLang

> LangResponseModel createLang(body)

Create Lang

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.LangsAdminApi();
let body = new FastApi.CreateLangRequestModel(); // CreateLangRequestModel | 
apiInstance.createLang(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateLangRequestModel**](CreateLangRequestModel.md)|  | 

### Return type

[**LangResponseModel**](LangResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteLang

> Object deleteLang(langId)

Delete Lang

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.LangsAdminApi();
let langId = "langId_example"; // String | An enumeration.
apiInstance.deleteLang(langId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **langId** | **String**| An enumeration. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLang

> LangResponseModel getLang(langId)

Get Lang

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.LangsAdminApi();
let langId = "langId_example"; // String | An enumeration.
apiInstance.getLang(langId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **langId** | **String**| An enumeration. | 

### Return type

[**LangResponseModel**](LangResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLangs

> ListLangsResponseModel listLangs(opts)

List Langs

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.LangsAdminApi();
let opts = {
  'pgSize': 100, // Number | 
  'pgNum': 0 // Number | 
};
apiInstance.listLangs(opts).then((data) => {
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


## updateLang

> Object updateLang(langId, body)

Update Lang

### Example

```javascript
import FastApi from 'fast_api';

let apiInstance = new FastApi.LangsAdminApi();
let langId = "langId_example"; // String | An enumeration.
let body = new FastApi.UpdateLangRequestModel(); // UpdateLangRequestModel | 
apiInstance.updateLang(langId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **langId** | **String**| An enumeration. | 
 **body** | [**UpdateLangRequestModel**](UpdateLangRequestModel.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

