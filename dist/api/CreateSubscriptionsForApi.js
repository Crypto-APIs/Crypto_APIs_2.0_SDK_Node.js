"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse40058"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40059"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse40060"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40061"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse40062"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse40063"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse40064"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse40065"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse40073"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse40074"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse40158"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse40159"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse40160"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse40161"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse40162"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse40163"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse40164"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse40165"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse40173"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse40174"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse22 = _interopRequireDefault(require("../model/InlineResponse40358"));

var _InlineResponse23 = _interopRequireDefault(require("../model/InlineResponse40359"));

var _InlineResponse24 = _interopRequireDefault(require("../model/InlineResponse40360"));

var _InlineResponse25 = _interopRequireDefault(require("../model/InlineResponse40361"));

var _InlineResponse26 = _interopRequireDefault(require("../model/InlineResponse40362"));

var _InlineResponse27 = _interopRequireDefault(require("../model/InlineResponse40363"));

var _InlineResponse28 = _interopRequireDefault(require("../model/InlineResponse40364"));

var _InlineResponse29 = _interopRequireDefault(require("../model/InlineResponse40365"));

var _InlineResponse30 = _interopRequireDefault(require("../model/InlineResponse40373"));

var _InlineResponse31 = _interopRequireDefault(require("../model/InlineResponse40374"));

var _InlineResponse32 = _interopRequireDefault(require("../model/InlineResponse40910"));

var _InlineResponse33 = _interopRequireDefault(require("../model/InlineResponse40911"));

var _InlineResponse34 = _interopRequireDefault(require("../model/InlineResponse40912"));

var _InlineResponse35 = _interopRequireDefault(require("../model/InlineResponse40913"));

var _InlineResponse36 = _interopRequireDefault(require("../model/InlineResponse40914"));

var _InlineResponse37 = _interopRequireDefault(require("../model/InlineResponse40915"));

var _InlineResponse38 = _interopRequireDefault(require("../model/InlineResponse4096"));

var _InlineResponse39 = _interopRequireDefault(require("../model/InlineResponse4097"));

var _InlineResponse40 = _interopRequireDefault(require("../model/InlineResponse4098"));

var _InlineResponse41 = _interopRequireDefault(require("../model/InlineResponse4099"));

var _InlineResponse42 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse43 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse44 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse45 = _interopRequireDefault(require("../model/InlineResponse500"));

var _MinedTransactionR = _interopRequireDefault(require("../model/MinedTransactionR"));

var _MinedTransactionRB = _interopRequireDefault(require("../model/MinedTransactionRB"));

var _NewBlockR = _interopRequireDefault(require("../model/NewBlockR"));

var _NewBlockRB = _interopRequireDefault(require("../model/NewBlockRB"));

var _NewConfirmedCoinsTransactionsAndEachConfirmationR = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmationR"));

var _NewConfirmedCoinsTransactionsAndEachConfirmationRB = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsAndEachConfirmationRB"));

var _NewConfirmedCoinsTransactionsR = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsR"));

var _NewConfirmedCoinsTransactionsRB = _interopRequireDefault(require("../model/NewConfirmedCoinsTransactionsRB"));

var _NewConfirmedInternalTransactionsAndEachConfirmationR = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmationR"));

var _NewConfirmedInternalTransactionsAndEachConfirmationRB = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsAndEachConfirmationRB"));

var _NewConfirmedInternalTransactionsR = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsR"));

var _NewConfirmedInternalTransactionsRB = _interopRequireDefault(require("../model/NewConfirmedInternalTransactionsRB"));

var _NewConfirmedTokensTransactionsAndEachConfirmationR = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmationR"));

var _NewConfirmedTokensTransactionsAndEachConfirmationRB = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsAndEachConfirmationRB"));

var _NewConfirmedTokensTransactionsR = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsR"));

var _NewConfirmedTokensTransactionsRB = _interopRequireDefault(require("../model/NewConfirmedTokensTransactionsRB"));

var _NewUnconfirmedCoinsTransactionsR = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactionsR"));

var _NewUnconfirmedCoinsTransactionsRB = _interopRequireDefault(require("../model/NewUnconfirmedCoinsTransactionsRB"));

var _NewUnconfirmedTokensTransactionsR = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactionsR"));

var _NewUnconfirmedTokensTransactionsRB = _interopRequireDefault(require("../model/NewUnconfirmedTokensTransactionsRB"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* CreateSubscriptionsFor service.
* @module api/CreateSubscriptionsForApi
* @version 1.4.0
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
   * Mined transaction
   * Through this endpoint customers can create callback subscriptions for a specific event. In this case the event is when a specific transaction is mined. By creating this subscription the user will be notified by Crypto APIs 2.0 when that event occurs. The information is returned per specified `transactionId`.    A transaction is mined when it is included in a new block in the blockchain.    {note}To have an operational callback subscription, you need to first verify a domain for the Callback URL. Please see more information on Callbacks [here](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-url).{/note}    {warning}Crypto APIs will notify the user **only when** the event occurs. There are cases when the specific event doesn't happen at all, or takes a long time to do so. A callback notification **will not** be sent if the event does not or cannot occur, or will take long time to occur.{/warning}
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @param {module:model/MinedTransactionRB} opts.minedTransactionRB 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MinedTransactionR} and HTTP response
   */


  _createClass(CreateSubscriptionsForApi, [{
    key: "minedTransactionWithHttpInfo",
    value: function minedTransactionWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['minedTransactionRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling minedTransaction");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newBlockRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newBlock");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newConfirmedCoinsTransactionsRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedCoinsTransactions");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newConfirmedCoinsTransactionsAndEachConfirmationRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedCoinsTransactionsAndEachConfirmation");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newConfirmedInternalTransactionsRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedInternalTransactions");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newConfirmedInternalTransactionsAndEachConfirmationRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedInternalTransactionsAndEachConfirmation");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newConfirmedTokensTransactionsRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedTokensTransactions");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newConfirmedTokensTransactionsAndEachConfirmationRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newConfirmedTokensTransactionsAndEachConfirmation");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newUnconfirmedCoinsTransactionsRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newUnconfirmedCoinsTransactions");
      } // verify the required parameter 'network' is set


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
      var postBody = opts['newUnconfirmedTokensTransactionsRB']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling newUnconfirmedTokensTransactions");
      } // verify the required parameter 'network' is set


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