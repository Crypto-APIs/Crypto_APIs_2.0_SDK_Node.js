"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransactionMinedDataItemMinedInBlock = _interopRequireDefault(require("./TransactionMinedDataItemMinedInBlock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TransactionMinedDataItem model module.
 * @module model/TransactionMinedDataItem
 * @version 1.7.2
 */
var TransactionMinedDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionMinedDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/TransactionMinedDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
   * @param minedInBlock {module:model/TransactionMinedDataItemMinedInBlock} 
   */
  function TransactionMinedDataItem(blockchain, network, transactionId, minedInBlock) {
    _classCallCheck(this, TransactionMinedDataItem);

    TransactionMinedDataItem.initialize(this, blockchain, network, transactionId, minedInBlock);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionMinedDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, transactionId, minedInBlock) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['transactionId'] = transactionId;
      obj['minedInBlock'] = minedInBlock;
    }
    /**
     * Constructs a <code>TransactionMinedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionMinedDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionMinedDataItem} The populated <code>TransactionMinedDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionMinedDataItem();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('minedInBlock')) {
          obj['minedInBlock'] = _TransactionMinedDataItemMinedInBlock["default"].constructFromObject(data['minedInBlock']);
        }
      }

      return obj;
    }
  }]);

  return TransactionMinedDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


TransactionMinedDataItem.prototype['blockchain'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */

TransactionMinedDataItem.prototype['network'] = undefined;
/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */

TransactionMinedDataItem.prototype['transactionId'] = undefined;
/**
 * @member {module:model/TransactionMinedDataItemMinedInBlock} minedInBlock
 */

TransactionMinedDataItem.prototype['minedInBlock'] = undefined;
var _default = TransactionMinedDataItem;
exports["default"] = _default;