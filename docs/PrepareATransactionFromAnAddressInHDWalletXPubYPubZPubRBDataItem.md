# Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Representation of the additional data. | [optional] 
**amount** | **String** | Representation of the amount of the transaction | 
**recipient** | **String** | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**sender** | **String** | Represents a  sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list. | 
**xpub** | **String** | Defines the account extended publicly known key which is used to derive all child public keys. | 
**fee** | [**PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee**](PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRBDataItemFee.md) |  | 
**nonce** | **String** | Representation of the nonce value | [optional] 
**transactionType** | **String** | Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \&quot;transactionType\&quot; in the request. | [optional] [default to &#39;gas-fee-market-transaction&#39;]
**sequence** | **String** | String representation of the sequence | 



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)

* `access-list-transaction` (value: `"access-list-transaction"`)

* `gas-fee-market-transaction` (value: `"gas-fee-market-transaction"`)




