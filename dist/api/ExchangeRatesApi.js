"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CouldNotCalculateRateForPair = _interopRequireDefault(require("../model/CouldNotCalculateRateForPair"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _GetExchangeRateByAssetSymbolsR = _interopRequireDefault(require("../model/GetExchangeRateByAssetSymbolsR"));

var _GetExchangeRateByAssetsIDsR = _interopRequireDefault(require("../model/GetExchangeRateByAssetsIDsR"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ExchangeRates service.
* @module api/ExchangeRatesApi
* @version 1.3.0
*/
var ExchangeRatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ExchangeRatesApi. 
  * @alias module:api/ExchangeRatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ExchangeRatesApi(apiClient) {
    _classCallCheck(this, ExchangeRatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Exchange Rate By Asset Symbols
   * Through this endpoint customers can obtain exchange rates by asset symbols. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset symbol.
   * @param {String} fromAssetSymbol Defines the base asset symbol to get a rate for.
   * @param {String} toAssetSymbol Defines the relation asset symbol in which the base asset rate will be displayed.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExchangeRateByAssetSymbolsR} and HTTP response
   */


  _createClass(ExchangeRatesApi, [{
    key: "getExchangeRateByAssetSymbolsWithHttpInfo",
    value: function getExchangeRateByAssetSymbolsWithHttpInfo(fromAssetSymbol, toAssetSymbol, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'fromAssetSymbol' is set

      if (fromAssetSymbol === undefined || fromAssetSymbol === null) {
        throw new Error("Missing the required parameter 'fromAssetSymbol' when calling getExchangeRateByAssetSymbols");
      } // verify the required parameter 'toAssetSymbol' is set


      if (toAssetSymbol === undefined || toAssetSymbol === null) {
        throw new Error("Missing the required parameter 'toAssetSymbol' when calling getExchangeRateByAssetSymbols");
      }

      var pathParams = {
        'fromAssetSymbol': fromAssetSymbol,
        'toAssetSymbol': toAssetSymbol
      };
      var queryParams = {
        'context': opts['context'],
        'calculationTimestamp': opts['calculationTimestamp']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetExchangeRateByAssetSymbolsR["default"];
      return this.apiClient.callApi('/market-data/exchange-rates/by-symbols/{fromAssetSymbol}/{toAssetSymbol}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Exchange Rate By Asset Symbols
     * Through this endpoint customers can obtain exchange rates by asset symbols. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset symbol.
     * @param {String} fromAssetSymbol Defines the base asset symbol to get a rate for.
     * @param {String} toAssetSymbol Defines the relation asset symbol in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExchangeRateByAssetSymbolsR}
     */

  }, {
    key: "getExchangeRateByAssetSymbols",
    value: function getExchangeRateByAssetSymbols(fromAssetSymbol, toAssetSymbol, opts) {
      return this.getExchangeRateByAssetSymbolsWithHttpInfo(fromAssetSymbol, toAssetSymbol, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Exchange Rate By Assets IDs
     * Through this endpoint customers can obtain exchange rates by asset IDs. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset Reference ID.
     * @param {String} fromAssetId Defines the base asset Reference ID to get a rate for.
     * @param {String} toAssetId Defines the relation asset Reference ID in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExchangeRateByAssetsIDsR} and HTTP response
     */

  }, {
    key: "getExchangeRateByAssetsIDsWithHttpInfo",
    value: function getExchangeRateByAssetsIDsWithHttpInfo(fromAssetId, toAssetId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'fromAssetId' is set

      if (fromAssetId === undefined || fromAssetId === null) {
        throw new Error("Missing the required parameter 'fromAssetId' when calling getExchangeRateByAssetsIDs");
      } // verify the required parameter 'toAssetId' is set


      if (toAssetId === undefined || toAssetId === null) {
        throw new Error("Missing the required parameter 'toAssetId' when calling getExchangeRateByAssetsIDs");
      }

      var pathParams = {
        'fromAssetId': fromAssetId,
        'toAssetId': toAssetId
      };
      var queryParams = {
        'context': opts['context'],
        'calculationTimestamp': opts['calculationTimestamp']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetExchangeRateByAssetsIDsR["default"];
      return this.apiClient.callApi('/market-data/exchange-rates/by-asset-ids/{fromAssetId}/{toAssetId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Exchange Rate By Assets IDs
     * Through this endpoint customers can obtain exchange rates by asset IDs. The process represents the exchange rate value of a single unit of one asset versus another one. Data is provided per unique asset Reference ID.
     * @param {String} fromAssetId Defines the base asset Reference ID to get a rate for.
     * @param {String} toAssetId Defines the relation asset Reference ID in which the base asset rate will be displayed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.calculationTimestamp Defines the time of the market data used to calculate the exchange rate in UNIX Timestamp.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExchangeRateByAssetsIDsR}
     */

  }, {
    key: "getExchangeRateByAssetsIDs",
    value: function getExchangeRateByAssetsIDs(fromAssetId, toAssetId, opts) {
      return this.getExchangeRateByAssetsIDsWithHttpInfo(fromAssetId, toAssetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ExchangeRatesApi;
}();

exports["default"] = ExchangeRatesApi;