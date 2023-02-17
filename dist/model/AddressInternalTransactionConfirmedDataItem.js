"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressInternalTransactionConfirmedDataItemMinedInBlock = _interopRequireDefault(require("./AddressInternalTransactionConfirmedDataItemMinedInBlock"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressInternalTransactionConfirmedDataItem model module.
 * @module model/AddressInternalTransactionConfirmedDataItem
 * @version 1.13.0
 */
var AddressInternalTransactionConfirmedDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressInternalTransactionConfirmedDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/AddressInternalTransactionConfirmedDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param address {String} Defines the specific address of the internal transaction.
   * @param minedInBlock {module:model/AddressInternalTransactionConfirmedDataItemMinedInBlock} 
   * @param parentTransactionId {String} Defines the Parent Transaction's unique ID.
   * @param operationId {String} Defines the specific operation's unique ID.
   * @param amount {String} Defines the amount of coins sent with the confirmed transaction.
   * @param unit {String} Defines the unit of the transaction, e.g. Gwei.
   * @param direction {module:model/AddressInternalTransactionConfirmedDataItem.DirectionEnum} Defines whether the transaction is \"incoming\" or \"outgoing\".
   */
  function AddressInternalTransactionConfirmedDataItem(blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit, direction) {
    _classCallCheck(this, AddressInternalTransactionConfirmedDataItem);
    AddressInternalTransactionConfirmedDataItem.initialize(this, blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit, direction);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressInternalTransactionConfirmedDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, address, minedInBlock, parentTransactionId, operationId, amount, unit, direction) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['address'] = address;
      obj['minedInBlock'] = minedInBlock;
      obj['parentTransactionId'] = parentTransactionId;
      obj['operationId'] = operationId;
      obj['amount'] = amount;
      obj['unit'] = unit;
      obj['direction'] = direction;
    }

    /**
     * Constructs a <code>AddressInternalTransactionConfirmedDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressInternalTransactionConfirmedDataItem} obj Optional instance to populate.
     * @return {module:model/AddressInternalTransactionConfirmedDataItem} The populated <code>AddressInternalTransactionConfirmedDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressInternalTransactionConfirmedDataItem();
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
          obj['minedInBlock'] = _AddressInternalTransactionConfirmedDataItemMinedInBlock["default"].constructFromObject(data['minedInBlock']);
        }
        if (data.hasOwnProperty('parentTransactionId')) {
          obj['parentTransactionId'] = _ApiClient["default"].convertToType(data['parentTransactionId'], 'String');
        }
        if (data.hasOwnProperty('operationId')) {
          obj['operationId'] = _ApiClient["default"].convertToType(data['operationId'], 'String');
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
  return AddressInternalTransactionConfirmedDataItem;
}();
/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
AddressInternalTransactionConfirmedDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
AddressInternalTransactionConfirmedDataItem.prototype['network'] = undefined;

/**
 * Defines the specific address of the internal transaction.
 * @member {String} address
 */
AddressInternalTransactionConfirmedDataItem.prototype['address'] = undefined;

/**
 * @member {module:model/AddressInternalTransactionConfirmedDataItemMinedInBlock} minedInBlock
 */
AddressInternalTransactionConfirmedDataItem.prototype['minedInBlock'] = undefined;

/**
 * Defines the Parent Transaction's unique ID.
 * @member {String} parentTransactionId
 */
AddressInternalTransactionConfirmedDataItem.prototype['parentTransactionId'] = undefined;

/**
 * Defines the specific operation's unique ID.
 * @member {String} operationId
 */
AddressInternalTransactionConfirmedDataItem.prototype['operationId'] = undefined;

/**
 * Defines the amount of coins sent with the confirmed transaction.
 * @member {String} amount
 */
AddressInternalTransactionConfirmedDataItem.prototype['amount'] = undefined;

/**
 * Defines the unit of the transaction, e.g. Gwei.
 * @member {String} unit
 */
AddressInternalTransactionConfirmedDataItem.prototype['unit'] = undefined;

/**
 * Defines whether the transaction is \"incoming\" or \"outgoing\".
 * @member {module:model/AddressInternalTransactionConfirmedDataItem.DirectionEnum} direction
 */
AddressInternalTransactionConfirmedDataItem.prototype['direction'] = undefined;

/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
AddressInternalTransactionConfirmedDataItem['DirectionEnum'] = {
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
var _default = AddressInternalTransactionConfirmedDataItem;
exports["default"] = _default;