# Cryptoapis.FeaturesApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**broadcastLocallySignedTransaction**](FeaturesApi.md#broadcastLocallySignedTransaction) | **POST** /blockchain-tools/{blockchain}/{network}/transactions/broadcast | Broadcast Locally Signed Transaction
[**convertBitcoinCashAddress**](FeaturesApi.md#convertBitcoinCashAddress) | **POST** /blockchain-tools/{blockchain}/{network}/address/convert | Convert Bitcoin Cash Address
[**decodeRawTransactionHex**](FeaturesApi.md#decodeRawTransactionHex) | **POST** /blockchain-tools/{blockchain}/{network}/decode-raw-transaction | Decode Raw Transaction Hex
[**decodeXAddress**](FeaturesApi.md#decodeXAddress) | **GET** /blockchain-tools/{blockchain}/{network}/decode-x-address/{xAddress} | Decode X-Address
[**deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses**](FeaturesApi.md#deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses) | **GET** /blockchain-tools/{blockchain}/{network}/hd/{extendedPublicKey}/addresses/derive-address | Derive HD Wallet (xPub, yPub, zPub) Change Or Receiving Addresses
[**encodeXAddress**](FeaturesApi.md#encodeXAddress) | **GET** /blockchain-tools/{blockchain}/{network}/encode-x-address/{classicAddress}/{addressTag} | Encode X-Address
[**estimateGasLimit**](FeaturesApi.md#estimateGasLimit) | **POST** /blockchain-tools/{blockchain}/{network}/gas-limit | Estimate Gas Limit
[**estimateTokenGasLimit**](FeaturesApi.md#estimateTokenGasLimit) | **POST** /blockchain-tools/{blockchain}/{network}/gas-limit/contract | Estimate Token Gas Limit
[**getEIP1559FeeRecommendations**](FeaturesApi.md#getEIP1559FeeRecommendations) | **GET** /blockchain-tools/{blockchain}/{network}/fees/eip1559 | Get EIP 1559 Fee Recommendations
[**prepareAFungibleTokenTransferFromAddress**](FeaturesApi.md#prepareAFungibleTokenTransferFromAddress) | **POST** /blockchain-tools/{blockchain}/{network}/transactions/prepare-token-from-address | Prepare A Fungible Token Transfer From Address
[**prepareANonFungibleTokenTransferFromAddress**](FeaturesApi.md#prepareANonFungibleTokenTransferFromAddress) | **POST** /blockchain-tools/{blockchain}/{network}/transactions/prepare-nft-from-address | Prepare A Non Fungible Token Transfer From Address
[**prepareTransactionFromAddress**](FeaturesApi.md#prepareTransactionFromAddress) | **POST** /blockchain-data/{blockchain}/{network}/transactions/prepare-from-address | Prepare Transaction From Address
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
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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


## convertBitcoinCashAddress

> ConvertBitcoinCashAddressR convertBitcoinCashAddress(blockchain, network, opts)

Convert Bitcoin Cash Address

Through this endpoint customers will be able to convert addresses for the BCH (Bitcoin Cash) protocol from BCH legacy to cash address and vice versa.

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
let blockchain = bitcoin-cash; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'convertBitcoinCashAddressRB': new Cryptoapis.ConvertBitcoinCashAddressRB() // ConvertBitcoinCashAddressRB | 
};
apiInstance.convertBitcoinCashAddress(blockchain, network, opts).then((data) => {
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
 **convertBitcoinCashAddressRB** | [**ConvertBitcoinCashAddressRB**](ConvertBitcoinCashAddressRB.md)|  | [optional] 

### Return type

[**ConvertBitcoinCashAddressR**](ConvertBitcoinCashAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decodeRawTransactionHex

> DecodeRawTransactionHexR decodeRawTransactionHex(blockchain, network, opts)

Decode Raw Transaction Hex

Through this endpoint customers can decode a raw transaction hex and see the decoded transactions&#39; details.

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
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'decodeRawTransactionHexRB': new Cryptoapis.DecodeRawTransactionHexRB() // DecodeRawTransactionHexRB | 
};
apiInstance.decodeRawTransactionHex(blockchain, network, opts).then((data) => {
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
 **decodeRawTransactionHexRB** | [**DecodeRawTransactionHexRB**](DecodeRawTransactionHexRB.md)|  | [optional] 

### Return type

[**DecodeRawTransactionHexR**](DecodeRawTransactionHexR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decodeXAddress

> DecodeXAddressR decodeXAddress(blockchain, network, xAddress, opts)

Decode X-Address

Through this endpoint, customers can decode an encoded XRP address with tag, by providing the specific x-address. The response includes the decoded classic address and the tag.

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
let blockchain = xrp; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let xAddress = TVTMSyg6nRscAm2JtRd8hnpF9nD21CgZx6ibb9iy3EWHotV; // String | Represents the encoded classic address with its destination tag.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.decodeXAddress(blockchain, network, xAddress, opts).then((data) => {
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
 **xAddress** | **String**| Represents the encoded classic address with its destination tag. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**DecodeXAddressR**](DecodeXAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses

> DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses(blockchain, extendedPublicKey, network, opts)

Derive HD Wallet (xPub, yPub, zPub) Change Or Receiving Addresses

Through this endpoint, customers can derive up to 10 addresses - both change and receive, from a certain HD Wallet (xPub, yPub, zPub), by providing an extended public key. By default the system creates a receiving/deposit address, unless the isChange attribute is set to &#39;true&#39;. In that case the system derives a &#39;change&#39; address. The change address can be derived only for UTXO based blockchains, for all the rest, this endpoint always creates a deposit/receiving address.

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
let extendedPublicKey = upub5Ei6bRNneqozk6smK7dvtXHC5PjUyEL4ynCfMKvjznLcXi9DQaikETzQjHvJC43XexMvQs64jxB1njMjCHpRZ4xQWAmv3ge9cVtjfsHmbvQ; // String | Defines the account extended publicly known key which is used to derive all child public keys.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'addressFormat': p2sh, // String | Represents the format of the address.
  'addressesCount': 2, // Number | Represents the addresses count.
  'isChange': true, // Boolean | Defines if the specific address is a change or deposit address. If the value is True - it is a change address, if it is False - it is a Deposit address.
  'startIndex': 3 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses(blockchain, extendedPublicKey, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **extendedPublicKey** | **String**| Defines the account extended publicly known key which is used to derive all child public keys. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **addressFormat** | **String**| Represents the format of the address. | [optional] 
 **addressesCount** | **Number**| Represents the addresses count. | [optional] 
 **isChange** | **Boolean**| Defines if the specific address is a change or deposit address. If the value is True - it is a change address, if it is False - it is a Deposit address. | [optional] 
 **startIndex** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] 

### Return type

[**DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR**](DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## encodeXAddress

> EncodeXAddressR encodeXAddress(addressTag, blockchain, classicAddress, network, opts)

Encode X-Address

Through this endpoint, customers can encode an encoded XRP address with tag, by providing the specific x-address. The response includes the encoded classic address and the tag.

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
let addressTag = 3999472835; // Number | Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
let blockchain = xrp; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let classicAddress = rA9bXGJcXvZKaWofrRphdJsBWzhyCfH3z; // String | Represents the public address, which is a compressed and shortened form of a public key.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.encodeXAddress(addressTag, blockchain, classicAddress, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressTag** | **Number**| Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address. | 
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **classicAddress** | **String**| Represents the public address, which is a compressed and shortened form of a public key. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**EncodeXAddressR**](EncodeXAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## estimateGasLimit

> EstimateGasLimitR estimateGasLimit(blockchain, network, opts)

Estimate Gas Limit

This endpoint helps customer in estimating the gas limit needed for a transaction. It gives information for gas expenses when sending ether to contracts or making a transaction with additional data in it.

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
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'estimateGasLimitRB': new Cryptoapis.EstimateGasLimitRB() // EstimateGasLimitRB | 
};
apiInstance.estimateGasLimit(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **estimateGasLimitRB** | [**EstimateGasLimitRB**](EstimateGasLimitRB.md)|  | [optional] 

### Return type

[**EstimateGasLimitR**](EstimateGasLimitR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## estimateTokenGasLimit

> EstimateTokenGasLimitR estimateTokenGasLimit(blockchain, network, opts)

Estimate Token Gas Limit

This endpoint helps customer in estimating the Contract Gas Limit needed for a transaction. It gives information for gas expenses for a specific contract when sending ethers or making a transaction with additional data in it.

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
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'estimateTokenGasLimitRB': new Cryptoapis.EstimateTokenGasLimitRB() // EstimateTokenGasLimitRB | 
};
apiInstance.estimateTokenGasLimit(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **estimateTokenGasLimitRB** | [**EstimateTokenGasLimitRB**](EstimateTokenGasLimitRB.md)|  | [optional] 

### Return type

[**EstimateTokenGasLimitR**](EstimateTokenGasLimitR.md)

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
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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


## prepareAFungibleTokenTransferFromAddress

> PrepareAFungibleTokenTransferFromAddressR prepareAFungibleTokenTransferFromAddress(blockchain, network, opts)

Prepare A Fungible Token Transfer From Address

Using this endpoint customers can prepare a fungible token transfer from an address with private and public keys. The address doesn’t have to belong to a wallet. The response will include the transaction fee in Wei.

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
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = goerli; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"mordor\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'prepareAFungibleTokenTransferFromAddressRB': new Cryptoapis.PrepareAFungibleTokenTransferFromAddressRB() // PrepareAFungibleTokenTransferFromAddressRB | 
};
apiInstance.prepareAFungibleTokenTransferFromAddress(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;mordor\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **prepareAFungibleTokenTransferFromAddressRB** | [**PrepareAFungibleTokenTransferFromAddressRB**](PrepareAFungibleTokenTransferFromAddressRB.md)|  | [optional] 

### Return type

[**PrepareAFungibleTokenTransferFromAddressR**](PrepareAFungibleTokenTransferFromAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## prepareANonFungibleTokenTransferFromAddress

> PrepareANonFungibleTokenTransferFromAddressR prepareANonFungibleTokenTransferFromAddress(blockchain, network, opts)

Prepare A Non Fungible Token Transfer From Address

Using this endpoint customers can prepare a non-fungible token transfer from an address with private and public keys. The address doesn’t have to belong to a wallet. The response will include the transaction fee in Wei.

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
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = goerli; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"mordor\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'prepareANonFungibleTokenTransferFromAddressRB': new Cryptoapis.PrepareANonFungibleTokenTransferFromAddressRB() // PrepareANonFungibleTokenTransferFromAddressRB | 
};
apiInstance.prepareANonFungibleTokenTransferFromAddress(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;mordor\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **prepareANonFungibleTokenTransferFromAddressRB** | [**PrepareANonFungibleTokenTransferFromAddressRB**](PrepareANonFungibleTokenTransferFromAddressRB.md)|  | [optional] 

### Return type

[**PrepareANonFungibleTokenTransferFromAddressR**](PrepareANonFungibleTokenTransferFromAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## prepareTransactionFromAddress

> PrepareTransactionFromAddressR prepareTransactionFromAddress(blockchain, network, opts)

Prepare Transaction From Address

Through this endpoint customers can prepare a transaction from an address with private and public keys. The address doesn’t have to belong to a wallet.  The response will include the transaction fee in Wei.

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
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = goerli; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"goerli\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'prepareTransactionFromAddressRB': new Cryptoapis.PrepareTransactionFromAddressRB() // PrepareTransactionFromAddressRB | 
};
apiInstance.prepareTransactionFromAddress(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;goerli\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **prepareTransactionFromAddressRB** | [**PrepareTransactionFromAddressRB**](PrepareTransactionFromAddressRB.md)|  | [optional] 

### Return type

[**PrepareTransactionFromAddressR**](PrepareTransactionFromAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
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
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
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

