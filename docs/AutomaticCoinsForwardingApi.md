# CryptoApis.AutomaticCoinsForwardingApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAutomaticCoinsForwarding**](AutomaticCoinsForwardingApi.md#createAutomaticCoinsForwarding) | **POST** /blockchain-automations/{blockchain}/{network}/coins-forwarding/automations | Create Automatic Coins Forwarding
[**deleteAutomaticCoinsForwarding**](AutomaticCoinsForwardingApi.md#deleteAutomaticCoinsForwarding) | **DELETE** /blockchain-automations/{blockchain}/{network}/coins-forwarding/automations/{referenceId} | Delete Automatic Coins Forwarding
[**listCoinsForwardingAutomations**](AutomaticCoinsForwardingApi.md#listCoinsForwardingAutomations) | **GET** /blockchain-automations/{blockchain}/{network}/coins-forwarding/automations | List Coins Forwarding Automations



## createAutomaticCoinsForwarding

> CreateAutomaticCoinsForwardingResponse createAutomaticCoinsForwarding(blockchain, network, opts)

Create Automatic Coins Forwarding

Through this endpoint customers can set up an automatic forwarding function specifically for coins (**not** tokens). They can have a &#x60;toAddress&#x60; which is essentially the main address and the destination for the automatic coins forwarding.     There is also a &#x60;minimumTransferAmount&#x60; which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, &#x60;feePriority&#x60; can be also set,  which defines how quickly to move the coins once they are received. The higher priority, the larger the fee will be. It can be \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; or \&quot;FAST\&quot;.    The response of this endpoint contains an attribute &#x60;fromAddress&#x60; which can be used as a deposit address. Any funds received by this address will be automatically forwarded to &#x60;toAddress&#x60; based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new &#x60;fromAddress&#x60; each time.{/note}

### Example

```javascript
import CryptoApis from 'cryptoapis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.AutomaticCoinsForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createAutomaticCoinsForwardingRequestBody': new CryptoApis.CreateAutomaticCoinsForwardingRequestBody() // CreateAutomaticCoinsForwardingRequestBody | 
};
apiInstance.createAutomaticCoinsForwarding(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **createAutomaticCoinsForwardingRequestBody** | [**CreateAutomaticCoinsForwardingRequestBody**](CreateAutomaticCoinsForwardingRequestBody.md)|  | [optional] 

### Return type

[**CreateAutomaticCoinsForwardingResponse**](CreateAutomaticCoinsForwardingResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutomaticCoinsForwarding

> DeleteAutomaticCoinsForwardingResponse deleteAutomaticCoinsForwarding(blockchain, network, referenceId, opts)

Delete Automatic Coins Forwarding

Through this endpoint customers can delete a forwarding function they have set for **coins** (**not** tokens).    By setting a &#x60;fromAddress&#x60; and a &#x60;toAddress&#x60;, and specifying the amount, coins can be transferred between addresses.     A &#x60;feePriority&#x60; will be returned which represents the fee priority of the automation whether it is \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; OR \&quot;FAST\&quot;.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}

### Example

```javascript
import CryptoApis from 'cryptoapis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.AutomaticCoinsForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let referenceId = 600955ea5e75d660e71d3c7d; // String | Represents a unique ID used to reference the specific callback subscription.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.deleteAutomaticCoinsForwarding(blockchain, network, referenceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
 **referenceId** | **String**| Represents a unique ID used to reference the specific callback subscription. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**DeleteAutomaticCoinsForwardingResponse**](DeleteAutomaticCoinsForwardingResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCoinsForwardingAutomations

> ListCoinsForwardingAutomationsResponse listCoinsForwardingAutomations(blockchain, network, opts)

List Coins Forwarding Automations

Through this endpoint customers can list all of their **coins** forwarding automations (**not** tokens).    Customers can set up automatic forwarding functions for coins by setting a &#x60;fromAddress&#x60; and a &#x60;toAddress&#x60;, and specifying the amount that can be transferred between addresses.     A &#x60;feePriority&#x60; will be returned which represents the fee priority of the automation whether it is \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; OR \&quot;FAST\&quot;.    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}

### Example

```javascript
import CryptoApis from 'cryptoapis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.AutomaticCoinsForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 10 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listCoinsForwardingAutomations(blockchain, network, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
 **network** | **String**| Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListCoinsForwardingAutomationsResponse**](ListCoinsForwardingAutomationsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

