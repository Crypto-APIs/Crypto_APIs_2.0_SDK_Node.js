# Cryptoapis.GetTransactionDetailsByTransactionIDFromCallbackRIBS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Defines the version of the transaction. | 
**vin** | [**[GetTransactionDetailsByTransactionIDRIBSZVinInner]**](GetTransactionDetailsByTransactionIDRIBSZVinInner.md) | Object Array representation of transaction inputs | 
**vout** | [**[GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner]**](GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner.md) | Object Array representation of transaction outputs | 
**contract** | **String** | Represents the specific transaction contract. | 
**gasLimit** | **Number** | Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit. | 
**gasPrice** | [**GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice**](GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice.md) |  | 
**gasUsed** | **Number** | Defines how much of the gas for the block has been used. | 
**inputData** | **String** | Represents additional information that is required for the transaction. | 
**nonce** | **Number** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**transactionStatus** | **String** | Represents the status of this transaction. | 
**bindingSig** | **String** | It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions. | 
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**joinSplitPubKey** | **String** | Represents an encoding of a JoinSplitSig public validating key. | 
**joinSplitSig** | **String** | Is used to sign transactions that contain at least one JoinSplit description. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**vJoinSplit** | [**[GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner]**](GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.md) | Represents a sequence of JoinSplit descriptions using BCTV14 proofs. | 
**vShieldedOutput** | [**[GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner]**](GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner.md) | Object Array representation of transaction output descriptions | 
**vShieldedSpend** | [**[GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner]**](GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.md) | Object Array representation of transaction spend descriptions | 
**valueBalance** | **String** | String representation of the transaction value balance | 
**versionGroupId** | **String** | Represents the transaction version group ID | 
**additionalData** | **String** | Represents additional data that may be needed. | 
**destinationTag** | **Number** | Defines the destination tag value. | [optional] 
**offer** | [**GetXRPRippleTransactionDetailsByTransactionIDRIOffer**](GetXRPRippleTransactionDetailsByTransactionIDRIOffer.md) |  | 
**receive** | [**GetXRPRippleTransactionDetailsByTransactionIDRIReceive**](GetXRPRippleTransactionDetailsByTransactionIDRIReceive.md) |  | 
**sequence** | **Number** | Defines the transaction input&#39;s sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime. | 
**status** | **String** | Defines the status of the transaction. | 
**type** | **String** | Defines the type of the transaction. | 
**value** | [**GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue**](GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue.md) |  | 
**amount** | **String** | Defines the amount of the transaction. | 
**bandwidthUsed** | [**GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed**](GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed.md) |  | 
**energyUsed** | [**GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed**](GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed.md) |  | 
**hasInternalTransactions** | **Boolean** | Defines if the transaction includes internal transactions (true) or not (false). | 
**hasTokenTransfers** | **String** | Defines if the transaction includes token transfers (true) or not (false). | 
**input** | **String** | Represents the transaction&#39;s input value. | 
**recipients** | **String** | Represents the recipient address. | 
**senders** | **String** | Represents the sender address. | 


