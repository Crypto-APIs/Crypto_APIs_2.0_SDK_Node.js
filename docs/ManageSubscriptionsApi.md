# CryptoApis.ManageSubscriptionsApi

All URIs are relative to *https://rest.cryptoapis.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBlockchainEventSubscription**](ManageSubscriptionsApi.md#deleteBlockchainEventSubscription) | **DELETE** /blockchain-events/{blockchain}/{network}/subscriptions/{referenceId} | Delete Blockchain Event Subscription
[**listBlockchainEventsSubscriptions**](ManageSubscriptionsApi.md#listBlockchainEventsSubscriptions) | **GET** /blockchain-events/{blockchain}/{network}/subscriptions | List Blockchain Events Subscriptions



## deleteBlockchainEventSubscription

> DeleteBlockchainEventSubscriptionResponse deleteBlockchainEventSubscription(blockchain, network, referenceId, opts)

Delete Blockchain Event Subscription

Through this endpoint the customer can delete blockchain event subscriptions they have by attributes &#x60;referenceId&#x60; and &#x60;network&#x60;.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn&#39;t happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.ManageSubscriptionsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let referenceId = d3fd6a0e-f2b6-4bb5-9fd3-7944bcec9e9f; // String | Represents a unique ID used to reference the specific callback subscription.
let opts = {
  'context': "context_example" // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
apiInstance.deleteBlockchainEventSubscription(blockchain, network, referenceId, opts).then((data) => {
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

[**DeleteBlockchainEventSubscriptionResponse**](DeleteBlockchainEventSubscriptionResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBlockchainEventsSubscriptions

> ListBlockchainEventsSubscriptionsResponse listBlockchainEventsSubscriptions(blockchain, network, opts)

List Blockchain Events Subscriptions

Through this endpoint the customer can obtain a list of their callback subscriptions for the available Blockchain events.    Currently Crypto APIs 2.0 offers certain Blockchain event endpoints which allow the user to subscribe for one/a few/all and receive callback notifications when the specific event occurs.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn&#39;t happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}

### Example

```javascript
import CryptoApis from 'crypto_apis';
let defaultClient = CryptoApis.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new CryptoApis.ManageSubscriptionsApi();
let blockchain = bitcoin; // String | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
let network = testnet; // String | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
let opts = {
  'context': "context_example", // String | In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
  'limit': 50, // Number | Defines how many items should be returned in the response per page basis.
  'offset': 10 // Number | The starting index of the response items, i.e. where the response should start listing the returned items.
};
apiInstance.listBlockchainEventsSubscriptions(blockchain, network, opts).then((data) => {
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

[**ListBlockchainEventsSubscriptionsResponse**](ListBlockchainEventsSubscriptionsResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

