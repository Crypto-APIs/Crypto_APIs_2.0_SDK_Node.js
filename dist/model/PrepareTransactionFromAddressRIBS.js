"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareTransactionFromAddressRIBSBSC = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSBSC"));
var _PrepareTransactionFromAddressRIBSBSCFee = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSBSCFee"));
var _PrepareTransactionFromAddressRIBSE = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSE"));
var _PrepareTransactionFromAddressRIBSEC = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSEC"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareTransactionFromAddressRIBS model module.
 * @module model/PrepareTransactionFromAddressRIBS
 * @version 1.13.0
 */
var PrepareTransactionFromAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRIBS</code>.
   * @alias module:model/PrepareTransactionFromAddressRIBS
   * @implements module:model/PrepareTransactionFromAddressRIBSBSC
   * @implements module:model/PrepareTransactionFromAddressRIBSE
   * @implements module:model/PrepareTransactionFromAddressRIBSEC
   * @param fee {module:model/PrepareTransactionFromAddressRIBSBSCFee} 
   * @param transactionType {module:model/PrepareTransactionFromAddressRIBS.TransactionTypeEnum} Representation of the transaction type
   * @param unit {String} Represents the unit of the amount transacted.
   */
  function PrepareTransactionFromAddressRIBS(fee, transactionType, unit) {
    _classCallCheck(this, PrepareTransactionFromAddressRIBS);
    _PrepareTransactionFromAddressRIBSBSC["default"].initialize(this, fee, transactionType, unit);
    _PrepareTransactionFromAddressRIBSE["default"].initialize(this, fee, transactionType, unit);
    _PrepareTransactionFromAddressRIBSEC["default"].initialize(this, fee, transactionType, unit);
    PrepareTransactionFromAddressRIBS.initialize(this, fee, transactionType, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareTransactionFromAddressRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, fee, transactionType, unit) {
      obj['fee'] = fee;
      obj['transactionType'] = transactionType;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRIBS} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRIBS} The populated <code>PrepareTransactionFromAddressRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareTransactionFromAddressRIBS();
        _PrepareTransactionFromAddressRIBSBSC["default"].constructFromObject(data, obj);
        _PrepareTransactionFromAddressRIBSE["default"].constructFromObject(data, obj);
        _PrepareTransactionFromAddressRIBSEC["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareTransactionFromAddressRIBSBSCFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareTransactionFromAddressRIBS;
}();
/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
PrepareTransactionFromAddressRIBS.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBS.TransactionTypeEnum} transactionType
 */
PrepareTransactionFromAddressRIBS.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount transacted.
 * @member {String} unit
 */
PrepareTransactionFromAddressRIBS.prototype['unit'] = undefined;

// Implement PrepareTransactionFromAddressRIBSBSC interface:
/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
_PrepareTransactionFromAddressRIBSBSC["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBSBSC.TransactionTypeEnum} transactionType
 */
_PrepareTransactionFromAddressRIBSBSC["default"].prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount transacted
 * @member {String} unit
 */
_PrepareTransactionFromAddressRIBSBSC["default"].prototype['unit'] = undefined;
// Implement PrepareTransactionFromAddressRIBSE interface:
/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
_PrepareTransactionFromAddressRIBSE["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBSE.TransactionTypeEnum} transactionType
 */
_PrepareTransactionFromAddressRIBSE["default"].prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount transacted.
 * @member {String} unit
 */
_PrepareTransactionFromAddressRIBSE["default"].prototype['unit'] = undefined;
// Implement PrepareTransactionFromAddressRIBSEC interface:
/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
_PrepareTransactionFromAddressRIBSEC["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBSEC.TransactionTypeEnum} transactionType
 */
_PrepareTransactionFromAddressRIBSEC["default"].prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount transacted.
 * @member {String} unit
 */
_PrepareTransactionFromAddressRIBSEC["default"].prototype['unit'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRIBS['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction",
  /**
   * value: "access-list-transaction"
   * @const
   */
  "access-list-transaction": "access-list-transaction",
  /**
   * value: "gas-fee-market-transaction"
   * @const
   */
  "gas-fee-market-transaction": "gas-fee-market-transaction"
};
var _default = PrepareTransactionFromAddressRIBS;
exports["default"] = _default;