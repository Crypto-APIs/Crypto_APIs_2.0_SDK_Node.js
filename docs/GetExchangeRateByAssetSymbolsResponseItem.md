# CryptoApis.GetExchangeRateByAssetSymbolsResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculationTimestamp** | **Number** | Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp. | 
**fromAssetId** | **String** | Defines the base asset Reference ID to get a rate for. | 
**fromAssetSymbol** | **String** | Defines the base asset symbol to get a rate for. | 
**rate** | **String** | Defines the exchange rate between assets calculated by weighted average of the last trades in every exchange for the last 24 hours by giving more weight to exchanges with higher volume. | 
**toAssetId** | **String** | Defines the relation asset Reference ID in which the base asset rate will be displayed. | 
**toAssetSymbol** | **String** | Defines the relation asset symbol in which the base asset rate will be displayed. | 


