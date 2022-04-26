# Cryptoapis.ListHDWalletXPubYPubZPubUTXOsRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Represents the public address, which is a compressed and shortened form of a public key. | 
**addressPath** | **String** | Defines a data which tells a Hierarchical Deterministic wallet how to derive a specific key within a tree of keys. | 
**amount** | **String** | Represents the UTXO amount value. | 
**derivation** | **String** | The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly. | 
**index** | **Number** | Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout). | 
**isAvailable** | **Boolean** | Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \&quot;false\&quot;. | 
**isConfirmed** | **Boolean** | Represents the state of the transaction whether it is confirmed or not confirmed. | 
**referenceId** | **String** | Represents the reference id of the record. It may be used for the startingAfter pagination attribute. | 
**transactionId** | **String** | Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain. | 


