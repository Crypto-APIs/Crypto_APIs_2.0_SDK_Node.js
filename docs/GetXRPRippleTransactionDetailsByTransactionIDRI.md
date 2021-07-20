# Cryptoapis.GetXRPRippleTransactionDetailsByTransactionIDRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Represents additional data that may be needed. | 
**index** | **String** | Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain. | 
**minedInBlockHash** | **String** | Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**minedInBlockHeight** | **String** | Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block. | 
**offer** | [**GetXRPRippleTransactionDetailsByTransactionIDRIOffer**](GetXRPRippleTransactionDetailsByTransactionIDRIOffer.md) |  | 
**receive** | [**GetXRPRippleTransactionDetailsByTransactionIDRIReceive**](GetXRPRippleTransactionDetailsByTransactionIDRIReceive.md) |  | 
**recipients** | [**[GetXRPRippleTransactionDetailsByTransactionIDRIRecipients]**](GetXRPRippleTransactionDetailsByTransactionIDRIRecipients.md) | Represents an object of addresses that receive the transactions. | 
**senders** | [**[GetXRPRippleTransactionDetailsByTransactionIDRISenders]**](GetXRPRippleTransactionDetailsByTransactionIDRISenders.md) | Represents an object of addresses that provide the funds. | 
**sequence** | **Number** | Defines the transaction input&#39;s sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime. | 
**status** | **String** | Defines the status of the transaction. | [optional] 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 
**transactionHash** | **String** | Represents the same as &#x60;transactionId&#x60; for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols &#x60;hash&#x60; is different from &#x60;transactionId&#x60; for SegWit transactions. | 
**type** | **String** | Defines the type of the transaction. | 
**fee** | [**GetXRPRippleTransactionDetailsByTransactionIDRIFee**](GetXRPRippleTransactionDetailsByTransactionIDRIFee.md) |  | 
**value** | [**GetXRPRippleTransactionDetailsByTransactionIDRIValue**](GetXRPRippleTransactionDetailsByTransactionIDRIValue.md) |  | 


