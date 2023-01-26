# Cryptoapis.PrepareANonFungibleTokenTransferFromAddressRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **String** | Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens. | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | [optional] 
**recipient** | **String** | The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient. | 
**sender** | **String** | Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sende | 
**tokenId** | **String** | Represents the unique token identifier. | 
**fee** | [**PrepareANonFungibleTokenTransferFromAddressRBDataItemFee**](PrepareANonFungibleTokenTransferFromAddressRBDataItemFee.md) |  | 
**transactionType** | **String** | Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \&quot;transactionType\&quot; in the request. | [optional] 



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)




