"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _TokensForwardingSuccessErc = _interopRequireDefault(require("./TokensForwardingSuccessErc20"));
var _TokensForwardingSuccessErc2 = _interopRequireDefault(require("./TokensForwardingSuccessErc721"));
var _TokensForwardingSuccessOmni = _interopRequireDefault(require("./TokensForwardingSuccessOmni"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The TokensForwardingSuccessToken model module.
 * @module model/TokensForwardingSuccessToken
 * @version 1.11.0
 */
var TokensForwardingSuccessToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TokensForwardingSuccessToken</code>.
   * @alias module:model/TokensForwardingSuccessToken
   * @param {(module:model/TokensForwardingSuccessErc20|module:model/TokensForwardingSuccessErc721|module:model/TokensForwardingSuccessOmni)} instance The actual instance to initialize TokensForwardingSuccessToken.
   */
  function TokensForwardingSuccessToken() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, TokensForwardingSuccessToken);
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "TokensForwardingSuccessErc20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TokensForwardingSuccessErc["default"].validateJSON(instance); // throw an exception if no match
        // create TokensForwardingSuccessErc20 from JS object
        this.actualInstance = _TokensForwardingSuccessErc["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TokensForwardingSuccessErc20
      errorMessages.push("Failed to construct TokensForwardingSuccessErc20: " + err);
    }
    try {
      if (typeof instance === "TokensForwardingSuccessErc721") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TokensForwardingSuccessErc2["default"].validateJSON(instance); // throw an exception if no match
        // create TokensForwardingSuccessErc721 from JS object
        this.actualInstance = _TokensForwardingSuccessErc2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TokensForwardingSuccessErc721
      errorMessages.push("Failed to construct TokensForwardingSuccessErc721: " + err);
    }
    try {
      if (typeof instance === "TokensForwardingSuccessOmni") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _TokensForwardingSuccessOmni["default"].validateJSON(instance); // throw an exception if no match
        // create TokensForwardingSuccessOmni from JS object
        this.actualInstance = _TokensForwardingSuccessOmni["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into TokensForwardingSuccessOmni
      errorMessages.push("Failed to construct TokensForwardingSuccessOmni: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `TokensForwardingSuccessToken` with oneOf schemas TokensForwardingSuccessErc20, TokensForwardingSuccessErc721, TokensForwardingSuccessOmni. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `TokensForwardingSuccessToken` with oneOf schemas TokensForwardingSuccessErc20, TokensForwardingSuccessErc721, TokensForwardingSuccessOmni. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>TokensForwardingSuccessToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokensForwardingSuccessToken} obj Optional instance to populate.
   * @return {module:model/TokensForwardingSuccessToken} The populated <code>TokensForwardingSuccessToken</code> instance.
   */
  _createClass(TokensForwardingSuccessToken, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>TokensForwardingSuccessErc20</code>, <code>TokensForwardingSuccessErc721</code>, <code>TokensForwardingSuccessOmni</code>.
     * @return {(module:model/TokensForwardingSuccessErc20|module:model/TokensForwardingSuccessErc721|module:model/TokensForwardingSuccessOmni)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>TokensForwardingSuccessErc20</code>, <code>TokensForwardingSuccessErc721</code>, <code>TokensForwardingSuccessOmni</code>.
     * @param {(module:model/TokensForwardingSuccessErc20|module:model/TokensForwardingSuccessErc721|module:model/TokensForwardingSuccessOmni)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = TokensForwardingSuccessToken.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new TokensForwardingSuccessToken(data);
    }
  }]);
  return TokensForwardingSuccessToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_defineProperty(TokensForwardingSuccessToken, "fromJSON", function (json_string) {
  return TokensForwardingSuccessToken.constructFromObject(JSON.parse(json_string));
});
TokensForwardingSuccessToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
TokensForwardingSuccessToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
TokensForwardingSuccessToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
TokensForwardingSuccessToken.prototype['amount'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
TokensForwardingSuccessToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
TokensForwardingSuccessToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
TokensForwardingSuccessToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
TokensForwardingSuccessToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
TokensForwardingSuccessToken.prototype['createdByTransactionId'] = undefined;
TokensForwardingSuccessToken.OneOf = ["TokensForwardingSuccessErc20", "TokensForwardingSuccessErc721", "TokensForwardingSuccessOmni"];
var _default = TokensForwardingSuccessToken;
exports["default"] = _default;