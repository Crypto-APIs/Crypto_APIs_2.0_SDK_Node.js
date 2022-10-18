# Cryptoapis.HDWalletsApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deriveAndSyncNewChangeAddresses**](HDWalletsApi.md#deriveAndSyncNewChangeAddresses) | **POST** /blockchain-data/{blockchain}/{network}/hd/derive-sync-change | Derive And Sync New Change Addresses
[**deriveAndSyncNewReceivingAddresses**](HDWalletsApi.md#deriveAndSyncNewReceivingAddresses) | **POST** /blockchain-data/{blockchain}/{network}/hd/derive-and-sync | Derive And Sync New Receiving Addresses
[**getHDWalletXPubYPubZPubAssets**](HDWalletsApi.md#getHDWalletXPubYPubZPubAssets) | **GET** /blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/assets | Get HD Wallet (xPub, yPub, zPub) Assets
[**getHDWalletXPubYPubZPubDetails**](HDWalletsApi.md#getHDWalletXPubYPubZPubDetails) | **GET** /blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/details | Get HD Wallet (xPub, yPub, zPub) Details
[**listHDWalletXPubYPubZPubTransactions**](HDWalletsApi.md#listHDWalletXPubYPubZPubTransactions) | **GET** /blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/transactions | List HD Wallet (xPub, yPub, zPub) Transactions
[**listHDWalletXPubYPubZPubUTXOs**](HDWalletsApi.md#listHDWalletXPubYPubZPubUTXOs) | **GET** /blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/utxos | List HD Wallet (xPub, yPub, zPub) UTXOs
[**listSyncedAddresses**](HDWalletsApi.md#listSyncedAddresses) | **GET** /blockchain-data/{blockchain}/{network}/hd/{extendedPublicKey}/synced-addresses | List Synced Addresses
[**prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub**](HDWalletsApi.md#prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub) | **POST** /blockchain-data/{blockchain}/{network}/transactions/prepare-utxo-transaction | Prepare A UTXO-Based Transaction From HD Wallet (xPub, yPub, zPub)
[**prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPub**](HDWalletsApi.md#prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPub) | **POST** /blockchain-data/{blockchain}/{network}/transactions/prepare-account-based-transaction | Prepare An Account-Based Transaction From HD Wallet (xPub, yPub, zPub)
[**syncHDWalletXPubYPubZPub**](HDWalletsApi.md#syncHDWalletXPubYPubZPub) | **POST** /blockchain-data/{blockchain}/{network}/hd/sync | Sync HD Wallet (xPub, yPub, zPub)
[**syncNewHDWalletXPubYPubZPub**](HDWalletsApi.md#syncNewHDWalletXPubYPubZPub) | **POST** /blockchain-data/{blockchain}/{network}/hd/sync-new | Sync New HD Wallet (xPub, yPub, zPub)



## deriveAndSyncNewChangeAddresses

> DeriveAndSyncNewChangeAddressesR deriveAndSyncNewChangeAddresses(blockchain, network, opts)

Derive And Sync New Change Addresses

Through this endpoint users can derive 100 change addresses, starting from the last index we have data for, which are then added to the xPub, subscribed for syncing, and start recording data. If no data is available, it will start from index 0. We use type P2WPKH.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'deriveAndSyncNewChangeAddressesRB': new Cryptoapis.DeriveAndSyncNewChangeAddressesRB() // DeriveAndSyncNewChangeAddressesRB | 
};
apiInstance.deriveAndSyncNewChangeAddresses(blockchain, network, opts).then((data) => {
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
 **deriveAndSyncNewChangeAddressesRB** | [**DeriveAndSyncNewChangeAddressesRB**](DeriveAndSyncNewChangeAddressesRB.md)|  | [optional] 

### Return type

[**DeriveAndSyncNewChangeAddressesR**](DeriveAndSyncNewChangeAddressesR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deriveAndSyncNewReceivingAddresses

> DeriveAndSyncNewReceivingAddressesR deriveAndSyncNewReceivingAddresses(blockchain, network, opts)

Derive And Sync New Receiving Addresses

Through this endpoint users can derive 100 receiving addresses, starting from the last index we have data for, which are then added to the xPub, subscribed for syncing, and start recording data. If no data is available, it will start from index 0. We use type P2WPKH.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'deriveAndSyncNewReceivingAddressesRB': new Cryptoapis.DeriveAndSyncNewReceivingAddressesRB() // DeriveAndSyncNewReceivingAddressesRB | 
};
apiInstance.deriveAndSyncNewReceivingAddresses(blockchain, network, opts).then((data) => {
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
 **deriveAndSyncNewReceivingAddressesRB** | [**DeriveAndSyncNewReceivingAddressesRB**](DeriveAndSyncNewReceivingAddressesRB.md)|  | [optional] 

### Return type

[**DeriveAndSyncNewReceivingAddressesR**](DeriveAndSyncNewReceivingAddressesR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getHDWalletXPubYPubZPubAssets

> GetHDWalletXPubYPubZPubAssetsR getHDWalletXPubYPubZPubAssets(blockchain, extendedPublicKey, network, opts)

Get HD Wallet (xPub, yPub, zPub) Assets

This endpoint will return details on assets we support for a specified from the customer extended public key (xPub). These could be cryptocurrencies, fungible or non-fungible (NFT) tokens. Each asset has a unique identifier - assetId, and a unique symbol in the form of a string, e.g. \&quot;USDT\&quot;.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let extendedPublicKey = xpub68SyZPMPpZUy9QB2fk2J28b5Rwd6jeWKind3K8oziZuVcL7wWZiXZNCPKuh42ejSpTLYngQ9Gbzj9a1Ap2QQmoFs2sMSbUvkEr8D3GW7MrR; // String | Defines the account extended publicly known key which is used to derive all child public keys.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'derivation': account // String | The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
};
apiInstance.getHDWalletXPubYPubZPubAssets(blockchain, extendedPublicKey, network, opts).then((data) => {
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
 **derivation** | **String**| The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly. | [optional] 

### Return type

[**GetHDWalletXPubYPubZPubAssetsR**](GetHDWalletXPubYPubZPubAssetsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHDWalletXPubYPubZPubDetails

> GetHDWalletXPubYPubZPubDetailsR getHDWalletXPubYPubZPubDetails(blockchain, extendedPublicKey, network, opts)

Get HD Wallet (xPub, yPub, zPub) Details

HD wallet details is useful endpoint to get the most important data about HD wallet without the need to do a lot of calculations, once the HD Wallet is synced using Sync endpoint we keep it up to date and we calculate these details in advance.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let extendedPublicKey = upub5Ei6bRNneqozk6smK7dvtXHC5PjUyEL4ynCfMKvjznLcXi9DQaikETzQjHvJC43XexMvQs64jxB1njMjCHpRZ4xQWAmv3ge9cVtjfsHmbvQ; // String | Defines the account extended publicly known key which is used to derive all child public keys.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'derivation': "derivation_example" // String | The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
};
apiInstance.getHDWalletXPubYPubZPubDetails(blockchain, extendedPublicKey, network, opts).then((data) => {
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
 **derivation** | **String**| The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly. | [optional] 

### Return type

[**GetHDWalletXPubYPubZPubDetailsR**](GetHDWalletXPubYPubZPubDetailsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHDWalletXPubYPubZPubTransactions

> ListHDWalletXPubYPubZPubTransactionsR listHDWalletXPubYPubZPubTransactions(blockchain, extendedPublicKey, network, opts)

List HD Wallet (xPub, yPub, zPub) Transactions

This endpoint will list HD Wallet transactions.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain.
let extendedPublicKey = tpubD9GMECjiZHCaF9NHSMAeMbQMXnM7CviEJZsYBuztVwsUjPHWjxewWAUXWV2UExaAtoEvQGXDBmVWo6ZHGtj6TsH6Pop7D9DskQwGHA1gu1w; // String | Defines the master public key (xPub) of the account.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'derivation': "derivation_example", // String | The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listHDWalletXPubYPubZPubTransactions(blockchain, extendedPublicKey, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain. | 
 **extendedPublicKey** | **String**| Defines the master public key (xPub) of the account. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **derivation** | **String**| The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListHDWalletXPubYPubZPubTransactionsR**](ListHDWalletXPubYPubZPubTransactionsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHDWalletXPubYPubZPubUTXOs

> ListHDWalletXPubYPubZPubUTXOsR listHDWalletXPubYPubZPubUTXOs(blockchain, extendedPublicKey, network, opts)

List HD Wallet (xPub, yPub, zPub) UTXOs

Through this endpoint you can list HD wallet&#39;s UTXOs (Unspent Transaction Outputs) by providing extended public key of an already synced HD wallet.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let extendedPublicKey = tpubDDCs6jf3Tg8VTts6EBCNpibVanPQpSkmYRLAXVvuhcuC6ZcbYtEizqERj8D4TBukuvjNSjtjEbKYdtFuRG5WuisrirZG9m5L8wUvf4bHhgQ; // String | Defines the account extended publicly known key which is used to derive all child public keys.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'derivation': account, // String | The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listHDWalletXPubYPubZPubUTXOs(blockchain, extendedPublicKey, network, opts).then((data) => {
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
 **derivation** | **String**| The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListHDWalletXPubYPubZPubUTXOsR**](ListHDWalletXPubYPubZPubUTXOsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSyncedAddresses

> ListSyncedAddressesR listSyncedAddresses(blockchain, extendedPublicKey, network, opts)

List Synced Addresses

Through this endpoint users can list all addresses that Crypto APIs has synced for a specific xPub. This includes previous and current/new xPubs, what addresses we’ve synced for them, etc.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = ethereum; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let extendedPublicKey = tpubD9GMECjiZHCaF9NHSMAeMbQMXnM7CviEJZsYBuztVwsUjPHWjxewWAUXWV2UExaAtoEvQGXDBmVWo6ZHGtj6TsH6Pop7D9DskQwGHA1gu1w; // String | Defines the account extended publicly known key which is used to derive all child public keys.
let network = ropsten; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'addressFormat': standard, // String | Defines the address format value.
  'isChangeAddress': false, // Boolean | Defines if the address is change addres or not.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listSyncedAddresses(blockchain, extendedPublicKey, network, opts).then((data) => {
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
 **addressFormat** | **String**| Defines the address format value. | [optional] 
 **isChangeAddress** | **Boolean**| Defines if the address is change addres or not. | [optional] [default to true]
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListSyncedAddressesR**](ListSyncedAddressesR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub

> PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub(blockchain, network, opts)

Prepare A UTXO-Based Transaction From HD Wallet (xPub, yPub, zPub)

Through the “Prepare a UTXO-based transaction from xPub” endpoint users can prepare a transaction for signing from all synced with Crypto APIs addresses for the specific xPub. This is based on the &#x60;selectionStrategy&#x60; and the addresses’ balances. In the case a user has an address not synced with Crypto APIs, it will not be included. This endpoint applies to all supported UTXO-based blockchain protocols, e.g. Bitcoin, Litecoin, etc.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | 
let network = testnet; // String | 
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB': new Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB() // PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB | 
};
apiInstance.prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPub(blockchain, network, opts).then((data) => {
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
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **prepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB** | [**PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB**](PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRB.md)|  | [optional] 

### Return type

[**PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR**](PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPub

> PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubR prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPub(blockchain, network, opts)

Prepare An Account-Based Transaction From HD Wallet (xPub, yPub, zPub)

Through the “Prepare an account-based transaction from xPub” endpoint users can prepare a transaction for signing from a synced with Crypto APIs address from the specific xPub. This endpoint applies to all supported account-based blockchain protocols, e.g. Ethereum, BSC, etc

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = ethereum; // String | 
let network = ropsten; // String | 
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRB': new Cryptoapis.PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRB() // PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRB | 
};
apiInstance.prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPub(blockchain, network, opts).then((data) => {
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
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **prepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRB** | [**PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRB**](PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRB.md)|  | [optional] 

### Return type

[**PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubR**](PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncHDWalletXPubYPubZPub

> SyncHDWalletXPubYPubZPubR syncHDWalletXPubYPubZPub(blockchain, network, opts)

Sync HD Wallet (xPub, yPub, zPub)

HD wallets usually have a lot of addresses and transactions, getting the data on demand is a heavy operation. That&#39;s why we have created this feature, to be able to get HD wallet details or transactions this HD wallet must be synced first. In addition to the initial sync we keep updating the synced HD wallets all the time.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'syncHDWalletXPubYPubZPubRB': new Cryptoapis.SyncHDWalletXPubYPubZPubRB() // SyncHDWalletXPubYPubZPubRB | 
};
apiInstance.syncHDWalletXPubYPubZPub(blockchain, network, opts).then((data) => {
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
 **syncHDWalletXPubYPubZPubRB** | [**SyncHDWalletXPubYPubZPubRB**](SyncHDWalletXPubYPubZPubRB.md)|  | [optional] 

### Return type

[**SyncHDWalletXPubYPubZPubR**](SyncHDWalletXPubYPubZPubR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncNewHDWalletXPubYPubZPub

> SyncNewHDWalletXPubYPubZPubR syncNewHDWalletXPubYPubZPub(blockchain, network, opts)

Sync New HD Wallet (xPub, yPub, zPub)

Through this endpoint users can add a brand new xPub to the Crypto APIs system to be ready for deriving. Unlike our other similar endpoint “Sync HD Wallet (xPub, yPub, zPub)”, this endpoint does not create new addresses nor syncs old data.

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.HDWalletsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'syncNewHDWalletXPubYPubZPubRB': new Cryptoapis.SyncNewHDWalletXPubYPubZPubRB() // SyncNewHDWalletXPubYPubZPubRB | 
};
apiInstance.syncNewHDWalletXPubYPubZPub(blockchain, network, opts).then((data) => {
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
 **syncNewHDWalletXPubYPubZPubRB** | [**SyncNewHDWalletXPubYPubZPubRB**](SyncNewHDWalletXPubYPubZPubRB.md)|  | [optional] 

### Return type

[**SyncNewHDWalletXPubYPubZPubR**](SyncNewHDWalletXPubYPubZPubR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

