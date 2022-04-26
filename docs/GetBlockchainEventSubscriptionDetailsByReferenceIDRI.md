# Cryptoapis.GetBlockchainEventSubscriptionDetailsByReferenceIDRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Represents the address of the transaction. | [optional] 
**blockchain** | **String** | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security). | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. | 
**confirmationsCount** | **Number** | Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block. | [optional] 
**createdTimestamp** | **Number** | Defines the specific time/date when the subscription was created in Unix Timestamp. | 
**deactivationReasons** | [**[ListBlockchainEventsSubscriptionsRIDeactivationReasons]**](ListBlockchainEventsSubscriptionsRIDeactivationReasons.md) | Represents the deactivation reason details, available when a blockchain event subscription has status isActive - false. | [optional] 
**eventType** | **String** | Defines the type of the specific event available for the customer to subscribe to for callback notification. | 
**isActive** | **Boolean** | Defines whether the subscription is active or not. Set as boolean. | 
**network** | **String** | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
**referenceId** | **String** | Represents a unique ID used to reference the specific callback subscription. | 
**transactionId** | **String** | Represents the unique identification string that defines the transaction. | [optional] 


