# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getQuantV2HistoryIndexDailyChaodieEvents**](DefaultApi.md#getQuantV2HistoryIndexDailyChaodieEvents) | **GET** /quant/v2/history/index/daily/chaodie-events | 
[**getQuantV2HistoryStockDaily**](DefaultApi.md#getQuantV2HistoryStockDaily) | **GET** /quant/v2/history/stock/daily | 
[**getQuantV2HistoryStockDailyChaodieEvents**](DefaultApi.md#getQuantV2HistoryStockDailyChaodieEvents) | **GET** /quant/v2/history/stock/daily/chaodie-events | 
[**getQuantV2QuantBoatEgg**](DefaultApi.md#getQuantV2QuantBoatEgg) | **GET** /quant/v2/quant/boat/egg | 
[**getQuantV2QuantBoatPig**](DefaultApi.md#getQuantV2QuantBoatPig) | **GET** /quant/v2/quant/boat/pig | 
[**getQuantV2SecurityDataCaiwu**](DefaultApi.md#getQuantV2SecurityDataCaiwu) | **GET** /quant/v2/security/data/caiwu | 
[**getQuantV2SecurityIndicatorChaodie**](DefaultApi.md#getQuantV2SecurityIndicatorChaodie) | **GET** /quant/v2/security/indicator/chaodie | 
[**getQuantV2SecurityIndicatorPanming**](DefaultApi.md#getQuantV2SecurityIndicatorPanming) | **GET** /quant/v2/security/indicator/panming | 
[**getQuantV2SecurityInfoStock**](DefaultApi.md#getQuantV2SecurityInfoStock) | **GET** /quant/v2/security/info/stock | 


# **getQuantV2HistoryIndexDailyChaodieEvents**
> Array<IndexHistoryJoda> getQuantV2HistoryIndexDailyChaodieEvents()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2HistoryIndexDailyChaodieEventsRequest = {
  // string
  code: "code_example",
  // string
  type: "type_example",
  // string
  period: "period_example",
};

apiInstance.getQuantV2HistoryIndexDailyChaodieEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
 **type** | [**string**] |  | defaults to undefined
 **period** | [**string**] |  | defaults to undefined


### Return type

**Array<IndexHistoryJoda>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code, Invalid value for: query parameter type, Invalid value for: query parameter period |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2HistoryStockDaily**
> RetStock getQuantV2HistoryStockDaily()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2HistoryStockDailyRequest = {
  // string
  code: "code_example",
  // string
  type: "type_example",
  // string
  period: "period_example",
};

apiInstance.getQuantV2HistoryStockDaily(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
 **type** | [**string**] |  | defaults to undefined
 **period** | [**string**] |  | defaults to undefined


### Return type

**RetStock**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code, Invalid value for: query parameter type, Invalid value for: query parameter period |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2HistoryStockDailyChaodieEvents**
> RetListWithEventStock getQuantV2HistoryStockDailyChaodieEvents()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2HistoryStockDailyChaodieEventsRequest = {
  // string
  code: "code_example",
  // string
  type: "type_example",
  // string
  period: "period_example",
};

apiInstance.getQuantV2HistoryStockDailyChaodieEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined
 **type** | [**string**] |  | defaults to undefined
 **period** | [**string**] |  | defaults to undefined


### Return type

**RetListWithEventStock**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code, Invalid value for: query parameter type, Invalid value for: query parameter period |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2QuantBoatEgg**
> Array<ABoatEgg> getQuantV2QuantBoatEgg()

鸡蛋api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getQuantV2QuantBoatEgg(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ABoatEgg>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2QuantBoatPig**
> Array<FuturesPigInfoResponse> getQuantV2QuantBoatPig()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2QuantBoatPigRequest = {
  // PigSymbol
  symbol: "猪肉批发价",
};

apiInstance.getQuantV2QuantBoatPig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **PigSymbol** |  | defaults to undefined


### Return type

**Array<FuturesPigInfoResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter symbol |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2SecurityDataCaiwu**
> Array<RespstockFinancialAnalysisIndicatorResponse> getQuantV2SecurityDataCaiwu()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2SecurityDataCaiwuRequest = {
  // string
  code: "code_example",
};

apiInstance.getQuantV2SecurityDataCaiwu(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined


### Return type

**Array<RespstockFinancialAnalysisIndicatorResponse>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2SecurityIndicatorChaodie**
> RetStockChaoDie getQuantV2SecurityIndicatorChaodie()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2SecurityIndicatorChaodieRequest = {
  // string
  code: "code_example",
};

apiInstance.getQuantV2SecurityIndicatorChaodie(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined


### Return type

**RetStockChaoDie**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2SecurityIndicatorPanming**
> Array<PanMingChaoDieItem2> getQuantV2SecurityIndicatorPanming()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2SecurityIndicatorPanmingRequest = {
  // string
  code: "code_example",
};

apiInstance.getQuantV2SecurityIndicatorPanming(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined


### Return type

**Array<PanMingChaoDieItem2>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuantV2SecurityInfoStock**
> StockInfo getQuantV2SecurityInfoStock()

这是个api

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiGetQuantV2SecurityInfoStockRequest = {
  // string
  code: "code_example",
};

apiInstance.getQuantV2SecurityInfoStock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] |  | defaults to undefined


### Return type

**StockInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Invalid value for: query parameter code |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


