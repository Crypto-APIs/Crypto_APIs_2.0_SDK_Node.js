# Cryptoapis.PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Representation of the additional data. | [optional] 
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | [optional] 
**xpub** | **String** | Defines the account extended publicly known key which is used to derive all child public keys. | 
**fee** | [**PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee**](PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.md) |  | 
**prepareStrategy** | **String** | Representation of the transaction&#39;s strategy type | [optional] 
**recipients** | [**[PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner]**](PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner.md) | Object Array representation of transaction receivers | 
**replaceable** | **Boolean** | Representation of whether the transaction is replaceable. This is an Optional attribute that is not supported for Dogecoin, Dash and Bitcoin-Cash. | [optional] 



## Enum: PrepareStrategyEnum


* `none` (value: `"none"`)

* `minimize-dust` (value: `"minimize-dust"`)

* `optimize-size` (value: `"optimize-size"`)




