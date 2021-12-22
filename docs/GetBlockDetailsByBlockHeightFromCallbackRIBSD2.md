# Cryptoapis.GetBlockDetailsByBlockHeightFromCallbackRIBSD2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bits** | **String** | Represents a specific sub-unit of Doge. Bits have two-decimal precision. | 
**chainwork** | **String** | Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes. | 
**difficulty** | **String** | Represents a mathematical value of how hard it is to find a valid hash for this block. | 
**merkleRoot** | **String** | Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions&#39; hashes that are part of a blockchain block. | 
**nonce** | **Number** | Represents a random value that can be adjusted to satisfy the proof of work | 
**size** | **Number** | Represents the total size of the block in Bytes. | 
**strippedSize** | **Number** | Defines the numeric representation of the block size excluding the witness data. | 
**version** | **Number** | Represents the version of the specific block on the blockchain. | 
**weight** | **Number** | Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit. | 


