"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTokensTransfersByAddressAndTimeRangeRI model module.
 * @module model/ListConfirmedTokensTransfersByAddressAndTimeRangeRI
 * @version 1.13.0
 */
var ListConfirmedTokensTransfersByAddressAndTimeRangeRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTokensTransfersByAddressAndTimeRangeRI</code>.
   * @alias module:model/ListConfirmedTokensTransfersByAddressAndTimeRangeRI
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param minedInBlockHeight {Number} Defines the block height in which this transaction was confirmed/mined.
   * @param recipientAddress {String} Defines the address to which the recipient receives the transferred tokens.
   * @param senderAddress {String} Defines the address from which the sender transfers tokens.
   * @param tokenDecimals {Number} Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
   * @param tokenName {String} Defines the token's name as a string.
   * @param tokenSymbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
   * @param tokenType {String} Defines the specific token type.
   * @param transactionHash {String} Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param transactionTimestamp {Number} Defines the specific time/date when the transaction was created in Unix Timestamp.
   */
  function ListConfirmedTokensTransfersByAddressAndTimeRangeRI(contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp) {
    _classCallCheck(this, ListConfirmedTokensTransfersByAddressAndTimeRangeRI);
    ListConfirmedTokensTransfersByAddressAndTimeRangeRI.initialize(this, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTokensTransfersByAddressAndTimeRangeRI, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress, minedInBlockHeight, recipientAddress, senderAddress, tokenDecimals, tokenName, tokenSymbol, tokenType, transactionHash, transactionTimestamp) {
      obj['contractAddress'] = contractAddress;
      obj['minedInBlockHeight'] = minedInBlockHeight;
      obj['recipientAddress'] = recipientAddress;
      obj['senderAddress'] = senderAddress;
      obj['tokenDecimals'] = tokenDecimals;
      obj['tokenName'] = tokenName;
      obj['tokenSymbol'] = tokenSymbol;
      obj['tokenType'] = tokenType;
      obj['transactionHash'] = transactionHash;
      obj['transactionTimestamp'] = transactionTimestamp;
    }

    /**
     * Constructs a <code>ListConfirmedTokensTransfersByAddressAndTimeRangeRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTokensTransfersByAddressAndTimeRangeRI} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTokensTransfersByAddressAndTimeRangeRI} The populated <code>ListConfirmedTokensTransfersByAddressAndTimeRangeRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTokensTransfersByAddressAndTimeRangeRI();
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
        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
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
  return ListConfirmedTokensTransfersByAddressAndTimeRangeRI;
}();
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['contractAddress'] = undefined;

/**
 * Defines the block height in which this transaction was confirmed/mined.
 * @member {Number} minedInBlockHeight
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['minedInBlockHeight'] = undefined;

/**
 * Defines the address to which the recipient receives the transferred tokens.
 * @member {String} recipientAddress
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['recipientAddress'] = undefined;

/**
 * Defines the address from which the sender transfers tokens.
 * @member {String} senderAddress
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['senderAddress'] = undefined;

/**
 * Defines the decimals of the token, i.e. the number of digits that come after the decimal coma of the token.
 * @member {Number} tokenDecimals
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['tokenDecimals'] = undefined;

/**
 * Represents the unique token identifier.
 * @member {String} tokenId
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['tokenId'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} tokenName
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['tokenName'] = undefined;

/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} tokenSymbol
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['tokenSymbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} tokenType
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['tokenType'] = undefined;

/**
 * Defines the token amount of the transfer.
 * @member {String} tokensAmount
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['tokensAmount'] = undefined;

/**
 * Represents the hash of the transaction, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} transactionHash
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['transactionHash'] = undefined;

/**
 * Defines the specific time/date when the transaction was created in Unix Timestamp.
 * @member {Number} transactionTimestamp
 */
ListConfirmedTokensTransfersByAddressAndTimeRangeRI.prototype['transactionTimestamp'] = undefined;
var _default = ListConfirmedTokensTransfersByAddressAndTimeRangeRI;
exports["default"] = _default;