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
 * The ListInternalTransactionDetailsByTransactionHashRI model module.
 * @module model/ListInternalTransactionDetailsByTransactionHashRI
 * @version 1.13.0
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
  }]);
  return ListInternalTransactionDetailsByTransactionHashRI;
}();
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