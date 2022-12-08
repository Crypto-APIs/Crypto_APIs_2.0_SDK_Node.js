"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListXRPRippleTransactionsByBlockHeightRIFee = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHeightRIFee"));
var _ListXRPRippleTransactionsByBlockHeightRIOffer = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHeightRIOffer"));
var _ListXRPRippleTransactionsByBlockHeightRIReceive = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHeightRIReceive"));
var _ListXRPRippleTransactionsByBlockHeightRIRecipientsInner = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHeightRIRecipientsInner"));
var _ListXRPRippleTransactionsByBlockHeightRISendersInner = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHeightRISendersInner"));
var _ListXRPRippleTransactionsByBlockHeightRIValue = _interopRequireDefault(require("./ListXRPRippleTransactionsByBlockHeightRIValue"));
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
 * The ListXRPRippleTransactionsByBlockHeightRI model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRI
 * @version 1.11.0
 */
var ListXRPRippleTransactionsByBlockHeightRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByBlockHeightRI</code>.
   * @alias module:model/ListXRPRippleTransactionsByBlockHeightRI
   * @param index {Number} 
   * @param minedInBlockHash {String} 
   * @param recipients {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner>} Object Array representation of transaction receivers
   * @param senders {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner>} Object Array representation of transaction senders
   * @param sequence {Number} 
   * @param status {String} 
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} 
   * @param type {String} 
   * @param fee {module:model/ListXRPRippleTransactionsByBlockHeightRIFee} 
   * @param offer {module:model/ListXRPRippleTransactionsByBlockHeightRIOffer} 
   * @param receive {module:model/ListXRPRippleTransactionsByBlockHeightRIReceive} 
   * @param value {module:model/ListXRPRippleTransactionsByBlockHeightRIValue} 
   */
  function ListXRPRippleTransactionsByBlockHeightRI(index, minedInBlockHash, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
    _classCallCheck(this, ListXRPRippleTransactionsByBlockHeightRI);
    ListXRPRippleTransactionsByBlockHeightRI.initialize(this, index, minedInBlockHash, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListXRPRippleTransactionsByBlockHeightRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, minedInBlockHash, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['sequence'] = sequence;
      obj['status'] = status;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['type'] = type;
      obj['fee'] = fee;
      obj['offer'] = offer;
      obj['receive'] = receive;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListXRPRippleTransactionsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByBlockHeightRI} The populated <code>ListXRPRippleTransactionsByBlockHeightRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByBlockHeightRI();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('destinationTag')) {
          obj['destinationTag'] = _ApiClient["default"].convertToType(data['destinationTag'], 'Number');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_ListXRPRippleTransactionsByBlockHeightRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListXRPRippleTransactionsByBlockHeightRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListXRPRippleTransactionsByBlockHeightRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _ListXRPRippleTransactionsByBlockHeightRIOffer["default"].constructFromObject(data['offer']);
        }
        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _ListXRPRippleTransactionsByBlockHeightRIReceive["default"].constructFromObject(data['receive']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListXRPRippleTransactionsByBlockHeightRIValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListXRPRippleTransactionsByBlockHeightRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListXRPRippleTransactionsByBlockHeightRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListXRPRippleTransactionsByBlockHeightRI.RequiredProperties),
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
      if (data['additionalData'] && !(typeof data['additionalData'] === 'string' || data['additionalData'] instanceof String)) {
        throw new Error("Expected the field `additionalData` to be a primitive type in the JSON string but got " + data['additionalData']);
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
            _ListXRPRippleTransactionsByBlockHeightRIRecipientsInner["default"].validateJsonObject(item);
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
            _ListXRPRippleTransactionsByBlockHeightRISendersInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
        throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // validate the optional field `fee`
      if (data['fee']) {
        // data not null
        _ListXRPRippleTransactionsByBlockHeightRIFee["default"].validateJSON(data['fee']);
      }
      // validate the optional field `offer`
      if (data['offer']) {
        // data not null
        _ListXRPRippleTransactionsByBlockHeightRIOffer["default"].validateJSON(data['offer']);
      }
      // validate the optional field `receive`
      if (data['receive']) {
        // data not null
        _ListXRPRippleTransactionsByBlockHeightRIReceive["default"].validateJSON(data['receive']);
      }
      // validate the optional field `value`
      if (data['value']) {
        // data not null
        _ListXRPRippleTransactionsByBlockHeightRIValue["default"].validateJSON(data['value']);
      }
      return true;
    }
  }]);
  return ListXRPRippleTransactionsByBlockHeightRI;
}();
ListXRPRippleTransactionsByBlockHeightRI.RequiredProperties = ["index", "minedInBlockHash", "recipients", "senders", "sequence", "status", "timestamp", "transactionHash", "type", "fee", "offer", "receive", "value"];

/**
 * @member {String} additionalData
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['additionalData'] = undefined;

/**
 * @member {Number} destinationTag
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['destinationTag'] = undefined;

/**
 * @member {Number} index
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['index'] = undefined;

/**
 * @member {String} minedInBlockHash
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['minedInBlockHash'] = undefined;

/**
 * Object Array representation of transaction receivers
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRIRecipientsInner>} recipients
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['recipients'] = undefined;

/**
 * Object Array representation of transaction senders
 * @member {Array.<module:model/ListXRPRippleTransactionsByBlockHeightRISendersInner>} senders
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['senders'] = undefined;

/**
 * @member {Number} sequence
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['sequence'] = undefined;

/**
 * @member {String} status
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * @member {String} transactionHash
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['transactionHash'] = undefined;

/**
 * @member {String} type
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['type'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIFee} fee
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIOffer} offer
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['offer'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIReceive} receive
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['receive'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByBlockHeightRIValue} value
 */
ListXRPRippleTransactionsByBlockHeightRI.prototype['value'] = undefined;
var _default = ListXRPRippleTransactionsByBlockHeightRI;
exports["default"] = _default;