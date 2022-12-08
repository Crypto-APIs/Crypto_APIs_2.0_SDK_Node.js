# Cryptoapis.PrepareTransactionFromAddressRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request. | [optional] 
**amount** | **String** | Representation of the transacted amount | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | [optional] 
**recipient** | **String** | The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient. | 
**sender** | **String** | Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender. | 
**fee** | [**PrepareTransactionFromAddressRBDataItemFee**](PrepareTransactionFromAddressRBDataItemFee.md) |  | 
**transactionType** | **String** | Representation of the transaction type. For Ethereum-Classic and Binance Smart Chain there is no need to provide \&quot;transactionType\&quot; in the request. | [optional] [default to &#39;gas-fee-market-transaction&#39;]



## Enum: TransactionTypeEnum


* `legacy-transaction` (value: `"legacy-transaction"`)

* `access-list-transaction` (value: `"access-list-transaction"`)

* `gas-fee-market-transaction` (value: `"gas-fee-market-transaction"`)




