# Cryptoapis.GetBlockDetailsByBlockHeightRIBS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**difficulty** | **String** | Represents a mathematical value of how hard it is to find a valid hash for this block. | 
**bits** | **String** | Represents a specific sub-unit of Zcash. Bits have two-decimal precision | 
**chainwork** | **String** | Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes. | 
**merkleRoot** | **String** | Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions&#39; hashes that are part of a blockchain block. | 
**nonce** | **String** | Represents a random value that can be adjusted to satisfy the Proof of Work. | 
**size** | **Number** | Represents the total size of the block in Bytes. | 
**strippedSize** | **Number** | Defines the numeric representation of the block size excluding the witness data. | 
**version** | **Number** | Represents the block version number. | 
**versionHex** | **String** | Is the hexadecimal string representation of the block&#39;s version. | 
**weight** | **Number** | Represents a measurement to compare the size of different transactions to each other in proportion to the block size limi | 
**extraData** | **String** | Represents any data that can be included by the miner in the block. | 
**gasLimit** | **Number** | Numeric representation of the block gas_limit | 
**gasUsed** | **Number** | Numeric representation of the block gas_limit | 
**minedInSeconds** | **Number** | Specifies the amount of time required for the block to be mined in seconds. | 
**sha3Uncles** | **String** | Defines the combined hash of all uncles for a given parent. | 
**totalDifficulty** | **String** | Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block. | 
**dsBlock** | **Number** | Numeric representation of the ds block | 
**dsDifficulty** | **String** | Numeric representation of the ds difficulty | 
**dsLeader** | **String** | String representation of the ds leader | 
**microBlocks** | **[String]** |  | 


