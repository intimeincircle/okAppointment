# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteApiCircleV1CirclePiece**](DefaultApi.md#deleteApiCircleV1CirclePiece) | **DELETE** /api/circle/v1/circle/piece | 
[**getApiCircleV1CircleThemeCurrent**](DefaultApi.md#getApiCircleV1CircleThemeCurrent) | **GET** /api/circle/v1/circle/theme/current | 
[**getApiCircleV1CircleThemeList**](DefaultApi.md#getApiCircleV1CircleThemeList) | **GET** /api/circle/v1/circle/theme/list | 
[**postApiCircleV1CirclePieceCreate**](DefaultApi.md#postApiCircleV1CirclePieceCreate) | **POST** /api/circle/v1/circle/piece/create | 
[**postApiCircleV1CirclePieceMark**](DefaultApi.md#postApiCircleV1CirclePieceMark) | **POST** /api/circle/v1/circle/piece/mark | 
[**postApiCircleV1CircleThemeCreate**](DefaultApi.md#postApiCircleV1CircleThemeCreate) | **POST** /api/circle/v1/circle/theme/create | 
[**postApiCircleV1PunchclockCheck**](DefaultApi.md#postApiCircleV1PunchclockCheck) | **POST** /api/circle/v1/punchclock/check | 
[**postApiCircleV1PunchclockCreate**](DefaultApi.md#postApiCircleV1PunchclockCreate) | **POST** /api/circle/v1/punchclock/create | 


# **deleteApiCircleV1CirclePiece**
> RetMsg deleteApiCircleV1CirclePiece()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteApiCircleV1CirclePieceRequest = {
  // number
  id: 1,
};

apiInstance.deleteApiCircleV1CirclePiece(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RetMsg**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter id |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiCircleV1CircleThemeCurrent**
> NoSqlPagingListDataPiece getApiCircleV1CircleThemeCurrent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetApiCircleV1CircleThemeCurrentRequest = {
  // number (optional)
  themeId: 1,
};

apiInstance.getApiCircleV1CircleThemeCurrent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **themeId** | [**number**] |  | (optional) defaults to undefined


### Return type

**NoSqlPagingListDataPiece**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter themeId |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiCircleV1CircleThemeList**
> NoSqlPagingListDataTheme getApiCircleV1CircleThemeList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiCircleV1CircleThemeList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NoSqlPagingListDataTheme**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postApiCircleV1CirclePieceCreate**
> RetMsg postApiCircleV1CirclePieceCreate(piece)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostApiCircleV1CirclePieceCreateRequest = {
  // Piece
  piece: {
    id: 1,
    time: 3.14,
    themeId: 1,
    themeName: "themeName_example",
    content: "content_example",
    index: 1,
    status: 1,
    overdue: true,
    title: "title_example",
  },
};

apiInstance.postApiCircleV1CirclePieceCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **piece** | **Piece**|  |


### Return type

**RetMsg**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: body |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postApiCircleV1CirclePieceMark**
> RetMsg postApiCircleV1CirclePieceMark(updateMarkPiece)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostApiCircleV1CirclePieceMarkRequest = {
  // UpdateMarkPiece
  updateMarkPiece: {
    id: 1,
    themeId: 1,
    delta: 1,
  },
};

apiInstance.postApiCircleV1CirclePieceMark(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMarkPiece** | **UpdateMarkPiece**|  |


### Return type

**RetMsg**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: body |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postApiCircleV1CircleThemeCreate**
> RetMsg postApiCircleV1CircleThemeCreate(theme)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostApiCircleV1CircleThemeCreateRequest = {
  // Theme
  theme: {
    id: 1,
    name: "name_example",
    isForRemember: true,
    status: 1,
    createAt: 3.14,
  },
};

apiInstance.postApiCircleV1CircleThemeCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **theme** | **Theme**|  |


### Return type

**RetMsg**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: body |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postApiCircleV1PunchclockCheck**
> boolean postApiCircleV1PunchclockCheck(punchClockReq)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostApiCircleV1PunchclockCheckRequest = {
  // PunchClockReq
  punchClockReq: {
    punchId: "punchId_example",
    readAt: 3.14,
  },
};

apiInstance.postApiCircleV1PunchclockCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **punchClockReq** | **PunchClockReq**|  |


### Return type

**boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: body |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postApiCircleV1PunchclockCreate**
> RetMsg postApiCircleV1PunchclockCreate(punchClockReq)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiPostApiCircleV1PunchclockCreateRequest = {
  // PunchClockReq
  punchClockReq: {
    punchId: "punchId_example",
    readAt: 3.14,
  },
};

apiInstance.postApiCircleV1PunchclockCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **punchClockReq** | **PunchClockReq**|  |


### Return type

**RetMsg**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: body |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


