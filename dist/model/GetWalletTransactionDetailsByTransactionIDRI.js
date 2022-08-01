"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetWalletTransactionDetailsByTransactionIDRIBS = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBS"));

var _GetWalletTransactionDetailsByTransactionIDRIFee = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIFee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetWalletTransactionDetailsByTransactionIDRI model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRI
 * @version 1.7.2
 */
var GetWalletTransactionDetailsByTransactionIDRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRI</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRI
   * @param index {Number} Represents the index position of the transaction in the specific block.
   * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
   * @param recipients {String} String representation of the transaction to address
   * @param senders {String} String representation of the transaction from address
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param fee {module:model/GetWalletTransactionDetailsByTransactionIDRIFee} 
   * @param blockchainSpecific {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} 
   */
  function GetWalletTransactionDetailsByTransactionIDRI(index, isConfirmed, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRI);

    GetWalletTransactionDetailsByTransactionIDRI.initialize(this, index, isConfirmed, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetWalletTransactionDetailsByTransactionIDRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, isConfirmed, recipients, senders, timestamp, transactionHash, transactionId, fee, blockchainSpecific) {
      obj['index'] = index;
      obj['isConfirmed'] = isConfirmed;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionId'] = transactionId;
      obj['fee'] = fee;
      obj['blockchainSpecific'] = blockchainSpecific;
    }
    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRI} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRI} The populated <code>GetWalletTransactionDetailsByTransactionIDRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRI();

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
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], 'String');
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _GetWalletTransactionDetailsByTransactionIDRIFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _GetWalletTransactionDetailsByTransactionIDRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }

      return obj;
    }
  }]);

  return GetWalletTransactionDetailsByTransactionIDRI;
}();
/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */


GetWalletTransactionDetailsByTransactionIDRI.prototype['index'] = undefined;
/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['isConfirmed'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['minedInBlockHeight'] = undefined;
/**
 * String representation of the transaction to address
 * @member {String} recipients
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['recipients'] = undefined;
/**
 * String representation of the transaction from address
 * @member {String} senders
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['senders'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['timestamp'] = undefined;
/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['transactionHash'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['transactionId'] = undefined;
/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIFee} fee
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['fee'] = undefined;
/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} blockchainSpecific
 */

GetWalletTransactionDetailsByTransactionIDRI.prototype['blockchainSpecific'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRI;
exports["default"] = _default;