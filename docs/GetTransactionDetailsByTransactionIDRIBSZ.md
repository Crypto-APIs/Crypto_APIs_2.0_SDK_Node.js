# Cryptoapis.GetTransactionDetailsByTransactionIDRIBSZ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindingSig** | **String** | It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions. | 
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**joinSplitPubKey** | **String** | Represents an encoding of a JoinSplitSig public validating key. | 
**joinSplitSig** | **String** | Is used to sign transactions that contain at least one JoinSplit description. | 
**locktime** | **Number** | Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**size** | **Number** | Represents the total size of this transaction. | 
**vJoinSplit** | [**[GetTransactionDetailsByTransactionIDRIBSZVJoinSplit]**](GetTransactionDetailsByTransactionIDRIBSZVJoinSplit.md) | Represents a sequence of JoinSplit descriptions using BCTV14 proofs. | 
**vShieldedOutput** | [**[GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput]**](GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput.md) | Object Array representation of transaction output descriptions | 
**vShieldedSpend** | [**[GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend]**](GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend.md) | Object Array representation of transaction spend descriptions | 
**valueBalance** | **String** | String representation of the transaction value balance | 
**version** | **Number** | Defines the version of the transaction. | 
**versionGroupId** | **String** | Represents the transaction version group ID. | 
**vin** | [**[GetTransactionDetailsByTransactionIDRIBSZVin]**](GetTransactionDetailsByTransactionIDRIBSZVin.md) | Object Array representation of transaction inputs | 
**vout** | [**[GetTransactionDetailsByTransactionIDRIBSZVout]**](GetTransactionDetailsByTransactionIDRIBSZVout.md) | Object Array representation of transaction outputs | 


