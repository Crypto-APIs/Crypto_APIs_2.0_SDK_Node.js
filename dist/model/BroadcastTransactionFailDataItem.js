"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The BroadcastTransactionFailDataItem model module.
 * @module model/BroadcastTransactionFailDataItem
 * @version 1.7.2
 */
var BroadcastTransactionFailDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BroadcastTransactionFailDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/BroadcastTransactionFailDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
   * @param errorMessage {String} Represents the error message received for the transaction.
   */
  function BroadcastTransactionFailDataItem(blockchain, network, transactionId, errorMessage) {
    _classCallCheck(this, BroadcastTransactionFailDataItem);

    BroadcastTransactionFailDataItem.initialize(this, blockchain, network, transactionId, errorMessage);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BroadcastTransactionFailDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, transactionId, errorMessage) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['transactionId'] = transactionId;
      obj['errorMessage'] = errorMessage;
    }
    /**
     * Constructs a <code>BroadcastTransactionFailDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastTransactionFailDataItem} obj Optional instance to populate.
     * @return {module:model/BroadcastTransactionFailDataItem} The populated <code>BroadcastTransactionFailDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BroadcastTransactionFailDataItem();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BroadcastTransactionFailDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


BroadcastTransactionFailDataItem.prototype['blockchain'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */

BroadcastTransactionFailDataItem.prototype['network'] = undefined;
/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */

BroadcastTransactionFailDataItem.prototype['transactionId'] = undefined;
/**
 * Represents the error message received for the transaction.
 * @member {String} errorMessage
 */

BroadcastTransactionFailDataItem.prototype['errorMessage'] = undefined;
var _default = BroadcastTransactionFailDataItem;
exports["default"] = _default;