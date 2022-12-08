# Cryptoapis.FreezeTronForEnergyOrBandwidthRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Defines a transaction note with additional details | [optional] 
**address** | **String** | Defines the sender&#39;s public address. | 
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation. | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol. | [optional] 
**destinations** | [**[FreezeTronForEnergyOrBandwidthRIDestinationsInner]**](FreezeTronForEnergyOrBandwidthRIDestinationsInner.md) | Defines the destination of the transaction | 
**resource** | **String** | Defines the resource staking for (eg. Bandwidth, Energy) | 
**status** | **String** | Represents the status of the transaction. | 
**transactionId** | **String** | Defines the created transaction | 
**transactionType** | **String** | Defines the type of the transacted units. | 
**walletId** | **String** | Represents the sender&#39;s specific and unique Wallet ID of the sender. | 
**transactionAmount** | [**FreezeTronForEnergyOrBandwidthRITransactionAmount**](FreezeTronForEnergyOrBandwidthRITransactionAmount.md) |  | 



## Enum: StatusEnum


* `created` (value: `"created"`)

* `await-approval` (value: `"await-approval"`)

* `pending` (value: `"pending"`)

* `prepared` (value: `"prepared"`)

* `signed` (value: `"signed"`)

* `broadcasted` (value: `"broadcasted"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)

* `rejected` (value: `"rejected"`)

* `mined` (value: `"mined"`)

* `mined-with-errors` (value: `"mined-with-errors"`)





## Enum: TransactionTypeEnum


* `staking` (value: `"staking"`)

* `unstaking` (value: `"unstaking"`)




