# Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBSP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Representation of the amount value. | 
**contract** | **String** | Represents the specific transaction contract. | 
**gas** | **String** | Represents the price offered to the miner to purchase this amount of gas. | 
**gasPrice** | **String** | Represents the price offered to the miner to purchase this amount of gas. | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**input** | **String** | Represents additional information that is required for the transaction. | 
**nonce** | **Number** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**recipients** | **String** | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**senders** | **String** | Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**transactionStatus** | **String** | Represents the status of this transaction. | 
**txid** | **String** | Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain. | 


