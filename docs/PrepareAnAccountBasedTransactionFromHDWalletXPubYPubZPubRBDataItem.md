# Cryptoapis.PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Representation of the additional data. | [optional] 
**amount** | **String** | Representation of the amount of the transaction | 
**nonce** | **String** | Representation of the nonce value | [optional] 
**recipient** | **String** | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**sender** | **String** | Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list. | 
**xpub** | **String** | Defines the account extended publicly known key which is used to derive all child public keys. | 
**fee** | [**PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee**](PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee.md) |  | 
**transactionType** | **String** | Representation of the transaction type | [optional] [default to &#39;gas-fee-market-transaction&#39;]



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)

* `access-list-transaction` (value: `"access-list-transaction"`)

* `gas-fee-market-transaction` (value: `"gas-fee-market-transaction"`)




