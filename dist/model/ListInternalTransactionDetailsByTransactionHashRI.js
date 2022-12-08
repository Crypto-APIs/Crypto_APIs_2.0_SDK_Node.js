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
 * The ListInternalTransactionDetailsByTransactionHashRI model module.
 * @module model/ListInternalTransactionDetailsByTransactionHashRI
 * @version 1.11.0
 */
var ListInternalTransactionDetailsByTransactionHashRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListInternalTransactionDetailsByTransactionHashRI</code>.
   * @alias module:model/ListInternalTransactionDetailsByTransactionHashRI
   * @param amount {String} Defines the specific amount of the transaction.
   * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param operationID {String} Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
   * @param operationType {String} Defines the call type of the internal transaction.
   * @param parentHash {String} Defines the specific hash of the parent transaction.
   * @param recipient {String} Represents the recipient address with the respective amount.
   * @param sender {String} Represents the sender address with the respective amount.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   */
  function ListInternalTransactionDetailsByTransactionHashRI(amount, blockHash, blockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) {
    _classCallCheck(this, ListInternalTransactionDetailsByTransactionHashRI);
    ListInternalTransactionDetailsByTransactionHashRI.initialize(this, amount, blockHash, blockHeight, operationID, operationType, parentHash, recipient, sender, timestamp);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListInternalTransactionDetailsByTransactionHashRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, blockHash, blockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) {
      obj['amount'] = amount;
      obj['blockHash'] = blockHash;
      obj['blockHeight'] = blockHeight;
      obj['operationID'] = operationID;
      obj['operationType'] = operationType;
      obj['parentHash'] = parentHash;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>ListInternalTransactionDetailsByTransactionHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionDetailsByTransactionHashRI} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionDetailsByTransactionHashRI} The populated <code>ListInternalTransactionDetailsByTransactionHashRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListInternalTransactionDetailsByTransactionHashRI();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('blockHash')) {
          obj['blockHash'] = _ApiClient["default"].convertToType(data['blockHash'], 'String');
        }
        if (data.hasOwnProperty('blockHeight')) {
          obj['blockHeight'] = _ApiClient["default"].convertToType(data['blockHeight'], 'Number');
        }
        if (data.hasOwnProperty('operationID')) {
          obj['operationID'] = _ApiClient["default"].convertToType(data['operationID'], 'String');
        }
        if (data.hasOwnProperty('operationType')) {
          obj['operationType'] = _ApiClient["default"].convertToType(data['operationType'], 'String');
        }
        if (data.hasOwnProperty('parentHash')) {
          obj['parentHash'] = _ApiClient["default"].convertToType(data['parentHash'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListInternalTransactionDetailsByTransactionHashRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListInternalTransactionDetailsByTransactionHashRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListInternalTransactionDetailsByTransactionHashRI.RequiredProperties),
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
      if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
        throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
      }
      // ensure the json data is a string
      if (data['blockHash'] && !(typeof data['blockHash'] === 'string' || data['blockHash'] instanceof String)) {
        throw new Error("Expected the field `blockHash` to be a primitive type in the JSON string but got " + data['blockHash']);
      }
      // ensure the json data is a string
      if (data['operationID'] && !(typeof data['operationID'] === 'string' || data['operationID'] instanceof String)) {
        throw new Error("Expected the field `operationID` to be a primitive type in the JSON string but got " + data['operationID']);
      }
      // ensure the json data is a string
      if (data['operationType'] && !(typeof data['operationType'] === 'string' || data['operationType'] instanceof String)) {
        throw new Error("Expected the field `operationType` to be a primitive type in the JSON string but got " + data['operationType']);
      }
      // ensure the json data is a string
      if (data['parentHash'] && !(typeof data['parentHash'] === 'string' || data['parentHash'] instanceof String)) {
        throw new Error("Expected the field `parentHash` to be a primitive type in the JSON string but got " + data['parentHash']);
      }
      // ensure the json data is a string
      if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
        throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
      }
      // ensure the json data is a string
      if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
        throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
      }
      return true;
    }
  }]);
  return ListInternalTransactionDetailsByTransactionHashRI;
}();
ListInternalTransactionDetailsByTransactionHashRI.RequiredProperties = ["amount", "blockHash", "blockHeight", "operationID", "operationType", "parentHash", "recipient", "sender", "timestamp"];

/**
 * Defines the specific amount of the transaction.
 * @member {String} amount
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['amount'] = undefined;

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['blockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['blockHeight'] = undefined;

/**
 * Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
 * @member {String} operationID
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['operationID'] = undefined;

/**
 * Defines the call type of the internal transaction.
 * @member {String} operationType
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['operationType'] = undefined;

/**
 * Defines the specific hash of the parent transaction.
 * @member {String} parentHash
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['parentHash'] = undefined;

/**
 * Represents the recipient address with the respective amount.
 * @member {String} recipient
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['recipient'] = undefined;

/**
 * Represents the sender address with the respective amount.
 * @member {String} sender
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['sender'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListInternalTransactionDetailsByTransactionHashRI.prototype['timestamp'] = undefined;
var _default = ListInternalTransactionDetailsByTransactionHashRI;
exports["default"] = _default;