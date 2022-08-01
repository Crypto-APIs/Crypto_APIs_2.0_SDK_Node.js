"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressTokensTransactionConfirmedDataItemMinedInBlock = _interopRequireDefault(require("./AddressTokensTransactionConfirmedDataItemMinedInBlock"));

var _ConfirmedTokensTransactionForCertainAmountOrHigherToken = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigherDataItem model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem
 * @version 1.7.2
 */
var ConfirmedTokensTransactionForCertainAmountOrHigherDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"mordor\" are test networks.
   * @param minedInBlock {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} 
   * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
   * @param tokenType {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.TokenTypeEnum} Defines the type of token sent with the transaction, e.g. ERC 20.
   * @param token {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} 
   */
  function ConfirmedTokensTransactionForCertainAmountOrHigherDataItem(blockchain, network, minedInBlock, transactionId, tokenType, token) {
    _classCallCheck(this, ConfirmedTokensTransactionForCertainAmountOrHigherDataItem);

    ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.initialize(this, blockchain, network, minedInBlock, transactionId, tokenType, token);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfirmedTokensTransactionForCertainAmountOrHigherDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, minedInBlock, transactionId, tokenType, token) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['minedInBlock'] = minedInBlock;
      obj['transactionId'] = transactionId;
      obj['tokenType'] = tokenType;
      obj['token'] = token;
    }
    /**
     * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem} obj Optional instance to populate.
     * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfirmedTokensTransactionForCertainAmountOrHigherDataItem();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('minedInBlock')) {
          obj['minedInBlock'] = _AddressTokensTransactionConfirmedDataItemMinedInBlock["default"].constructFromObject(data['minedInBlock']);
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ConfirmedTokensTransactionForCertainAmountOrHigherToken["default"].constructFromObject(data['token']);
        }
      }

      return obj;
    }
  }]);

  return ConfirmedTokensTransactionForCertainAmountOrHigherDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */


ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['blockchain'] = undefined;
/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"mordor\" are test networks.
 * @member {String} network
 */

ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['network'] = undefined;
/**
 * @member {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */

ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['minedInBlock'] = undefined;
/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */

ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['transactionId'] = undefined;
/**
 * Defines the type of token sent with the transaction, e.g. ERC 20.
 * @member {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.TokenTypeEnum} tokenType
 */

ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['tokenType'] = undefined;
/**
 * @member {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} token
 */

ConfirmedTokensTransactionForCertainAmountOrHigherDataItem.prototype['token'] = undefined;
/**
 * Allowed values for the <code>tokenType</code> property.
 * @enum {String}
 * @readonly
 */

ConfirmedTokensTransactionForCertainAmountOrHigherDataItem['TokenTypeEnum'] = {
  /**
   * value: "ERC-20"
   * @const
   */
  "ERC-20": "ERC-20",

  /**
   * value: "ERC-721"
   * @const
   */
  "ERC-721": "ERC-721",

  /**
   * value: "BEP-20"
   * @const
   */
  "BEP-20": "BEP-20"
};
var _default = ConfirmedTokensTransactionForCertainAmountOrHigherDataItem;
exports["default"] = _default;