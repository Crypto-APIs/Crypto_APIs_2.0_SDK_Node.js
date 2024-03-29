# Cryptoapis.NewRevertedBlockRI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | Represents the address of the transaction, per which the result is returned. | 
**callbackSecretKey** | **String** | Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation. | 
**callbackUrl** | **String** | Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol. | [optional] 
**createdTimestamp** | **Number** | Defines the specific time/date when the subscription was created in Unix Timestamp. | 
**eventType** | **String** | Defines the type of the specific event available for the customer to subscribe to for callback notification. | 
**isActive** | **Boolean** | Defines whether the subscription is active or not. Set as boolean. | 
**referenceId** | **String** | Represents a unique ID used to reference the specific callback subscription. | 


