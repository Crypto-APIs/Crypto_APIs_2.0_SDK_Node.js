# Cryptoapis.CreateAutomaticTokensForwardingRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. | 
**confirmationsCount** | **String** | Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block. | 
**feePriority** | **String** | Represents the fee priority of the automation, whether it is \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; or \&quot;FAST\&quot;. | 
**minimumTransferAmount** | **String** | Represents the minimum transfer amount of the currency in the &#x60;fromAddress&#x60; that can be allowed for an automatic forwarding. | 
**toAddress** | **String** | Represents the hash of the address the currency is forwarded to. | 
**tokenData** | [**CreateAutomaticTokensForwardingRBTokenData**](CreateAutomaticTokensForwardingRBTokenData.md) |  | 



## Enum: FeePriorityEnum


* `slow` (value: `"slow"`)

* `standard` (value: `"standard"`)

* `fast` (value: `"fast"`)




