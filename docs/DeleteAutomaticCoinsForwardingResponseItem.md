# CryptoApis.DeleteAutomaticCoinsForwardingResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. | 
**confirmationsCount** | **String** | Represents the number of confirmations, i.e. the amount of blocks that have been built on top of this block. | 
**createdTimestamp** | **String** | Defines the specific time/date when the automatic forwarding was created in Unix Timestamp. | 
**feePriority** | **String** | Represents the fee priority of the automation, whether it is \&quot;SLOW\&quot;, \&quot;STANDARD\&quot; or \&quot;FAST\&quot;. | 
**fromAddress** | **String** | Represents the hash of the address that forwards the currency. | 
**minimumTransferAmount** | **String** | Represents the minimum transfer amount of the currency in the &#x60;fromAddress&#x60; that can be allowed for an automatic forwarding. | 
**referenceId** | **String** | Represents a unique ID used to reference the specific callback subscription. | 
**toAddress** | **String** | Represents the hash of the address the currency is forwarded to. | 



## Enum: FeePriorityEnum


* `slow` (value: `"slow"`)

* `standard` (value: `"standard"`)

* `fast` (value: `"fast"`)




