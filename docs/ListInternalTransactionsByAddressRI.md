# Cryptoapis.ListInternalTransactionsByAddressRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Defines the specific amount of the transaction. | 
**minedInBlockHash** | **String** | Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**minedInBlockHeight** | **Number** | Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block. | 
**operationID** | **String** | Represents the unique internal transaction ID in regards to the parent transaction (type trace address). | 
**operationType** | **String** | Defines the call type of the internal transaction. | 
**parentHash** | **String** | Defines the specific hash of the parent transaction. | 
**recipient** | **String** | Represents the recipient address with the respective amount. | 
**sender** | **String** | Represents the sender address with the respective amount. | 
**timestamp** | **Number** |  | 


