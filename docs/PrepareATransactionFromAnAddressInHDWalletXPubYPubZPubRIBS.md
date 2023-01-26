# Cryptoapis.PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataHex** | **String** | Representation of the data in hex value | 
**derivationIndex** | **Number** | Representation of the derivation index of the xpub address | 
**fee** | [**PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee**](PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSEFee.md) |  | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**transactionType** | **String** | Representation of the transaction type | 
**unit** | **String** | Represents the unit of the amount to be sent. | 



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)

* `access-list-transaction` (value: `"access-list-transaction"`)




