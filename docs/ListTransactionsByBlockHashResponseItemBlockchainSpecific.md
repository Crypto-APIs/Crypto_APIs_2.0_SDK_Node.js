# CryptoApis.ListTransactionsByBlockHashResponseItemBlockchainSpecific

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Represents transaction version number. | 
**vin** | [**[ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin]**](ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin.md) | Represents the transaction inputs. | 
**vout** | [**[ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout]**](ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout.md) | Represents the transaction outputs. | 
**vsize** | **Number** | Represents the virtual size of this transaction. | 
**contract** | **String** | Represents the specific transaction contract. | 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasPrice** | [**ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice**](ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice.md) |  | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**inputData** | **String** | Represents additional information that is required for the transaction. | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**transactionStatus** | **String** | String representation of the transaction status | 


