# Cryptoapis.CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRBDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **String** | Represents the specific amount of the transaction. | 
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security). | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. &#x60;We support ONLY httpS type of protocol&#x60;. | [optional] 
**feeLimit** | **String** | Fee limit of the smart contract. If \&quot;OUT_OF_ENERGY\&quot; error appears - It is necessary to check whether the address of the calling contract has TRX and whether it is enough to pay for the burning energy or bandwidth cost, otherwise the address needs to obtain enough TRX. If there is enough TRX, the feeLimit set by the transaction is smaller, and it needs to be increased. | 
**note** | **String** | Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request. | [optional] 
**recipientAddress** | **String** | Defines the specific recipient address for the transaction. | 
**tokenIdentifier** | **String** | Token identifier - for BITCOIN BASED should be property id e.g 31 for ETHEREUM BASED shoud be contract e.g 0xdac17f958d2ee523a2206206994597c13d831ec7 | 


