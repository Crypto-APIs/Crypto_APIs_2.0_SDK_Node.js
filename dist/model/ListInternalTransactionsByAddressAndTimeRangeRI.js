"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListInternalTransactionsByAddressAndTimeRangeRI model module.
 * @module model/ListInternalTransactionsByAddressAndTimeRangeRI
 * @version 1.7.2
 */
var ListInternalTransactionsByAddressAndTimeRangeRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListInternalTransactionsByAddressAndTimeRangeRI</code>.
   * @alias module:model/ListInternalTransactionsByAddressAndTimeRangeRI
   * @param amount {String} Defines the specific amount of the transaction.
   * @param minedInBlockHash {String} Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param minedInBlockHeight {Number} Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
   * @param operationID {String} Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
   * @param operationType {String} Defines the call type of the internal transaction.
   * @param parentHash {String} Defines the specific hash of the parent transaction.
   * @param recipient {String} Represents the recipient address with the respective amount.
   * @param sender {String} Represents the sender address with the respective amount.
   * @param timestamp {Number} 
   */
  function ListInternalTransactionsByAddressAndTimeRangeRI(amount, minedInBlockHash, minedInBlockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) {
    _classCallCheck(this, ListInternalTransactionsByAddressAndTimeRangeRI);

    ListInternalTransactionsByAddressAndTimeRangeRI.initialize(this, amount, minedInBlockHash, minedInBlockHeight, operationID, operationType, parentHash, recipient, sender, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListInternalTransactionsByAddressAndTimeRangeRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, minedInBlockHash, minedInBlockHeight, operationID, operationType, parentHash, recipient, sender, timestamp) {
      obj['amount'] = amount;
      obj['minedInBlockHash'] = minedInBlockHash;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['operationID'] = operationID;
      obj['operationType'] = operationType;
      obj['parentHash'] = parentHash;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>ListInternalTransactionsByAddressAndTimeRangeRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListInternalTransactionsByAddressAndTimeRangeRI} obj Optional instance to populate.
     * @return {module:model/ListInternalTransactionsByAddressAndTimeRangeRI} The populated <code>ListInternalTransactionsByAddressAndTimeRangeRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListInternalTransactionsByAddressAndTimeRangeRI();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHash')) {
          obj['minedInBlockHash'] = _ApiClient["default"].convertToType(data['minedInBlockHash'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('operationID')) {
          obj['operationID'] = _ApiClient["default"].convertToType(data['operationID'], 'String');
        }

        if (data.hasOwnProperty('operationType')) {
          obj['operationType'] = _ApiClient["default"].convertToType(data['operationType'], 'String');
        }

        if (data.hasOwnProperty('parentHash')) {
          obj['parentHash'] = _ApiClient["default"].convertToType(data['parentHash'], 'String');
        }

        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }

        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListInternalTransactionsByAddressAndTimeRangeRI;
}();
/**
 * Defines the specific amount of the transaction.
 * @member {String} amount
 */


ListInternalTransactionsByAddressAndTimeRangeRI.prototype['amount'] = undefined;
/**
 * Represents the hash of the block where this transaction was mined/confirmed for first time. The hash is defined as a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} minedInBlockHash
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['minedInBlockHash'] = undefined;
/**
 * Represents the hight of the block where this transaction was mined/confirmed for first time. The height is defined as the number of blocks in the blockchain preceding this specific block.
 * @member {Number} minedInBlockHeight
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['minedInBlockHeight'] = undefined;
/**
 * Represents the unique internal transaction ID in regards to the parent transaction (type trace address).
 * @member {String} operationID
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['operationID'] = undefined;
/**
 * Defines the call type of the internal transaction.
 * @member {String} operationType
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['operationType'] = undefined;
/**
 * Defines the specific hash of the parent transaction.
 * @member {String} parentHash
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['parentHash'] = undefined;
/**
 * Represents the recipient address with the respective amount.
 * @member {String} recipient
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['recipient'] = undefined;
/**
 * Represents the sender address with the respective amount.
 * @member {String} sender
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['sender'] = undefined;
/**
 * @member {Number} timestamp
 */

ListInternalTransactionsByAddressAndTimeRangeRI.prototype['timestamp'] = undefined;
var _default = ListInternalTransactionsByAddressAndTimeRangeRI;
exports["default"] = _default;