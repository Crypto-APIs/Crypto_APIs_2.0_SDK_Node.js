# CryptoApis.GetLatestMinedBlockResponseItemBlockchainSpecificBitcoin

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**difficulty** | **String** | Represents a mathematical value of how hard it is to find a valid hash for this block. | 
**nonce** | **String** | Represents a random value that can be adjusted to satisfy the proof of work | 
**size** | **Number** | Represents the total size of the block in Bytes. | 
**bits** | **String** | A sub-unit of BTC equal to 0.000001 BTC, or 100 Satoshi, and is the same as microbitcoin (μBTC). Bits have two-decimal precision. | 
**chainwork** | **String** | Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes. | 
**merkleRoot** | **String** | Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions&#39; hashes that are part of a blockchain block. | 
**strippedSize** | **Number** | Defines the numeric representation of the block size excluding the witness data. | 
**version** | **Number** | Represents the version of the specific block on the blockchain. | 
**versionHex** | **String** | Is the hexadecimal string representation of the block&#39;s version. | 
**weight** | **Number** | Represents a measurement to compare the size of different transactions to each other in proportion to the block size limit. | 


