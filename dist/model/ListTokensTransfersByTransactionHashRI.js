"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListTokensTransfersByTransactionHashRITransactionFee = _interopRequireDefault(require("./ListTokensTransfersByTransactionHashRITransactionFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTokensTransfersByTransactionHashRI model module.
 * @module model/ListTokensTransfersByTransactionHashRI
 * @version 1.11.0
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

    /**
     * Validates the JSON data with respect to <code>ListTokensTransfersByTransactionHashRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTokensTransfersByTransactionHashRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListTokensTransfersByTransactionHashRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['contractAddress'] && !(typeof data['contractAddress'] === 'string' || data['contractAddress'] instanceof String)) {
        throw new Error("Expected the field `contractAddress` to be a primitive type in the JSON string but got " + data['contractAddress']);
      }
      // ensure the json data is a string
      if (data['recipientAddress'] && !(typeof data['recipientAddress'] === 'string' || data['recipientAddress'] instanceof String)) {
        throw new Error("Expected the field `recipientAddress` to be a primitive type in the JSON string but got " + data['recipientAddress']);
      }
      // ensure the json data is a string
      if (data['senderAddress'] && !(typeof data['senderAddress'] === 'string' || data['senderAddress'] instanceof String)) {
        throw new Error("Expected the field `senderAddress` to be a primitive type in the JSON string but got " + data['senderAddress']);
      }
      // ensure the json data is a string
      if (data['tokenName'] && !(typeof data['tokenName'] === 'string' || data['tokenName'] instanceof String)) {
        throw new Error("Expected the field `tokenName` to be a primitive type in the JSON string but got " + data['tokenName']);
      }
      // ensure the json data is a string
      if (data['tokenSymbol'] && !(typeof data['tokenSymbol'] === 'string' || data['tokenSymbol'] instanceof String)) {
        throw new Error("Expected the field `tokenSymbol` to be a primitive type in the JSON string but got " + data['tokenSymbol']);
      }
      // ensure the json data is a string
      if (data['tokenType'] && !(typeof data['tokenType'] === 'string' || data['tokenType'] instanceof String)) {
        throw new Error("Expected the field `tokenType` to be a primitive type in the JSON string but got " + data['tokenType']);
      }
      // ensure the json data is a string
      if (data['tokensAmount'] && !(typeof data['tokensAmount'] === 'string' || data['tokensAmount'] instanceof String)) {
        throw new Error("Expected the field `tokensAmount` to be a primitive type in the JSON string but got " + data['tokensAmount']);
      }
      // ensure the json data is a string
      if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
        throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
      }
      // validate the optional field `transactionFee`
      if (data['transactionFee']) {
        // data not null
        _ListTokensTransfersByTransactionHashRITransactionFee["default"].validateJSON(data['transactionFee']);
      }
      return true;
    }
  }]);
  return ListTokensTransfersByTransactionHashRI;
}();
ListTokensTransfersByTransactionHashRI.RequiredProperties = ["contractAddress", "minedInBlockHeight", "recipientAddress", "senderAddress", "tokenDecimals", "tokenName", "tokenSymbol", "tokenType", "tokensAmount", "transactionHash", "transactionTimestamp", "transactionFee"];

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