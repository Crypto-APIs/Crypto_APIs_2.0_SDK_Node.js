# Cryptoapis.TransactionsApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCoinsTransactionFromAddressForWholeAmount**](TransactionsApi.md#createCoinsTransactionFromAddressForWholeAmount) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{address}/all-transaction-requests | Create Coins Transaction From Address For Whole Amount
[**createCoinsTransactionRequestFromAddress**](TransactionsApi.md#createCoinsTransactionRequestFromAddress) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{address}/transaction-requests | Create Coins Transaction Request from Address
[**createCoinsTransactionRequestFromWallet**](TransactionsApi.md#createCoinsTransactionRequestFromWallet) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/transaction-requests | Create Coins Transaction Request from Wallet
[**createFungibleTokenTransactionRequestFromAddressWithoutFeePriority**](TransactionsApi.md#createFungibleTokenTransactionRequestFromAddressWithoutFeePriority) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{senderAddress}/feeless-token-transaction-requests | Create Fungible Token Transaction Request From Address Without Fee Priority
[**createFungibleTokensTransactionRequestFromAddress**](TransactionsApi.md#createFungibleTokensTransactionRequestFromAddress) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{senderAddress}/token-transaction-requests | Create Fungible Tokens Transaction Request from Address
[**createSingleTransactionRequestFromAddressWithoutFeePriority**](TransactionsApi.md#createSingleTransactionRequestFromAddressWithoutFeePriority) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses/{address}/feeless-transaction-requests | Create Single Transaction Request From Address Without Fee Priority



## createCoinsTransactionFromAddressForWholeAmount

> CreateCoinsTransactionFromAddressForWholeAmountR createCoinsTransactionFromAddressForWholeAmount(address, blockchain, network, walletId, opts)

Create Coins Transaction From Address For Whole Amount

Through this endpoint customers can create a new transaction from address for **coins** specifically, which will transfer over the entire available amount.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.TransactionsApi();
let address = 0x6f61e3c2fbb8c8be698bd0907ba6c04b62800fe5; // String | Defines the source address.
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let walletId = 609e221675d04500068718dc; // String | Represents the sender's specific and unique Wallet ID of the sender.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createCoinsTransactionFromAddressForWholeAmountRB': new Cryptoapis.CreateCoinsTransactionFromAddressForWholeAmountRB() // CreateCoinsTransactionFromAddressForWholeAmountRB | 
};
apiInstance.createCoinsTransactionFromAddressForWholeAmount(address, blockchain, network, walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Defines the source address. | 
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **walletId** | **String**| Represents the sender&#39;s specific and unique Wallet ID of the sender. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createCoinsTransactionFromAddressForWholeAmountRB** | [**CreateCoinsTransactionFromAddressForWholeAmountRB**](CreateCoinsTransactionFromAddressForWholeAmountRB.md)|  | [optional] 

### Return type

[**CreateCoinsTransactionFromAddressForWholeAmountR**](CreateCoinsTransactionFromAddressForWholeAmountR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCoinsTransactionRequestFromAddress

> CreateCoinsTransactionRequestFromAddressR createCoinsTransactionRequestFromAddress(address, blockchain, network, walletId, opts)

Create Coins Transaction Request from Address

Through this endpoint users can create a new single transaction request from one address to another.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.TransactionsApi();
let address = 0x6f61e3c2fbb8c8be698bd0907ba6c04b62800fe5; // String | Defines the specific source address for the transaction. For XRP we also support the X-address format.
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let walletId = 609e221675d04500068718dc; // String | Represents the sender's specific and unique Wallet ID of the sender.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createCoinsTransactionRequestFromAddressRB': new Cryptoapis.CreateCoinsTransactionRequestFromAddressRB() // CreateCoinsTransactionRequestFromAddressRB | 
};
apiInstance.createCoinsTransactionRequestFromAddress(address, blockchain, network, walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Defines the specific source address for the transaction. For XRP we also support the X-address format. | 
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **walletId** | **String**| Represents the sender&#39;s specific and unique Wallet ID of the sender. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createCoinsTransactionRequestFromAddressRB** | [**CreateCoinsTransactionRequestFromAddressRB**](CreateCoinsTransactionRequestFromAddressRB.md)|  | [optional] 

### Return type

[**CreateCoinsTransactionRequestFromAddressR**](CreateCoinsTransactionRequestFromAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCoinsTransactionRequestFromWallet

> CreateCoinsTransactionRequestFromWalletR createCoinsTransactionRequestFromWallet(blockchain, network, walletId, opts)

Create Coins Transaction Request from Wallet

Through this endpoint users can create a new transaction request from the entire Wallet instead from just a specific address. This endpoint can generate transactions from multiple to multiple addresses.    {warning}This is available **only** for UTXO-based protocols such as Bitcoin, Bitcoin Cash, Litecoin, etc. It **is not** available for Account-based protocols like Ethereum.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.TransactionsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let walletId = 609e221675d04500068718dc; // String | Represents the sender's specific and unique Wallet ID of the sender.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createCoinsTransactionRequestFromWalletRB': new Cryptoapis.CreateCoinsTransactionRequestFromWalletRB() // CreateCoinsTransactionRequestFromWalletRB | 
};
apiInstance.createCoinsTransactionRequestFromWallet(blockchain, network, walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | [default to &#39;testnet&#39;]
 **walletId** | **String**| Represents the sender&#39;s specific and unique Wallet ID of the sender. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createCoinsTransactionRequestFromWalletRB** | [**CreateCoinsTransactionRequestFromWalletRB**](CreateCoinsTransactionRequestFromWalletRB.md)|  | [optional] 

### Return type

[**CreateCoinsTransactionRequestFromWalletR**](CreateCoinsTransactionRequestFromWalletR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFungibleTokenTransactionRequestFromAddressWithoutFeePriority

> CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR createFungibleTokenTransactionRequestFromAddressWithoutFeePriority(blockchain, network, senderAddress, walletId, opts)

Create Fungible Token Transaction Request From Address Without Fee Priority

Through this endpoint customers can make a single feeless token transaction on the Tron blockchain protocol. TRX transactions burn certain resources called Bandwidth and Energy. Each account has 1500 bandwidth free for use every 24 hours and more can be obtained by staking TRX. The unit price of Energy is 280 SUN and of bandwidth - 1000 SUN. If the resources are insufficient, TRX will be burned to pay for them.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.TransactionsApi();
let blockchain = tron; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = nile; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let senderAddress = TX8VXpdEoNNrKeEuNTfbEXfa9eZivcyUwD; // String | Defines the specific source address for the transaction.
let walletId = 62b9b5c3b97f4b0008092714; // String | Defines the unique ID of the Wallet.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB': new Cryptoapis.CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB() // CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB | 
};
apiInstance.createFungibleTokenTransactionRequestFromAddressWithoutFeePriority(blockchain, network, senderAddress, walletId, opts).then((data) => {
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
 **senderAddress** | **String**| Defines the specific source address for the transaction. | 
 **walletId** | **String**| Defines the unique ID of the Wallet. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB** | [**CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB**](CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRB.md)|  | [optional] 

### Return type

[**CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR**](CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createFungibleTokensTransactionRequestFromAddress

> CreateFungibleTokensTransactionRequestFromAddressR createFungibleTokensTransactionRequestFromAddress(blockchain, network, senderAddress, walletId, opts)

Create Fungible Tokens Transaction Request from Address

Through this endpoint users can make a single token transaction.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn&#39;t happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.TransactionsApi();
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = mainnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let senderAddress = 0x6f61e3c2fbb8c8be698bd0907ba6c04b62800fe5; // String | Defines the specific source address for the transaction.
let walletId = 609e221675d04500068718dc; // String | Defines the unique ID of the Wallet.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createFungibleTokensTransactionRequestFromAddressRB': new Cryptoapis.CreateFungibleTokensTransactionRequestFromAddressRB() // CreateFungibleTokensTransactionRequestFromAddressRB | 
};
apiInstance.createFungibleTokensTransactionRequestFromAddress(blockchain, network, senderAddress, walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | [default to &#39;ethereum&#39;]
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | [default to &#39;mainnet&#39;]
 **senderAddress** | **String**| Defines the specific source address for the transaction. | 
 **walletId** | **String**| Defines the unique ID of the Wallet. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createFungibleTokensTransactionRequestFromAddressRB** | [**CreateFungibleTokensTransactionRequestFromAddressRB**](CreateFungibleTokensTransactionRequestFromAddressRB.md)|  | [optional] 

### Return type

[**CreateFungibleTokensTransactionRequestFromAddressR**](CreateFungibleTokensTransactionRequestFromAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSingleTransactionRequestFromAddressWithoutFeePriority

> CreateSingleTransactionRequestFromAddressWithoutFeePriorityR createSingleTransactionRequestFromAddressWithoutFeePriority(address, blockchain, network, walletId, opts)

Create Single Transaction Request From Address Without Fee Priority

Through this endpoint users can create a new single transaction request from one address to another. The difference between this endpoint and \&quot;Create Coins Transaction Request from Address\&quot;  is that for Tron blockchain there is no Fee Priority that defines how fast a transaction can be mined.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.TransactionsApi();
let address = TX8VXpdEoNNrKeEuNTfbEXfa9eZivcyUwD; // String | Defines the specific source address for the transaction.
let blockchain = tron; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = nile; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let walletId = 62b9b5c3b97f4b0008092714; // String | Represents the sender's specific and unique Wallet ID of the sender.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createSingleTransactionRequestFromAddressWithoutFeePriorityRB': new Cryptoapis.CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB() // CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB | 
};
apiInstance.createSingleTransactionRequestFromAddressWithoutFeePriority(address, blockchain, network, walletId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| Defines the specific source address for the transaction. | 
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **walletId** | **String**| Represents the sender&#39;s specific and unique Wallet ID of the sender. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createSingleTransactionRequestFromAddressWithoutFeePriorityRB** | [**CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB**](CreateSingleTransactionRequestFromAddressWithoutFeePriorityRB.md)|  | [optional] 

### Return type

[**CreateSingleTransactionRequestFromAddressWithoutFeePriorityR**](CreateSingleTransactionRequestFromAddressWithoutFeePriorityR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

