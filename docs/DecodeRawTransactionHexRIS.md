# Cryptoapis.DecodeRawTransactionHexRIS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid. | 
**transactionHash** | **String** | Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Represents the transaction version number. | 
**vin** | [**[DecodeRawTransactionHexRISZVinInner]**](DecodeRawTransactionHexRISZVinInner.md) | Represents the Inputs of the transaction | 
**vout** | [**[DecodeRawTransactionHexRISZVoutInner]**](DecodeRawTransactionHexRISZVoutInner.md) | Represents the Inputs of the transaction | 
**weight** | **Number** | Represents the size of a block, measured in weight units and including the segwit discount. | [optional] 
**approximateFee** | **String** | Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value. | [optional] 
**approximateMinimumRequiredFee** | **String** | Defines the approximate minimum fee that is required for the transaction. | [optional] 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasPaidForData** | **String** | Represents the amount of gas paid for the data in the transaction. | [optional] 
**gasPrice** | **String** | Represents the price offered to the miner to purchase this amount of gas. | [optional] 
**inputData** | **String** | Represents additional information that is required for the transaction. | [optional] 
**maxFeePerGas** | **String** | Defines the maximum amount that customer is willing to pay per unit of gas to get his transaction included in a block. | [optional] 
**maxFeePriorityPerGas** | **String** | Represents determined by the user value that is paid directly to miners. | [optional] 
**nonce** | **Number** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**r** | **String** | Represents output of an ECDSA signature. | [optional] 
**recipient** | **String** | The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient. | 
**s** | **String** | Represents output of an ECDSA signature. | [optional] 
**sender** | **String** | Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender. | 
**type** | **Number** | Specifies the transaction type as one from three options: if response returns a &#x60;\&quot;0\&quot;&#x60; it means the raw transaction includes legacy transaction data, if it is &#x60;\&quot;1\&quot;&#x60; - includes access lists for EIP2930, and if it is &#x60;\&quot;2\&quot;&#x60; - EIP1559 data. | 
**v** | **String** | Defines the the recovery id. | [optional] 
**value** | **String** | Represents the sent/received amount. | [optional] 
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**saplinged** | **Boolean** | Defines if the transaction includes sapling or not. | 
**valueBalance** | **String** | Defines the transaction value balance. | 
**versionGroupId** | **String** | Represents the transaction version group ID | 


