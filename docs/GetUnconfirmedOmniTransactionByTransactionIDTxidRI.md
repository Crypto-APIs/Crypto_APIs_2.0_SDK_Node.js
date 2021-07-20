# Cryptoapis.GetUnconfirmedOmniTransactionByTransactionIDTxidRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Defines the amount of the sent tokens. | 
**divisible** | **Boolean** | Defines whether the attribute can be divisible or not, as boolean. E.g., if it is \&quot;true\&quot;, the attribute is divisible. | 
**mined** | **Boolean** | Defines whether the transaction has been mined or not, as boolean. E.g. if set to \&quot;true\&quot;, it means the transaction is mined. | 
**propertyId** | **Number** | Represents the identifier of the tokens to send. | 
**recipients** | [**[GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients]**](GetUnconfirmedOmniTransactionByTransactionIDTxidRIRecipients.md) | Represents an object of addresses that receive the transactions. | 
**senders** | [**[GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders]**](GetUnconfirmedOmniTransactionByTransactionIDTxidRISenders.md) | Represents an object of addresses that provide the funds. | 
**sent** | **Boolean** | Defines whether the transaction has been sent or not, as boolean. E.g. if set to \&quot;true\&quot;, it means the transaction is sent. | 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 
**transactionId** | **String** | String representation of the transaction identifier (txid) | 
**type** | **String** | Defines the type of the transaction as a string. | 
**typeInt** | **Number** | Defines the type of the transaction as a number. | 
**version** | **Number** | Defines the specific version. | 
**fee** | [**ListUnconfirmedOmniTransactionsByAddressRIFee**](ListUnconfirmedOmniTransactionsByAddressRIFee.md) |  | 


