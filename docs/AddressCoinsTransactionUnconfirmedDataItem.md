# CryptoApis.AddressCoinsTransactionUnconfirmedDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain** | **String** | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
**network** | **String** | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
**address** | **String** | Defines the specific address to which the coin transaction has been sent and is pending confirmation. | 
**transactionId** | **String** | Defines the unique ID of the specific transaction, i.e. its identification number. | 
**amount** | **String** | Defines the amount of coins sent with the transaction that is pending confirmation. | 
**unit** | **String** | Defines the unit of the transaction, e.g. BTC. | 
**direction** | **String** | Defines whether the transaction is \&quot;incoming\&quot; or \&quot;outgoing\&quot;. | 
**firstSeenInMempoolTimestamp** | **Number** | Defines the exact time the transaction has been first accepted into the mempool to await confirmation as timestamp. | 



## Enum: UnitEnum


* `btc` (value: `"btc"`)

* `satoshi` (value: `"satoshi"`)

* `wei` (value: `"wei"`)

* `gwei` (value: `"gwei"`)

* `eth` (value: `"eth"`)

* `doge` (value: `"doge"`)

* `dash` (value: `"dash"`)

* `etc` (value: `"etc"`)

* `xrp` (value: `"xrp"`)

* `zil` (value: `"zil"`)





## Enum: DirectionEnum


* `incoming` (value: `"incoming"`)

* `outgoing` (value: `"outgoing"`)




