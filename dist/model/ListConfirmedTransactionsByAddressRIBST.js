"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The ListConfirmedTransactionsByAddressRIBST model module.
 * @module model/ListConfirmedTransactionsByAddressRIBST
 * @version 1.11.0
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

    /**
     * Validates the JSON data with respect to <code>ListConfirmedTransactionsByAddressRIBST</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListConfirmedTransactionsByAddressRIBST</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListConfirmedTransactionsByAddressRIBST.RequiredProperties),
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
      if (data['bandwidthUsed'] && !(typeof data['bandwidthUsed'] === 'string' || data['bandwidthUsed'] instanceof String)) {
        throw new Error("Expected the field `bandwidthUsed` to be a primitive type in the JSON string but got " + data['bandwidthUsed']);
      }
      // ensure the json data is a string
      if (data['contract'] && !(typeof data['contract'] === 'string' || data['contract'] instanceof String)) {
        throw new Error("Expected the field `contract` to be a primitive type in the JSON string but got " + data['contract']);
      }
      // ensure the json data is a string
      if (data['energyUsed'] && !(typeof data['energyUsed'] === 'string' || data['energyUsed'] instanceof String)) {
        throw new Error("Expected the field `energyUsed` to be a primitive type in the JSON string but got " + data['energyUsed']);
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
  return ListConfirmedTransactionsByAddressRIBST;
}();
ListConfirmedTransactionsByAddressRIBST.RequiredProperties = ["bandwidthUsed", "contract", "energyUsed", "hasInternalTransactions", "hasTokenTransfers", "inputData", "internalTransactionsCount", "tokenTransfersCount", "transactionStatus"];

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