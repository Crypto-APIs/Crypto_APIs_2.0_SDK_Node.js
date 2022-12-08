"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConfirmedTokensTransactionForCertainAmountOrHigherBep = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherBep20"));
var _ConfirmedTokensTransactionForCertainAmountOrHigherErc = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherErc20"));
var _ConfirmedTokensTransactionForCertainAmountOrHigherErc2 = _interopRequireDefault(require("./ConfirmedTokensTransactionForCertainAmountOrHigherErc721"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ConfirmedTokensTransactionForCertainAmountOrHigherToken model module.
 * @module model/ConfirmedTokensTransactionForCertainAmountOrHigherToken
 * @version 1.11.0
 */
var ConfirmedTokensTransactionForCertainAmountOrHigherToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code>.
   * @alias module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken
   * @param {(module:model/ConfirmedTokensTransactionForCertainAmountOrHigherBep20|module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc20|module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721)} instance The actual instance to initialize ConfirmedTokensTransactionForCertainAmountOrHigherToken.
   */
  function ConfirmedTokensTransactionForCertainAmountOrHigherToken() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ConfirmedTokensTransactionForCertainAmountOrHigherToken);
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
      if (typeof instance === "ConfirmedTokensTransactionForCertainAmountOrHigherErc20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].validateJSON(instance); // throw an exception if no match
        // create ConfirmedTokensTransactionForCertainAmountOrHigherErc20 from JS object
        this.actualInstance = _ConfirmedTokensTransactionForCertainAmountOrHigherErc["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ConfirmedTokensTransactionForCertainAmountOrHigherErc20
      errorMessages.push("Failed to construct ConfirmedTokensTransactionForCertainAmountOrHigherErc20: " + err);
    }
    try {
      if (typeof instance === "ConfirmedTokensTransactionForCertainAmountOrHigherErc721") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].validateJSON(instance); // throw an exception if no match
        // create ConfirmedTokensTransactionForCertainAmountOrHigherErc721 from JS object
        this.actualInstance = _ConfirmedTokensTransactionForCertainAmountOrHigherErc2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ConfirmedTokensTransactionForCertainAmountOrHigherErc721
      errorMessages.push("Failed to construct ConfirmedTokensTransactionForCertainAmountOrHigherErc721: " + err);
    }
    try {
      if (typeof instance === "ConfirmedTokensTransactionForCertainAmountOrHigherBep20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].validateJSON(instance); // throw an exception if no match
        // create ConfirmedTokensTransactionForCertainAmountOrHigherBep20 from JS object
        this.actualInstance = _ConfirmedTokensTransactionForCertainAmountOrHigherBep["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into ConfirmedTokensTransactionForCertainAmountOrHigherBep20
      errorMessages.push("Failed to construct ConfirmedTokensTransactionForCertainAmountOrHigherBep20: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `ConfirmedTokensTransactionForCertainAmountOrHigherToken` with oneOf schemas ConfirmedTokensTransactionForCertainAmountOrHigherBep20, ConfirmedTokensTransactionForCertainAmountOrHigherErc20, ConfirmedTokensTransactionForCertainAmountOrHigherErc721. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `ConfirmedTokensTransactionForCertainAmountOrHigherToken` with oneOf schemas ConfirmedTokensTransactionForCertainAmountOrHigherBep20, ConfirmedTokensTransactionForCertainAmountOrHigherErc20, ConfirmedTokensTransactionForCertainAmountOrHigherErc721. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} obj Optional instance to populate.
   * @return {module:model/ConfirmedTokensTransactionForCertainAmountOrHigherToken} The populated <code>ConfirmedTokensTransactionForCertainAmountOrHigherToken</code> instance.
   */
  _createClass(ConfirmedTokensTransactionForCertainAmountOrHigherToken, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>ConfirmedTokensTransactionForCertainAmountOrHigherBep20</code>, <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc20</code>, <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code>.
     * @return {(module:model/ConfirmedTokensTransactionForCertainAmountOrHigherBep20|module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc20|module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>ConfirmedTokensTransactionForCertainAmountOrHigherBep20</code>, <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc20</code>, <code>ConfirmedTokensTransactionForCertainAmountOrHigherErc721</code>.
     * @param {(module:model/ConfirmedTokensTransactionForCertainAmountOrHigherBep20|module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc20|module:model/ConfirmedTokensTransactionForCertainAmountOrHigherErc721)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = ConfirmedTokensTransactionForCertainAmountOrHigherToken.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new ConfirmedTokensTransactionForCertainAmountOrHigherToken(data);
    }
  }]);
  return ConfirmedTokensTransactionForCertainAmountOrHigherToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_defineProperty(ConfirmedTokensTransactionForCertainAmountOrHigherToken, "fromJSON", function (json_string) {
  return ConfirmedTokensTransactionForCertainAmountOrHigherToken.constructFromObject(JSON.parse(json_string));
});
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
ConfirmedTokensTransactionForCertainAmountOrHigherToken.prototype['tokenId'] = undefined;
ConfirmedTokensTransactionForCertainAmountOrHigherToken.OneOf = ["ConfirmedTokensTransactionForCertainAmountOrHigherBep20", "ConfirmedTokensTransactionForCertainAmountOrHigherErc20", "ConfirmedTokensTransactionForCertainAmountOrHigherErc721"];
var _default = ConfirmedTokensTransactionForCertainAmountOrHigherToken;
exports["default"] = _default;