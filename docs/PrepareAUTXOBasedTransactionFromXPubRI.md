# Cryptoapis.PrepareAUTXOBasedTransactionFromXPubRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **String** | Representation of the additional data | 
**fee** | **String** | When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value. | 
**feePerByte** | **String** | Defines the fee per byte value | [optional] 
**inputs** | [**[PrepareAUTXOBasedTransactionFromXPubRIInputsInner]**](PrepareAUTXOBasedTransactionFromXPubRIInputsInner.md) | Represents the transaction inputs. | 
**locktime** | **Number** | Represents the time at which a particular transaction can be added to the blockchain. | 
**replaceable** | **Boolean** | Representation of whether the transaction is replaceable | 
**size** | **Number** | Represents the total size of this transaction. | 
**vout** | [**[PrepareAUTXOBasedTransactionFromXPubRIVoutInner]**](PrepareAUTXOBasedTransactionFromXPubRIVoutInner.md) | Represents the transaction outputs. | 


