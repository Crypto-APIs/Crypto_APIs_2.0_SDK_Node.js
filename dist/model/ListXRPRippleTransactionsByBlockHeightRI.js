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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListXRPRippleTransactionsByBlockHeightRI model module.
 * @module model/ListXRPRippleTransactionsByBlockHeightRI
 * @version 1.13.0
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
  }]);
  return ListXRPRippleTransactionsByBlockHeightRI;
}();
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