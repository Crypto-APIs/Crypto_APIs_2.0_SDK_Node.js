"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTokensTransfersByTransactionHashRITransactionFee = _interopRequireDefault(require("./ListTokensTransfersByTransactionHashRITransactionFee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListTokensTransfersByTransactionHashRI model module.
 * @module model/ListTokensTransfersByTransactionHashRI
 * @version 1.7.2
 */
var ListTokensTransfersByTransactionHashRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensTransfersByTransactionHashRI</code>.
   * @alias module:model/ListTokensTransfersByTransactionHashRI
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
   * @param transactionFee {module:model/ListTokensTransfersByTransactionHashRITransactionFee} 
   */
  function ListTokensTransfersByTransactionHashRI(contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp, transactionFee) {
    _classCallCheck(this, ListTokensTransfersByTransactionHashRI);

    ListTokensTransfersByTransactionHashRI.initialize(this, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp, transactionFee);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensTransfersByTransactionHashRI, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, tokensAmount, transactionHash, transactionTimestamp, transactionFee) {
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
      obj['transactionFee'] = transactionFee;
    }
    /**
     * Constructs a <code>ListTokensTransfersByTransactionHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensTransfersByTransactionHashRI} obj Optional instance to populate.
     * @return {module:model/ListTokensTransfersByTransactionHashRI} The populated <code>ListTokensTransfersByTransactionHashRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensTransfersByTransactionHashRI();

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

        if (data.hasOwnProperty('transactionFee')) {
          obj['transactionFee'] = _ListTokensTransfersByTransactionHashRITransactionFee["default"].constructFromObject(data['transactionFee']);
        }
      }

      return obj;
    }
  }]);

  return ListTokensTransfersByTransactionHashRI;
}();
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */


ListTokensTransfersByTransactionHashRI.prototype['contractAddress'] = undefined;
/**
 * Defines the block height in which this transaction was confirmed/mined.
 * @member {Number} minedInBlockHeight
 */

ListTokensTransfersByTransactionHashRI.prototype['minedInBlockHeight'] = undefined;
/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipientAddress
 */

ListTokensTransfersByTransactionHashRI.prototype['recipientAddress'] = undefined;
/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} senderAddress
 */

ListTokensTransfersByTransactionHashRI.prototype['senderAddress'] = undefined;
/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */

ListTokensTransfersByTransactionHashRI.prototype['tokenDecimals'] = undefined;
/**
 * Defines the token's name as a string.
 * @member {String} tokenName
 */

ListTokensTransfersByTransactionHashRI.prototype['tokenName'] = undefined;
/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} tokenSymbol
 */

ListTokensTransfersByTransactionHashRI.prototype['tokenSymbol'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} tokenType
 */

ListTokensTransfersByTransactionHashRI.prototype['tokenType'] = undefined;
/**
 * Defines the token amount of the transfer.
 * @member {String} tokensAmount
 */

ListTokensTransfersByTransactionHashRI.prototype['tokensAmount'] = undefined;
/**
 * Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} transactionHash
 */

ListTokensTransfersByTransactionHashRI.prototype['transactionHash'] = undefined;
/**
 * Defines the specific time/date when the transaction was created in Unix Timestamp.
 * @member {Number} transactionTimestamp
 */

ListTokensTransfersByTransactionHashRI.prototype['transactionTimestamp'] = undefined;
/**
 * @member {module:model/ListTokensTransfersByTransactionHashRITransactionFee} transactionFee
 */

ListTokensTransfersByTransactionHashRI.prototype['transactionFee'] = undefined;
var _default = ListTokensTransfersByTransactionHashRI;
exports["default"] = _default;