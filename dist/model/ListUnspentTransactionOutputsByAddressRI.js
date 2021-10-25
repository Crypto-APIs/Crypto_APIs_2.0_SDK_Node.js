"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIRecipients = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIRecipients"));

var _ListConfirmedTransactionsByAddressRIBSBVout = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBVout"));

var _ListUnspentTransactionOutputsByAddressRIBlockchainSpecific = _interopRequireDefault(require("./ListUnspentTransactionOutputsByAddressRIBlockchainSpecific"));

var _ListUnspentTransactionOutputsByAddressRIFee = _interopRequireDefault(require("./ListUnspentTransactionOutputsByAddressRIFee"));

var _ListUnspentTransactionOutputsByAddressRISenders = _interopRequireDefault(require("./ListUnspentTransactionOutputsByAddressRISenders"));

var _ListUnspentTransactionOutputsByAddressRIVin = _interopRequireDefault(require("./ListUnspentTransactionOutputsByAddressRIVin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListUnspentTransactionOutputsByAddressRI model module.
 * @module model/ListUnspentTransactionOutputsByAddressRI
 * @version 1.3.0
 */
var ListUnspentTransactionOutputsByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnspentTransactionOutputsByAddressRI</code>.
   * @alias module:model/ListUnspentTransactionOutputsByAddressRI
   * @param index {Number} Represents the index position of the transaction in the block.
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param recipients {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipients>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param senders {Array.<module:model/ListUnspentTransactionOutputsByAddressRISenders>} Object Array representation of transaction senders
   * @param size {Number} Represents the total size of this transaction
   * @param timestamp {Number} Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
   * @param transactionHash {String} Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/ListUnspentTransactionOutputsByAddressRIVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVout>} Represents the transaction outputs.
   * @param fee {module:model/ListUnspentTransactionOutputsByAddressRIFee} 
   * @param blockchainSpecific {module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecific} 
   */
  function ListUnspentTransactionOutputsByAddressRI(index, locktime, minedInBlockHash, minedInBlockHeight, recipients, senders, size, timestamp, transactionHash, transactionId, version, vin, vout, fee, blockchainSpecific) {
    _classCallCheck(this, ListUnspentTransactionOutputsByAddressRI);

    ListUnspentTransactionOutputsByAddressRI.initialize(this, index, locktime, minedInBlockHash, minedInBlockHeight, recipients, senders, size, timestamp, transactionHash, transactionId, version, vin, vout, fee, blockchainSpecific);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnspentTransactionOutputsByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, index, locktime, minedInBlockHash, minedInBlockHeight, recipients, senders, size, timestamp, transactionHash, transactionId, version, vin, vout, fee, blockchainSpecific) {
      obj['index'] = index;
      obj['locktime'] = locktime;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
      obj['size'] = size;
      obj['timestamp'] = timestamp;
      obj['transactionHash'] = transactionHash;
      obj['transactionId'] = transactionId;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['fee'] = fee;
      obj['blockchainSpecific'] = blockchainSpecific;
    }
    /**
     * Constructs a <code>ListUnspentTransactionOutputsByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnspentTransactionOutputsByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListUnspentTransactionOutputsByAddressRI} The populated <code>ListUnspentTransactionOutputsByAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnspentTransactionOutputsByAddressRI();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_GetTransactionDetailsByTransactionIDRIRecipients["default"]]);
        }

        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], [_ListUnspentTransactionOutputsByAddressRISenders["default"]]);
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
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

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListUnspentTransactionOutputsByAddressRIVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListConfirmedTransactionsByAddressRIBSBVout["default"]]);
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListUnspentTransactionOutputsByAddressRIFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _ListUnspentTransactionOutputsByAddressRIBlockchainSpecific["default"].constructFromObject(data['blockchainSpecific']);
        }
      }

      return obj;
    }
  }]);

  return ListUnspentTransactionOutputsByAddressRI;
}();
/**
 * Represents the index position of the transaction in the block.
 * @member {Number} index
 */


ListUnspentTransactionOutputsByAddressRI.prototype['index'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain
 * @member {Number} locktime
 */

ListUnspentTransactionOutputsByAddressRI.prototype['locktime'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListUnspentTransactionOutputsByAddressRI.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListUnspentTransactionOutputsByAddressRI.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIRecipients>} recipients
 */

ListUnspentTransactionOutputsByAddressRI.prototype['recipients'] = undefined;
/**
 * Object Array representation of transaction senders
 * @member {Array.<module:model/ListUnspentTransactionOutputsByAddressRISenders>} senders
 */

ListUnspentTransactionOutputsByAddressRI.prototype['senders'] = undefined;
/**
 * Represents the total size of this transaction
 * @member {Number} size
 */

ListUnspentTransactionOutputsByAddressRI.prototype['size'] = undefined;
/**
 * Defines the exact date/time in Unix Timestamp when this transaction was mined, confirmed or first seen in Mempool, if it is unconfirmed.
 * @member {Number} timestamp
 */

ListUnspentTransactionOutputsByAddressRI.prototype['timestamp'] = undefined;
/**
 * Represents the same as `transactionId` for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols `hash` is different from `transactionId` for SegWit transactions.
 * @member {String} transactionHash
 */

ListUnspentTransactionOutputsByAddressRI.prototype['transactionHash'] = undefined;
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */

ListUnspentTransactionOutputsByAddressRI.prototype['transactionId'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

ListUnspentTransactionOutputsByAddressRI.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnspentTransactionOutputsByAddressRIVin>} vin
 */

ListUnspentTransactionOutputsByAddressRI.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVout>} vout
 */

ListUnspentTransactionOutputsByAddressRI.prototype['vout'] = undefined;
/**
 * @member {module:model/ListUnspentTransactionOutputsByAddressRIFee} fee
 */

ListUnspentTransactionOutputsByAddressRI.prototype['fee'] = undefined;
/**
 * @member {module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecific} blockchainSpecific
 */

ListUnspentTransactionOutputsByAddressRI.prototype['blockchainSpecific'] = undefined;
var _default = ListUnspentTransactionOutputsByAddressRI;
exports["default"] = _default;