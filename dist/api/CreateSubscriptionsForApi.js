"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _BlockHeightReached400Response = _interopRequireDefault(require("../model/BlockHeightReached400Response"));
var _BlockHeightReached401Response = _interopRequireDefault(require("../model/BlockHeightReached401Response"));
var _BlockHeightReached403Response = _interopRequireDefault(require("../model/BlockHeightReached403Response"));
var _BlockHeightReached409Response = _interopRequireDefault(require("../model/BlockHeightReached409Response"));
var _BlockHeightReachedR = _interopRequireDefault(require("../model/BlockHeightReachedR"));
var _BlockHeightReachedRB = _interopRequireDefault(require("../model/BlockHeightReachedRB"));
var _ConvertBitcoinCashAddress402Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress402Response"));
var _ConvertBitcoinCashAddress415Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress415Response"));
var _ConvertBitcoinCashAddress422Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress422Response"));
var _ConvertBitcoinCashAddress429Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress429Response"));
var _ConvertBitcoinCashAddress500Response = _interopRequireDefault(require("../model/ConvertBitcoinCashAddress500Response"));
var _GetXRPRippleTransactionDetailsByTransactionID404Response = _interopRequireDefault(require("../model/GetXRPRippleTransactionDetailsByTransactionID404Response"));
var _MinedTransaction400Response = _interopRequireDefault(require("../model/MinedTransaction400Response"));
var _MinedTransaction401Response = _interopRequireDefault(require("../model/MinedTransaction401Response"));
var _MinedTransaction403Response = _interopRequireDefault(require("../model/MinedTransaction403Response"));
var _MinedTransaction409Response = _interopRequireDefault(require("../model/MinedTransaction409Response"));
var _MinedTransactionR = _interopRequireDefault(require("../model/MinedTransactionR"));
var _MinedTransactionRB = _interopRequireDefault(require("../model/MinedTransactionRB"));
var _NewBlock400Response = _interopRequireDefault(require("../model/NewBlock400Response"));
var _NewBlock401Response = _interopRequireDefault(require("../model/NewBlock401Response"));
var _NewBlock403Response = _interopRequireDefault(require("../model/NewBlock403Response"));
var _NewBlock409Response = _interopRequireDefault(require("../model/NewBlock409Response"));
var _NewBlockR = _interopRequireDefault(require("../model/NewBlockR"));
var _NewBlockRB = _interopRequireDefault(require("../model/NewBlockRB"));
var _NewConfirmedCoinsTransactions400Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactions400Response"));
var _NewConfirmedCoinsTransactions401Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactions401Response"));
var _NewConfirmedCoinsTransactions403Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactions403Response"));
var _NewConfirmedCoinsTransactions409Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactions409Response"));
var _NewConfirmedCoinsTransactionsAndEachConfirmation400Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmation400Response"));
var _NewConfirmedCoinsTransactionsAndEachConfirmation401Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmation401Response"));
var _NewConfirmedCoinsTransactionsAndEachConfirmation403Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmation403Response"));
var _NewConfirmedCoinsTransactionsAndEachConfirmation409Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmation409Response"));
var _NewConfirmedCoinsTransactionsAndEachConfirmationR = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmationR"));
var _NewConfirmedCoinsTransactionsAndEachConfirmationRB = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmationRB"));
var _NewConfirmedCoinsTransactionsForSpecificAmount400Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsForSpecificAmount400Response"));
var _NewConfirmedCoinsTransactionsForSpecificAmount401Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsForSpecificAmount401Response"));
var _NewConfirmedCoinsTransactionsForSpecificAmount403Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsForSpecificAmount403Response"));
var _NewConfirmedCoinsTransactionsForSpecificAmount409Response = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsForSpecificAmount409Response"));
var _NewConfirmedCoinsTransactionsForSpecificAmountR = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsForSpecificAmountR"));
var _NewConfirmedCoinsTransactionsForSpecificAmountRB = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsForSpecificAmountRB"));
var _NewConfirmedCoinsTransactionsR = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsR"));
var _NewConfirmedCoinsTransactionsRB = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsRB"));
var _NewConfirmedInternalTransactions400Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactions400Response"));
var _NewConfirmedInternalTransactions401Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactions401Response"));
var _NewConfirmedInternalTransactions403Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactions403Response"));
var _NewConfirmedInternalTransactions409Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactions409Response"));
var _NewConfirmedInternalTransactionsAndEachConfirmation400Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmation400Response"));
var _NewConfirmedInternalTransactionsAndEachConfirmation401Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmation401Response"));
var _NewConfirmedInternalTransactionsAndEachConfirmation403Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmation403Response"));
var _NewConfirmedInternalTransactionsAndEachConfirmation409Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmation409Response"));
var _NewConfirmedInternalTransactionsAndEachConfirmationR = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmationR"));
var _NewConfirmedInternalTransactionsAndEachConfirmationRB = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmationRB"));
var _NewConfirmedInternalTransactionsForSpecificAmount400Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsForSpecificAmount400Response"));
var _NewConfirmedInternalTransactionsForSpecificAmount401Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsForSpecificAmount401Response"));
var _NewConfirmedInternalTransactionsForSpecificAmount403Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsForSpecificAmount403Response"));
var _NewConfirmedInternalTransactionsForSpecificAmount409Response = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsForSpecificAmount409Response"));
var _NewConfirmedInternalTransactionsForSpecificAmountR = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsForSpecificAmountR"));
var _NewConfirmedInternalTransactionsForSpecificAmountRB = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsForSpecificAmountRB"));
var _NewConfirmedInternalTransactionsR = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsR"));
var _NewConfirmedInternalTransactionsRB = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsRB"));
var _NewConfirmedTokenTransactionsForSpecificAmount400Response = _interopRequireDefault(require("../model/NewConfirmedTokenTransactionsForSpecificAmount400Response"));
var _NewConfirmedTokenTransactionsForSpecificAmount401Response = _interopRequireDefault(require("../model/NewConfirmedTokenTransactionsForSpecificAmount401Response"));
var _NewConfirmedTokenTransactionsForSpecificAmount403Response = _interopRequireDefault(require("../model/NewConfirmedTokenTransactionsForSpecificAmount403Response"));
var _NewConfirmedTokenTransactionsForSpecificAmount409Response = _interopRequireDefault(require("../model/NewConfirmedTokenTransactionsForSpecificAmount409Response"));
var _NewConfirmedTokenTransactionsForSpecificAmountR = _interopRequireDefault(require("../model/NewConfirmedTokenTransactionsForSpecificAmountR"));
var _NewConfirmedTokenTransactionsForSpecificAmountRB = _interopRequireDefault(require("../model/NewConfirmedTokenTransactionsForSpecificAmountRB"));
var _NewConfirmedTokensTransactions400Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactions400Response"));
var _NewConfirmedTokensTransactions401Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactions401Response"));
var _NewConfirmedTokensTransactions403Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactions403Response"));
var _NewConfirmedTokensTransactions409Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactions409Response"));
var _NewConfirmedTokensTransactionsAndEachConfirmation400Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmation400Response"));
var _NewConfirmedTokensTransactionsAndEachConfirmation401Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmation401Response"));
var _NewConfirmedTokensTransactionsAndEachConfirmation403Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmation403Response"));
var _NewConfirmedTokensTransactionsAndEachConfirmation409Response = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmation409Response"));
var _NewConfirmedTokensTransactionsAndEachConfirmationR = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmationR"));
var _NewConfirmedTokensTransactionsAndEachConfirmationRB = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmationRB"));
var _NewConfirmedTokensTransactionsR = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsR"));
var _NewConfirmedTokensTransactionsRB = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsRB"));
var _NewRevertedBlock400Response = _interopRequireDefault(require("../model/NewRevertedBlock400Response"));
var _NewRevertedBlock401Response = _interopRequireDefault(require("../model/NewRevertedBlock401Response"));
var _NewRevertedBlock403Response = _interopRequireDefault(require("../model/NewRevertedBlock403Response"));
var _NewRevertedBlock409Response = _interopRequireDefault(require("../model/NewRevertedBlock409Response"));
var _NewRevertedBlockR = _interopRequireDefault(require("../model/NewRevertedBlockR"));
var _NewRevertedBlockRB = _interopRequireDefault(require("../model/NewRevertedBlockRB"));
var _NewUnconfirmedCoinsTransactions400Response = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactions400Response"));
var _NewUnconfirmedCoinsTransactions401Response = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactions401Response"));
var _NewUnconfirmedCoinsTransactions403Response = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactions403Response"));
var _NewUnconfirmedCoinsTransactions409Response = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactions409Response"));
var _NewUnconfirmedCoinsTransactionsR = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactionsR"));
var _NewUnconfirmedCoinsTransactionsRB = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactionsRB"));
var _NewUnconfirmedTokensTransactions400Response = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactions400Response"));
var _NewUnconfirmedTokensTransactions401Response = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactions401Response"));
var _NewUnconfirmedTokensTransactions403Response = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactions403Response"));
var _NewUnconfirmedTokensTransactions409Response = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactions409Response"));
var _NewUnconfirmedTokensTransactionsR = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactionsR"));
var _NewUnconfirmedTokensTransactionsRB = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactionsRB"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* CreateSubscriptionsFor service.
* @module api/CreateSubscriptionsForApi
* @version 1.13.0
*/
var CreateSubscriptionsForApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CreateSubscriptionsForApi. 
  * @alias module:api/CreateSubscriptionsForApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CreateSubscriptionsForApi(apiClient) {
    _classCallCheck(this, CreateSubscriptionsForApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Block Height Reached
   * Through this endpoint customers can create callback subscriptions for a specific block height that hasn't been reached yet. In this case the event is when the specified block height in the request body is reached in a said blockchain. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/BlockHeightReachedRB} opts.blockHeightReachedRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockHeightReachedR} and HTTP response
   */
  _createClass(CreateSubscriptionsForApi, [{
    key: "blockHeightReachedWithHttpInfo",
    value: function blockHeightReachedWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['blockHeightReachedRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling blockHeightReached");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling blockHeightReached");
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
      var returnType = _BlockHeightReachedR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/block-height-reached', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Block Height Reached
     * Through this endpoint customers can create callback subscriptions for a specific block height that hasn't been reached yet. In this case the event is when the specified block height in the request body is reached in a said blockchain. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/BlockHeightReachedRB} opts.blockHeightReachedRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockHeightReachedR}
     */
  }, {
    key: "blockHeightReached",
    value: function blockHeightReached(blockchain, network, opts) {
      return this.blockHeightReachedWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Mined transaction
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when a specific transaction is mined. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified `transactionId`.    A transaction is mined when it is included in a new block in the blockchain.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/MinedTransactionRB} opts.minedTransactionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MinedTransactionR} and HTTP response
     */
  }, {
    key: "minedTransactionWithHttpInfo",
    value: function minedTransactionWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['minedTransactionRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling minedTransaction");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling minedTransaction");
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
      var returnType = _MinedTransactionR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/transaction-mined', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Mined transaction
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when a specific transaction is mined. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified `transactionId`.    A transaction is mined when it is included in a new block in the blockchain.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/MinedTransactionRB} opts.minedTransactionRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MinedTransactionR}
     */
  }, {
    key: "minedTransaction",
    value: function minedTransaction(blockchain, network, opts) {
      return this.minedTransactionWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New Block
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when a new block is mined in the specific blockchain. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.    A new block is mined when it is added to the chain once a consensus is reached by the majority of the miners, which is when the block gets validated and added to the blockchain.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewBlockRB} opts.newBlockRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewBlockR} and HTTP response
     */
  }, {
    key: "newBlockWithHttpInfo",
    value: function newBlockWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newBlockRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newBlock");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newBlock");
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
      var returnType = _NewBlockR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/block-mined', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New Block
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when a new block is mined in the specific blockchain. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.    A new block is mined when it is added to the chain once a consensus is reached by the majority of the miners, which is when the block gets validated and added to the blockchain.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewBlockRB} opts.newBlockRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewBlockR}
     */
  }, {
    key: "newBlock",
    value: function newBlock(blockchain, network, opts) {
      return this.newBlockWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New confirmed coins transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for coins from/to the customer's address. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block.    {note}For UTXO-based protocols like Bitcoin a transaction could have multiple inputs and outputs which means the address could in as both sender and recipient. [Here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-data-returned-for-utxo-based-transactions) is how we inform you on that.{/note}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedCoinsTransactionsRB} opts.newConfirmedCoinsTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedCoinsTransactionsR} and HTTP response
     */
  }, {
    key: "newConfirmedCoinsTransactionsWithHttpInfo",
    value: function newConfirmedCoinsTransactionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedCoinsTransactionsRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedCoinsTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedCoinsTransactions");
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
      var returnType = _NewConfirmedCoinsTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-coins-transactions-confirmed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New confirmed coins transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for coins from/to the customer's address. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block.    {note}For UTXO-based protocols like Bitcoin a transaction could have multiple inputs and outputs which means the address could in as both sender and recipient. [Here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-data-returned-for-utxo-based-transactions) is how we inform you on that.{/note}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedCoinsTransactionsRB} opts.newConfirmedCoinsTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedCoinsTransactionsR}
     */
  }, {
    key: "newConfirmedCoinsTransactions",
    value: function newConfirmedCoinsTransactions(blockchain, network, opts) {
      return this.newConfirmedCoinsTransactionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New confirmed coins transactions and each confirmation
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for coins from/to the customer's address with also a response at each confirmation the transaction has received until the specified confirmations limit is reached. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to **coins transactions only, not tokens**.    {note}For UTXO-based protocols like Bitcoin a transaction could have multiple inputs and outputs which means the address could in as both sender and recipient. [Here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-data-returned-for-utxo-based-transactions) is how we inform you on that.{/note}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRB} opts.newConfirmedCoinsTransactionsAndEachConfirmationRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedCoinsTransactionsAndEachConfirmationR} and HTTP response
     */
  }, {
    key: "newConfirmedCoinsTransactionsAndEachConfirmationWithHttpInfo",
    value: function newConfirmedCoinsTransactionsAndEachConfirmationWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedCoinsTransactionsAndEachConfirmationRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedCoinsTransactionsAndEachConfirmation");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedCoinsTransactionsAndEachConfirmation");
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
      var returnType = _NewConfirmedCoinsTransactionsAndEachConfirmationR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-coins-transactions-confirmed-each-confirmation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New confirmed coins transactions and each confirmation
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for coins from/to the customer's address with also a response at each confirmation the transaction has received until the specified confirmations limit is reached. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to **coins transactions only, not tokens**.    {note}For UTXO-based protocols like Bitcoin a transaction could have multiple inputs and outputs which means the address could in as both sender and recipient. [Here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-data-returned-for-utxo-based-transactions) is how we inform you on that.{/note}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedCoinsTransactionsAndEachConfirmationRB} opts.newConfirmedCoinsTransactionsAndEachConfirmationRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedCoinsTransactionsAndEachConfirmationR}
     */
  }, {
    key: "newConfirmedCoinsTransactionsAndEachConfirmation",
    value: function newConfirmedCoinsTransactionsAndEachConfirmation(blockchain, network, opts) {
      return this.newConfirmedCoinsTransactionsAndEachConfirmationWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New Confirmed Coins Transactions For Specific Amount
     * Through this endpoint customers can create callback subscriptions for a specific event and \"amountHigherThan\" value. In this case the event is when there are new incoming or outgoing confirmed coins transactions for the specified blockchain and the amount is equal or higher than the value specified.  By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs  filtered for the specified amount. The information is returned per specified address.    Being confirmed means that the transactions are verified by miners and added to the next block.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRB} opts.newConfirmedCoinsTransactionsForSpecificAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedCoinsTransactionsForSpecificAmountR} and HTTP response
     */
  }, {
    key: "newConfirmedCoinsTransactionsForSpecificAmountWithHttpInfo",
    value: function newConfirmedCoinsTransactionsForSpecificAmountWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedCoinsTransactionsForSpecificAmountRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedCoinsTransactionsForSpecificAmount");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedCoinsTransactionsForSpecificAmount");
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
      var returnType = _NewConfirmedCoinsTransactionsForSpecificAmountR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/coins-transactions-for-specific-amount', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New Confirmed Coins Transactions For Specific Amount
     * Through this endpoint customers can create callback subscriptions for a specific event and \"amountHigherThan\" value. In this case the event is when there are new incoming or outgoing confirmed coins transactions for the specified blockchain and the amount is equal or higher than the value specified.  By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs  filtered for the specified amount. The information is returned per specified address.    Being confirmed means that the transactions are verified by miners and added to the next block.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedCoinsTransactionsForSpecificAmountRB} opts.newConfirmedCoinsTransactionsForSpecificAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedCoinsTransactionsForSpecificAmountR}
     */
  }, {
    key: "newConfirmedCoinsTransactionsForSpecificAmount",
    value: function newConfirmedCoinsTransactionsForSpecificAmount(blockchain, network, opts) {
      return this.newConfirmedCoinsTransactionsForSpecificAmountWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New confirmed internal transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new confirmed internal transactions. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs.    Being confirmed means that the transactions are verified by miners and added to the next block.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedInternalTransactionsRB} opts.newConfirmedInternalTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedInternalTransactionsR} and HTTP response
     */
  }, {
    key: "newConfirmedInternalTransactionsWithHttpInfo",
    value: function newConfirmedInternalTransactionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedInternalTransactionsRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedInternalTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedInternalTransactions");
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
      var returnType = _NewConfirmedInternalTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-internal-transactions-confirmed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New confirmed internal transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new confirmed internal transactions. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs.    Being confirmed means that the transactions are verified by miners and added to the next block.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedInternalTransactionsRB} opts.newConfirmedInternalTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedInternalTransactionsR}
     */
  }, {
    key: "newConfirmedInternalTransactions",
    value: function newConfirmedInternalTransactions(blockchain, network, opts) {
      return this.newConfirmedInternalTransactionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New confirmed internal transactions and each confirmation
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new confirmed internal transactions. Includes also a response at each confirmation the transaction receives until the specified confirmations limit is reached. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs.     Being confirmed means that the transactions are verified by miners and added to the next block.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedInternalTransactionsAndEachConfirmationRB} opts.newConfirmedInternalTransactionsAndEachConfirmationRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedInternalTransactionsAndEachConfirmationR} and HTTP response
     */
  }, {
    key: "newConfirmedInternalTransactionsAndEachConfirmationWithHttpInfo",
    value: function newConfirmedInternalTransactionsAndEachConfirmationWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedInternalTransactionsAndEachConfirmationRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedInternalTransactionsAndEachConfirmation");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedInternalTransactionsAndEachConfirmation");
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
      var returnType = _NewConfirmedInternalTransactionsAndEachConfirmationR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-internal-transactions-confirmed-each-confirmation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New confirmed internal transactions and each confirmation
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new confirmed internal transactions. Includes also a response at each confirmation the transaction receives until the specified confirmations limit is reached. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs.     Being confirmed means that the transactions are verified by miners and added to the next block.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedInternalTransactionsAndEachConfirmationRB} opts.newConfirmedInternalTransactionsAndEachConfirmationRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedInternalTransactionsAndEachConfirmationR}
     */
  }, {
    key: "newConfirmedInternalTransactionsAndEachConfirmation",
    value: function newConfirmedInternalTransactionsAndEachConfirmation(blockchain, network, opts) {
      return this.newConfirmedInternalTransactionsAndEachConfirmationWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New Confirmed Internal Transactions For Specific Amount
     * Through this endpoint customers can create callback subscriptions for a specific event and \"amountHigherThan\" value. In this case the event is when there are new confirmed internal transactions and the amount is equal or higher than a value, specified by the customer. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs, filtered for the specified amount.  Being confirmed means that the transactions are verified by miners and added to the next block
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountRB} opts.newConfirmedInternalTransactionsForSpecificAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedInternalTransactionsForSpecificAmountR} and HTTP response
     */
  }, {
    key: "newConfirmedInternalTransactionsForSpecificAmountWithHttpInfo",
    value: function newConfirmedInternalTransactionsForSpecificAmountWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedInternalTransactionsForSpecificAmountRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedInternalTransactionsForSpecificAmount");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedInternalTransactionsForSpecificAmount");
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
      var returnType = _NewConfirmedInternalTransactionsForSpecificAmountR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/internal-transactions-for-specific-amount', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New Confirmed Internal Transactions For Specific Amount
     * Through this endpoint customers can create callback subscriptions for a specific event and \"amountHigherThan\" value. In this case the event is when there are new confirmed internal transactions and the amount is equal or higher than a value, specified by the customer. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs, filtered for the specified amount.  Being confirmed means that the transactions are verified by miners and added to the next block
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedInternalTransactionsForSpecificAmountRB} opts.newConfirmedInternalTransactionsForSpecificAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedInternalTransactionsForSpecificAmountR}
     */
  }, {
    key: "newConfirmedInternalTransactionsForSpecificAmount",
    value: function newConfirmedInternalTransactionsForSpecificAmount(blockchain, network, opts) {
      return this.newConfirmedInternalTransactionsForSpecificAmountWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New Confirmed Token Transactions For Specific Amount
     * Through this endpoint customers can create callback subscriptions for a specific event and \"amountHigherThan\" value. In this case the event is when there are new incoming or outgoing confirmed token transactions for the specified blockchain and the amount is equal or higher than the value specified. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs, filtered for the specified amount.  Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to tokens transactions only, not coins.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedTokenTransactionsForSpecificAmountRB} opts.newConfirmedTokenTransactionsForSpecificAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedTokenTransactionsForSpecificAmountR} and HTTP response
     */
  }, {
    key: "newConfirmedTokenTransactionsForSpecificAmountWithHttpInfo",
    value: function newConfirmedTokenTransactionsForSpecificAmountWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedTokenTransactionsForSpecificAmountRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedTokenTransactionsForSpecificAmount");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedTokenTransactionsForSpecificAmount");
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
      var returnType = _NewConfirmedTokenTransactionsForSpecificAmountR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/tokens-transfers-for-specific-amount', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New Confirmed Token Transactions For Specific Amount
     * Through this endpoint customers can create callback subscriptions for a specific event and \"amountHigherThan\" value. In this case the event is when there are new incoming or outgoing confirmed token transactions for the specified blockchain and the amount is equal or higher than the value specified. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs, filtered for the specified amount.  Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to tokens transactions only, not coins.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedTokenTransactionsForSpecificAmountRB} opts.newConfirmedTokenTransactionsForSpecificAmountRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedTokenTransactionsForSpecificAmountR}
     */
  }, {
    key: "newConfirmedTokenTransactionsForSpecificAmount",
    value: function newConfirmedTokenTransactionsForSpecificAmount(blockchain, network, opts) {
      return this.newConfirmedTokenTransactionsForSpecificAmountWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New confirmed tokens transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for tokens from/to the customer's address. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to **tokens transactions only, not coins**.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedTokensTransactionsRB} opts.newConfirmedTokensTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedTokensTransactionsR} and HTTP response
     */
  }, {
    key: "newConfirmedTokensTransactionsWithHttpInfo",
    value: function newConfirmedTokensTransactionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedTokensTransactionsRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedTokensTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedTokensTransactions");
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
      var returnType = _NewConfirmedTokensTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-tokens-transactions-confirmed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New confirmed tokens transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for tokens from/to the customer's address. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to **tokens transactions only, not coins**.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedTokensTransactionsRB} opts.newConfirmedTokensTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedTokensTransactionsR}
     */
  }, {
    key: "newConfirmedTokensTransactions",
    value: function newConfirmedTokensTransactions(blockchain, network, opts) {
      return this.newConfirmedTokensTransactionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New confirmed tokens transactions and each confirmation
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for tokens from/to the customer's address with also a response at each confirmation the transaction has received until the specified confirmations limit is reached. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to **tokens transactions only, not coins**.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRB} opts.newConfirmedTokensTransactionsAndEachConfirmationRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewConfirmedTokensTransactionsAndEachConfirmationR} and HTTP response
     */
  }, {
    key: "newConfirmedTokensTransactionsAndEachConfirmationWithHttpInfo",
    value: function newConfirmedTokensTransactionsAndEachConfirmationWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newConfirmedTokensTransactionsAndEachConfirmationRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedTokensTransactionsAndEachConfirmation");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newConfirmedTokensTransactionsAndEachConfirmation");
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
      var returnType = _NewConfirmedTokensTransactionsAndEachConfirmationR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-tokens-transactions-confirmed-each-confirmation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New confirmed tokens transactions and each confirmation
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new incoming or outgoing confirmed transactions for tokens from/to the customer's address with also a response at each confirmation the transaction has received until the specified confirmations limit is reached. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.     Being confirmed means that the transactions are verified by miners and added to the next block. This endpoint refers to **tokens transactions only, not coins**.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewConfirmedTokensTransactionsAndEachConfirmationRB} opts.newConfirmedTokensTransactionsAndEachConfirmationRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewConfirmedTokensTransactionsAndEachConfirmationR}
     */
  }, {
    key: "newConfirmedTokensTransactionsAndEachConfirmation",
    value: function newConfirmedTokensTransactionsAndEachConfirmation(blockchain, network, opts) {
      return this.newConfirmedTokensTransactionsAndEachConfirmationWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New Reverted Block
     * By subscribing to this event, customers will receive callbacks from Crypto APIs every time when a block is reverted on a specific blockchain. This can happen in cases when two blocks are mined at the same time and the nodes cannot agree on which one was first. This occurs as part of the chain reorganization process.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewRevertedBlockRB} opts.newRevertedBlockRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewRevertedBlockR} and HTTP response
     */
  }, {
    key: "newRevertedBlockWithHttpInfo",
    value: function newRevertedBlockWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newRevertedBlockRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newRevertedBlock");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newRevertedBlock");
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
      var returnType = _NewRevertedBlockR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/reverted-block', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New Reverted Block
     * By subscribing to this event, customers will receive callbacks from Crypto APIs every time when a block is reverted on a specific blockchain. This can happen in cases when two blocks are mined at the same time and the nodes cannot agree on which one was first. This occurs as part of the chain reorganization process.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewRevertedBlockRB} opts.newRevertedBlockRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewRevertedBlockR}
     */
  }, {
    key: "newRevertedBlock",
    value: function newRevertedBlock(blockchain, network, opts) {
      return this.newRevertedBlockWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New unconfirmed coins transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new unconfirmed coins transactions for the user. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.    Unconfirmed coins transactions remain in the mempool (memory pool) until they are confirmed by miners and added to the next block. Sometimes spikes in transaction activity can cause delays in confirmations.    {note}For UTXO-based protocols like Bitcoin a transaction could have multiple inputs and outputs which means the address could in as both sender and recipient. [Here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-data-returned-for-utxo-based-transactions) is how we inform you on that.{/note}    {warning}We cannot guarantee at 100% that webhooks for unconfirmed transactions will always be received. Some may **not get received** due to the possibility of some nodes not being updated with that information. This can occur in networks with low activity and/or not many nodes, e.g. Testnet networks and rarely Mainnets.{/warning}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {note}It is also **important to note** that just because pending unconfirmed transactions are in the mempool, **doesn't necessarily** mean they will get confirmed.{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewUnconfirmedCoinsTransactionsRB} opts.newUnconfirmedCoinsTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewUnconfirmedCoinsTransactionsR} and HTTP response
     */
  }, {
    key: "newUnconfirmedCoinsTransactionsWithHttpInfo",
    value: function newUnconfirmedCoinsTransactionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newUnconfirmedCoinsTransactionsRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newUnconfirmedCoinsTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newUnconfirmedCoinsTransactions");
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
      var returnType = _NewUnconfirmedCoinsTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-coins-transactions-unconfirmed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New unconfirmed coins transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new unconfirmed coins transactions for the user. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.    Unconfirmed coins transactions remain in the mempool (memory pool) until they are confirmed by miners and added to the next block. Sometimes spikes in transaction activity can cause delays in confirmations.    {note}For UTXO-based protocols like Bitcoin a transaction could have multiple inputs and outputs which means the address could in as both sender and recipient. [Here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-data-returned-for-utxo-based-transactions) is how we inform you on that.{/note}    {warning}We cannot guarantee at 100% that webhooks for unconfirmed transactions will always be received. Some may **not get received** due to the possibility of some nodes not being updated with that information. This can occur in networks with low activity and/or not many nodes, e.g. Testnet networks and rarely Mainnets.{/warning}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {note}It is also **important to note** that just because pending unconfirmed transactions are in the mempool, **doesn't necessarily** mean they will get confirmed.{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewUnconfirmedCoinsTransactionsRB} opts.newUnconfirmedCoinsTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewUnconfirmedCoinsTransactionsR}
     */
  }, {
    key: "newUnconfirmedCoinsTransactions",
    value: function newUnconfirmedCoinsTransactions(blockchain, network, opts) {
      return this.newUnconfirmedCoinsTransactionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * New unconfirmed tokens transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new unconfirmed tokens transactions for the user. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.    Unconfirmed tokens transactions remain in the mempool (memory pool) until they are confirmed by miners and added to the next block. Sometimes spikes in transaction activity can cause delays in confirmations.    {warning}We cannot guarantee at 100% that webhooks for unconfirmed transactions will always be received. Some may **not get received** due to the possibility of some nodes not being updated with that information. This can occur in networks with low activity and/or not many nodes, e.g. Testnet networks and rarely Mainnets.{/warning}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {note}It is also **important to note** that just because pending unconfirmed transactions are in the mempool, **doesn't necessarily** mean they will get confirmed.{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewUnconfirmedTokensTransactionsRB} opts.newUnconfirmedTokensTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewUnconfirmedTokensTransactionsR} and HTTP response
     */
  }, {
    key: "newUnconfirmedTokensTransactionsWithHttpInfo",
    value: function newUnconfirmedTokensTransactionsWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['newUnconfirmedTokensTransactionsRB'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newUnconfirmedTokensTransactions");
      }
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling newUnconfirmedTokensTransactions");
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
      var returnType = _NewUnconfirmedTokensTransactionsR["default"];
      return this.apiClient.callApi('/blockchain-events/{blockchain}/{network}/subscriptions/address-tokens-transactions-unconfirmed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * New unconfirmed tokens transactions
     * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when there are new unconfirmed tokens transactions for the user. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified address.    Unconfirmed tokens transactions remain in the mempool (memory pool) until they are confirmed by miners and added to the next block. Sometimes spikes in transaction activity can cause delays in confirmations.    {warning}We cannot guarantee at 100% that webhooks for unconfirmed transactions will always be received. Some may **not get received** due to the possibility of some nodes not being updated with that information. This can occur in networks with low activity and/or not many nodes, e.g. Testnet networks and rarely Mainnets.{/warning}    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {note}It is also **important to note** that just because pending unconfirmed transactions are in the mempool, **doesn't necessarily** mean they will get confirmed.{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {module:model/NewUnconfirmedTokensTransactionsRB} opts.newUnconfirmedTokensTransactionsRB 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewUnconfirmedTokensTransactionsR}
     */
  }, {
    key: "newUnconfirmedTokensTransactions",
    value: function newUnconfirmedTokensTransactions(blockchain, network, opts) {
      return this.newUnconfirmedTokensTransactionsWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
  return CreateSubscriptionsForApi;
}();
exports["default"] = CreateSubscriptionsForApi;