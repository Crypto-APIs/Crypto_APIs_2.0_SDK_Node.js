"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressCoinsTransactionConfirmedDataItemMinedInBlock = _interopRequireDefault(require("./AddressCoinsTransactionConfirmedDataItemMinedInBlock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressCoinsTransactionConfirmedDataItem model module.
 * @module model/AddressCoinsTransactionConfirmedDataItem
 * @version 1.13.0
 */
var AddressCoinsTransactionConfirmedDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressCoinsTransactionConfirmedDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/AddressCoinsTransactionConfirmedDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"mordor\" are test networks.
   * @param address {String} Defines the specific address to which the coin transaction has been sent and is confirmed.
   * @param minedInBlock {module:model/AddressCoinsTransactionConfirmedDataItemMinedInBlock} 
   * @param transactionId {String} Defines the unique ID of the specific transaction, i.e. its identification number.
   * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
   * @param unit {String} Defines the unit of the transaction, e.g. BTC.
   * @param direction {module:model/AddressCoinsTransactionConfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
   */
  function AddressCoinsTransactionConfirmedDataItem(blockchain, network, address, minedInBlock, transactionId, amount, unit, direction) {
    _classCallCheck(this, AddressCoinsTransactionConfirmedDataItem);
    AddressCoinsTransactionConfirmedDataItem.initialize(this, blockchain, network, address, minedInBlock, transactionId, amount, unit, direction);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressCoinsTransactionConfirmedDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, address, minedInBlock, transactionId, amount, unit, direction) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['address'] = address;
      obj['minedInBlock'] = minedInBlock;
      obj['transactionId'] = transactionId;
      obj['amount'] = amount;
      obj['unit'] = unit;
      obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressCoinsTransactionConfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionConfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionConfirmedDataItem} The populated <code>AddressCoinsTransactionConfirmedDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressCoinsTransactionConfirmedDataItem();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('minedInBlock')) {
          obj['minedInBlock'] = _AddressCoinsTransactionConfirmedDataItemMinedInBlock["default"].constructFromObject(data['minedInBlock']);
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('direction')) {
          obj['direction'] = _ApiClient["default"].convertToType(data['direction'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddressCoinsTransactionConfirmedDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressCoinsTransactionConfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"mordor\" are test networks.
 * @member {String} network
 */
AddressCoinsTransactionConfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address to which the coin transaction has been sent and is confirmed.
 * @member {String} address
 */
AddressCoinsTransactionConfirmedDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressCoinsTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressCoinsTransactionConfirmedDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the unique ID of the specific transaction, i.e. its identification number.
 * @member {String} transactionId
 */
AddressCoinsTransactionConfirmedDataItem.prototype['transactionId'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
AddressCoinsTransactionConfirmedDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. BTC.
 * @member {String} unit
 */
AddressCoinsTransactionConfirmedDataItem.prototype['unit'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressCoinsTransactionConfirmedDataItem.DirectionEnum} direction
 */
AddressCoinsTransactionConfirmedDataItem.prototype['direction'] = undefined;

/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressCoinsTransactionConfirmedDataItem['DirectionEnum'] = {
  /**
   * value: "incoming"
   * @const
   */
  "incoming": "incoming",
  /**
   * value: "outgoing"
   * @const
   */
  "outgoing": "outgoing"
};
var _default = AddressCoinsTransactionConfirmedDataItem;
exports["default"] = _default;