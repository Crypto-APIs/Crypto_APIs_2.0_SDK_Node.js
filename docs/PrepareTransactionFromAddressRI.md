# Cryptoapis.PrepareTransactionFromAddressRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Representation of the transacted amount | 
**dataHex** | **String** | Representation of the data in hex value | [optional] 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | [optional] 
**recipient** | **String** | The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient. | 
**sender** | **String** | Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender. | 
**sighash** | **String** | Representation of the hash that should be signed | 
**blockchainSpecific** | [**PrepareTransactionFromAddressRIBS**](PrepareTransactionFromAddressRIBS.md) |  | 


