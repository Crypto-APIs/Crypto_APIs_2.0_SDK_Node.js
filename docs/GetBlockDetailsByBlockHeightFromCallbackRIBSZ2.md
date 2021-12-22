# Cryptoapis.GetBlockDetailsByBlockHeightFromCallbackRIBSZ2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bits** | **String** | Represents a specific sub-unit of Zcash. Bits have two-decimal precision | 
**chainwork** | **String** | Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes. | 
**merkleRoot** | **String** | Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions&#39; hashes that are part of a blockchain block. | 
**nonce** | **String** | Represents a random value that can be adjusted to satisfy the proof of work | 
**size** | **Number** | Represents the total size of the block in Bytes. | 
**version** | **Number** | Represents the transaction version number. | 


