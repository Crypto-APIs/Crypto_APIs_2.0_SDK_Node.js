"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTokensTransfersByTransactionHashResponseItem model module.
 * @module model/ListTokensTransfersByTransactionHashResponseItem
 * @version 2.0.0
 */
var ListTokensTransfersByTransactionHashResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensTransfersByTransactionHashResponseItem</code>.
   * @alias module:model/ListTokensTransfersByTransactionHashResponseItem
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param minedInBlockHeight {Number} Defines the block height in which this transaction was confirmed/mined.
   * @param recipientAddress {String} Defines the address to which the recipient receives the transferred tokens.
   * @param senderAddress {String} Defines the address from which the sender transfers tokens.
   * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
   * @param tokenName {String} Defines the token's name as a string.
   * @param tokenSymbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
   * @param tokenType {String} Defines the specific token type.
   * @param tokensAmount {String} Defines the token amount of the transfer.
   * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param transactionTimestamp {Number} Defines the specific time/date when the transaction was created in Unix Timestamp.
   */
  function ListTokensTransfersByTransactionHashResponseItem(contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp) {
    _classCallCheck(this, ListTokensTransfersByTransactionHashResponseItem);

    ListTokensTransfersByTransactionHashResponseItem.initialize(this, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensTransfersByTransactionHashResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp) {
      obj['contractAddress'] = contractAddress;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipientAddress'] = recipientAddress;
      obj['senderAddress'] = senderAddress;
      obj['tokenDecimals'] = tokenDecimals;
      obj['tokenName'] = tokenName;
      obj['tokenSymbol'] = tokenSymbol;
      obj['tokenType'] = tokenType;
      obj['tokensAmount'] = tokensAmount;
      obj['transactionHash'] = transactionHash;
      obj['transactionTimestamp'] = transactionTimestamp;
    }
    /**
     * Constructs a <code>ListTokensTransfersByTransactionHashResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashResponseItem} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashResponseItem} The populated <code>ListTokensTransfersByTransactionHashResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensTransfersByTransactionHashResponseItem();

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }

        if (data.hasOwnProperty('minedInBlockHeight')) {
          obj['minedInBlockHeight'] = _ApiClient["default"].convertToType(data['minedInBlockHeight'], 'Number');
        }

        if (data.hasOwnProperty('recipientAddress')) {
          obj['recipientAddress'] = _ApiClient["default"].convertToType(data['recipientAddress'], 'String');
        }

        if (data.hasOwnProperty('senderAddress')) {
          obj['senderAddress'] = _ApiClient["default"].convertToType(data['senderAddress'], 'String');
        }

        if (data.hasOwnProperty('tokenDecimals')) {
          obj['tokenDecimals'] = _ApiClient["default"].convertToType(data['tokenDecimals'], 'Number');
        }

        if (data.hasOwnProperty('tokenName')) {
          obj['tokenName'] = _ApiClient["default"].convertToType(data['tokenName'], 'String');
        }

        if (data.hasOwnProperty('tokenSymbol')) {
          obj['tokenSymbol'] = _ApiClient["default"].convertToType(data['tokenSymbol'], 'String');
        }

        if (data.hasOwnProperty('tokenType')) {
          obj['tokenType'] = _ApiClient["default"].convertToType(data['tokenType'], 'String');
        }

        if (data.hasOwnProperty('tokensAmount')) {
          obj['tokensAmount'] = _ApiClient["default"].convertToType(data['tokensAmount'], 'String');
        }

        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }

        if (data.hasOwnProperty('transactionTimestamp')) {
          obj['transactionTimestamp'] = _ApiClient["default"].convertToType(data['transactionTimestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListTokensTransfersByTransactionHashResponseItem;
}();
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */


ListTokensTransfersByTransactionHashResponseItem.prototype['contractAddress'] = undefined;
/**
 * Defines the block height in which this transaction was confirmed/mined.
 * @member {Number} minedInBlockHeight
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['minedInBlockHeight'] = undefined;
/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipientAddress
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['recipientAddress'] = undefined;
/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} senderAddress
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['senderAddress'] = undefined;
/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['tokenDecimals'] = undefined;
/**
 * Defines the token's name as a string.
 * @member {String} tokenName
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['tokenName'] = undefined;
/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} tokenSymbol
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['tokenSymbol'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} tokenType
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['tokenType'] = undefined;
/**
 * Defines the token amount of the transfer.
 * @member {String} tokensAmount
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['tokensAmount'] = undefined;
/**
 * Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} transactionHash
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['transactionHash'] = undefined;
/**
 * Defines the specific time/date when the transaction was created in Unix Timestamp.
 * @member {Number} transactionTimestamp
 */

ListTokensTransfersByTransactionHashResponseItem.prototype['transactionTimestamp'] = undefined;
var _default = ListTokensTransfersByTransactionHashResponseItem;
exports["default"] = _default;