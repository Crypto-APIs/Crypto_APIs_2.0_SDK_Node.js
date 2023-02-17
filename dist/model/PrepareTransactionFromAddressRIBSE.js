"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareTransactionFromAddressRIBSBSCFee = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBSBSCFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareTransactionFromAddressRIBSE model module.
 * @module model/PrepareTransactionFromAddressRIBSE
 * @version 1.13.0
 */
var PrepareTransactionFromAddressRIBSE = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRIBSE</code>.
   * Ethereum
   * @alias module:model/PrepareTransactionFromAddressRIBSE
   * @param fee {module:model/PrepareTransactionFromAddressRIBSBSCFee} 
   * @param transactionType {module:model/PrepareTransactionFromAddressRIBSE.TransactionTypeEnum} Representation of the transaction type
   * @param unit {String} Represents the unit of the amount transacted.
   */
  function PrepareTransactionFromAddressRIBSE(fee, transactionType, unit) {
    _classCallCheck(this, PrepareTransactionFromAddressRIBSE);
    PrepareTransactionFromAddressRIBSE.initialize(this, fee, transactionType, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareTransactionFromAddressRIBSE, null, [{
    key: "initialize",
    value: function initialize(obj, fee, transactionType, unit) {
      obj['fee'] = fee;
      obj['transactionType'] = transactionType;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRIBSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRIBSE} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRIBSE} The populated <code>PrepareTransactionFromAddressRIBSE</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareTransactionFromAddressRIBSE();
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
  return PrepareTransactionFromAddressRIBSE;
}();
/**
 * @member {module:model/PrepareTransactionFromAddressRIBSBSCFee} fee
 */
PrepareTransactionFromAddressRIBSE.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareTransactionFromAddressRIBSE.TransactionTypeEnum} transactionType
 */
PrepareTransactionFromAddressRIBSE.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount transacted.
 * @member {String} unit
 */
PrepareTransactionFromAddressRIBSE.prototype['unit'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRIBSE['TransactionTypeEnum'] = {
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
var _default = PrepareTransactionFromAddressRIBSE;
exports["default"] = _default;