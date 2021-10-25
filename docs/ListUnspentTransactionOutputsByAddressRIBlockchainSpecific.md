# Cryptoapis.ListUnspentTransactionOutputsByAddressRIBlockchainSpecific

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vSize** | **Number** | Represents the virtual size of this transaction | 
**bindingSig** | **String** | It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions. | 
**expiryHeight** | **Number** | Represents a block height after which the transaction will expire. | 
**joinSplitPubKey** | **String** | Represents an encoding of a JoinSplitSig public validating key. | 
**joinSplitSig** | **String** | Is used to sign transactions that contain at least one JoinSplit description. | 
**overwintered** | **Boolean** | \&quot;Overwinter\&quot; is the network upgrade for the Zcash blockchain. | 
**vJoinSplit** | [**[ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVJoinSplit]**](ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVJoinSplit.md) | Represents a sequence of JoinSplit descriptions using BCTV14 proofs. | [optional] 
**vShieldedOutput** | [**[ListConfirmedTransactionsByAddressRIBSZVShieldedOutput]**](ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.md) | Object Array representation of transaction output descriptions | [optional] 
**vShieldedSpend** | [**[ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend]**](ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend.md) | Object Array representation of transaction spend descriptions | 
**valueBalance** | **String** | Defines the transaction value balance. | 
**versionGroupId** | **String** | Represents the transaction version group ID. | 


