# Cryptoapis.ListTokensTransfersByTransactionHashRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contractAddress** | **String** | Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens. | 
**minedInBlockHeight** | **Number** | Defines the block height in which this transaction was confirmed/mined. | 
**recipientAddress** | **String** | Defines the address to which the recipient receives the transferred tokens. | 
**senderAddress** | **String** | Defines the address from which the sender transfers tokens. | 
**tokenDecimals** | **Number** | Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token. | 
**tokenName** | **String** | Defines the token&#39;s name as a string. | 
**tokenSymbol** | **String** | Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length. | 
**tokenType** | **String** | Defines the specific token type. | 
**tokensAmount** | **String** | Defines the token amount of the transfer. | 
**transactionHash** | **String** | Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm. | 
**transactionTimestamp** | **Number** | Defines the specific time/date when the transaction was created in Unix Timestamp. | 
**transactionFee** | [**ListTokensTransfersByTransactionHashRITransactionFee**](ListTokensTransfersByTransactionHashRITransactionFee.md) |  | 


