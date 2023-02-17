"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner"));
var _GetXRPRippleTransactionDetailsByTransactionIDRISendersInner = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRISendersInner"));
var _ListXRPRippleTransactionsByAddressRIFee = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressRIFee"));
var _ListXRPRippleTransactionsByAddressRIOffer = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressRIOffer"));
var _ListXRPRippleTransactionsByAddressRIReceive = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressRIReceive"));
var _ListXRPRippleTransactionsByAddressRIValue = _interopRequireDefault(require("./ListXRPRippleTransactionsByAddressRIValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListXRPRippleTransactionsByAddressRI model module.
 * @module model/ListXRPRippleTransactionsByAddressRI
 * @version 1.13.0
 */
var ListXRPRippleTransactionsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListXRPRippleTransactionsByAddressRI</code>.
   * @alias module:model/ListXRPRippleTransactionsByAddressRI
   * @param index {Number} Represents the index position of the transaction in the block.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner>} Represents an object of addresses that provide the funds.
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param status {String} Defines the status of the transaction.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the hash of the XRP transaction.
   * @param type {String} Specifies the type of the transaction.
   * @param fee {module:model/ListXRPRippleTransactionsByAddressRIFee} 
   * @param offer {module:model/ListXRPRippleTransactionsByAddressRIOffer} 
   * @param receive {module:model/ListXRPRippleTransactionsByAddressRIReceive} 
   * @param value {module:model/ListXRPRippleTransactionsByAddressRIValue} 
   */
  function ListXRPRippleTransactionsByAddressRI(index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
    _classCallCheck(this, ListXRPRippleTransactionsByAddressRI);
    ListXRPRippleTransactionsByAddressRI.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListXRPRippleTransactionsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, sequence, status, timestamp, transactionHash, type, fee, offer, receive, value) {
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
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
     * Constructs a <code>ListXRPRippleTransactionsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListXRPRippleTransactionsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListXRPRippleTransactionsByAddressRI} The populated <code>ListXRPRippleTransactionsByAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListXRPRippleTransactionsByAddressRI();
        if (data.hasOwnProperty('destinationTag')) {
          obj['destinationTag'] = _ApiClient["default"].convertToType(data['destinationTag'], 'Number');
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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_GetXRPRippleTransactionDetailsByTransactionIDRISendersInner["default"]]);
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
          obj['fee'] = _ListXRPRippleTransactionsByAddressRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _ListXRPRippleTransactionsByAddressRIOffer["default"].constructFromObject(data['offer']);
        }
        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _ListXRPRippleTransactionsByAddressRIReceive["default"].constructFromObject(data['receive']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ListXRPRippleTransactionsByAddressRIValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }
  }]);
  return ListXRPRippleTransactionsByAddressRI;
}();
/**
 * @member {Number} destinationTag
 */
ListXRPRippleTransactionsByAddressRI.prototype['destinationTag'] = undefined;

/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */
ListXRPRippleTransactionsByAddressRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
ListXRPRippleTransactionsByAddressRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
ListXRPRippleTransactionsByAddressRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner>} recipients
 */
ListXRPRippleTransactionsByAddressRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner>} senders
 */
ListXRPRippleTransactionsByAddressRI.prototype['senders'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
ListXRPRippleTransactionsByAddressRI.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
ListXRPRippleTransactionsByAddressRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
ListXRPRippleTransactionsByAddressRI.prototype['timestamp'] = undefined;

/**
 * Represents the hash of the XRP transaction.
 * @member {String} transactionHash
 */
ListXRPRippleTransactionsByAddressRI.prototype['transactionHash'] = undefined;

/**
 * Specifies the type of the transaction.
 * @member {String} type
 */
ListXRPRippleTransactionsByAddressRI.prototype['type'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIFee} fee
 */
ListXRPRippleTransactionsByAddressRI.prototype['fee'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIOffer} offer
 */
ListXRPRippleTransactionsByAddressRI.prototype['offer'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIReceive} receive
 */
ListXRPRippleTransactionsByAddressRI.prototype['receive'] = undefined;

/**
 * @member {module:model/ListXRPRippleTransactionsByAddressRIValue} value
 */
ListXRPRippleTransactionsByAddressRI.prototype['value'] = undefined;
var _default = ListXRPRippleTransactionsByAddressRI;
exports["default"] = _default;