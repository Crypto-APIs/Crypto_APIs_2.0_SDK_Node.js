# CryptoApis.ListTransactionsByAddressResponseItemBlockchainSpecific

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Represents the transaction&#39;s version number. | 
**vin** | [**[ListTransactionsByAddressResponseItemBlockchainSpecificDashVin]**](ListTransactionsByAddressResponseItemBlockchainSpecificDashVin.md) | Represents the transaction inputs. | 
**vout** | [**[ListTransactionsByAddressResponseItemBlockchainSpecificDashVout]**](ListTransactionsByAddressResponseItemBlockchainSpecificDashVout.md) | Represents the transaction outputs. | 
**contract** | **String** | Represents the specific transaction contract. | 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasPrice** | [**ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice**](ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice.md) |  | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**inputData** | **String** | Represents additional information that is required for the transaction. | 
**nonce** | **Number** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**transactionStatus** | **String** | String representation of the transaction status | 


