# Cryptoapis.CreateTokensTransactionRequestFromAddressRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Represents the specific amount of the transaction. | 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. | [optional] 
**feePriority** | **String** | Represents the fee priority of the automation, whether it is \&quot;slow\&quot;, \&quot;standard\&quot; or \&quot;fast\&quot;. | 
**toAddress** | **String** | Defines the specific recipient address for the transaction. | 
**tokenIdentifier** | **String** | Defines the specific token identifier. For Bitcoin-based transactions it should be the &#x60;propertyId&#x60; and for Ethereum-based transactions - the &#x60;contract&#x60;. | 



## Enum: FeePriorityEnum


* `slow` (value: `"slow"`)

* `standard` (value: `"standard"`)

* `fast` (value: `"fast"`)




