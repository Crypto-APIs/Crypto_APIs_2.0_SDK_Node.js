"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListConfirmedTransactionsByAddressRIBSPGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSPGasPrice"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBSP model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSP
 * @version 1.11.0
 */
var ListConfirmedTransactionsByAddressRIBSP = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSP</code>.
   * Polygon
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSP
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSPGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param hasInternalTransactions {Boolean} Defines if there are internal transactions (true) or not (false)
   * @param hasTokenTransfers {Boolean} Defines if there are token transfers (true) or not (false)
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param internalTransactionsCount {Number} Rrepresentation of the internal transactions count
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param tokenTransfersCount {Number} Representation of the token transfers count
   * @param transactionStatus {String} Representation of the transaction status
   */
  function ListConfirmedTransactionsByAddressRIBSP(contract, gasLimit, gasPrice, gasUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSP);
    ListConfirmedTransactionsByAddressRIBSP.initialize(this, contract, gasLimit, gasPrice, gasUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBSP, null, [{
    key: "initialize",
    value: function initialize(obj, contract, gasLimit, gasPrice, gasUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus) {
      obj['contract'] = contract;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
      obj['inputData'] = inputData;
      obj['internalTransactionsCount'] = internalTransactionsCount;
      obj['nonce'] = nonce;
      obj['tokenTransfersCount'] = tokenTransfersCount;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSP} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSP} The populated <code>ListConfirmedTransactionsByAddressRIBSP</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSP();
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListConfirmedTransactionsByAddressRIBSPGasPrice["default"].constructFromObject(data['gasPrice']);
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
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
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
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

    /**
     * Validates the JSON data with respect to <code>ListConfirmedTransactionsByAddressRIBSP</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListConfirmedTransactionsByAddressRIBSP</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListConfirmedTransactionsByAddressRIBSP.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['contract'] && !(typeof data['contract'] === 'string' || data['contract'] instanceof String)) {
        throw new Error("Expected the field `contract` to be a primitive type in the JSON string but got " + data['contract']);
      }
      // ensure the json data is a string
      if (data['gasLimit'] && !(typeof data['gasLimit'] === 'string' || data['gasLimit'] instanceof String)) {
        throw new Error("Expected the field `gasLimit` to be a primitive type in the JSON string but got " + data['gasLimit']);
      }
      // validate the optional field `gasPrice`
      if (data['gasPrice']) {
        // data not null
        _ListConfirmedTransactionsByAddressRIBSPGasPrice["default"].validateJSON(data['gasPrice']);
      }
      // ensure the json data is a string
      if (data['gasUsed'] && !(typeof data['gasUsed'] === 'string' || data['gasUsed'] instanceof String)) {
        throw new Error("Expected the field `gasUsed` to be a primitive type in the JSON string but got " + data['gasUsed']);
      }
      // ensure the json data is a string
      if (data['inputData'] && !(typeof data['inputData'] === 'string' || data['inputData'] instanceof String)) {
        throw new Error("Expected the field `inputData` to be a primitive type in the JSON string but got " + data['inputData']);
      }
      // ensure the json data is a string
      if (data['transactionStatus'] && !(typeof data['transactionStatus'] === 'string' || data['transactionStatus'] instanceof String)) {
        throw new Error("Expected the field `transactionStatus` to be a primitive type in the JSON string but got " + data['transactionStatus']);
      }
      return true;
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBSP;
}();
ListConfirmedTransactionsByAddressRIBSP.RequiredProperties = ["contract", "gasLimit", "gasPrice", "gasUsed", "hasInternalTransactions", "hasTokenTransfers", "inputData", "internalTransactionsCount", "nonce", "tokenTransfersCount", "transactionStatus"];

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSPGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['gasUsed'] = undefined;

/**
 * Defines if there are internal transactions (true) or not (false)
 * @member {Boolean} hasInternalTransactions
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if there are token transfers (true) or not (false)
 * @member {Boolean} hasTokenTransfers
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['hasTokenTransfers'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['inputData'] = undefined;

/**
 * Rrepresentation of the internal transactions count
 * @member {Number} internalTransactionsCount
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['internalTransactionsCount'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['nonce'] = undefined;

/**
 * Representation of the token transfers count
 * @member {Number} tokenTransfersCount
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['tokenTransfersCount'] = undefined;

/**
 * Representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBSP.prototype['transactionStatus'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSP;
exports["default"] = _default;