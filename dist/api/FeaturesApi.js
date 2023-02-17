"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BroadcastLocallySignedTransaction400Response = _interopRequireDefault(require("../model/BroadcastLocallySignedTransaction400Response"));
var _BroadcastLocallySignedTransaction401Response = _interopRequireDefault(require("../model/BroadcastLocallySignedTransaction401Response"));
var _BroadcastLocallySignedTransaction403Response = _interopRequireDefault(require("../model/BroadcastLocallySignedTransaction403Response"));
var _BroadcastLocallySignedTransaction409Response = _interopRequireDefault(require("../model/BroadcastLocallySignedTransaction409Response"));
var _BroadcastLocallySignedTransactionR = _interopRequireDefault(require("../model/BroadcastLocallySignedTransactionR"));
var _BroadcastLocallySignedTransactionRB = _interopRequireDefault(require("../model/BroadcastLocallySignedTransactionRB"));
var _ConvertBitcoinCashAddress400Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress400Response"));
var _ConvertBitcoinCashAddress401Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress401Response"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress403Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress403Response"));
var _ConvertBitcoinCashAddress409Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress409Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _ConvertBitcoinCashAddressR = _interopRequireDefault(require("../model/ConvertBitcoinCashAddressR"));
var _ConvertBitcoinCashAddressRB = _interopRequireDefault(require("../model/ConvertBitcoinCashAddressRB"));
var _DecodeRawTransactionHex400Response = _interopRequireDefault(require("../model/DecodeRawTransactionHex400Response"));
var _DecodeRawTransactionHex401Response = _interopRequireDefault(require("../model/DecodeRawTransactionHex401Response"));
var _DecodeRawTransactionHex403Response = _interopRequireDefault(require("../model/DecodeRawTransactionHex403Response"));
var _DecodeRawTransactionHexR = _interopRequireDefault(require("../model/DecodeRawTransactionHexR"));
var _DecodeRawTransactionHexRB = _interopRequireDefault(require("../model/DecodeRawTransactionHexRB"));
var _DecodeXAddress400Response = _interopRequireDefault(require("../model/DecodeXAddress400Response"));
var _DecodeXAddress401Response = _interopRequireDefault(require("../model/DecodeXAddress401Response"));
var _DecodeXAddress403Response = _interopRequireDefault(require("../model/DecodeXAddress403Response"));
var _DecodeXAddressR = _interopRequireDefault(require("../model/DecodeXAddressR"));
var _DeriveHDWalletXPubYPubZPubChangeOrReceivingAddresses400Response = _interopRequireDefault(require("../model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddresses400Response"));
var _DeriveHDWalletXPubYPubZPubChangeOrReceivingAddresses401Response = _interopRequireDefault(require("../model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddresses401Response"));
var _DeriveHDWalletXPubYPubZPubChangeOrReceivingAddresses403Response = _interopRequireDefault(require("../model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddresses403Response"));
var _DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR = _interopRequireDefault(require("../model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR"));
var _EncodeXAddress400Response = _interopRequireDefault(require("../model/EncodeXAddress400Response"));
var _EncodeXAddress401Response = _interopRequireDefault(require("../model/EncodeXAddress401Response"));
var _EncodeXAddress403Response = _interopRequireDefault(require("../model/EncodeXAddress403Response"));
var _EncodeXAddressR = _interopRequireDefault(require("../model/EncodeXAddressR"));
var _EstimateGasLimit400Response = _interopRequireDefault(require("../model/EstimateGasLimit400Response"));
var _EstimateGasLimit401Response = _interopRequireDefault(require("../model/EstimateGasLimit401Response"));
var _EstimateGasLimit403Response = _interopRequireDefault(require("../model/EstimateGasLimit403Response"));
var _EstimateGasLimitR = _interopRequireDefault(require("../model/EstimateGasLimitR"));
var _EstimateGasLimitRB = _interopRequireDefault(require("../model/EstimateGasLimitRB"));
var _EstimateTokenGasLimit400Response = _interopRequireDefault(require("../model/EstimateTokenGasLimit400Response"));
var _EstimateTokenGasLimit401Response = _interopRequireDefault(require("../model/EstimateTokenGasLimit401Response"));
var _EstimateTokenGasLimit403Response = _interopRequireDefault(require("../model/EstimateTokenGasLimit403Response"));
var _EstimateTokenGasLimitR = _interopRequireDefault(require("../model/EstimateTokenGasLimitR"));
var _EstimateTokenGasLimitRB = _interopRequireDefault(require("../model/EstimateTokenGasLimitRB"));
var _GetEIP1559FeeRecommendations400Response = _interopRequireDefault(require("../model/GetEIP1559FeeRecommendations400Response"));
var _GetEIP1559FeeRecommendations401Response = _interopRequireDefault(require("../model/GetEIP1559FeeRecommendations401Response"));
var _GetEIP1559FeeRecommendations403Response = _interopRequireDefault(require("../model/GetEIP1559FeeRecommendations403Response"));
var _GetEIP1559FeeRecommendationsR = _interopRequireDefault(require("../model/GetEIP1559FeeRecommendationsR"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _PrepareAFungibleTokenTransferFromAddress400Response = _interopRequireDefault(require("../model/PrepareAFungibleTokenTransferFromAddress400Response"));
var _PrepareAFungibleTokenTransferFromAddress401Response = _interopRequireDefault(require("../model/PrepareAFungibleTokenTransferFromAddress401Response"));
var _PrepareAFungibleTokenTransferFromAddress403Response = _interopRequireDefault(require("../model/PrepareAFungibleTokenTransferFromAddress403Response"));
var _PrepareAFungibleTokenTransferFromAddressR = _interopRequireDefault(require("../model/PrepareAFungibleTokenTransferFromAddressR"));
var _PrepareAFungibleTokenTransferFromAddressRB = _interopRequireDefault(require("../model/PrepareAFungibleTokenTransferFromAddressRB"));
var _PrepareANonFungibleTokenTransferFromAddress400Response = _interopRequireDefault(require("../model/PrepareANonFungibleTokenTransferFromAddress400Response"));
var _PrepareANonFungibleTokenTransferFromAddress401Response = _interopRequireDefault(require("../model/PrepareANonFungibleTokenTransferFromAddress401Response"));
var _PrepareANonFungibleTokenTransferFromAddress403Response = _interopRequireDefault(require("../model/PrepareANonFungibleTokenTransferFromAddress403Response"));
var _PrepareANonFungibleTokenTransferFromAddressR = _interopRequireDefault(require("../model/PrepareANonFungibleTokenTransferFromAddressR"));
var _PrepareANonFungibleTokenTransferFromAddressRB = _interopRequireDefault(require("../model/PrepareANonFungibleTokenTransferFromAddressRB"));
var _PrepareTransactionFromAddress400Response = _interopRequireDefault(require("../model/PrepareTransactionFromAddress400Response"));
var _PrepareTransactionFromAddress401Response = _interopRequireDefault(require("../model/PrepareTransactionFromAddress401Response"));
var _PrepareTransactionFromAddress403Response = _interopRequireDefault(require("../model/PrepareTransactionFromAddress403Response"));
var _PrepareTransactionFromAddressR = _interopRequireDefault(require("../model/PrepareTransactionFromAddressR"));
var _PrepareTransactionFromAddressRB = _interopRequireDefault(require("../model/PrepareTransactionFromAddressRB"));
var _ValidateAddress400Response = _interopRequireDefault(require("../model/ValidateAddress400Response"));
var _ValidateAddress401Response = _interopRequireDefault(require("../model/ValidateAddress401Response"));
var _ValidateAddress403Response = _interopRequireDefault(require("../model/ValidateAddress403Response"));
var _ValidateAddressR = _interopRequireDefault(require("../model/ValidateAddressR"));
var _ValidateAddressRB = _interopRequireDefault(require("../model/ValidateAddressRB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* Features service.
* @module api/FeaturesApi
* @version 1.13.0
*/
var FeaturesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FeaturesApi. 
  * @alias module:api/FeaturesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FeaturesApi(apiClient) {
    _classCallCheck(this, FeaturesApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Broadcast Locally Signed Transaction
   * Through this endpoint customers can broadcast transactions that have been already signed locally. Instead of using a node for broadcasting a signed transaction users can use this endpoint. We then keep the user posted about the status by sending you a callback with a success or failure status.    {warning}This can be prepared and signed **only** locally, not through the API. We can provide support only for the process of broadcasting.{/warning}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/BroadcastLocallySignedTransactionRB} opts.broadcastLocallySignedTransactionRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BroadcastLocallySignedTransactionR} and HTTP response
   */
  _createClass(FeaturesApi, [{
    key: "broadcastLocallySignedTransactionWithHttpInfo",
    value: function broadcastLocallySignedTransactionWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['broadcastLocallySignedTransactionRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling broadcastLocallySignedTransaction");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling broadcastLocallySignedTransaction");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BroadcastLocallySignedTransactionR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/transactions/broadcast', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Broadcast Locally Signed Transaction
     * Through this endpoint customers can broadcast transactions that have been already signed locally. Instead of using a node for broadcasting a signed transaction users can use this endpoint. We then keep the user posted about the status by sending you a callback with a success or failure status.    {warning}This can be prepared and signed **only** locally, not through the API. We can provide support only for the process of broadcasting.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/BroadcastLocallySignedTransactionRB} opts.broadcastLocallySignedTransactionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BroadcastLocallySignedTransactionR}
     */
  }, {
    key: "broadcastLocallySignedTransaction",
    value: function broadcastLocallySignedTransaction(blockchain, network, opts) {
      return this.broadcastLocallySignedTransactionWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Convert Bitcoin Cash Address
     * Through this endpoint customers will be able to convert addresses for the BCH (Bitcoin Cash) protocol from BCH legacy to cash address and vice versa.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ConvertBitcoinCashAddressRB} opts.convertBitcoinCashAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConvertBitcoinCashAddressR} and HTTP response
     */
  }, {
    key: "convertBitcoinCashAddressWithHttpInfo",
    value: function convertBitcoinCashAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['convertBitcoinCashAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling convertBitcoinCashAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling convertBitcoinCashAddress");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ConvertBitcoinCashAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/address/convert', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Convert Bitcoin Cash Address
     * Through this endpoint customers will be able to convert addresses for the BCH (Bitcoin Cash) protocol from BCH legacy to cash address and vice versa.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ConvertBitcoinCashAddressRB} opts.convertBitcoinCashAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConvertBitcoinCashAddressR}
     */
  }, {
    key: "convertBitcoinCashAddress",
    value: function convertBitcoinCashAddress(blockchain, network, opts) {
      return this.convertBitcoinCashAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Decode Raw Transaction Hex
     * Through this endpoint customers can decode a raw transaction hex and see the decoded transactions' details.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/DecodeRawTransactionHexRB} opts.decodeRawTransactionHexRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DecodeRawTransactionHexR} and HTTP response
     */
  }, {
    key: "decodeRawTransactionHexWithHttpInfo",
    value: function decodeRawTransactionHexWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['decodeRawTransactionHexRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling decodeRawTransactionHex");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling decodeRawTransactionHex");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DecodeRawTransactionHexR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/decode-raw-transaction', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Decode Raw Transaction Hex
     * Through this endpoint customers can decode a raw transaction hex and see the decoded transactions' details.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/DecodeRawTransactionHexRB} opts.decodeRawTransactionHexRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DecodeRawTransactionHexR}
     */
  }, {
    key: "decodeRawTransactionHex",
    value: function decodeRawTransactionHex(blockchain, network, opts) {
      return this.decodeRawTransactionHexWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Decode X-Address
     * Through this endpoint, customers can decode an encoded XRP address with tag, by providing the specific x-address. The response includes the decoded classic address and the tag.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} xAddress Represents the encoded classic address with its destination tag.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DecodeXAddressR} and HTTP response
     */
  }, {
    key: "decodeXAddressWithHttpInfo",
    value: function decodeXAddressWithHttpInfo(blockchain, network, xAddress, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling decodeXAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling decodeXAddress");
      }
      // verify the required parameter 'xAddress' is set
      if (xAddress === undefined || xAddress === null) {
        throw new Error("Missing the required parameter 'xAddress' when calling decodeXAddress");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'xAddress': xAddress
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DecodeXAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/decode-x-address/{xAddress}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Decode X-Address
     * Through this endpoint, customers can decode an encoded XRP address with tag, by providing the specific x-address. The response includes the decoded classic address and the tag.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {String} xAddress Represents the encoded classic address with its destination tag.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DecodeXAddressR}
     */
  }, {
    key: "decodeXAddress",
    value: function decodeXAddress(blockchain, network, xAddress, opts) {
      return this.decodeXAddressWithHttpInfo(blockchain, network, xAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Derive HD Wallet (xPub, yPub, zPub) Change Or Receiving Addresses
     * Through this endpoint, customers can derive up to 10 addresses - both change and receive, from a certain HD Wallet (xPub, yPub, zPub), by providing an extended public key. By default the system creates a receiving/deposit address, unless the isChange attribute is set to 'true'. In that case the system derives a 'change' address. The change address can be derived only for UTXO based blockchains, for all the rest, this endpoint always creates a deposit/receiving address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.addressFormat Represents the format of the address.
     * @param {Number} opts.addressesCount Represents the addresses count.
     * @param {Boolean} opts.isChange Defines if the specific address is a change or deposit address. If the value is True - it is a change address, if it is False - it is a Deposit address.
     * @param {Number} opts.startIndex The starting index of the response items, i.e. where the response should start listing the returned items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR} and HTTP response
     */
  }, {
    key: "deriveHDWalletXPubYPubZPubChangeOrReceivingAddressesWithHttpInfo",
    value: function deriveHDWalletXPubYPubZPubChangeOrReceivingAddressesWithHttpInfo(blockchain, extendedPublicKey, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses");
      }
      // verify the required parameter 'extendedPublicKey' is set
      if (extendedPublicKey === undefined || extendedPublicKey === null) {
        throw new Error("Missing the required parameter 'extendedPublicKey' when calling deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses");
      }
      var pathParams = {
        'blockchain': blockchain,
        'extendedPublicKey': extendedPublicKey,
        'network': network
      };
      var queryParams = {
        'context': opts['context'],
        'addressFormat': opts['addressFormat'],
        'addressesCount': opts['addressesCount'],
        'isChange': opts['isChange'],
        'startIndex': opts['startIndex']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/hd/{extendedPublicKey}/addresses/derive-address', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Derive HD Wallet (xPub, yPub, zPub) Change Or Receiving Addresses
     * Through this endpoint, customers can derive up to 10 addresses - both change and receive, from a certain HD Wallet (xPub, yPub, zPub), by providing an extended public key. By default the system creates a receiving/deposit address, unless the isChange attribute is set to 'true'. In that case the system derives a 'change' address. The change address can be derived only for UTXO based blockchains, for all the rest, this endpoint always creates a deposit/receiving address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} extendedPublicKey Defines the account extended publicly known key which is used to derive all child public keys.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/String} opts.addressFormat Represents the format of the address.
     * @param {Number} opts.addressesCount Represents the addresses count.
     * @param {Boolean} opts.isChange Defines if the specific address is a change or deposit address. If the value is True - it is a change address, if it is False - it is a Deposit address.
     * @param {Number} opts.startIndex The starting index of the response items, i.e. where the response should start listing the returned items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesR}
     */
  }, {
    key: "deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses",
    value: function deriveHDWalletXPubYPubZPubChangeOrReceivingAddresses(blockchain, extendedPublicKey, network, opts) {
      return this.deriveHDWalletXPubYPubZPubChangeOrReceivingAddressesWithHttpInfo(blockchain, extendedPublicKey, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Encode X-Address
     * Through this endpoint, customers can encode an encoded XRP address with tag, by providing the specific x-address. The response includes the encoded classic address and the tag.
     * @param {Number} addressTag Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} classicAddress Represents the public address, which is a compressed and shortened form of a public key.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncodeXAddressR} and HTTP response
     */
  }, {
    key: "encodeXAddressWithHttpInfo",
    value: function encodeXAddressWithHttpInfo(addressTag, blockchain, classicAddress, network, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'addressTag' is set
      if (addressTag === undefined || addressTag === null) {
        throw new Error("Missing the required parameter 'addressTag' when calling encodeXAddress");
      }
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling encodeXAddress");
      }
      // verify the required parameter 'classicAddress' is set
      if (classicAddress === undefined || classicAddress === null) {
        throw new Error("Missing the required parameter 'classicAddress' when calling encodeXAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling encodeXAddress");
      }
      var pathParams = {
        'addressTag': addressTag,
        'blockchain': blockchain,
        'classicAddress': classicAddress,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EncodeXAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/encode-x-address/{classicAddress}/{addressTag}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Encode X-Address
     * Through this endpoint, customers can encode an encoded XRP address with tag, by providing the specific x-address. The response includes the encoded classic address and the tag.
     * @param {Number} addressTag Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} classicAddress Represents the public address, which is a compressed and shortened form of a public key.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncodeXAddressR}
     */
  }, {
    key: "encodeXAddress",
    value: function encodeXAddress(addressTag, blockchain, classicAddress, network, opts) {
      return this.encodeXAddressWithHttpInfo(addressTag, blockchain, classicAddress, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Estimate Gas Limit
     * This endpoint helps customer in estimating the gas limit needed for a transaction. It gives information for gas expenses when sending ether to contracts or making a transaction with additional data in it.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/EstimateGasLimitRB} opts.estimateGasLimitRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EstimateGasLimitR} and HTTP response
     */
  }, {
    key: "estimateGasLimitWithHttpInfo",
    value: function estimateGasLimitWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['estimateGasLimitRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling estimateGasLimit");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling estimateGasLimit");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EstimateGasLimitR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/gas-limit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Estimate Gas Limit
     * This endpoint helps customer in estimating the gas limit needed for a transaction. It gives information for gas expenses when sending ether to contracts or making a transaction with additional data in it.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/EstimateGasLimitRB} opts.estimateGasLimitRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EstimateGasLimitR}
     */
  }, {
    key: "estimateGasLimit",
    value: function estimateGasLimit(blockchain, network, opts) {
      return this.estimateGasLimitWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Estimate Token Gas Limit
     * This endpoint helps customer in estimating the Contract Gas Limit needed for a transaction. It gives information for gas expenses for a specific contract when sending ethers or making a transaction with additional data in it.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/EstimateTokenGasLimitRB} opts.estimateTokenGasLimitRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EstimateTokenGasLimitR} and HTTP response
     */
  }, {
    key: "estimateTokenGasLimitWithHttpInfo",
    value: function estimateTokenGasLimitWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['estimateTokenGasLimitRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling estimateTokenGasLimit");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling estimateTokenGasLimit");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EstimateTokenGasLimitR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/gas-limit/contract', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Estimate Token Gas Limit
     * This endpoint helps customer in estimating the Contract Gas Limit needed for a transaction. It gives information for gas expenses for a specific contract when sending ethers or making a transaction with additional data in it.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/EstimateTokenGasLimitRB} opts.estimateTokenGasLimitRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EstimateTokenGasLimitR}
     */
  }, {
    key: "estimateTokenGasLimit",
    value: function estimateTokenGasLimit(blockchain, network, opts) {
      return this.estimateTokenGasLimitWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get EIP 1559 Fee Recommendations
     * Through this endpoint customers can obtain fee recommendations specifically for EIP 1559.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetEIP1559FeeRecommendationsR} and HTTP response
     */
  }, {
    key: "getEIP1559FeeRecommendationsWithHttpInfo",
    value: function getEIP1559FeeRecommendationsWithHttpInfo(network, blockchain, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getEIP1559FeeRecommendations");
      }
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getEIP1559FeeRecommendations");
      }
      var pathParams = {
        'network': network,
        'blockchain': blockchain
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetEIP1559FeeRecommendationsR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/fees/eip1559', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get EIP 1559 Fee Recommendations
     * Through this endpoint customers can obtain fee recommendations specifically for EIP 1559.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetEIP1559FeeRecommendationsR}
     */
  }, {
    key: "getEIP1559FeeRecommendations",
    value: function getEIP1559FeeRecommendations(network, blockchain, opts) {
      return this.getEIP1559FeeRecommendationsWithHttpInfo(network, blockchain, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Prepare A Fungible Token Transfer From Address
     * Using this endpoint customers can prepare a fungible token transfer from an address with private and public keys. The address doesn’t have to belong to a wallet. The response will include the transaction fee in Wei.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"mordor\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRB} opts.prepareAFungibleTokenTransferFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepareAFungibleTokenTransferFromAddressR} and HTTP response
     */
  }, {
    key: "prepareAFungibleTokenTransferFromAddressWithHttpInfo",
    value: function prepareAFungibleTokenTransferFromAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['prepareAFungibleTokenTransferFromAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling prepareAFungibleTokenTransferFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling prepareAFungibleTokenTransferFromAddress");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PrepareAFungibleTokenTransferFromAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/transactions/prepare-token-from-address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Prepare A Fungible Token Transfer From Address
     * Using this endpoint customers can prepare a fungible token transfer from an address with private and public keys. The address doesn’t have to belong to a wallet. The response will include the transaction fee in Wei.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"mordor\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRB} opts.prepareAFungibleTokenTransferFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepareAFungibleTokenTransferFromAddressR}
     */
  }, {
    key: "prepareAFungibleTokenTransferFromAddress",
    value: function prepareAFungibleTokenTransferFromAddress(blockchain, network, opts) {
      return this.prepareAFungibleTokenTransferFromAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Prepare A Non Fungible Token Transfer From Address
     * Using this endpoint customers can prepare a non-fungible token transfer from an address with private and public keys. The address doesn’t have to belong to a wallet. The response will include the transaction fee in Wei.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"mordor\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRB} opts.prepareANonFungibleTokenTransferFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepareANonFungibleTokenTransferFromAddressR} and HTTP response
     */
  }, {
    key: "prepareANonFungibleTokenTransferFromAddressWithHttpInfo",
    value: function prepareANonFungibleTokenTransferFromAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['prepareANonFungibleTokenTransferFromAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling prepareANonFungibleTokenTransferFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling prepareANonFungibleTokenTransferFromAddress");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PrepareANonFungibleTokenTransferFromAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/transactions/prepare-nft-from-address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Prepare A Non Fungible Token Transfer From Address
     * Using this endpoint customers can prepare a non-fungible token transfer from an address with private and public keys. The address doesn’t have to belong to a wallet. The response will include the transaction fee in Wei.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"mordor\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRB} opts.prepareANonFungibleTokenTransferFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepareANonFungibleTokenTransferFromAddressR}
     */
  }, {
    key: "prepareANonFungibleTokenTransferFromAddress",
    value: function prepareANonFungibleTokenTransferFromAddress(blockchain, network, opts) {
      return this.prepareANonFungibleTokenTransferFromAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Prepare Transaction From Address
     * Through this endpoint customers can prepare a transaction from an address with private and public keys. The address doesn’t have to belong to a wallet.  The response will include the transaction fee in Wei.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"goerli\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareTransactionFromAddressRB} opts.prepareTransactionFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PrepareTransactionFromAddressR} and HTTP response
     */
  }, {
    key: "prepareTransactionFromAddressWithHttpInfo",
    value: function prepareTransactionFromAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['prepareTransactionFromAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling prepareTransactionFromAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling prepareTransactionFromAddress");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PrepareTransactionFromAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/transactions/prepare-from-address', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Prepare Transaction From Address
     * Through this endpoint customers can prepare a transaction from an address with private and public keys. The address doesn’t have to belong to a wallet.  The response will include the transaction fee in Wei.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"goerli\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/PrepareTransactionFromAddressRB} opts.prepareTransactionFromAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrepareTransactionFromAddressR}
     */
  }, {
    key: "prepareTransactionFromAddress",
    value: function prepareTransactionFromAddress(blockchain, network, opts) {
      return this.prepareTransactionFromAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Validate Address
     * This endpoint checks user public addresses whether they are valid or not.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ValidateAddressRB} opts.validateAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidateAddressR} and HTTP response
     */
  }, {
    key: "validateAddressWithHttpInfo",
    value: function validateAddressWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['validateAddressRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling validateAddress");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling validateAddress");
      }
      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ValidateAddressR["default"];
      return this.apiClient.callApi('/blockchain-tools/{blockchain}/{network}/addresses/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Validate Address
     * This endpoint checks user public addresses whether they are valid or not.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/ValidateAddressRB} opts.validateAddressRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidateAddressR}
     */
  }, {
    key: "validateAddress",
    value: function validateAddress(blockchain, network, opts) {
      return this.validateAddressWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return FeaturesApi;
}();
exports["default"] = FeaturesApi;