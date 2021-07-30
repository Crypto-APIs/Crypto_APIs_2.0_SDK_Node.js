"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FeatureMainnetsNotAllowedForPlan = _interopRequireDefault(require("../model/FeatureMainnetsNotAllowedForPlan"));

var _InsufficientCredits = _interopRequireDefault(require("../model/InsufficientCredits"));

var _InvalidApiKey = _interopRequireDefault(require("../model/InvalidApiKey"));

var _InvalidData = _interopRequireDefault(require("../model/InvalidData"));

var _InvalidPagination = _interopRequireDefault(require("../model/InvalidPagination"));

var _InvalidRequestBodyStructure = _interopRequireDefault(require("../model/InvalidRequestBodyStructure"));

var _ListAssetsDetailsR = _interopRequireDefault(require("../model/ListAssetsDetailsR"));

var _RequestLimitReached = _interopRequireDefault(require("../model/RequestLimitReached"));

var _UnexpectedServerError = _interopRequireDefault(require("../model/UnexpectedServerError"));

var _UnsupportedMediaType = _interopRequireDefault(require("../model/UnsupportedMediaType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Assets service.
* @module api/AssetsApi
* @version 1.2.0
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
   * List Assets Details
   * This endpoint will return details on a requested asset. The asset could be a cryptocurrency or FIAT asset that we support. Each asset has a unique identifier - `assetId` and a unique symbol in the form of a string, e.g. \"BTC\".    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/String} opts.assetType Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param {module:model/String} opts.cryptoType Subtype of the crypto assets. Could be COIN or TOKEN
   * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
   * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
   * @param {Boolean} opts.waasEnabled Show only if WaaS is/not enabled
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetsDetailsR} and HTTP response
   */


  _createClass(AssetsApi, [{
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
     * This endpoint will return details on a requested asset. The asset could be a cryptocurrency or FIAT asset that we support. Each asset has a unique identifier - `assetId` and a unique symbol in the form of a string, e.g. \"BTC\".    The details returned could include information on the latest rate and rate fluctuation of different periods of time - 24 hours, a week, one hour, the encoding of the logo, and more.
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