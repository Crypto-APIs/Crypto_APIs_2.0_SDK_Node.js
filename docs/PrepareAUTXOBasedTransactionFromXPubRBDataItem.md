# Cryptoapis.PrepareAUTXOBasedTransactionFromXPubRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Representation of the additional data. | [optional] 
**fee** | [**PrepareAUTXOBasedTransactionFromXPubRBDataItemFee**](PrepareAUTXOBasedTransactionFromXPubRBDataItemFee.md) |  | 
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | [optional] 
**prepareStrategy** | **String** | Representation of the transaction&#39;s strategy type | 
**recipients** | [**[PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner]**](PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner.md) | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**replaceable** | **Boolean** | Representation of whether the transaction is replaceable | [optional] 
**xpub** | **String** | Defines the account extended publicly known key which is used to derive all child public keys. | 



## Enum: PrepareStrategyEnum


* `none` (value: `"none"`)

* `minimize-dust` (value: `"minimize-dust"`)

* `optimize-size` (value: `"optimize-size"`)




