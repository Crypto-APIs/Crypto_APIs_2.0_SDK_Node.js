# Cryptoapis.GetAddressDetailsRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionsCount** | **Number** | Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. &#x60;transactionsCount&#x60; could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses. | 
**confirmedBalance** | [**GetAddressDetailsRIConfirmedBalance**](GetAddressDetailsRIConfirmedBalance.md) |  | 
**totalReceived** | [**GetAddressDetailsRITotalReceived**](GetAddressDetailsRITotalReceived.md) |  | 
**totalSpent** | [**GetAddressDetailsRITotalSpent**](GetAddressDetailsRITotalSpent.md) |  | 
**incomingTransactionsCount** | **Number** | Defines the received transaction count to the address. | 
**outgoingTransactionsCount** | **Number** | Defines the sent transaction count from the address. | 


