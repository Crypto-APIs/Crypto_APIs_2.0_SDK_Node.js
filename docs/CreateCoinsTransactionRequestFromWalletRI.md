# Cryptoapis.CreateCoinsTransactionRequestFromWalletRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.  For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security). | [optional] 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. &#x60;We support ONLY httpS type of protocol&#x60;. | [optional] 
**feePriority** | **String** | Represents the fee priority of the automation, whether it is \&quot;slow\&quot;, \&quot;standard\&quot; or \&quot;fast\&quot;. | 
**note** | **String** | Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request. | [optional] 
**recipients** | [**[CreateCoinsTransactionRequestFromWalletRIRecipients]**](CreateCoinsTransactionRequestFromWalletRIRecipients.md) | Defines the destination of the transaction, whether it is incoming or outgoing. | 
**totalTransactionAmount** | **String** | Represents the specific amount of the transaction. | 
**transactionRequestId** | **String** | Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which &#x60;referenceId&#x60; concern that specific transaction request. | 
**transactionRequestStatus** | **String** | Defines the status of the transaction, e.g. \&quot;created, \&quot;await_approval\&quot;, \&quot;pending\&quot;, \&quot;prepared\&quot;, \&quot;signed\&quot;, \&quot;broadcasted\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;rejected\&quot;, mined\&quot;. | 



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




