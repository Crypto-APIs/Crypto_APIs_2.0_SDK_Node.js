"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSECGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSECGasPrice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSEC model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSEC
 * @version 1.13.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBSEC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSEC</code>.
   * Ethereum Classic
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   */
  function GetWalletTransactionDetailsByTransactionIDRIBSEC(contract, gasLimit, gasPrice, gasUsed, inputData, nonce) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBSEC);
    GetWalletTransactionDetailsByTransactionIDRIBSEC.initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIBSEC, null, [{
    key: "initialize",
    value: function initialize(obj, contract, gasLimit, gasPrice, gasUsed, inputData, nonce) {
      obj['contract'] = contract;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSEC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSEC();
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDRIBSECGasPrice["default"].constructFromObject(data['gasPrice']);
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRIBSEC;
}();
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetWalletTransactionDetailsByTransactionIDRIBSEC.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetWalletTransactionDetailsByTransactionIDRIBSEC.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} gasPrice
 */
GetWalletTransactionDetailsByTransactionIDRIBSEC.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBSEC.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetWalletTransactionDetailsByTransactionIDRIBSEC.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetWalletTransactionDetailsByTransactionIDRIBSEC.prototype['nonce'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBSEC;
exports["default"] = _default;