# Cryptoapis.FeaturesApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastLocallySignedTransaction**](FeaturesApi.md#broadcastLocallySignedTransaction) | **POST** /blockchain-tools/{blockchain}/{network}/transactions/broadcast | Broadcast Locally Signed Transaction
[**getEIP1559FeeRecommendations**](FeaturesApi.md#getEIP1559FeeRecommendations) | **GET** /blockchain-tools/{blockchain}/{network}/fees/eip1559 | Get EIP 1559 Fee Recommendations
[**validateAddress**](FeaturesApi.md#validateAddress) | **POST** /blockchain-tools/{blockchain}/{network}/addresses/validate | Validate Address



## broadcastLocallySignedTransaction

> BroadcastLocallySignedTransactionR broadcastLocallySignedTransaction(blockchain, network, opts)

Broadcast Locally Signed Transaction

Through this endpoint customers can broadcast transactions that have been already signed locally. Instead of using a node for broadcasting a signed transaction users can use this endpoint. We then keep the user posted about the status by sending you a callback with a success or failure status.    {warning}This can be prepared and signed **only** locally, not through the API. We can provide support only for the process of broadcasting.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.FeaturesApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'broadcastLocallySignedTransactionRB': new Cryptoapis.BroadcastLocallySignedTransactionRB() // BroadcastLocallySignedTransactionRB | 
};
apiInstance.broadcastLocallySignedTransaction(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **broadcastLocallySignedTransactionRB** | [**BroadcastLocallySignedTransactionRB**](BroadcastLocallySignedTransactionRB.md)|  | [optional] 

### Return type

[**BroadcastLocallySignedTransactionR**](BroadcastLocallySignedTransactionR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEIP1559FeeRecommendations

> GetEIP1559FeeRecommendationsR getEIP1559FeeRecommendations(network, blockchain, opts)

Get EIP 1559 Fee Recommendations

Through this endpoint customers can obtain fee recommendations specifically for EIP 1559.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.FeaturesApi();
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getEIP1559FeeRecommendations(network, blockchain, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetEIP1559FeeRecommendationsR**](GetEIP1559FeeRecommendationsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateAddress

> ValidateAddressR validateAddress(blockchain, network, opts)

Validate Address

This endpoint checks user public addresses whether they are valid or not.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.FeaturesApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'validateAddressRB': new Cryptoapis.ValidateAddressRB() // ValidateAddressRB | 
};
apiInstance.validateAddress(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **validateAddressRB** | [**ValidateAddressRB**](ValidateAddressRB.md)|  | [optional] 

### Return type

[**ValidateAddressR**](ValidateAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

