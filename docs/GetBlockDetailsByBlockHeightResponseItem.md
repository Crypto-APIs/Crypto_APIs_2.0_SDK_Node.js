# CryptoApis.GetBlockDetailsByBlockHeightResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **String** | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**height** | **Number** | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
**nextBlockHash** | **String** | Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string. | 
**previousBlockHash** | **String** | Represents the hash of the previous block, also known as the parent block. | 
**timestamp** | **Number** | Defines the exact date/time when this block was mined in Unix Timestamp. | 
**transactionsCount** | **Number** | Represents the total number of all transactions as part of this block. | 
**blockchainSpecific** | [**GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific**](GetBlockDetailsByBlockHeightResponseItemBlockchainSpecific.md) |  | 


