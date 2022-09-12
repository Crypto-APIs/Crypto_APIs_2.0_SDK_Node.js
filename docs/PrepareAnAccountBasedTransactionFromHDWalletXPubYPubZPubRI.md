# Cryptoapis.PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Representation of the amount of the transaction | 
**dataHex** | **String** | Representation of the data in hex value | 
**derivationIndex** | **Number** | Representation of the derivation index of the xpub address | 
**fee** | [**PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIFee**](PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIFee.md) |  | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**recipient** | **String** | Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list. | 
**sender** | **String** | Represents a sender address. In account-based protocols like Ethereum there is only one address in this list. | 
**sigHash** | **String** | Representation of the hash that should be signed. | 
**transactionType** | **String** | Representation of the transaction type | 



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)




