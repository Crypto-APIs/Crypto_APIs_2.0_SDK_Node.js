# Cryptoapis.CreateCoinsTransactionRequestFromAddressRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feePriority** | **String** | Represents the fee priority of the automation, whether it is \&quot;slow\&quot;, \&quot;standard\&quot; or \&quot;fast\&quot;. | 
**recipients** | [**[CreateCoinsTransactionRequestFromAddressRIRecipients]**](CreateCoinsTransactionRequestFromAddressRIRecipients.md) | Defines the destination for the transaction, i.e. the recipient(s). | 
**senders** | [**CreateCoinsTransactionRequestFromAddressRISenders**](CreateCoinsTransactionRequestFromAddressRISenders.md) |  | 
**transactionRequestStatus** | **String** | Defines the status of the transaction request, e.g. \&quot;created, \&quot;await_approval\&quot;, \&quot;pending\&quot;, \&quot;prepared\&quot;, \&quot;signed\&quot;, \&quot;broadcasted\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;rejected\&quot;, mined\&quot;. | 



## Enum: FeePriorityEnum


* `slow` (value: `"slow"`)

* `standard` (value: `"standard"`)

* `fast` (value: `"fast"`)





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




