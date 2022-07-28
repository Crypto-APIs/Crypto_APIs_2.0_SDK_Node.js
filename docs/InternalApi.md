# Cryptoapis.InternalApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInternalTransactionByTransactionHashAndOperationId**](InternalApi.md#getInternalTransactionByTransactionHashAndOperationId) | **GET** /blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/internal/{operationId} | Get Internal Transaction by Transaction Hash and Operation Id
[**listInternalTransactionDetailsByTransactionHash**](InternalApi.md#listInternalTransactionDetailsByTransactionHash) | **GET** /blockchain-data/{blockchain}/{network}/transactions/{transactionHash}/internal | List Internal Transaction Details by Transaction Hash
[**listInternalTransactionsByAddress**](InternalApi.md#listInternalTransactionsByAddress) | **GET** /blockchain-data/{blockchain}/{network}/addresses/{address}/internal | List Internal Transactions By Address



## getInternalTransactionByTransactionHashAndOperationId

> GetInternalTransactionByTransactionHashAndOperationIdR getInternalTransactionByTransactionHashAndOperationId(blockchain, network, operationId, transactionHash, opts)

Get Internal Transaction by Transaction Hash and Operation Id

Through this endpoint customers can obtain detailed information about a specific Internal Transaction by using the attributes &#x60;transactionHash&#x60;  (the parent transaction&#39;s Hash) and &#x60;operationId&#x60; (type trace address).    An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.InternalApi();
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let operationId = call_4; // String | Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
let transactionHash = 0x92bb77e16444e0417c8b50dfab68e89c7ad27d4140a766c3bbd4d0ac195f12fc; // String | String identifier of the parent transaction of the internal transaction represented in CryptoAPIs.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getInternalTransactionByTransactionHashAndOperationId(blockchain, network, operationId, transactionHash, opts).then((data) => {
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
 **operationId** | **String**| Represents the unique internal transaction ID in regards to the parent transaction (type trace address). | 
 **transactionHash** | **String**| String identifier of the parent transaction of the internal transaction represented in CryptoAPIs. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetInternalTransactionByTransactionHashAndOperationIdR**](GetInternalTransactionByTransactionHashAndOperationIdR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInternalTransactionDetailsByTransactionHash

> ListInternalTransactionDetailsByTransactionHashR listInternalTransactionDetailsByTransactionHash(blockchain, network, transactionHash, opts)

List Internal Transaction Details by Transaction Hash

Through this endpoint customers can list internal transactions along with their details by a specific attribute &#x60;transactionHash&#x60;, which is the parent transaction&#39;s Hash.    An internal transaction is the result of a smart contract being triggered by an EOA or a subsequent contract call.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.InternalApi();
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let transactionHash = 0x5d4ea0471b70de09fa3d6a4bc32f703ec44483bffa4d6169fa0a36c6a1dc108a; // String | String identifier of the parent transaction of the internal transaction represented in CryptoAPIs.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listInternalTransactionDetailsByTransactionHash(blockchain, network, transactionHash, opts).then((data) => {
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
 **transactionHash** | **String**| String identifier of the parent transaction of the internal transaction represented in CryptoAPIs. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListInternalTransactionDetailsByTransactionHashR**](ListInternalTransactionDetailsByTransactionHashR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInternalTransactionsByAddress

> ListInternalTransactionsByAddressR listInternalTransactionsByAddress(blockchain, network, address, opts)

List Internal Transactions By Address

Through this endpoint customers can list internal transactions by the &#x60;address&#x60; attribute.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.InternalApi();
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let address = 0xc8fe2ceac93ad50e496b497357ae5385192dd28d; // String | String identifier of the address document represented in CryptoAPIs
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listInternalTransactionsByAddress(blockchain, network, address, opts).then((data) => {
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
 **address** | **String**| String identifier of the address document represented in CryptoAPIs | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListInternalTransactionsByAddressR**](ListInternalTransactionsByAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

