# Cryptoapis.GetBlockDetailsByBlockHashFromCallbackRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **String** | Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**height** | **Number** | Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \&quot;Genesis block\&quot;. | 
**previousBlockHash** | **String** | Represents the hash of the previous block, also known as the parent block. | 
**timestamp** | **Number** | Defines the exact date/time when this block was mined in Unix Timestamp. | 
**transactionsCount** | **Number** | Represents the total number of all transactions as part of this block. | 
**difficulty** | **String** | Represents a mathematical value of how hard it is to find a valid hash for this block. | 
**extraData** | **String** | Represents any data that can be included by the miner in the block. | 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**minedInSeconds** | **Number** | Specifies the amount of time required for the block to be mined in seconds. | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**sha3Uncles** | **String** | Defines the combined hash of all uncles for a given parent. | 
**size** | **Number** | Represents the total size of the block in Bytes. | 
**totalDifficulty** | **String** | Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block. | 
**uncles** | **[String]** |  | 
**blockchainSpecific** | [**GetBlockDetailsByBlockHashFromCallbackRIBS**](GetBlockDetailsByBlockHashFromCallbackRIBS.md) |  | 


