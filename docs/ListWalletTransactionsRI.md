# Cryptoapis.ListWalletTransactionsRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **String** | Defines the direction of the transaction, e.g. incoming. | 
**fee** | [**ListWalletTransactionsRIFee**](ListWalletTransactionsRIFee.md) |  | 
**fungibleTokens** | [**[ListWalletTransactionsRIFungibleTokens]**](ListWalletTransactionsRIFungibleTokens.md) | Represents fungible tokens&#39;es detailed information | [optional] 
**internalTransactions** | [**[ListWalletTransactionsRIInternalTransactions]**](ListWalletTransactionsRIInternalTransactions.md) |  | [optional] 
**nonFungibleTokens** | [**[ListWalletTransactionsRINonFungibleTokens]**](ListWalletTransactionsRINonFungibleTokens.md) | Represents non-fungible tokens&#39;es detailed information. | [optional] 
**recipients** | [**[ListWalletTransactionsRIRecipients]**](ListWalletTransactionsRIRecipients.md) | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**senders** | [**[ListWalletTransactionsRISenders]**](ListWalletTransactionsRISenders.md) | Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**status** | **String** | Defines the status of the transaction, if it is confirmed or unconfirmed. | 
**timestamp** | **Number** | Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed. | 
**transactionId** | **String** | Represents the unique TD of the transaction. | 
**value** | [**ListWalletTransactionsRIValue**](ListWalletTransactionsRIValue.md) |  | 


