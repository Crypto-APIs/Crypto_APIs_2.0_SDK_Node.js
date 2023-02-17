"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetZilliqaTransactionDetailsByTransactionIDRIFee = _interopRequireDefault(require("./GetZilliqaTransactionDetailsByTransactionIDRIFee"));
var _ListZilliqaTransactionsByAddressRIRecipientsInner = _interopRequireDefault(require("./ListZilliqaTransactionsByAddressRIRecipientsInner"));
var _ListZilliqaTransactionsByAddressRISendersInner = _interopRequireDefault(require("./ListZilliqaTransactionsByAddressRISendersInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListZilliqaTransactionsByBlockHeightRI model module.
 * @module model/ListZilliqaTransactionsByBlockHeightRI
 * @version 1.13.0
 */
var ListZilliqaTransactionsByBlockHeightRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListZilliqaTransactionsByBlockHeightRI</code>.
   * @alias module:model/ListZilliqaTransactionsByBlockHeightRI
   * @param fee {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} 
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasPrice {Number} Defines the price of the gas.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param minedInBlockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param nonce {Number} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param recipients {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipientsInner>} Defines an object array of the transaction recipients.
   * @param senders {Array.<module:model/ListZilliqaTransactionsByAddressRISendersInner>} Represents an object of addresses that provide the funds.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier.
   * @param transactionIndex {Number} Defines the numeric representation of the transaction index.
   * @param transactionStatus {String} Defines the status of the transaction, whether it is e.g. pending or complete.
   */
  function ListZilliqaTransactionsByBlockHeightRI(fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) {
    _classCallCheck(this, ListZilliqaTransactionsByBlockHeightRI);
    ListZilliqaTransactionsByBlockHeightRI.initialize(this, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListZilliqaTransactionsByBlockHeightRI, null, [{
    key: "initialize",
    value: function initialize(obj, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) {
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['nonce'] = nonce;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionIndex'] = transactionIndex;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListZilliqaTransactionsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListZilliqaTransactionsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/ListZilliqaTransactionsByBlockHeightRI} The populated <code>ListZilliqaTransactionsByBlockHeightRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListZilliqaTransactionsByBlockHeightRI();
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _GetZilliqaTransactionDetailsByTransactionIDRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'Number');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'Number');
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'Number');
        }
        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListZilliqaTransactionsByAddressRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListZilliqaTransactionsByAddressRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('transactionIndex')) {
          obj['transactionIndex'] = _ApiClient["default"].convertToType(data['transactionIndex'], 'Number');
        }
        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListZilliqaTransactionsByBlockHeightRI;
}();
/**
 * @member {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} fee
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['fee'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['gasLimit'] = undefined;

/**
 * Defines the price of the gas.
 * @member {Number} gasPrice
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['gasUsed'] = undefined;

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} nonce
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['nonce'] = undefined;

/**
 * Defines an object array of the transaction recipients.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipientsInner>} recipients
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRISendersInner>} senders
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier.
 * @member {String} transactionHash
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['transactionHash'] = undefined;

/**
 * Defines the numeric representation of the transaction index.
 * @member {Number} transactionIndex
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['transactionIndex'] = undefined;

/**
 * Defines the status of the transaction, whether it is e.g. pending or complete.
 * @member {String} transactionStatus
 */
ListZilliqaTransactionsByBlockHeightRI.prototype['transactionStatus'] = undefined;
var _default = ListZilliqaTransactionsByBlockHeightRI;
exports["default"] = _default;