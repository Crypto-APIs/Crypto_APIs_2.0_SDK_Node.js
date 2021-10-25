# Cryptoapis.ListTransactionsByBlockHeightRIBSZ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindingSig** | **String** | It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions. | 
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**joinSplitPubKey** | **String** | Represents an encoding of a JoinSplitSig public validating key. | 
**joinSplitSig** | **String** | Is used to sign transactions that contain at least one JoinSplit description. | 
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vJoinSplit** | [**[ListTransactionsByBlockHeightRIBSZVJoinSplit]**](ListTransactionsByBlockHeightRIBSZVJoinSplit.md) | Represents a sequence of JoinSplit descriptions using BCTV14 proofs. | 
**vShieldedOutput** | [**[ListTransactionsByBlockHeightRIBSZVShieldedOutput]**](ListTransactionsByBlockHeightRIBSZVShieldedOutput.md) | Object Array representation of transaction output descriptions | 
**vShieldedSpend** | [**[ListConfirmedTransactionsByAddressRIBSZVShieldedSpend]**](ListConfirmedTransactionsByAddressRIBSZVShieldedSpend.md) | Object Array representation of transaction spend descriptions | 
**valueBalance** | **String** | Defines the transaction value balance. | 
**version** | **Number** | Represents the transaction version number. | 
**versionGroupId** | **String** | Represents the transaction version group ID. | 
**vin** | [**[ListTransactionsByBlockHeightRIBSZVin]**](ListTransactionsByBlockHeightRIBSZVin.md) | Object Array representation of transaction inputs | 
**vout** | [**[ListTransactionsByBlockHeightRIBSZVout]**](ListTransactionsByBlockHeightRIBSZVout.md) | Object Array representation of transaction outputs | 


