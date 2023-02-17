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
 * The GetWalletTransactionDetailsByTransactionIDRIBST model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBST
 * @version 1.13.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBST</code>.
   * Tron
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBST
   * @param amount {String} String representation of the amount value
   * @param bandwidthUsed {String} Numeric representation of the transaction used bandwidth
   * @param contract {String} Numeric representation of the transaction contract
   * @param energyUsed {String} String representation of the transaction used energy
   * @param hasInternalTransactions {Boolean} 
   * @param hasTokenTransfers {Boolean} 
   * @param input {String} Numeric representation of the transaction input
   * @param status {String} String representation of the transaction status
   */
  function GetWalletTransactionDetailsByTransactionIDRIBST(amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBST);
    GetWalletTransactionDetailsByTransactionIDRIBST.initialize(this, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status) {
      obj['amount'] = amount;
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['contract'] = contract;
      obj['energyUsed'] = energyUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
      obj['input'] = input;
      obj['status'] = status;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBST} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBST} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBST();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _ApiClient["default"].convertToType(data['bandwidthUsed'], 'String');
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _ApiClient["default"].convertToType(data['energyUsed'], 'String');
        }
        if (data.hasOwnProperty('hasInternalTransactions')) {
          obj['hasInternalTransactions'] = _ApiClient["default"].convertToType(data['hasInternalTransactions'], 'Boolean');
        }
        if (data.hasOwnProperty('hasTokenTransfers')) {
          obj['hasTokenTransfers'] = _ApiClient["default"].convertToType(data['hasTokenTransfers'], 'Boolean');
        }
        if (data.hasOwnProperty('input')) {
          obj['input'] = _ApiClient["default"].convertToType(data['input'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRIBST;
}();
/**
 * String representation of the amount value
 * @member {String} amount
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['amount'] = undefined;

/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['contract'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['energyUsed'] = undefined;

/**
 * @member {Boolean} hasInternalTransactions
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['hasInternalTransactions'] = undefined;

/**
 * @member {Boolean} hasTokenTransfers
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['hasTokenTransfers'] = undefined;

/**
 * Numeric representation of the transaction input
 * @member {String} input
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['input'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} status
 */
GetWalletTransactionDetailsByTransactionIDRIBST.prototype['status'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBST;
exports["default"] = _default;