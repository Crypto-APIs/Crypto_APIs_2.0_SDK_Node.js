"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetOmniTransactionDetailsByTransactionIDTxidR = _interopRequireDefault(require("../model/GetOmniTransactionDetailsByTransactionIDTxidR"));

var _GetUnconfirmedOmniTransactionByTransactionIDTxidR = _interopRequireDefault(require("../model/GetUnconfirmedOmniTransactionByTransactionIDTxidR"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse4001"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse40012"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse40020"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse40029"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse40033"));

var _InlineResponse6 = _interopRequireDefault(require("../model/InlineResponse40041"));

var _InlineResponse7 = _interopRequireDefault(require("../model/InlineResponse40047"));

var _InlineResponse8 = _interopRequireDefault(require("../model/InlineResponse4005"));

var _InlineResponse9 = _interopRequireDefault(require("../model/InlineResponse4011"));

var _InlineResponse10 = _interopRequireDefault(require("../model/InlineResponse40112"));

var _InlineResponse11 = _interopRequireDefault(require("../model/InlineResponse40120"));

var _InlineResponse12 = _interopRequireDefault(require("../model/InlineResponse40129"));

var _InlineResponse13 = _interopRequireDefault(require("../model/InlineResponse40133"));

var _InlineResponse14 = _interopRequireDefault(require("../model/InlineResponse40141"));

var _InlineResponse15 = _interopRequireDefault(require("../model/InlineResponse40147"));

var _InlineResponse16 = _interopRequireDefault(require("../model/InlineResponse4015"));

var _InlineResponse17 = _interopRequireDefault(require("../model/InlineResponse402"));

var _InlineResponse18 = _interopRequireDefault(require("../model/InlineResponse4031"));

var _InlineResponse19 = _interopRequireDefault(require("../model/InlineResponse40312"));

var _InlineResponse20 = _interopRequireDefault(require("../model/InlineResponse40320"));

var _InlineResponse21 = _interopRequireDefault(require("../model/InlineResponse40329"));

var _InlineResponse22 = _interopRequireDefault(require("../model/InlineResponse40333"));

var _InlineResponse23 = _interopRequireDefault(require("../model/InlineResponse40341"));

var _InlineResponse24 = _interopRequireDefault(require("../model/InlineResponse40347"));

var _InlineResponse25 = _interopRequireDefault(require("../model/InlineResponse4035"));

var _InlineResponse26 = _interopRequireDefault(require("../model/InlineResponse404"));

var _InlineResponse27 = _interopRequireDefault(require("../model/InlineResponse409"));

var _InlineResponse28 = _interopRequireDefault(require("../model/InlineResponse415"));

var _InlineResponse29 = _interopRequireDefault(require("../model/InlineResponse422"));

var _InlineResponse30 = _interopRequireDefault(require("../model/InlineResponse429"));

var _InlineResponse31 = _interopRequireDefault(require("../model/InlineResponse500"));

var _ListOmniTokensByAddressR = _interopRequireDefault(require("../model/ListOmniTokensByAddressR"));

var _ListOmniTransactionsByAddressR = _interopRequireDefault(require("../model/ListOmniTransactionsByAddressR"));

var _ListOmniTransactionsByBlockHashR = _interopRequireDefault(require("../model/ListOmniTransactionsByBlockHashR"));

var _ListOmniTransactionsByBlockHeightR = _interopRequireDefault(require("../model/ListOmniTransactionsByBlockHeightR"));

var _ListUnconfirmedOmniTransactionsByAddressR = _interopRequireDefault(require("../model/ListUnconfirmedOmniTransactionsByAddressR"));

var _ListUnconfirmedOmniTransactionsByPropertyIDR = _interopRequireDefault(require("../model/ListUnconfirmedOmniTransactionsByPropertyIDR"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* OmniLayer service.
* @module api/OmniLayerApi
* @version 1.5.0
*/
var OmniLayerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OmniLayerApi. 
  * @alias module:api/OmniLayerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OmniLayerApi(apiClient) {
    _classCallCheck(this, OmniLayerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get Omni Transaction Details By Transaction ID (Txid)
   * Through this endpoint customers can obtain details about an Omni transaction by the transaction's unique identifier. The transaction can return information such as hash, height, time of creation in Unix timestamp, etc.
   * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
   * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param {Object} opts Optional parameters
   * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOmniTransactionDetailsByTransactionIDTxidR} and HTTP response
   */


  _createClass(OmniLayerApi, [{
    key: "getOmniTransactionDetailsByTransactionIDTxidWithHttpInfo",
    value: function getOmniTransactionDetailsByTransactionIDTxidWithHttpInfo(network, blockchain, transactionId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getOmniTransactionDetailsByTransactionIDTxid");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getOmniTransactionDetailsByTransactionIDTxid");
      } // verify the required parameter 'transactionId' is set


      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getOmniTransactionDetailsByTransactionIDTxid");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'transactionId': transactionId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetOmniTransactionDetailsByTransactionIDTxidR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/transactions/{transactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Omni Transaction Details By Transaction ID (Txid)
     * Through this endpoint customers can obtain details about an Omni transaction by the transaction's unique identifier. The transaction can return information such as hash, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOmniTransactionDetailsByTransactionIDTxidR}
     */

  }, {
    key: "getOmniTransactionDetailsByTransactionIDTxid",
    value: function getOmniTransactionDetailsByTransactionIDTxid(network, blockchain, transactionId, opts) {
      return this.getOmniTransactionDetailsByTransactionIDTxidWithHttpInfo(network, blockchain, transactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Unconfirmed Omni Transaction By Transaction ID (Txid)
     * Through this endpoint customers can obtain information on unconfirmed Omni transactions by an attribute `transactionId`. The transaction can have information such as hash, height, time of creation in Unix timestamp, etc.    Unconfirmed transactions are usually put in the Mempool and await verification so that they can be added to a block.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidR} and HTTP response
     */

  }, {
    key: "getUnconfirmedOmniTransactionByTransactionIDTxidWithHttpInfo",
    value: function getUnconfirmedOmniTransactionByTransactionIDTxidWithHttpInfo(network, blockchain, transactionId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getUnconfirmedOmniTransactionByTransactionIDTxid");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getUnconfirmedOmniTransactionByTransactionIDTxid");
      } // verify the required parameter 'transactionId' is set


      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling getUnconfirmedOmniTransactionByTransactionIDTxid");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'transactionId': transactionId
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetUnconfirmedOmniTransactionByTransactionIDTxidR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/transactions-unconfirmed/{transactionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get Unconfirmed Omni Transaction By Transaction ID (Txid)
     * Through this endpoint customers can obtain information on unconfirmed Omni transactions by an attribute `transactionId`. The transaction can have information such as hash, height, time of creation in Unix timestamp, etc.    Unconfirmed transactions are usually put in the Mempool and await verification so that they can be added to a block.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} transactionId Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUnconfirmedOmniTransactionByTransactionIDTxidR}
     */

  }, {
    key: "getUnconfirmedOmniTransactionByTransactionIDTxid",
    value: function getUnconfirmedOmniTransactionByTransactionIDTxid(network, blockchain, transactionId, opts) {
      return this.getUnconfirmedOmniTransactionByTransactionIDTxidWithHttpInfo(network, blockchain, transactionId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Omni Tokens By Address
     * Through this endpoint the customer can receive basic information about a given Omni address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListOmniTokensByAddressR} and HTTP response
     */

  }, {
    key: "listOmniTokensByAddressWithHttpInfo",
    value: function listOmniTokensByAddressWithHttpInfo(network, blockchain, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listOmniTokensByAddress");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listOmniTokensByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listOmniTokensByAddress");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'address': address
      };
      var queryParams = {
        'context': opts['context']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListOmniTokensByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/addresses/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Omni Tokens By Address
     * Through this endpoint the customer can receive basic information about a given Omni address based on confirmed/synced blocks only. In the case where there are any incoming or outgoing **unconfirmed** transactions for the specific address, they **will not** be counted or calculated here.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOmniTokensByAddressR}
     */

  }, {
    key: "listOmniTokensByAddress",
    value: function listOmniTokensByAddress(network, blockchain, address, opts) {
      return this.listOmniTokensByAddressWithHttpInfo(network, blockchain, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Omni Transactions By Address
     * This endpoint will list Omni transactions by an attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListOmniTransactionsByAddressR} and HTTP response
     */

  }, {
    key: "listOmniTransactionsByAddressWithHttpInfo",
    value: function listOmniTransactionsByAddressWithHttpInfo(network, blockchain, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listOmniTransactionsByAddress");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listOmniTransactionsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listOmniTransactionsByAddress");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListOmniTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/addresses/{address}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Omni Transactions By Address
     * This endpoint will list Omni transactions by an attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOmniTransactionsByAddressR}
     */

  }, {
    key: "listOmniTransactionsByAddress",
    value: function listOmniTransactionsByAddress(network, blockchain, address, opts) {
      return this.listOmniTransactionsByAddressWithHttpInfo(network, blockchain, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Omni Transactions By Block Hash
     * This endpoint will list Omni transactions by an attribute `transactionHash`. The transactions listed will detail additional information such as addresses, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListOmniTransactionsByBlockHashR} and HTTP response
     */

  }, {
    key: "listOmniTransactionsByBlockHashWithHttpInfo",
    value: function listOmniTransactionsByBlockHashWithHttpInfo(network, blockchain, blockHash, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listOmniTransactionsByBlockHash");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listOmniTransactionsByBlockHash");
      } // verify the required parameter 'blockHash' is set


      if (blockHash === undefined || blockHash === null) {
        throw new Error("Missing the required parameter 'blockHash' when calling listOmniTransactionsByBlockHash");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'blockHash': blockHash
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListOmniTransactionsByBlockHashR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/blocks/hash/{blockHash}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Omni Transactions By Block Hash
     * This endpoint will list Omni transactions by an attribute `transactionHash`. The transactions listed will detail additional information such as addresses, height, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} blockHash Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOmniTransactionsByBlockHashR}
     */

  }, {
    key: "listOmniTransactionsByBlockHash",
    value: function listOmniTransactionsByBlockHash(network, blockchain, blockHash, opts) {
      return this.listOmniTransactionsByBlockHashWithHttpInfo(network, blockchain, blockHash, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Omni Transactions By Block Height
     * This endpoint will list Omni transactions by an attribute `blockHeight`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListOmniTransactionsByBlockHeightR} and HTTP response
     */

  }, {
    key: "listOmniTransactionsByBlockHeightWithHttpInfo",
    value: function listOmniTransactionsByBlockHeightWithHttpInfo(network, blockchain, blockHeight, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listOmniTransactionsByBlockHeight");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listOmniTransactionsByBlockHeight");
      } // verify the required parameter 'blockHeight' is set


      if (blockHeight === undefined || blockHeight === null) {
        throw new Error("Missing the required parameter 'blockHeight' when calling listOmniTransactionsByBlockHeight");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'blockHeight': blockHeight
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListOmniTransactionsByBlockHeightR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/blocks/height/{blockHeight}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Omni Transactions By Block Height
     * This endpoint will list Omni transactions by an attribute `blockHeight`. The transactions listed will detail additional information such as hash, addresses, time of creation in Unix timestamp, etc.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} blockHeight Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListOmniTransactionsByBlockHeightR}
     */

  }, {
    key: "listOmniTransactionsByBlockHeight",
    value: function listOmniTransactionsByBlockHeight(network, blockchain, blockHeight, opts) {
      return this.listOmniTransactionsByBlockHeightWithHttpInfo(network, blockchain, blockHeight, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Unconfirmed Omni Transactions By Address
     * This endpoint will list unconfirmed Omni transactions by an attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Unconfirmed transactions are usually put in the Mempool and await verification so that they can be added to a block.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnconfirmedOmniTransactionsByAddressR} and HTTP response
     */

  }, {
    key: "listUnconfirmedOmniTransactionsByAddressWithHttpInfo",
    value: function listUnconfirmedOmniTransactionsByAddressWithHttpInfo(network, blockchain, address, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnconfirmedOmniTransactionsByAddress");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnconfirmedOmniTransactionsByAddress");
      } // verify the required parameter 'address' is set


      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling listUnconfirmedOmniTransactionsByAddress");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'address': address
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListUnconfirmedOmniTransactionsByAddressR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/address-transactions-unconfirmed/{address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Unconfirmed Omni Transactions By Address
     * This endpoint will list unconfirmed Omni transactions by an attribute `address`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Unconfirmed transactions are usually put in the Mempool and await verification so that they can be added to a block.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} address Represents the public address, which is a compressed and shortened form of a public key.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnconfirmedOmniTransactionsByAddressR}
     */

  }, {
    key: "listUnconfirmedOmniTransactionsByAddress",
    value: function listUnconfirmedOmniTransactionsByAddress(network, blockchain, address, opts) {
      return this.listUnconfirmedOmniTransactionsByAddressWithHttpInfo(network, blockchain, address, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Unconfirmed Omni Transactions By Property ID
     * This endpoint will list unconfirmed Omni transactions by an attribute `propertyId`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Unconfirmed transactions are usually put in the Mempool and await verification so that they can be added to a block.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} propertyId Represents the identifier of the tokens to send.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListUnconfirmedOmniTransactionsByPropertyIDR} and HTTP response
     */

  }, {
    key: "listUnconfirmedOmniTransactionsByPropertyIDWithHttpInfo",
    value: function listUnconfirmedOmniTransactionsByPropertyIDWithHttpInfo(network, blockchain, propertyId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listUnconfirmedOmniTransactionsByPropertyID");
      } // verify the required parameter 'blockchain' is set


      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listUnconfirmedOmniTransactionsByPropertyID");
      } // verify the required parameter 'propertyId' is set


      if (propertyId === undefined || propertyId === null) {
        throw new Error("Missing the required parameter 'propertyId' when calling listUnconfirmedOmniTransactionsByPropertyID");
      }

      var pathParams = {
        'network': network,
        'blockchain': blockchain,
        'propertyId': propertyId
      };
      var queryParams = {
        'context': opts['context'],
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListUnconfirmedOmniTransactionsByPropertyIDR["default"];
      return this.apiClient.callApi('/blockchain-data/{blockchain}/{network}/omni/properties/{propertyId}/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Unconfirmed Omni Transactions By Property ID
     * This endpoint will list unconfirmed Omni transactions by an attribute `propertyId`. The transactions listed will detail additional information such as hash, height, time of creation in Unix timestamp, etc.    Unconfirmed transactions are usually put in the Mempool and await verification so that they can be added to a block.
     * @param {module:model/String} network Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\" are test networks.
     * @param {module:model/String} blockchain Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
     * @param {String} propertyId Represents the identifier of the tokens to send.
     * @param {Object} opts Optional parameters
     * @param {String} opts.context In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
     * @param {Number} opts.limit Defines how many items should be returned in the response per page basis. (default to 50)
     * @param {Number} opts.offset The starting index of the response items, i.e. where the response should start listing the returned items. (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUnconfirmedOmniTransactionsByPropertyIDR}
     */

  }, {
    key: "listUnconfirmedOmniTransactionsByPropertyID",
    value: function listUnconfirmedOmniTransactionsByPropertyID(network, blockchain, propertyId, opts) {
      return this.listUnconfirmedOmniTransactionsByPropertyIDWithHttpInfo(network, blockchain, propertyId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return OmniLayerApi;
}();

exports["default"] = OmniLayerApi;