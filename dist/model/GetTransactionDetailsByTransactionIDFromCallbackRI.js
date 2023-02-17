"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBS = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBS"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIFee = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIFee"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner"));
var _GetTransactionDetailsByTransactionIDFromCallbackRISendersInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRISendersInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRI model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRI
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRI
   * @param index {Number} Represents the index position of the transaction in the specific block.
   * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param fee {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIFee} 
   * @param blockchainSpecific {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} 
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRI(index, isConfirmed, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRI);
    GetTransactionDetailsByTransactionIDFromCallbackRI.initialize(this, index, isConfirmed, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, isConfirmed, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) {
      obj['index'] = index;
      obj['isConfirmed'] = isConfirmed;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['fee'] = fee;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRI} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRI} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRI();
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('isConfirmed')) {
          obj['isConfirmed'] = _ApiClient["default"].convertToType(data['isConfirmed'], 'Boolean');
        }
        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }
        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_GetTransactionDetailsByTransactionIDFromCallbackRISendersInner["default"]]);
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _GetTransactionDetailsByTransactionIDFromCallbackRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRI;
}();
/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['index'] = undefined;

/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['isConfirmed'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner>} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRISendersInner>} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['transactionHash'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIFee} fee
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['fee'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} blockchainSpecific
 */
GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['blockchainSpecific'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRI;
exports["default"] = _default;