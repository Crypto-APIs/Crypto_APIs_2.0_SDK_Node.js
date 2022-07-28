# Cryptoapis.ZilliqaApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLatestMinedZilliqaBlock**](ZilliqaApi.md#getLatestMinedZilliqaBlock) | **GET** /blockchain-data/zilliqa-specific/{network}/blocks/last | Get Latest Mined Zilliqa Block
[**getZilliqaAddressDetails**](ZilliqaApi.md#getZilliqaAddressDetails) | **GET** /blockchain-data/zilliqa-specific/{network}/addresses/{address} | Get Zilliqa Address Details
[**getZilliqaBlockDetailsByBlockHash**](ZilliqaApi.md#getZilliqaBlockDetailsByBlockHash) | **GET** /blockchain-data/zilliqa-specific/{network}/blocks/hash/{blockHash} | Get Zilliqa Block Details By Block Hash
[**getZilliqaBlockDetailsByBlockHeight**](ZilliqaApi.md#getZilliqaBlockDetailsByBlockHeight) | **GET** /blockchain-data/zilliqa-specific/{network}/blocks/height/{blockHeight} | Get Zilliqa Block Details By Block Height
[**getZilliqaTransactionDetailsByTransactionID**](ZilliqaApi.md#getZilliqaTransactionDetailsByTransactionID) | **GET** /blockchain-data/zilliqa-specific/{network}/transactions/{transactionHash} | Get Zilliqa Transaction Details by Transaction ID
[**listZilliqaTransactionsByAddress**](ZilliqaApi.md#listZilliqaTransactionsByAddress) | **GET** /blockchain-data/zilliqa-specific/{network}/addresses/{address}/transactions | List Zilliqa Transactions by Address
[**listZilliqaTransactionsByBlockHash**](ZilliqaApi.md#listZilliqaTransactionsByBlockHash) | **GET** /blockchain-data/zilliqa-specific/{network}/blocks/hash/{blockHash}/transactions | List Zilliqa Transactions By Block Hash
[**listZilliqaTransactionsByBlockHeight**](ZilliqaApi.md#listZilliqaTransactionsByBlockHeight) | **GET** /blockchain-data/zilliqa-specific/{network}/blocks/height/{blockHeight}/transactions | List Zilliqa Transactions By Block Height



## getLatestMinedZilliqaBlock

> GetLatestMinedZilliqaBlockR getLatestMinedZilliqaBlock(network, opts)

Get Latest Mined Zilliqa Block

Through this endpoint users can obtain information on the latest block that has been mined on the Zilliqa blockchain. Data could include the current and previous block hashes, transaction count, and more.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getLatestMinedZilliqaBlock(network, opts).then((data) => {
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

[**GetLatestMinedZilliqaBlockR**](GetLatestMinedZilliqaBlockR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZilliqaAddressDetails

> GetZilliqaAddressDetailsR getZilliqaAddressDetails(network, address, opts)

Get Zilliqa Address Details

Through this endpoint customers can obtain information address details from the Zilliqa blockchain.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let address = zil17v9gs6ctn9pq6wka8k668umdlaj88nrfej7rnm; // String | Defines the specific transaction's address.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getZilliqaAddressDetails(network, address, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **address** | **String**| Defines the specific transaction&#39;s address. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetZilliqaAddressDetailsR**](GetZilliqaAddressDetailsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZilliqaBlockDetailsByBlockHash

> GetZilliqaBlockDetailsByBlockHashR getZilliqaBlockDetailsByBlockHash(network, blockHash, opts)

Get Zilliqa Block Details By Block Hash

Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Hash parameter.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHash = 0xf679d0b5387f0b0b3c3c1f368305512b23860888ba4415063d464a09b8bb6205; // String | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getZilliqaBlockDetailsByBlockHash(network, blockHash, opts).then((data) => {
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

[**GetZilliqaBlockDetailsByBlockHashR**](GetZilliqaBlockDetailsByBlockHashR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZilliqaBlockDetailsByBlockHeight

> GetZilliqaBlockDetailsByBlockHeightR getZilliqaBlockDetailsByBlockHeight(network, blockHeight, opts)

Get Zilliqa Block Details By Block Height

Through this endpoint customers can obtain block details from the Zilliqa blockchain by providing the block Height parameter.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHeight = 1244298; // Number | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getZilliqaBlockDetailsByBlockHeight(network, blockHeight, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **blockHeight** | **Number**| Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetZilliqaBlockDetailsByBlockHeightR**](GetZilliqaBlockDetailsByBlockHeightR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getZilliqaTransactionDetailsByTransactionID

> GetZilliqaTransactionDetailsByTransactionIDR getZilliqaTransactionDetailsByTransactionID(network, transactionHash, opts)

Get Zilliqa Transaction Details by Transaction ID

Through this endpoint customers can obtain transaction details on the Zilliqa blockchain by providing a Transaction ID parameter.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let transactionHash = 0xe649afbe2849c70a7a8b3087bee2c7b2fa0b6b77ab658b4fff390a1d06f0a8bc; // String | String identifier of the transaction
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getZilliqaTransactionDetailsByTransactionID(network, transactionHash, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **transactionHash** | **String**| String identifier of the transaction | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**GetZilliqaTransactionDetailsByTransactionIDR**](GetZilliqaTransactionDetailsByTransactionIDR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listZilliqaTransactionsByAddress

> ListZilliqaTransactionsByAddressR listZilliqaTransactionsByAddress(network, address, opts)

List Zilliqa Transactions by Address

Through this endpoint customers can list transactions on the Zilliqa blockchain by the address parameter.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let address = zil17v9gs6ctn9pq6wka8k668umdlaj88nrfej7rnm; // String | Defines the specific address of the sender.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listZilliqaTransactionsByAddress(network, address, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **address** | **String**| Defines the specific address of the sender. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListZilliqaTransactionsByAddressR**](ListZilliqaTransactionsByAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listZilliqaTransactionsByBlockHash

> ListZilliqaTransactionsByBlockHashR listZilliqaTransactionsByBlockHash(network, blockHash, opts)

List Zilliqa Transactions By Block Hash

Through this endpoint customers can list transactions on the Zilliqa blockchain by the block hash parameter.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHash = 0x3160ca05ac12f60023de6b6987596eccbf084629f1a92b59534c5c021bf27041; // String | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listZilliqaTransactionsByBlockHash(network, blockHash, opts).then((data) => {
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

[**ListZilliqaTransactionsByBlockHashR**](ListZilliqaTransactionsByBlockHashR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listZilliqaTransactionsByBlockHeight

> ListZilliqaTransactionsByBlockHeightR listZilliqaTransactionsByBlockHeight(network, blockHeight, opts)

List Zilliqa Transactions By Block Height

Through this endpoint customers can list transactions on the Zilliqa blockchain by the block height parameter.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.ZilliqaApi();
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let blockHeight = 1250392; // Number | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listZilliqaTransactionsByBlockHeight(network, blockHeight, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **blockHeight** | **Number**| Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListZilliqaTransactionsByBlockHeightR**](ListZilliqaTransactionsByBlockHeightR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

