"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBS = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBS"));
var _GetTransactionDetailsByTransactionIDRIFee = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIFee"));
var _GetTransactionDetailsByTransactionIDRIRecipientsInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIRecipientsInner"));
var _GetTransactionDetailsByTransactionIDRISendersInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRISendersInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDRI model module.
 * @module model/GetTransactionDetailsByTransactionIDRI
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRI</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRI
   * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param index {Number} Represents the index position of the transaction in the specific block.
   * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param fee {module:model/GetTransactionDetailsByTransactionIDRIFee} 
   * @param blockchainSpecific {module:model/GetTransactionDetailsByTransactionIDRIBS} 
   */
  function GetTransactionDetailsByTransactionIDRI(isConfirmed, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRI);
    GetTransactionDetailsByTransactionIDRI.initialize(this, isConfirmed, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRI, null, [{
    key: "initialize",
    value: function initialize(obj, isConfirmed, transactionId, index, recipients, senders, timestamp, transactionHash, fee, blockchainSpecific) {
      obj['isConfirmed'] = isConfirmed;
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRI} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRI} The populated <code>GetTransactionDetailsByTransactionIDRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRI();
        if (data.hasOwnProperty('isConfirmed')) {
          obj['isConfirmed'] = _ApiClient["default"].convertToType(data['isConfirmed'], 'Boolean');
        }
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
          obj['fee'] = _GetTransactionDetailsByTransactionIDRIFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _GetTransactionDetailsByTransactionIDRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRI;
}();
/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
GetTransactionDetailsByTransactionIDRI.prototype['isConfirmed'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */
GetTransactionDetailsByTransactionIDRI.prototype['transactionId'] = undefined;

/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */
GetTransactionDetailsByTransactionIDRI.prototype['index'] = undefined;

/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */
GetTransactionDetailsByTransactionIDRI.prototype['minedInBlockHash'] = undefined;

/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */
GetTransactionDetailsByTransactionIDRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipientsInner>} recipients
 */
GetTransactionDetailsByTransactionIDRI.prototype['recipients'] = undefined;

/**
 * Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRISendersInner>} senders
 */
GetTransactionDetailsByTransactionIDRI.prototype['senders'] = undefined;

/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */
GetTransactionDetailsByTransactionIDRI.prototype['timestamp'] = undefined;

/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */
GetTransactionDetailsByTransactionIDRI.prototype['transactionHash'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIFee} fee
 */
GetTransactionDetailsByTransactionIDRI.prototype['fee'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBS} blockchainSpecific
 */
GetTransactionDetailsByTransactionIDRI.prototype['blockchainSpecific'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRI;
exports["default"] = _default;