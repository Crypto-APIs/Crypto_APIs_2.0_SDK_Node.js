# Cryptoapis.AutomaticTokensForwardingApi

All URIs are relative to *https://rest.cryptoapis.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTokensToExistingFromAddress**](AutomaticTokensForwardingApi.md#addTokensToExistingFromAddress) | **POST** /blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations/add-token | Add Tokens To Existing fromAddress
[**createAutomaticTokensForwarding**](AutomaticTokensForwardingApi.md#createAutomaticTokensForwarding) | **POST** /blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations | Create Automatic Tokens Forwarding
[**deleteAutomaticTokensForwarding**](AutomaticTokensForwardingApi.md#deleteAutomaticTokensForwarding) | **DELETE** /blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations/{referenceId} | Delete Automatic Tokens Forwarding
[**getFeeAddressDetails**](AutomaticTokensForwardingApi.md#getFeeAddressDetails) | **GET** /blockchain-automations/{blockchain}/{network}/tokens-forwarding/fee-addresses | Get Fee Address Details
[**listTokensForwardingAutomations**](AutomaticTokensForwardingApi.md#listTokensForwardingAutomations) | **GET** /blockchain-automations/{blockchain}/{network}/tokens-forwarding/automations | List Tokens Forwarding Automations



## addTokensToExistingFromAddress

> AddTokensToExistingFromAddressR addTokensToExistingFromAddress(blockchain, network, opts)

Add Tokens To Existing fromAddress

Through this endpoint customers can add **Automatic Tokens forwardings** to an already existing &#x60;fromAddress&#x60;. Unlike the \&quot;Create Automatic Tokens Forwarding\&quot; endpoint, where the &#x60;fromAddress&#x60; is generated each time, with this endpoint customers can add an automation from another token to one and the same &#x60;fromAddress&#x60;.    The &#x60;fromAddress&#x60; can be used as a deposit address. Any funds received by this address will be automatically forwarded to &#x60;toAddress&#x60; based on what the customer has set for the automation. The  &#x60;toAddress&#x60; is essentially the main address and destination for the automatic tokens forwarding.    There is also a &#x60;minimumTransferAmount&#x60; which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, &#x60;feePriority&#x60; can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; or \&quot;FAST\&quot;.    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AutomaticTokensForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'addTokensToExistingFromAddressRB': new Cryptoapis.AddTokensToExistingFromAddressRB() // AddTokensToExistingFromAddressRB | 
};
apiInstance.addTokensToExistingFromAddress(blockchain, network, opts).then((data) => {
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
 **addTokensToExistingFromAddressRB** | [**AddTokensToExistingFromAddressRB**](AddTokensToExistingFromAddressRB.md)|  | [optional] 

### Return type

[**AddTokensToExistingFromAddressR**](AddTokensToExistingFromAddressR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAutomaticTokensForwarding

> CreateAutomaticTokensForwardingR createAutomaticTokensForwarding(blockchain, network, opts)

Create Automatic Tokens Forwarding

Through this endpoint customers can set up an automatic forwarding function specifically for tokens (**not** coins). They can have a &#x60;toAddress&#x60; which is essentially the main address and the destination for the automatic tokens forwarding.     There is also a &#x60;minimumTransferAmount&#x60; which only when reached will then trigger the forwarding. Through this the customer can save from fees.    Moreover, &#x60;feePriority&#x60; can be also set,  which defines how quickly to move the tokens once they are received. The higher priority, the larger the fee will be. It can be \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; or \&quot;FAST\&quot;.    The response of this endpoint contains an attribute &#x60;fromAddress&#x60; which can be used as a deposit address. Any funds received by this address will be automatically forwarded to &#x60;toAddress&#x60; based on what the customer has set for the automation.    For this automatic forwarding the customer can set a callback subscription.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}    {note}This endpoint generates a new &#x60;fromAddress&#x60; each time.{/note}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AutomaticTokensForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'createAutomaticTokensForwardingRB': new Cryptoapis.CreateAutomaticTokensForwardingRB() // CreateAutomaticTokensForwardingRB | 
};
apiInstance.createAutomaticTokensForwarding(blockchain, network, opts).then((data) => {
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
 **createAutomaticTokensForwardingRB** | [**CreateAutomaticTokensForwardingRB**](CreateAutomaticTokensForwardingRB.md)|  | [optional] 

### Return type

[**CreateAutomaticTokensForwardingR**](CreateAutomaticTokensForwardingR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutomaticTokensForwarding

> DeleteAutomaticTokensForwardingR deleteAutomaticTokensForwarding(blockchain, network, referenceId, opts)

Delete Automatic Tokens Forwarding

Through this endpoint customers can delete a forwarding function they have set for **tokens** (**not** coins).    By setting a &#x60;fromAddress&#x60; and a &#x60;toAddress&#x60;, and specifying the amount, tokens can be transferred between addresses.     A &#x60;feePriority&#x60; will be returned which represents the fee priority of the automation whether it is \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; OR \&quot;FAST\&quot;.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all incoming transactions until it is deleted. There is no need to do that for every transaction.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AutomaticTokensForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let referenceId = 6017dd02a309213863be9e55; // String | Represents a unique ID used to reference the specific callback subscription.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.deleteAutomaticTokensForwarding(blockchain, network, referenceId, opts).then((data) => {
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
 **referenceId** | **String**| Represents a unique ID used to reference the specific callback subscription. | 
 **context** | **String**| In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. &#x60;context&#x60; is specified by the user. | [optional] 

### Return type

[**DeleteAutomaticTokensForwardingR**](DeleteAutomaticTokensForwardingR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFeeAddressDetails

> GetFeeAddressDetailsR getFeeAddressDetails(blockchain, network, opts)

Get Fee Address Details

Through this endpoint customers can obtain details about a fee address. Only one fee address per currency per network for a user&#39;s account can be set no matter how many tokens or subscriptions they have or want to automatically forward.    {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AutomaticTokensForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.getFeeAddressDetails(blockchain, network, opts).then((data) => {
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

### Return type

[**GetFeeAddressDetailsR**](GetFeeAddressDetailsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTokensForwardingAutomations

> ListTokensForwardingAutomationsR listTokensForwardingAutomations(blockchain, network, opts)

List Tokens Forwarding Automations

Through this endpoint customers can list all of their **tokens** forwarding automations (**not** coins).    Customers can set up automatic forwarding functions for tokens by setting a &#x60;fromAddress&#x60; and a &#x60;toAddress&#x60;, and specifying the amount that can be transferred between addresses.     A &#x60;feePriority&#x60; will be returned which represents the fee priority of the automation whether it is \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; OR \&quot;FAST\&quot;.     {warning}Currently we support fungible tokens (ERC-20) **only**, NFTs (ERC-721) are **not** supported.{/warning}    {warning}The subscription will work for all transactions until it is deleted. There is no need to do that for every transaction.{/warning}

### Example

```javascript
import Cryptoapis from 'cryptoapis';
let defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new Cryptoapis.AutomaticTokensForwardingApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
let opts = {
  'context': yourExampleString, // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 0 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listTokensForwardingAutomations(blockchain, network, opts).then((data) => {
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
 **limit** | **Number**| Defines how many items should be returned in the response per page basis. | [optional] [default to 50]
 **offset** | **Number**| The starting index of the response items, i.e. where the response should start listing the returned items. | [optional] [default to 0]

### Return type

[**ListTokensForwardingAutomationsR**](ListTokensForwardingAutomationsR.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

