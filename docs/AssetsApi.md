# Cryptoapis.AssetsApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssetDetailsByAssetID**](AssetsApi.md#getAssetDetailsByAssetID) | **GET** /market-data/assets/assetId/{assetId} | Get Asset Details By Asset ID
[**getAssetDetailsByAssetSymbol**](AssetsApi.md#getAssetDetailsByAssetSymbol) | **GET** /market-data/assets/{assetSymbol} | Get Asset Details By Asset Symbol



## getAssetDetailsByAssetID

> GetAssetDetailsByAssetIDR getAssetDetailsByAssetID(assetId, opts)

Get Asset Details By Asset ID

Through this endpoint users can obtain information on assets by &#x60;assetId&#x60;.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AssetsApi();
let assetId = 5b1ea92e584bf50020130612; // String | Defines the unique ID of the specific asset.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getAssetDetailsByAssetID(assetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **String**| Defines the unique ID of the specific asset. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetAssetDetailsByAssetIDR**](GetAssetDetailsByAssetIDR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssetDetailsByAssetSymbol

> GetAssetDetailsByAssetSymbolR getAssetDetailsByAssetSymbol(assetSymbol, opts)

Get Asset Details By Asset Symbol

Through this endpoint users can obtain information on assets by asset symbol.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AssetsApi();
let assetSymbol = BTC; // String | Specifies the asset's unique symbol in the Crypto APIs listings.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getAssetDetailsByAssetSymbol(assetSymbol, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetSymbol** | **String**| Specifies the asset&#39;s unique symbol in the Crypto APIs listings. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetAssetDetailsByAssetSymbolR**](GetAssetDetailsByAssetSymbolR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

