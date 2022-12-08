"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressTokensTransactionConfirmedBep = _interopRequireDefault(require("./AddressTokensTransactionConfirmedBep20"));
var _AddressTokensTransactionConfirmedErc = _interopRequireDefault(require("./AddressTokensTransactionConfirmedErc20"));
var _AddressTokensTransactionConfirmedErc2 = _interopRequireDefault(require("./AddressTokensTransactionConfirmedErc721"));
var _AddressTokensTransactionConfirmedOmni = _interopRequireDefault(require("./AddressTokensTransactionConfirmedOmni"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressTokensTransactionConfirmedToken model module.
 * @module model/AddressTokensTransactionConfirmedToken
 * @version 1.11.0
 */
var AddressTokensTransactionConfirmedToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedToken</code>.
   * @alias module:model/AddressTokensTransactionConfirmedToken
   * @param {(module:model/AddressTokensTransactionConfirmedBep20|module:model/AddressTokensTransactionConfirmedErc20|module:model/AddressTokensTransactionConfirmedErc721|module:model/AddressTokensTransactionConfirmedOmni)} instance The actual instance to initialize AddressTokensTransactionConfirmedToken.
   */
  function AddressTokensTransactionConfirmedToken() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, AddressTokensTransactionConfirmedToken);
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
      if (typeof instance === "AddressTokensTransactionConfirmedErc20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedErc["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedErc20 from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedErc["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedErc20
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedErc20: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionConfirmedErc721") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedErc2["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedErc721 from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedErc2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedErc721
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedErc721: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionConfirmedOmni") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedOmni["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedOmni from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedOmni["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedOmni
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedOmni: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionConfirmedBep20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedBep["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedBep20 from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedBep["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedBep20
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedBep20: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `AddressTokensTransactionConfirmedToken` with oneOf schemas AddressTokensTransactionConfirmedBep20, AddressTokensTransactionConfirmedErc20, AddressTokensTransactionConfirmedErc721, AddressTokensTransactionConfirmedOmni. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `AddressTokensTransactionConfirmedToken` with oneOf schemas AddressTokensTransactionConfirmedBep20, AddressTokensTransactionConfirmedErc20, AddressTokensTransactionConfirmedErc721, AddressTokensTransactionConfirmedOmni. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>AddressTokensTransactionConfirmedToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressTokensTransactionConfirmedToken} obj Optional instance to populate.
   * @return {module:model/AddressTokensTransactionConfirmedToken} The populated <code>AddressTokensTransactionConfirmedToken</code> instance.
   */
  _createClass(AddressTokensTransactionConfirmedToken, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>AddressTokensTransactionConfirmedBep20</code>, <code>AddressTokensTransactionConfirmedErc20</code>, <code>AddressTokensTransactionConfirmedErc721</code>, <code>AddressTokensTransactionConfirmedOmni</code>.
     * @return {(module:model/AddressTokensTransactionConfirmedBep20|module:model/AddressTokensTransactionConfirmedErc20|module:model/AddressTokensTransactionConfirmedErc721|module:model/AddressTokensTransactionConfirmedOmni)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddressTokensTransactionConfirmedBep20</code>, <code>AddressTokensTransactionConfirmedErc20</code>, <code>AddressTokensTransactionConfirmedErc721</code>, <code>AddressTokensTransactionConfirmedOmni</code>.
     * @param {(module:model/AddressTokensTransactionConfirmedBep20|module:model/AddressTokensTransactionConfirmedErc20|module:model/AddressTokensTransactionConfirmedErc721|module:model/AddressTokensTransactionConfirmedOmni)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = AddressTokensTransactionConfirmedToken.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new AddressTokensTransactionConfirmedToken(data);
    }
  }]);
  return AddressTokensTransactionConfirmedToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_defineProperty(AddressTokensTransactionConfirmedToken, "fromJSON", function (json_string) {
  return AddressTokensTransactionConfirmedToken.constructFromObject(JSON.parse(json_string));
});
AddressTokensTransactionConfirmedToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedToken.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedToken.prototype['createdByTransactionId'] = undefined;
AddressTokensTransactionConfirmedToken.OneOf = ["AddressTokensTransactionConfirmedBep20", "AddressTokensTransactionConfirmedErc20", "AddressTokensTransactionConfirmedErc721", "AddressTokensTransactionConfirmedOmni"];
var _default = AddressTokensTransactionConfirmedToken;
exports["default"] = _default;