# Cryptoapis.FreezeTronForEnergyOrBandwidthRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request. | [optional] 
**amount** | **String** | Defines the amount that has to be transferred | 
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation. | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol. | [optional] 
**recipient** | **String** | Defines the specific recipient address for the transaction. | [optional] 
**resource** | **String** | Transaction note with additional details | 



## Enum: ResourceEnum


* `bandwidth` (value: `"bandwidth"`)

* `energy` (value: `"energy"`)




