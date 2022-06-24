# Cryptoapis.DecodeRawTransactionHexRISZ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**locktime** | **Number** | Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**saplinged** | **Boolean** | Defines if the transaction includes sapling or not. | 
**transactionHash** | **String** | Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions. | 
**valueBalance** | **String** | Defines the transaction value balance. | 
**version** | **Number** | Represents the transaction version number. | 
**versionGroupId** | **String** | Represents the transaction version group ID | 
**vin** | [**[DecodeRawTransactionHexRISZVinInner]**](DecodeRawTransactionHexRISZVinInner.md) | Represents the Inputs of the transaction | 
**vout** | [**[DecodeRawTransactionHexRISZVoutInner]**](DecodeRawTransactionHexRISZVoutInner.md) | Represents the Inputs of the transaction | 


