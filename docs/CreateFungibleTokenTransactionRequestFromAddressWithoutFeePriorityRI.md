# Cryptoapis.CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security). | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. &#x60;We support ONLY httpS type of protocol&#x60;. | [optional] 
**note** | **String** | Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request. | [optional] 
**recipient** | [**[CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner]**](CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner.md) | Defines the destination for the transaction, i.e. the recipient(s). | 
**sender** | [**CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender**](CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender.md) |  | 
**tokenTypeSpecificData** | [**CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS**](CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.md) |  | 
**transactionRequestId** | **String** | Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which &#x60;referenceId&#x60; concern that specific transaction request. | 


