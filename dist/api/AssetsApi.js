"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAssetDetailsByAssetIDR = _interopRequireDefault(require("../model/GetAssetDetailsByAssetIDR"));

var _GetAssetDetailsByAssetSymbolR = _interopRequireDefault(require("../model/GetAssetDetailsByAssetSymbolR"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40089"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40090"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse40091"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40189"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse40190"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse40191"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse40389"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse40390"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse40391"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse500"));

var _ListAssetsDetailsR = _interopRequireDefault(require("../model/ListAssetsDetailsR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Assets service.
* @module api/AssetsApi
* @version 1.4.0
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
    /**
     * List Assets Details
     * This endpoint will return a list of details on assets. These could be cryptocurrencies or FIAT assets that we support. Each asset has a unique identifier - `assetId` and a unique symbol in the form of a string, e.g. \"BTC\".    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.assetType Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param {module:model/String} opts.cryptoType Subtype of the crypto assets. Could be COIN or TOKEN
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @param {Boolean} opts.waasEnabled Show only if WaaS is/not enabled
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetsDetailsR} and HTTP response
     */

  }, {
    key: "listAssetsDetailsWithHttpInfo",
    value: function listAssetsDetailsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'context': opts['context'],
        'assetType': opts['assetType'],
        'cryptoType': opts['cryptoType'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'waasEnabled': opts['waasEnabled']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAssetsDetailsR["default"];
      return this.apiClient.callApi('/market-data/assets/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Assets Details
     * This endpoint will return a list of details on assets. These could be cryptocurrencies or FIAT assets that we support. Each asset has a unique identifier - `assetId` and a unique symbol in the form of a string, e.g. \"BTC\".    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.assetType Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param {module:model/String} opts.cryptoType Subtype of the crypto assets. Could be COIN or TOKEN
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @param {Boolean} opts.waasEnabled Show only if WaaS is/not enabled
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetsDetailsR}
     */

  }, {
    key: "listAssetsDetails",
    value: function listAssetsDetails(opts) {
      return this.listAssetsDetailsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AssetsApi;
}();

exports["default"] = AssetsApi;