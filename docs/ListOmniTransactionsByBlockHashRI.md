# Cryptoapis.ListOmniTransactionsByBlockHashRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Defines the amount of the sent tokens. | 
**divisible** | **Boolean** | Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \&quot;true\&quot;, the attribute is divisible. | 
**minedInBlockHash** | **String** | Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**minedInBlockHeight** | **Number** | Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block. | 
**positionInBlock** | **Number** | Represents the index position of the transaction in the specific block. | 
**propertyId** | **Number** | Represents the identifier of the tokens to send. | 
**recipients** | [**[ListOmniTransactionsByAddressRIRecipientsInner]**](ListOmniTransactionsByAddressRIRecipientsInner.md) | Represents an object of addresses that receive the transactions. | 
**senders** | [**[ListOmniTransactionsByAddressRISendersInner]**](ListOmniTransactionsByAddressRISendersInner.md) | Represents an object of addresses that provide the funds. | 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 
**transactionId** | **String** | Represents the unique identifier of a transaction, i.e. it could be &#x60;transactionId&#x60; in UTXO-based protocols like Bitcoin, and transaction &#x60;hash&#x60; in Ethereum blockchain. | 
**type** | **String** | Defines the type of the transaction as a string. | 
**typeInt** | **Number** | Defines the type of the transaction as a number. | 
**valid** | **Boolean** | Defines whether the transaction is valid or not, as boolean. E.g., if it is \&quot;true\&quot;, the transaction is valid. | 
**version** | **Number** | Defines the specific version. | 
**fee** | [**ListOmniTransactionsByBlockHashRIFee**](ListOmniTransactionsByBlockHashRIFee.md) |  | 


