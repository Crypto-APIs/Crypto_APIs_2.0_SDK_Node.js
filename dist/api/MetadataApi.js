"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress409Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress409Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _ListSupportedAssets400Response = _interopRequireDefault(require("../model/ListSupportedAssets400Response"));
var _ListSupportedAssets401Response = _interopRequireDefault(require("../model/ListSupportedAssets401Response"));
var _ListSupportedAssets403Response = _interopRequireDefault(require("../model/ListSupportedAssets403Response"));
var _ListSupportedAssetsR = _interopRequireDefault(require("../model/ListSupportedAssetsR"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Metadata service.
* @module api/MetadataApi
* @version 1.13.0
*/
var MetadataApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MetadataApi. 
  * @alias module:api/MetadataApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MetadataApi(apiClient) {
    _classCallCheck(this, MetadataApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * List Supported Assets
   * This endpoint will return a list of supported assets. The asset could be a cryptocurrency or FIAT assets that we support. Each asset has a unique identifier - `assetId` and a unique symbol in the form of a string, e.g. \"BTC\".
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/String} opts.assetType Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
   * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedAssetsR} and HTTP response
   */
  _createClass(MetadataApi, [{
    key: "listSupportedAssetsWithHttpInfo",
    value: function listSupportedAssetsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'context': opts['context'],
        'assetType': opts['assetType'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListSupportedAssetsR["default"];
      return this.apiClient.callApi('/market-data/assets/supported', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Supported Assets
     * This endpoint will return a list of supported assets. The asset could be a cryptocurrency or FIAT assets that we support. Each asset has a unique identifier - `assetId` and a unique symbol in the form of a string, e.g. \"BTC\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.assetType Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedAssetsR}
     */
  }, {
    key: "listSupportedAssets",
    value: function listSupportedAssets(opts) {
      return this.listSupportedAssetsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return MetadataApi;
}();
exports["default"] = MetadataApi;