"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBST model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBST
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code>.
   * Tron
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST
   * @param amount {String} Defines the amount of the transaction.
   * @param bandwidthUsed {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} 
   * @param contract {String} Represents the specific transaction contract.
   * @param energyUsed {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} 
   * @param hasInternalTransactions {Boolean} Defines if the transaction includes internal transactions (true) or not (false).
   * @param hasTokenTransfers {String} Defines if the transaction includes token transfers (true) or not (false).
   * @param input {String} Represents the transaction's input value.
   * @param recipients {String} Represents the recipient address.
   * @param senders {String} Represents the sender address.
   * @param transactionStatus {String} Represents the status of this transaction.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBST(amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBST);
    GetTransactionDetailsByTransactionIDFromCallbackRIBST.initialize(this, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus) {
      obj['amount'] = amount;
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['contract'] = contract;
      obj['energyUsed'] = energyUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
      obj['input'] = input;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBST();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed["default"].constructFromObject(data['bandwidthUsed']);
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed["default"].constructFromObject(data['energyUsed']);
        }
        if (data.hasOwnProperty('hasInternalTransactions')) {
          obj['hasInternalTransactions'] = _ApiClient["default"].convertToType(data['hasInternalTransactions'], 'Boolean');
        }
        if (data.hasOwnProperty('hasTokenTransfers')) {
          obj['hasTokenTransfers'] = _ApiClient["default"].convertToType(data['hasTokenTransfers'], 'String');
        }
        if (data.hasOwnProperty('input')) {
          obj['input'] = _ApiClient["default"].convertToType(data['input'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], 'String');
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], 'String');
        }
        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRIBST;
}();
/**
 * Defines the amount of the transaction.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['amount'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} bandwidthUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['contract'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} energyUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['energyUsed'] = undefined;

/**
 * Defines if the transaction includes internal transactions (true) or not (false).
 * @member {Boolean} hasInternalTransactions
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if the transaction includes token transfers (true) or not (false).
 * @member {String} hasTokenTransfers
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['hasTokenTransfers'] = undefined;

/**
 * Represents the transaction's input value.
 * @member {String} input
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['input'] = undefined;

/**
 * Represents the recipient address.
 * @member {String} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['recipients'] = undefined;

/**
 * Represents the sender address.
 * @member {String} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['senders'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBST.prototype['transactionStatus'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBST;
exports["default"] = _default;