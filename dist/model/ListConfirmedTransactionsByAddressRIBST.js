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
 * The ListConfirmedTransactionsByAddressRIBST model module.
 * @module model/ListConfirmedTransactionsByAddressRIBST
 * @version 1.13.0
 */
var ListConfirmedTransactionsByAddressRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBST</code>.
   * Tron
   * @alias module:model/ListConfirmedTransactionsByAddressRIBST
   * @param bandwidthUsed {String} Numeric representation of the transaction used bandwidth
   * @param contract {String} Numeric representation of the transaction contract
   * @param energyUsed {String} String representation of the transaction used energy
   * @param hasInternalTransactions {Boolean} Defines if there are internal transactions (true) or not (false)
   * @param hasTokenTransfers {Boolean} Defines if there are  tokens transfers (true) or not (false)
   * @param inputData {String} Numeric representation of the transaction input
   * @param internalTransactionsCount {Number} Representation of the internal transactions count
   * @param tokenTransfersCount {Number} Representation of the token transfers count
   * @param transactionStatus {String} Represents if the transaction is successfull or failed.
   */
  function ListConfirmedTransactionsByAddressRIBST(bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, tokenTransfersCount, transactionStatus) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBST);
    ListConfirmedTransactionsByAddressRIBST.initialize(this, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, tokenTransfersCount, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, tokenTransfersCount, transactionStatus) {
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['contract'] = contract;
      obj['energyUsed'] = energyUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
      obj['inputData'] = inputData;
      obj['internalTransactionsCount'] = internalTransactionsCount;
      obj['tokenTransfersCount'] = tokenTransfersCount;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBST} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBST} The populated <code>ListConfirmedTransactionsByAddressRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBST();
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
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('internalTransactionsCount')) {
          obj['internalTransactionsCount'] = _ApiClient["default"].convertToType(data['internalTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('tokenTransfersCount')) {
          obj['tokenTransfersCount'] = _ApiClient["default"].convertToType(data['tokenTransfersCount'], 'Number');
        }
        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBST;
}();
/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
ListConfirmedTransactionsByAddressRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBST.prototype['contract'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
ListConfirmedTransactionsByAddressRIBST.prototype['energyUsed'] = undefined;

/**
 * Defines if there are internal transactions (true) or not (false)
 * @member {Boolean} hasInternalTransactions
 */
ListConfirmedTransactionsByAddressRIBST.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if there are  tokens transfers (true) or not (false)
 * @member {Boolean} hasTokenTransfers
 */
ListConfirmedTransactionsByAddressRIBST.prototype['hasTokenTransfers'] = undefined;

/**
 * Numeric representation of the transaction input
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBST.prototype['inputData'] = undefined;

/**
 * Representation of the internal transactions count
 * @member {Number} internalTransactionsCount
 */
ListConfirmedTransactionsByAddressRIBST.prototype['internalTransactionsCount'] = undefined;

/**
 * Representation of the token transfers count
 * @member {Number} tokenTransfersCount
 */
ListConfirmedTransactionsByAddressRIBST.prototype['tokenTransfersCount'] = undefined;

/**
 * Represents if the transaction is successfull or failed.
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBST.prototype['transactionStatus'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBST;
exports["default"] = _default;