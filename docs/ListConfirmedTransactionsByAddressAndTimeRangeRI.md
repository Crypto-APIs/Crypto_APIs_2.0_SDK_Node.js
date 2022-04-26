# Cryptoapis.ListConfirmedTransactionsByAddressAndTimeRangeRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **Number** | Represents the index position of the transaction in the block. | 
**minedInBlockHash** | **String** | Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | [optional] 
**minedInBlockHeight** | **Number** | Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block. | [optional] 
**recipients** | [**[GetTransactionDetailsByTransactionIDRIRecipients]**](GetTransactionDetailsByTransactionIDRIRecipients.md) | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**senders** | [**[GetTransactionDetailsByTransactionIDRISenders]**](GetTransactionDetailsByTransactionIDRISenders.md) | Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 
**transactionHash** | **String** | Represents the same as &#x60;transactionId&#x60; for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols &#x60;hash&#x60; is different from &#x60;transactionId&#x60; for SegWit transactions. | 
**transactionId** | **String** | Represents the unique identifier of a transaction, i.e. it could be &#x60;transactionId&#x60; in UTXO-based protocols like Bitcoin, and transaction &#x60;hash&#x60; in Ethereum blockchain. | 
**fee** | [**ListConfirmedTransactionsByAddressRIFee**](ListConfirmedTransactionsByAddressRIFee.md) |  | 
**blockchainSpecific** | [**ListConfirmedTransactionsByAddressAndTimeRangeRIBS**](ListConfirmedTransactionsByAddressAndTimeRangeRIBS.md) |  | 


