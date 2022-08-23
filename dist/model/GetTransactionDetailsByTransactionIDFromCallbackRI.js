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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRI model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRI
 * @version 1.7.3
 */
var GetTransactionDetailsByTransactionIDFromCallbackRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRI</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRI
   * @param index {Number} Represents the index position of the transaction in the specific block.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRISendersInner>} Represents a list of sender addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param fee {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIFee} 
   * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
   * @param blockchainSpecific {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} 
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRI(index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, isConfirmed, blockchainSpecific) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRI);

    GetTransactionDetailsByTransactionIDFromCallbackRI.initialize(this, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, isConfirmed, blockchainSpecific);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, minedInBlockHash, minedInBlockHeight, recipients, senders, timestamp, transactionHash, fee, isConfirmed, blockchainSpecific) {
      obj['index'] = index;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['fee'] = fee;
      obj['isConfirmed'] = isConfirmed;
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

        if (data.hasOwnProperty('isConfirmed')) {
          obj['isConfirmed'] = _ApiClient["default"].convertToType(data['isConfirmed'], 'Boolean');
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
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */

GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['isConfirmed'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} blockchainSpecific
 */

GetTransactionDetailsByTransactionIDFromCallbackRI.prototype['blockchainSpecific'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRI;
exports["default"] = _default;