# Cryptoapis.ListInternalTransactionDetailsByTransactionHashRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Defines the specific amount of the transaction. | 
**blockHash** | **String** | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**blockHeight** | **Number** | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
**operationID** | **String** | Represents the unique internal transaction ID in regards to the parent transaction (type trace address). | 
**operationType** | **String** | Defines the call type of the internal transaction. | 
**parentHash** | **String** | Defines the specific hash of the parent transaction. | 
**recipient** | **String** | Represents the recipient address with the respective amount. | 
**sender** | **String** | Represents the sender address with the respective amount. | 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 


