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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListZilliqaTransactionsByAddressRI model module.
 * @module model/ListZilliqaTransactionsByAddressRI
 * @version 1.11.0
 */
var ListZilliqaTransactionsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListZilliqaTransactionsByAddressRI</code>.
   * @alias module:model/ListZilliqaTransactionsByAddressRI
   * @param fee {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} 
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasPrice {Number} Defines the price of the gas.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param nonce {Number} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param recipients {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipientsInner>} Defines an object array of the transaction recipients.
   * @param senders {Array.<module:model/ListZilliqaTransactionsByAddressRISendersInner>} Represents an object of addresses that provide the funds.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier.
   * @param transactionIndex {Number} Defines the numeric representation of the transaction index.
   * @param transactionStatus {String} Defines the status of the transaction, whether it is e.g. pending or complete.
   */
  function ListZilliqaTransactionsByAddressRI(fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) {
    _classCallCheck(this, ListZilliqaTransactionsByAddressRI);
    ListZilliqaTransactionsByAddressRI.initialize(this, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListZilliqaTransactionsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, fee, gasLimit, gasPrice, gasUsed, minedInBlockHash, minedInBlockHeight, nonce, recipients, senders, timestamp, transactionHash, transactionIndex, transactionStatus) {
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['nonce'] = nonce;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionIndex'] = transactionIndex;
      obj['transactionStatus'] = transactionStatus;
    }

    /**
     * Constructs a <code>ListZilliqaTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListZilliqaTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListZilliqaTransactionsByAddressRI} The populated <code>ListZilliqaTransactionsByAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListZilliqaTransactionsByAddressRI();
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
        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
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

    /**
     * Validates the JSON data with respect to <code>ListZilliqaTransactionsByAddressRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListZilliqaTransactionsByAddressRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListZilliqaTransactionsByAddressRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `fee`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['fee']) {
        // data not null
        _GetZilliqaTransactionDetailsByTransactionIDRIFee["default"].validateJSON(data['fee']);
      }
      // ensure the json data is a string
      if (data['minedInBlockHash'] && !(typeof data['minedInBlockHash'] === 'string' || data['minedInBlockHash'] instanceof String)) {
        throw new Error("Expected the field `minedInBlockHash` to be a primitive type in the JSON string but got " + data['minedInBlockHash']);
      }
      if (data['recipients']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['recipients'])) {
          throw new Error("Expected the field `recipients` to be an array in the JSON data but got " + data['recipients']);
        }
        // validate the optional field `recipients` (array)
        var _iterator2 = _createForOfIteratorHelper(data['recipients']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _ListZilliqaTransactionsByAddressRIRecipientsInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['senders']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['senders'])) {
          throw new Error("Expected the field `senders` to be an array in the JSON data but got " + data['senders']);
        }
        // validate the optional field `senders` (array)
        var _iterator3 = _createForOfIteratorHelper(data['senders']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _ListZilliqaTransactionsByAddressRISendersInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
        throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
      }
      // ensure the json data is a string
      if (data['transactionStatus'] && !(typeof data['transactionStatus'] === 'string' || data['transactionStatus'] instanceof String)) {
        throw new Error("Expected the field `transactionStatus` to be a primitive type in the JSON string but got " + data['transactionStatus']);
      }
      return true;
    }
  }]);
  return ListZilliqaTransactionsByAddressRI;
}();
ListZilliqaTransactionsByAddressRI.RequiredProperties = ["fee", "gasLimit", "gasPrice", "gasUsed", "minedInBlockHash", "minedInBlockHeight", "nonce", "recipients", "senders", "timestamp", "transactionHash", "transactionIndex", "transactionStatus"];

/**
 * @member {module:model/GetZilliqaTransactionDetailsByTransactionIDRIFee} fee
 */
ListZilliqaTransactionsByAddressRI.prototype['fee'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
ListZilliqaTransactionsByAddressRI.prototype['gasLimit'] = undefined;

/**
 * Defines the price of the gas.
 * @member {Number} gasPrice
 */
ListZilliqaTransactionsByAddressRI.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
ListZilliqaTransactionsByAddressRI.prototype['gasUsed'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListZilliqaTransactionsByAddressRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} minedInBlockHeight
 */
ListZilliqaTransactionsByAddressRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {Number} nonce
 */
ListZilliqaTransactionsByAddressRI.prototype['nonce'] = undefined;

/**
 * Defines an object array of the transaction recipients.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRIRecipientsInner>} recipients
 */
ListZilliqaTransactionsByAddressRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/ListZilliqaTransactionsByAddressRISendersInner>} senders
 */
ListZilliqaTransactionsByAddressRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
ListZilliqaTransactionsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier.
 * @member {String} transactionHash
 */
ListZilliqaTransactionsByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Defines the numeric representation of the transaction index.
 * @member {Number} transactionIndex
 */
ListZilliqaTransactionsByAddressRI.prototype['transactionIndex'] = undefined;

/**
 * Defines the status of the transaction, whether it is e.g. pending or complete.
 * @member {String} transactionStatus
 */
ListZilliqaTransactionsByAddressRI.prototype['transactionStatus'] = undefined;
var _default = ListZilliqaTransactionsByAddressRI;
exports["default"] = _default;