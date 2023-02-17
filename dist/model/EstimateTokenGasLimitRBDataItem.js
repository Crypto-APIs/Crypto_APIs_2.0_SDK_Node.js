"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The EstimateTokenGasLimitRBDataItem model module.
 * @module model/EstimateTokenGasLimitRBDataItem
 * @version 1.13.0
 */
var EstimateTokenGasLimitRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EstimateTokenGasLimitRBDataItem</code>.
   * @alias module:model/EstimateTokenGasLimitRBDataItem
   * @param amount {String} Represents transactions' amount.
   * @param contract {String} Defines the specific token identifier.  For Ethereum-based transactions it is the contract.
   * @param contractType {String} Represents the ERC contract type. It can be ERC20 or ERC721
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   */
  function EstimateTokenGasLimitRBDataItem(amount, contract, contractType, recipient, sender) {
    _classCallCheck(this, EstimateTokenGasLimitRBDataItem);
    EstimateTokenGasLimitRBDataItem.initialize(this, amount, contract, contractType, recipient, sender);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(EstimateTokenGasLimitRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, contract, contractType, recipient, sender) {
      obj['amount'] = amount;
      obj['contract'] = contract;
      obj['contractType'] = contractType;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
    }

    /**
     * Constructs a <code>EstimateTokenGasLimitRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateTokenGasLimitRBDataItem} obj Optional instance to populate.
     * @return {module:model/EstimateTokenGasLimitRBDataItem} The populated <code>EstimateTokenGasLimitRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EstimateTokenGasLimitRBDataItem();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('contractType')) {
          obj['contractType'] = _ApiClient["default"].convertToType(data['contractType'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
      }
      return obj;
    }
  }]);
  return EstimateTokenGasLimitRBDataItem;
}();
/**
 * Represents transactions' amount.
 * @member {String} amount
 */
EstimateTokenGasLimitRBDataItem.prototype['amount'] = undefined;

/**
 * Defines the specific token identifier.  For Ethereum-based transactions it is the contract.
 * @member {String} contract
 */
EstimateTokenGasLimitRBDataItem.prototype['contract'] = undefined;

/**
 * Represents the ERC contract type. It can be ERC20 or ERC721
 * @member {String} contractType
 */
EstimateTokenGasLimitRBDataItem.prototype['contractType'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
EstimateTokenGasLimitRBDataItem.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
EstimateTokenGasLimitRBDataItem.prototype['sender'] = undefined;
var _default = EstimateTokenGasLimitRBDataItem;
exports["default"] = _default;