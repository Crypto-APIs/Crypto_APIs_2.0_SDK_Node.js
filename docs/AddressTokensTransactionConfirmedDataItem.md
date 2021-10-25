# Cryptoapis.AddressTokensTransactionConfirmedDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain** | **String** | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
**network** | **String** | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;,  are test networks. | 
**address** | **String** | Defines the specific address to which the transaction has been sent. | 
**minedInBlock** | [**AddressTokensTransactionConfirmedDataItemMinedInBlock**](AddressTokensTransactionConfirmedDataItemMinedInBlock.md) |  | 
**transactionId** | **String** | Defines the unique ID of the specific transaction, i.e. its identification number. | 
**tokenType** | **String** | Defines the type of token sent with the transaction, e.g. ERC 20. | 
**token** | [**AddressTokensTransactionConfirmedToken**](AddressTokensTransactionConfirmedToken.md) |  | 
**direction** | **String** | Defines whether the transaction is \&quot;incoming\&quot; or \&quot;outgoing\&quot;. | 



## Enum: TokenTypeEnum


* `ERC-20` (value: `"ERC-20"`)

* `ERC-721` (value: `"ERC-721"`)

* `OMNI` (value: `"OMNI"`)

* `BEP-20` (value: `"BEP-20"`)





## Enum: DirectionEnum


* `incoming` (value: `"incoming"`)

* `outgoing` (value: `"outgoing"`)




