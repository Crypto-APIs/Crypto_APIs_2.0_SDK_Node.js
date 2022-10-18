# Cryptoapis.GeneratingApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewMasterWallet**](GeneratingApi.md#createNewMasterWallet) | **POST** /wallet-as-a-service/wallets/generate | Create New Master Wallet
[**generateDepositAddress**](GeneratingApi.md#generateDepositAddress) | **POST** /wallet-as-a-service/wallets/{walletId}/{blockchain}/{network}/addresses | Generate Deposit Address



## createNewMasterWallet

> CreateNewMasterWalletR createNewMasterWallet(opts)

Create New Master Wallet

Through this endpoint users can easily create a new Master Wallet through the API. The user provides the desired Wallet name and in return the response includes the &#x60;walletId&#x60;. That new Wallet can be additionally also backed up through the Crypto APIs Dashboard.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.GeneratingApi();
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createNewMasterWalletRB': new Cryptoapis.CreateNewMasterWalletRB() // CreateNewMasterWalletRB | 
};
apiInstance.createNewMasterWallet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createNewMasterWalletRB** | [**CreateNewMasterWalletRB**](CreateNewMasterWalletRB.md)|  | [optional] 

### Return type

[**CreateNewMasterWalletR**](CreateNewMasterWalletR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generateDepositAddress

> GenerateDepositAddressR generateDepositAddress(blockchain, network, walletId, opts)

Generate Deposit Address

Through this endpoint customers can generate a new Receiving/Deposit Addresses into their Wallet.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.GeneratingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let walletId = 60c9d9921c38030006675ff6; // String | Represents the unique ID of the specific Wallet.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'generateDepositAddressRB': new Cryptoapis.GenerateDepositAddressRB() // GenerateDepositAddressRB | 
};
apiInstance.generateDepositAddress(blockchain, network, walletId, opts).then((data) => {
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
 **walletId** | **String**| Represents the unique ID of the specific Wallet. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **generateDepositAddressRB** | [**GenerateDepositAddressRB**](GenerateDepositAddressRB.md)|  | [optional] 

### Return type

[**GenerateDepositAddressR**](GenerateDepositAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

