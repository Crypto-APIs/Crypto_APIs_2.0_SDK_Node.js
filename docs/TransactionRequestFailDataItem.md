# Cryptoapis.TransactionRequestFailDataItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain** | **String** | Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc. | 
**network** | **String** | Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \&quot;mainnet\&quot; is the live network with actual data while networks like \&quot;testnet\&quot;, \&quot;ropsten\&quot;, \&quot;rinkeby\&quot; are test networks. | 
**requiredApprovals** | **Number** | The required number of approvals needed to approve the transaction. | 
**requiredRejections** | **Number** | The required number of rejections needed to reject the transaction. | 
**currentApprovals** | **Number** | The current number of approvals given for the transaction. | 
**currentRejections** | **Number** | The current number of rejections given for the transaction. | 
**errorMessage** | **String** | Represents the error message received for the transaction. | 


