# Cryptoapis.GetAddressDetailsFromCallbackRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incomingTransactionsCount** | **Number** | Defines the received transaction count to the address. | 
**outgoingTransactionsCount** | **Number** | Defines the sent transaction count from the address. | 
**transactionsCount** | **Number** | Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only and not tokens transfers e.g. for Ethereum. transactionsCount could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses. | 
**confirmedBalance** | [**GetAddressDetailsFromCallbackRIConfirmedBalance**](GetAddressDetailsFromCallbackRIConfirmedBalance.md) |  | 
**totalReceived** | [**GetAddressDetailsFromCallbackRITotalReceived**](GetAddressDetailsFromCallbackRITotalReceived.md) |  | 
**totalSpent** | [**GetAddressDetailsFromCallbackRITotalSpent**](GetAddressDetailsFromCallbackRITotalSpent.md) |  | 
**sequence** | **Number** | Defines the transaction input&#39;s sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime. | [optional] 


