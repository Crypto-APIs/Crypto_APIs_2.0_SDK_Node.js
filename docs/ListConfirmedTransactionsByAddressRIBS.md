# Cryptoapis.ListConfirmedTransactionsByAddressRIBS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locktime** | **Number** | Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vSize** | **Number** | Represents the virtual size of this transaction. | 
**version** | **Number** | Defines the version of the transaction. | 
**vin** | [**[ListConfirmedTransactionsByAddressRIBSZVinInner]**](ListConfirmedTransactionsByAddressRIBSZVinInner.md) | Object Array representation of transaction inputs | 
**vout** | [**[GetTransactionDetailsByTransactionIDRIBSZVoutInner]**](GetTransactionDetailsByTransactionIDRIBSZVoutInner.md) | Object Array representation of transaction outputs | 
**contract** | **String** | Represents the specific transaction contract. | 
**gasLimit** | **String** | Represents the amount of gas used by this specific transaction alone. | 
**gasPrice** | [**ListConfirmedTransactionsByAddressRIBSPGasPrice**](ListConfirmedTransactionsByAddressRIBSPGasPrice.md) |  | 
**gasUsed** | **String** | Represents the exact unit of gas that was used for the transaction. | 
**inputData** | **String** | Represents additional information that is required for the transaction. | 
**internalTransactionsCount** | **Number** | Rrepresentation of the internal transactions count | 
**nonce** | **Number** | Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender&#39;s address. | 
**tokenTransfersCount** | **Number** | Representation of the token transfers count | 
**transactionStatus** | **String** | Representation of the transaction status | 
**bindingSig** | **String** | It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions. | 
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**joinSplitPubKey** | **String** | Represents an encoding of a JoinSplitSig public validating key. | 
**joinSplitSig** | **String** | Is used to sign transactions that contain at least one JoinSplit description. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**vJoinSplit** | [**[ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner]**](ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.md) | Represents a sequence of JoinSplit descriptions using BCTV14 proofs. | 
**vShieldedOutput** | [**[GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner]**](GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner.md) | Object Array representation of transaction output descriptions | 
**vShieldedSpend** | [**[GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner]**](GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.md) | Object Array representation of transaction spend descriptions | 
**valueBalance** | **String** | Defines the transaction value balance. | 
**versionGroupId** | **String** | Represents the transaction version group ID. | 
**bandwidthUsed** | **String** | Numeric representation of the transaction used bandwidth | 
**energyUsed** | **String** | String representation of the transaction used energy | 
**hasInternalTransactions** | **Boolean** | Defines if there are internal transactions (true) or not (false) | 
**hasTokenTransfers** | **Boolean** | Defines if there are token transfers (true) or not (false) | 


