# Cryptoapis.GetAddressDetailsFromCallbackRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incomingTransactionsCount** | **Number** | Defines the count of the incoming transactions. | 
**outgoingTransactionsCount** | **Number** | Defines the count of the outgoing transactions. | 
**transactionsCount** | **Number** | Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. &#x60;transactionsCount&#x60; could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses. | 
**confirmedBalance** | [**GetAddressDetailsRIConfirmedBalance**](GetAddressDetailsRIConfirmedBalance.md) |  | 
**totalReceived** | [**GetAddressDetailsFromCallbackRITotalReceived**](GetAddressDetailsFromCallbackRITotalReceived.md) |  | [optional] 
**totalSpent** | [**GetAddressDetailsFromCallbackRITotalSpent**](GetAddressDetailsFromCallbackRITotalSpent.md) |  | [optional] 
**sequence** | **Number** | Defines the transaction input&#39;s sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime. | [optional] 


