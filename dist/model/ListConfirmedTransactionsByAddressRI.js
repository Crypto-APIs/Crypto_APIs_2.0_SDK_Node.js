"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIRecipientsInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIRecipientsInner"));
var _GetTransactionDetailsByTransactionIDRISendersInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRISendersInner"));
var _ListConfirmedTransactionsByAddressRIBS = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBS"));
var _ListConfirmedTransactionsByAddressRIFee = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIFee"));
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
 * The ListConfirmedTransactionsByAddressRI model module.
 * @module model/ListConfirmedTransactionsByAddressRI
 * @version 1.11.0
 */
var ListConfirmedTransactionsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRI</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRI
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param index {Number} Represents the index position of the transaction in the block.
   * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param fee {module:model/ListConfirmedTransactionsByAddressRIFee} 
   * @param blockchainSpecific {module:model/ListConfirmedTransactionsByAddressRIBS} 
   */
  function ListConfirmedTransactionsByAddressRI(transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRI);
    ListConfirmedTransactionsByAddressRI.initialize(this, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) {
      obj['transactionId'] = transactionId;
      obj['index'] = index;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['fee'] = fee;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRI} The populated <code>ListConfirmedTransactionsByAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRI();
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }
        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetTransactionDetailsByTransactionIDRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_GetTransactionDetailsByTransactionIDRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListConfirmedTransactionsByAddressRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _ListConfirmedTransactionsByAddressRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListConfirmedTransactionsByAddressRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListConfirmedTransactionsByAddressRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListConfirmedTransactionsByAddressRI.RequiredProperties),
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
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
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
            _GetTransactionDetailsByTransactionIDRIRecipientsInner["default"].validateJsonObject(item);
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
            _GetTransactionDetailsByTransactionIDRISendersInner["default"].validateJsonObject(_item);
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
      // validate the optional field `fee`
      if (data['fee']) {
        // data not null
        _ListConfirmedTransactionsByAddressRIFee["default"].validateJSON(data['fee']);
      }
      // validate the optional field `blockchainSpecific`
      if (data['blockchainSpecific']) {
        // data not null
        _ListConfirmedTransactionsByAddressRIBS["default"].validateJSON(data['blockchainSpecific']);
      }
      return true;
    }
  }]);
  return ListConfirmedTransactionsByAddressRI;
}();
ListConfirmedTransactionsByAddressRI.RequiredProperties = ["transactionId", "index", "recipients", "senders", "timestamp", "transactionHash", "fee", "blockchainSpecific"];

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
ListConfirmedTransactionsByAddressRI.prototype['transactionId'] = undefined;

/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */
ListConfirmedTransactionsByAddressRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListConfirmedTransactionsByAddressRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListConfirmedTransactionsByAddressRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner>} recipients
 */
ListConfirmedTransactionsByAddressRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRISendersInner>} senders
 */
ListConfirmedTransactionsByAddressRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListConfirmedTransactionsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
ListConfirmedTransactionsByAddressRI.prototype['transactionHash'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIFee} fee
 */
ListConfirmedTransactionsByAddressRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBS} blockchainSpecific
 */
ListConfirmedTransactionsByAddressRI.prototype['blockchainSpecific'] = undefined;
var _default = ListConfirmedTransactionsByAddressRI;
exports["default"] = _default;