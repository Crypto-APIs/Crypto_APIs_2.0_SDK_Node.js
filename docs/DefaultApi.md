# CryptoApis.DefaultApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContractDetailsByAddress**](DefaultApi.md#getContractDetailsByAddress) | **GET** /blockchain-data/{blockchain}/{network}/addresses/{contractAddress}/contract | Get Contract Details by Address



## getContractDetailsByAddress

> GetContractDetailsByAddressResponse getContractDetailsByAddress(blockchain, network, contractAddress, opts)

Get Contract Details by Address

This endpoint will return a smart contract details by address, this address is the address of the smart contract. It&#39;s not the same as the smart contract creator address.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.DefaultApi();
let blockchain = "blockchain_example"; // String | 
let network = "network_example"; // String | 
let contractAddress = "contractAddress_example"; // String | String identifier of the token
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getContractDetailsByAddress(blockchain, network, contractAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**|  | 
 **network** | **String**|  | 
 **contractAddress** | **String**| String identifier of the token | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetContractDetailsByAddressResponse**](GetContractDetailsByAddressResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

