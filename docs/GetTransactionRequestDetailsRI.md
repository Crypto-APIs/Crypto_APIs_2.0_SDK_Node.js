# Cryptoapis.GetTransactionRequestDetailsRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalDetails** | **String** | Defines an optional note for additional details. | 
**blockchain** | **String** | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
**feePriority** | **String** | Defines the priority for the fee, if it is \&quot;slow\&quot;, \&quot;standard\&quot; or \&quot;fast\&quot;. | 
**network** | **String** | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot; are test networks. | 
**recipients** | [**[GetTransactionRequestDetailsRIRecipients]**](GetTransactionRequestDetailsRIRecipients.md) | Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list. | 
**totalTransactionAmount** | **String** | Defines the total transaction amount. | 
**transactionId** | **String** | Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain. | [optional] 
**transactionRequestStatus** | **String** | Defines the status of the transaction request, e.g. pending. | 
**transactionType** | **String** | Defines the transaction type, if it is for coins or tokens. | 
**unit** | **String** | Defines the unit of the amount. | 
**walletId** | **String** | Defines the unique ID of the Wallet. | 



## Enum: BlockchainEnum


* `bitcoin` (value: `"bitcoin"`)

* `bitcoin-cash` (value: `"bitcoin-cash"`)

* `litecoin` (value: `"litecoin"`)

* `dogecoin` (value: `"dogecoin"`)

* `dash` (value: `"dash"`)

* `ethereum` (value: `"ethereum"`)

* `ethereum-classic` (value: `"ethereum-classic"`)

* `xrp` (value: `"xrp"`)

* `zcash` (value: `"zcash"`)





## Enum: FeePriorityEnum


* `slow` (value: `"slow"`)

* `standard` (value: `"standard"`)

* `fast` (value: `"fast"`)





## Enum: NetworkEnum


* `mainnet` (value: `"mainnet"`)

* `testnet` (value: `"testnet"`)

* `ropsten` (value: `"ropsten"`)

* `mordor` (value: `"mordor"`)





## Enum: TransactionRequestStatusEnum


* `created` (value: `"created"`)

* `await-approval` (value: `"await-approval"`)

* `pending` (value: `"pending"`)

* `prepared` (value: `"prepared"`)

* `signed` (value: `"signed"`)

* `broadcasted` (value: `"broadcasted"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)

* `rejected` (value: `"rejected"`)

* `mined` (value: `"mined"`)





## Enum: TransactionTypeEnum


* `coin` (value: `"coin"`)

* `token` (value: `"token"`)




