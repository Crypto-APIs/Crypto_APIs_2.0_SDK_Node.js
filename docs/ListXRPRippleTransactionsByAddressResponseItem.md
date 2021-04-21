# CryptoApis.ListXRPRippleTransactionsByAddressResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Represents any additional data that may be needed. | 
**index** | **Number** | Represents the index position of the transaction in the block. | 
**minedInBlockHash** | **String** | Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**minedInBlockHeight** | **Number** | Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block. | 
**recipients** | [**[GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients]**](GetXRPRippleTransactionDetailsByTransactionIDResponseItemRecipients.md) | Represents an object of addresses that receive the transactions. | 
**senders** | [**[GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders]**](GetXRPRippleTransactionDetailsByTransactionIDResponseItemSenders.md) | Represents an object of addresses that provide the funds. | 
**sequence** | **Number** | Defines the transaction input&#39;s sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime. | 
**status** | **String** | Defines the status of the transaction. | 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 
**transactionHash** | **String** | Represents the hash of the XRP transaction. | 
**type** | **String** | Specifies the type of the transaction. | 
**fee** | [**ListXRPRippleTransactionsByAddressResponseItemFee**](ListXRPRippleTransactionsByAddressResponseItemFee.md) |  | 
**offer** | [**ListXRPRippleTransactionsByAddressResponseItemOffer**](ListXRPRippleTransactionsByAddressResponseItemOffer.md) |  | 
**receive** | [**ListXRPRippleTransactionsByAddressResponseItemReceive**](ListXRPRippleTransactionsByAddressResponseItemReceive.md) |  | 
**value** | [**ListXRPRippleTransactionsByAddressResponseItemValue**](ListXRPRippleTransactionsByAddressResponseItemValue.md) |  | 


