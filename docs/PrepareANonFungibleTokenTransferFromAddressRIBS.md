# Cryptoapis.PrepareANonFungibleTokenTransferFromAddressRIBS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataHex** | **String** | 0x0079006f00750072004100640064006900740069006f006e0061006c00440061007400610048006500720065 | [optional] 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | [optional] 
**sigHash** | **String** | Representation of the hash that should be signed | 
**fee** | [**PrepareANonFungibleTokenTransferFromAddressRIBSEFee**](PrepareANonFungibleTokenTransferFromAddressRIBSEFee.md) |  | 
**transactionType** | **String** | Representation of the transaction type | 



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)

* `access-list-transaction` (value: `"access-list-transaction"`)

* `gas-fee-market-transaction` (value: `"gas-fee-market-transaction"`)




