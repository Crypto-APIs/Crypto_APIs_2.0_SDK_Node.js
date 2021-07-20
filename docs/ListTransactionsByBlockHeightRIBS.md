# Cryptoapis.ListTransactionsByBlockHeightRIBS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Represents the total size of this transaction. | 
**vin** | [**[ListTransactionsByBlockHashRIBSBCVin]**](ListTransactionsByBlockHashRIBSBCVin.md) | Represents the transaction inputs. | 
**vout** | [**[ListTransactionsByBlockHashRIBSBCVout]**](ListTransactionsByBlockHashRIBSBCVout.md) | Represents the transaction outputs. | 
**contract** | **String** | Represents the specific transaction contract. | 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasPrice** | [**ListTransactionsByBlockHeightRIBSECGasPrice**](ListTransactionsByBlockHeightRIBSECGasPrice.md) |  | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**inputData** | **String** | Represents additional information that is required for the transaction. | 
**nonce** | **String** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**transactionStatus** | **String** | Represents the status of this transaction. | 
**vsize** | **Number** | Represents the virtual size of this transaction. | 


