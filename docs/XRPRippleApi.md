# Cryptoapis.XRPRippleApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLatestMinedXRPRippleBlock**](XRPRippleApi.md#getLatestMinedXRPRippleBlock) | **GET** /blockchain-data/xrp-specific/{network}/blocks/last | Get Latest Mined XRP (Ripple) Block
[**getXRPRippleAddressDetails**](XRPRippleApi.md#getXRPRippleAddressDetails) | **GET** /blockchain-data/xrp-specific/{network}/addresses/{address} | Get XRP (Ripple) Address Details
[**getXRPRippleBlockDetailsByBlockHash**](XRPRippleApi.md#getXRPRippleBlockDetailsByBlockHash) | **GET** /blockchain-data/xrp-specific/{network}/blocks/hash/{blockHash} | Get XRP (Ripple) Block Details By Block Hash
[**getXRPRippleBlockDetailsByBlockHeight**](XRPRippleApi.md#getXRPRippleBlockDetailsByBlockHeight) | **GET** /blockchain-data/xrp-specific/{network}/blocks/height/{blockHeight} | Get XRP (Ripple) Block Details By Block Height
[**getXRPRippleTransactionDetailsByTransactionID**](XRPRippleApi.md#getXRPRippleTransactionDetailsByTransactionID) | **GET** /blockchain-data/xrp-specific/{network}/transactions/{transactionHash} | Get XRP (Ripple) Transaction Details By Transaction ID
[**listXRPRippleTransactionsByAddress**](XRPRippleApi.md#listXRPRippleTransactionsByAddress) | **GET** /blockchain-data/xrp-specific/{network}/addresses/{address}/transactions | List XRP (Ripple) Transactions by Address
[**listXRPRippleTransactionsByAddressAndTimeRange**](XRPRippleApi.md#listXRPRippleTransactionsByAddressAndTimeRange) | **GET** /blockchain-data/xrp-specific/{network}/addresses/{address}/transactions-by-time-range | List XRP (Ripple) Transactions By Address And Time Range
[**listXRPRippleTransactionsByBlockHash**](XRPRippleApi.md#listXRPRippleTransactionsByBlockHash) | **GET** /blockchain-data/xrp-specific/{network}/blocks/hash/{blockHash}/transactions | List XRP (Ripple) Transactions By Block Hash
[**listXRPRippleTransactionsByBlockHeight**](XRPRippleApi.md#listXRPRippleTransactionsByBlockHeight) | **GET** /blockchain-data/xrp-specific/{network}/blocks/height/{blockHeight}/transactions | List XRP (Ripple) Transactions By Block Height



## getLatestMinedXRPRippleBlock

> GetLatestMinedXRPRippleBlockR getLatestMinedXRPRippleBlock(network, opts)

Get Latest Mined XRP (Ripple) Block

Through this endpoint customers can fetch the last mined XRP block in the blockchain, along with its details. These could include the hash of the specific, the previous and the next block, its transactions count, its height, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetLatestMinedXRPRippleBlockR**](GetLatestMinedXRPRippleBlockR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleAddressDetails

> GetXRPRippleAddressDetailsR getXRPRippleAddressDetails(network, address, opts)

Get XRP (Ripple) Address Details

Through this endpoint the customer can receive basic information about a given XRP address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
let address = rA9bXGJcXvZKaWofrRphdJsBWzhyCfH3z; // String | Represents the public address, which is a compressed and shortened form of a public key.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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

[**GetXRPRippleAddressDetailsR**](GetXRPRippleAddressDetailsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleBlockDetailsByBlockHash

> GetXRPRippleBlockDetailsByBlockHashR getXRPRippleBlockDetailsByBlockHash(network, blockHash, opts)

Get XRP (Ripple) Block Details By Block Hash

Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the &#x60;hash&#x60; parameter. These block details could include the hash of the specific, the previous and the next block, the number of included transactions, etc.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHash = 1ab0614d2a438da8b23086cbceef7d443edbd295d9c7619fc8a19c7618bc22c9; // String | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **blockHash** | **String**| Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleBlockDetailsByBlockHashR**](GetXRPRippleBlockDetailsByBlockHashR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleBlockDetailsByBlockHeight

> GetXRPRippleBlockDetailsByBlockHeightR getXRPRippleBlockDetailsByBlockHeight(network, blockHeight, opts)

Get XRP (Ripple) Block Details By Block Height

Through this endpoint customers can obtain basic information about a given XRP block (a block on the XRP blockchain), specifically by using the &#x60;height&#x60; parameter. These block details could include the hash of the specific, the previous and the next block, its transactions count, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\",  are test networks.
let blockHeight = 15886156; // String | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getXRPRippleBlockDetailsByBlockHeight(network, blockHeight, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;,  are test networks. | 
 **blockHeight** | **String**| Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleBlockDetailsByBlockHeightR**](GetXRPRippleBlockDetailsByBlockHeightR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getXRPRippleTransactionDetailsByTransactionID

> GetXRPRippleTransactionDetailsByTransactionIDR getXRPRippleTransactionDetailsByTransactionID(network, transactionHash, opts)

Get XRP (Ripple) Transaction Details By Transaction ID

Through this endpoint customers can obtain details about a XRP transaction by the transaction&#39;s unique identifier.     Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let transactionHash = 36a1737481edec87bacc3101dfb752ae2c76f9171e7edebe587e330c1ea77c8d; // String | Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **transactionHash** | **String**| Represents the same as &#x60;transactionId&#x60; for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols &#x60;hash&#x60; is different from &#x60;transactionId&#x60; for SegWit transactions. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetXRPRippleTransactionDetailsByTransactionIDR**](GetXRPRippleTransactionDetailsByTransactionIDR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listXRPRippleTransactionsByAddress

> ListXRPRippleTransactionsByAddressR listXRPRippleTransactionsByAddress(network, address, opts)

List XRP (Ripple) Transactions by Address

This endpoint will list XRP transactions by a attribute &#x60;address&#x60;. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let address = rA9bXGJcXvZKaWofrRphdJsBWzhyCfH3z; // String | Represents the public address, which is a compressed and shortened form of a public key.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0, // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
  'transactionType': payment // String | 
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
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **address** | **String**| Represents the public address, which is a compressed and shortened form of a public key. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]
 **transactionType** | **String**|  | [optional] 

### Return type

[**ListXRPRippleTransactionsByAddressR**](ListXRPRippleTransactionsByAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listXRPRippleTransactionsByAddressAndTimeRange

> ListXRPRippleTransactionsByAddressAndTimeRangeR listXRPRippleTransactionsByAddressAndTimeRange(network, address, fromTimestamp, toTimestamp, opts)

List XRP (Ripple) Transactions By Address And Time Range

Тhis endpoint lists XRP transactions by the attribute &#x60;address&#x60; and the query parameters &#x60;fromTimestamp&#x60; and &#x60;toTimestamp&#x60;  which gives customers the opportunity to filter the results by a specified time period.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let address = rA9bXGJcXvZKaWofrRphdJsBWzhyCfH3z; // String | Represents the public address, which is a compressed and shortened form of a public key.
let fromTimestamp = 1616347862; // Number | Defines the specific time/date from which the results will start being listed.
let toTimestamp = 1616347870; // Number | Defines the specific time/date to which the results will be listed.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0, // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
  'transactionType': payment // String | Defines the transaction type.
};
apiInstance.listXRPRippleTransactionsByAddressAndTimeRange(network, address, fromTimestamp, toTimestamp, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **address** | **String**| Represents the public address, which is a compressed and shortened form of a public key. | 
 **fromTimestamp** | **Number**| Defines the specific time/date from which the results will start being listed. | 
 **toTimestamp** | **Number**| Defines the specific time/date to which the results will be listed. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]
 **transactionType** | **String**| Defines the transaction type. | [optional] 

### Return type

[**ListXRPRippleTransactionsByAddressAndTimeRangeR**](ListXRPRippleTransactionsByAddressAndTimeRangeR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listXRPRippleTransactionsByBlockHash

> ListXRPRippleTransactionsByBlockHashR listXRPRippleTransactionsByBlockHash(network, blockHash, opts)

List XRP (Ripple) Transactions By Block Hash

This endpoint will list transactions by an attribute &#x60;blockHash&#x60;. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHash = 14754656235f865a74eba27791fd41a47bdfe07fe811ff6d78f53db32e129e39; // String | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
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
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **blockHash** | **String**| Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListXRPRippleTransactionsByBlockHashR**](ListXRPRippleTransactionsByBlockHashR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listXRPRippleTransactionsByBlockHeight

> ListXRPRippleTransactionsByBlockHeightR listXRPRippleTransactionsByBlockHeight(network, blockHeight, opts)

List XRP (Ripple) Transactions By Block Height

This endpoint will list transactions by an attribute &#x60;blockHeight&#x60;. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.    Since XRP is a different blockchain than Bitcoin and Ethereum, it isn&#39;t unified.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.XRPRippleApi();
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHeight = 15971358; // Number | 
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listXRPRippleTransactionsByBlockHeight(network, blockHeight, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **blockHeight** | **Number**|  | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListXRPRippleTransactionsByBlockHeightR**](ListXRPRippleTransactionsByBlockHeightR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

