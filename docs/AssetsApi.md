# CryptoApis.AssetsApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAssetsDetails**](AssetsApi.md#listAssetsDetails) | **GET** /market-data/assets/details | List Assets Details



## listAssetsDetails

> ListAssetsDetailsResponse listAssetsDetails(opts)

List Assets Details

This endpoint will return details on a requested asset. The asset could be a cryptocurrency or FIAT asset that we support. Each asset has a unique identifier - &#x60;assetId&#x60; and a unique symbol in the form of a string, e.g. \&quot;BTC\&quot;.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.AssetsApi();
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'assetType': crypto, // String | Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 10 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listAssetsDetails(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **assetType** | **String**| Defines the type of the supported asset. This could be either \&quot;crypto\&quot; or \&quot;fiat\&quot;. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListAssetsDetailsResponse**](ListAssetsDetailsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

