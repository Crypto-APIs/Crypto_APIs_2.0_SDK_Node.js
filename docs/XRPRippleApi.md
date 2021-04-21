# CryptoApis.XRPRippleApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLatestMinedXRPRippleBlock**](XRPRippleApi.md#getLatestMinedXRPRippleBlock) | **GET** /blockchain-data/xrp/{network}/blocks/last | Get Latest Mined XRP (Ripple) Block
[**getXRPRippleAddressDetails**](XRPRippleApi.md#getXRPRippleAddressDetails) | **GET** /blockchain-data/xrp/{network}/addresses/{address} | Get XRP (Ripple) Address Details
[**getXRPRippleBlockDetailsByBlockHash**](XRPRippleApi.md#getXRPRippleBlockDetailsByBlockHash) | **GET** /blockchain-data/xrp/{network}/blocks/hash/{blockHash} | Get XRP (Ripple) Block Details By Block Hash
[**getXRPRippleBlockDetailsByBlockHeight**](XRPRippleApi.md#getXRPRippleBlockDetailsByBlockHeight) | **GET** /blockchain-data/xrp/{network}/blocks/height/{height} | Get XRP (Ripple) Block Details By Block Height
[**getXRPRippleTransactionDetailsByTransactionID**](XRPRippleApi.md#getXRPRippleTransactionDetailsByTransactionID) | **GET** /blockchain-data/xrp/{network}/transactions/{transactionHash} | Get XRP (Ripple) Transaction Details By Transaction ID
[**listXRPRippleTransactionsByAddress**](XRPRippleApi.md#listXRPRippleTransactionsByAddress) | **GET** /blockchain-data/xrp/{network}/addresses/{address}/transactions | List XRP (Ripple) Transactions by Address
[**listXRPRippleTransactionsByBlockHash**](XRPRippleApi.md#listXRPRippleTransactionsByBlockHash) | **GET** /blockchain-data/xrp/{network}/blocks/hash/{blockHash}/transactions | List XRP (Ripple) Transactions By Block Hash



## getLatestMinedXRPRippleBlock

> GetLatestMinedXRPRippleBlockResponse getLatestMinedXRPRippleBlock(network, opts)

Get Latest Mined XRP (Ripple) Block

Through this endpoint customers can fetch the last mined XRP block in the blockchain, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getLatestMinedXRPRippleBlock(network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetLatestMinedXRPRippleBlockResponse**](GetLatestMinedXRPRippleBlockResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleAddressDetails

> GetXRPRippleAddressDetailsResponse getXRPRippleAddressDetails(network, address, opts)

Get XRP (Ripple) Address Details

Through this endpoint the customer can receive basic information about a given XRP address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
let address = rA9bXGJcXvZKaWofrRphdJsBWzhyCfH3z; // String | Represents the public address, which is a compressed and shortened form of a public key.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getXRPRippleAddressDetails(network, address, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;,  are test networks. | 
 **address** | **String**| Represents the public address, which is a compressed and shortened form of a public key. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleAddressDetailsResponse**](GetXRPRippleAddressDetailsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleBlockDetailsByBlockHash

> GetXRPRippleBlockDetailsByBlockHashResponse getXRPRippleBlockDetailsByBlockHash(network, blockHash, opts)

Get XRP (Ripple) Block Details By Block Hash

Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the &#x60;hash&#x60; parameter. These block details could include the hash of the specific, the previous and the next block, the number of included transactions, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
let blockHash = 1ab0614d2a438da8b23086cbceef7d443edbd295d9c7619fc8a19c7618bc22c9; // String | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getXRPRippleBlockDetailsByBlockHash(network, blockHash, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;,  are test networks. | 
 **blockHash** | **String**| Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleBlockDetailsByBlockHashResponse**](GetXRPRippleBlockDetailsByBlockHashResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleBlockDetailsByBlockHeight

> GetXRPRippleBlockDetailsByBlockHeightResponse getXRPRippleBlockDetailsByBlockHeight(network, height, opts)

Get XRP (Ripple) Block Details By Block Height

Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the &#x60;height&#x60; parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
let height = 15886156; // String | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getXRPRippleBlockDetailsByBlockHeight(network, height, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;,  are test networks. | 
 **height** | **String**| Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleBlockDetailsByBlockHeightResponse**](GetXRPRippleBlockDetailsByBlockHeightResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleTransactionDetailsByTransactionID

> GetXRPRippleTransactionDetailsByTransactionIDResponse getXRPRippleTransactionDetailsByTransactionID(network, transactionHash, opts)

Get XRP (Ripple) Transaction Details By Transaction ID

Through this endpoint customers can obtain details about a XRP transaction by the transaction&#39;s unique identifier.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let transactionHash = 36a1737481edec87bacc3101dfb752ae2c76f9171e7edebe587e330c1ea77c8d; // String | Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getXRPRippleTransactionDetailsByTransactionID(network, transactionHash, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
 **transactionHash** | **String**| Represents the same as &#x60;transactionId&#x60; for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols &#x60;hash&#x60; is different from &#x60;transactionId&#x60; for SegWit transactions. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleTransactionDetailsByTransactionIDResponse**](GetXRPRippleTransactionDetailsByTransactionIDResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listXRPRippleTransactionsByAddress

> ListXRPRippleTransactionsByAddressResponse listXRPRippleTransactionsByAddress(network, address, opts)

List XRP (Ripple) Transactions by Address

This endpoint will list XRP transactions by a attribute &#x60;address&#x60;. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
let address = rA9bXGJcXvZKaWofrRphdJsBWzhyCfH3z; // String | Represents the public address, which is a compressed and shortened form of a public key.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 10 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listXRPRippleTransactionsByAddress(network, address, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;,  are test networks. | 
 **address** | **String**| Represents the public address, which is a compressed and shortened form of a public key. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListXRPRippleTransactionsByAddressResponse**](ListXRPRippleTransactionsByAddressResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listXRPRippleTransactionsByBlockHash

> ListXRPRippleTransactionsByBlockHashResponse listXRPRippleTransactionsByBlockHash(network, blockHash, opts)

List XRP (Ripple) Transactions By Block Hash

This endpoint will list transactions by an attribute &#x60;blockHash&#x60;. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let blockHash = 14754656235f865a74eba27791fd41a47bdfe07fe811ff6d78f53db32e129e39; // String | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 10 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listXRPRippleTransactionsByBlockHash(network, blockHash, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
 **blockHash** | **String**| Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListXRPRippleTransactionsByBlockHashResponse**](ListXRPRippleTransactionsByBlockHashResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

