# Cryptoapis.AddressCoinsTransactionConfirmedEachConfirmationDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain** | **String** | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
**network** | **String** | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
**address** | **String** | Defines the specific address to which the transaction has been sent. | 
**minedInBlock** | [**AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock**](AddressCoinsTransactionConfirmedEachConfirmationDataItemMinedInBlock.md) |  | 
**transactionId** | **String** | Defines the unique ID of the specific transaction, i.e. its identification number. | 
**currentConfirmations** | **Number** | Defines the number of currently received confirmations for the transaction. | 
**targetConfirmations** | **Number** | Defines the number of confirmation transactions requested as callbacks, i.e. the system can notify till the n-th confirmation. | 
**amount** | **String** | Defines the amount of coins sent with the confirmed transaction. | 
**unit** | **String** | Defines the unit of the transaction, e.g. BTC. | 
**direction** | **String** | Defines whether the transaction is \&quot;incoming\&quot; or \&quot;outgoing\&quot;. | 



## Enum: DirectionEnum


* `incoming` (value: `"incoming"`)

* `outgoing` (value: `"outgoing"`)




