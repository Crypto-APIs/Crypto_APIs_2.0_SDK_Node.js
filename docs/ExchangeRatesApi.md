# CryptoApis.ExchangeRatesApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExchangeRateByAssetSymbols**](ExchangeRatesApi.md#getExchangeRateByAssetSymbols) | **GET** /market-data/exchange-rates/by-symbols/{fromAssetSymbol}/{toAssetSymbol} | Get Exchange Rate By Asset Symbols
[**getExchangeRateByAssetsIDs**](ExchangeRatesApi.md#getExchangeRateByAssetsIDs) | **GET** /market-data/exchange-rates/by-asset-ids/{fromAssetId}/{toAssetId} | Get Exchange Rate By Assets IDs



## getExchangeRateByAssetSymbols

> GetExchangeRateByAssetSymbolsResponse getExchangeRateByAssetSymbols(fromAssetSymbol, toAssetSymbol, opts)

Get Exchange Rate By Asset Symbols

Through this endpoint customers can obtain exchange rates by asset symbols. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset symbol.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.ExchangeRatesApi();
let fromAssetSymbol = btc; // String | Defines the base asset symbol to get a rate for.
let toAssetSymbol = usd; // String | Defines the relation asset symbol in which the base asset rate will be displayed.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getExchangeRateByAssetSymbols(fromAssetSymbol, toAssetSymbol, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAssetSymbol** | **String**| Defines the base asset symbol to get a rate for. | 
 **toAssetSymbol** | **String**| Defines the relation asset symbol in which the base asset rate will be displayed. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetExchangeRateByAssetSymbolsResponse**](GetExchangeRateByAssetSymbolsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExchangeRateByAssetsIDs

> GetExchangeRateByAssetsIDsResponse getExchangeRateByAssetsIDs(fromAssetId, toAssetId, opts)

Get Exchange Rate By Assets IDs

Through this endpoint customers can obtain exchange rates by asset IDs. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset Reference ID.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.ExchangeRatesApi();
let fromAssetId = 5b1ea92e584bf50020130612; // String | Defines the base asset Reference ID to get a rate for.
let toAssetId = 5b1ea92e584bf50020130615; // String | Defines the relation asset Reference ID in which the base asset rate will be displayed.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getExchangeRateByAssetsIDs(fromAssetId, toAssetId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromAssetId** | **String**| Defines the base asset Reference ID to get a rate for. | 
 **toAssetId** | **String**| Defines the relation asset Reference ID in which the base asset rate will be displayed. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetExchangeRateByAssetsIDsResponse**](GetExchangeRateByAssetsIDsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

