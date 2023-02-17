"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIFee = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIFee"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIOffer = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIOffer"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIReceive = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIReceive"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner"));
var _GetXRPRippleTransactionDetailsByTransactionIDRISendersInner = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRISendersInner"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIValue = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIValue"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetXRPRippleTransactionDetailsByTransactionIDRI model module.
 * @module model/GetXRPRippleTransactionDetailsByTransactionIDRI
 * @version 1.13.0
 */
var GetXRPRippleTransactionDetailsByTransactionIDRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleTransactionDetailsByTransactionIDRI</code>.
   * @alias module:model/GetXRPRippleTransactionDetailsByTransactionIDRI
   * @param additionalData {String} Represents additional data that may be needed.
   * @param index {String} Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {String} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param offer {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} 
   * @param receive {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} 
   * @param recipients {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner>} Represents an object of addresses that receive the transactions.
   * @param senders {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner>} Represents an object of addresses that provide the funds.
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param type {String} Defines the type of the transaction.
   * @param fee {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIFee} 
   * @param value {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIValue} 
   */
  function GetXRPRippleTransactionDetailsByTransactionIDRI(additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value) {
    _classCallCheck(this, GetXRPRippleTransactionDetailsByTransactionIDRI);
    GetXRPRippleTransactionDetailsByTransactionIDRI.initialize(this, additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetXRPRippleTransactionDetailsByTransactionIDRI, null, [{
    key: "initialize",
    value: function initialize(obj, additionalData, index, minedInBlockHash, minedInBlockHeight, offer, receive, recipients, senders, sequence, timestamp, transactionHash, type, fee, value) {
      obj['additionalData'] = additionalData;
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['offer'] = offer;
      obj['receive'] = receive;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['sequence'] = sequence;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['type'] = type;
      obj['fee'] = fee;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>GetXRPRippleTransactionDetailsByTransactionIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleTransactionDetailsByTransactionIDRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleTransactionDetailsByTransactionIDRI} The populated <code>GetXRPRippleTransactionDetailsByTransactionIDRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleTransactionDetailsByTransactionIDRI();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('destinationTag')) {
          obj['destinationTag'] = _ApiClient["default"].convertToType(data['destinationTag'], 'Number');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'String');
        }
        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }
        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'String');
        }
        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _GetXRPRippleTransactionDetailsByTransactionIDRIOffer["default"].constructFromObject(data['offer']);
        }
        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _GetXRPRippleTransactionDetailsByTransactionIDRIReceive["default"].constructFromObject(data['receive']);
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
          obj['fee'] = _GetXRPRippleTransactionDetailsByTransactionIDRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _GetXRPRippleTransactionDetailsByTransactionIDRIValue["default"].constructFromObject(data['value']);
        }
      }
      return obj;
    }
  }]);
  return GetXRPRippleTransactionDetailsByTransactionIDRI;
}();
/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['additionalData'] = undefined;

/**
 * @member {Number} destinationTag
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['destinationTag'] = undefined;

/**
 * Defines the index of the transaction, i.e. the consecutive place it takes in the blockchain.
 * @member {String} index
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {String} minedInBlockHeight
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['minedInBlockHeight'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['receive'] = undefined;

/**
 * Represents an object of addresses that receive the transactions.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRIRecipientsInner>} recipients
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['recipients'] = undefined;

/**
 * Represents an object of addresses that provide the funds.
 * @member {Array.<module:model/GetXRPRippleTransactionDetailsByTransactionIDRISendersInner>} senders
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['senders'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['status'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['transactionHash'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['type'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIFee} fee
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['fee'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIValue} value
 */
GetXRPRippleTransactionDetailsByTransactionIDRI.prototype['value'] = undefined;
var _default = GetXRPRippleTransactionDetailsByTransactionIDRI;
exports["default"] = _default;