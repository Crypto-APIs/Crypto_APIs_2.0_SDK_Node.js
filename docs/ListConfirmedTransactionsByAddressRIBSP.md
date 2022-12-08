# Cryptoapis.ListConfirmedTransactionsByAddressRIBSP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | **String** | Represents the specific transaction contract. | 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasPrice** | [**ListConfirmedTransactionsByAddressRIBSPGasPrice**](ListConfirmedTransactionsByAddressRIBSPGasPrice.md) |  | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**hasInternalTransactions** | **Boolean** | Defines if there are internal transactions (true) or not (false) | 
**hasTokenTransfers** | **Boolean** | Defines if there are token transfers (true) or not (false) | 
**inputData** | **String** | Represents additional information that is required for the transaction. | 
**internalTransactionsCount** | **Number** | Rrepresentation of the internal transactions count | 
**nonce** | **Number** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**tokenTransfersCount** | **Number** | Representation of the token transfers count | 
**transactionStatus** | **String** | Representation of the transaction status | 


