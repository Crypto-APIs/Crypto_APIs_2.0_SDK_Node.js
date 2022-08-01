"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAddressDetails402Response = _interopRequireDefault(require("../model/GetAddressDetails402Response"));

var _GetAddressDetails409Response = _interopRequireDefault(require("../model/GetAddressDetails409Response"));

var _GetAddressDetails415Response = _interopRequireDefault(require("../model/GetAddressDetails415Response"));

var _GetAddressDetails422Response = _interopRequireDefault(require("../model/GetAddressDetails422Response"));

var _GetAddressDetails429Response = _interopRequireDefault(require("../model/GetAddressDetails429Response"));

var _GetAddressDetails500Response = _interopRequireDefault(require("../model/GetAddressDetails500Response"));

var _GetAssetDetailsByAssetID400Response = _interopRequireDefault(require("../model/GetAssetDetailsByAssetID400Response"));

var _GetAssetDetailsByAssetID401Response = _interopRequireDefault(require("../model/GetAssetDetailsByAssetID401Response"));

var _GetAssetDetailsByAssetID403Response = _interopRequireDefault(require("../model/GetAssetDetailsByAssetID403Response"));

var _GetAssetDetailsByAssetIDR = _interopRequireDefault(require("../model/GetAssetDetailsByAssetIDR"));

var _GetAssetDetailsByAssetSymbol400Response = _interopRequireDefault(require("../model/GetAssetDetailsByAssetSymbol400Response"));

var _GetAssetDetailsByAssetSymbol401Response = _interopRequireDefault(require("../model/GetAssetDetailsByAssetSymbol401Response"));

var _GetAssetDetailsByAssetSymbol403Response = _interopRequireDefault(require("../model/GetAssetDetailsByAssetSymbol403Response"));

var _GetAssetDetailsByAssetSymbolR = _interopRequireDefault(require("../model/GetAssetDetailsByAssetSymbolR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Assets service.
* @module api/AssetsApi
* @version 1.7.2
*/
var AssetsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AssetsApi. 
  * @alias module:api/AssetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AssetsApi(apiClient) {
    _classCallCheck(this, AssetsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Asset Details By Asset ID
   * Through this endpoint users can obtain information on assets by `assetId`.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
   * @param {String} assetId Defines the unique ID of the specific asset.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAssetDetailsByAssetIDR} and HTTP response
   */


  _createClass(AssetsApi, [{
    key: "getAssetDetailsByAssetIDWithHttpInfo",
    value: function getAssetDetailsByAssetIDWithHttpInfo(assetId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'assetId' is set

      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetDetailsByAssetID");
      }

      var pathParams = {
        'assetId': assetId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetAssetDetailsByAssetIDR["default"];
      return this.apiClient.callApi('/market-data/assets/assetId/{assetId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Asset Details By Asset ID
     * Through this endpoint users can obtain information on assets by `assetId`.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetId Defines the unique ID of the specific asset.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAssetDetailsByAssetIDR}
     */

  }, {
    key: "getAssetDetailsByAssetID",
    value: function getAssetDetailsByAssetID(assetId, opts) {
      return this.getAssetDetailsByAssetIDWithHttpInfo(assetId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Asset Details By Asset Symbol
     * Through this endpoint users can obtain information on assets by asset symbol.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetSymbol Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAssetDetailsByAssetSymbolR} and HTTP response
     */

  }, {
    key: "getAssetDetailsByAssetSymbolWithHttpInfo",
    value: function getAssetDetailsByAssetSymbolWithHttpInfo(assetSymbol, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'assetSymbol' is set

      if (assetSymbol === undefined || assetSymbol === null) {
        throw new Error("Missing the required parameter 'assetSymbol' when calling getAssetDetailsByAssetSymbol");
      }

      var pathParams = {
        'assetSymbol': assetSymbol
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetAssetDetailsByAssetSymbolR["default"];
      return this.apiClient.callApi('/market-data/assets/{assetSymbol}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Asset Details By Asset Symbol
     * Through this endpoint users can obtain information on assets by asset symbol.    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {String} assetSymbol Specifies the asset's unique symbol in the Crypto APIs listings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAssetDetailsByAssetSymbolR}
     */

  }, {
    key: "getAssetDetailsByAssetSymbol",
    value: function getAssetDetailsByAssetSymbol(assetSymbol, opts) {
      return this.getAssetDetailsByAssetSymbolWithHttpInfo(assetSymbol, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AssetsApi;
}();

exports["default"] = AssetsApi;