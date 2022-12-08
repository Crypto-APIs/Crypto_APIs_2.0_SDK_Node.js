"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressTokensTransactionUnconfirmedErc = _interopRequireDefault(require("./AddressTokensTransactionUnconfirmedErc20"));
var _AddressTokensTransactionUnconfirmedErc2 = _interopRequireDefault(require("./AddressTokensTransactionUnconfirmedErc721"));
var _AddressTokensTransactionUnconfirmedOmni = _interopRequireDefault(require("./AddressTokensTransactionUnconfirmedOmni"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressTokensTransactionUnconfirmedToken model module.
 * @module model/AddressTokensTransactionUnconfirmedToken
 * @version 1.11.0
 */
var AddressTokensTransactionUnconfirmedToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionUnconfirmedToken</code>.
   * @alias module:model/AddressTokensTransactionUnconfirmedToken
   * @param {(module:model/AddressTokensTransactionUnconfirmedErc20|module:model/AddressTokensTransactionUnconfirmedErc721|module:model/AddressTokensTransactionUnconfirmedOmni)} instance The actual instance to initialize AddressTokensTransactionUnconfirmedToken.
   */
  function AddressTokensTransactionUnconfirmedToken() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, AddressTokensTransactionUnconfirmedToken);
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
      if (typeof instance === "AddressTokensTransactionUnconfirmedErc20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionUnconfirmedErc["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionUnconfirmedErc20 from JS object
        this.actualInstance = _AddressTokensTransactionUnconfirmedErc["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionUnconfirmedErc20
      errorMessages.push("Failed to construct AddressTokensTransactionUnconfirmedErc20: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionUnconfirmedErc721") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionUnconfirmedErc2["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionUnconfirmedErc721 from JS object
        this.actualInstance = _AddressTokensTransactionUnconfirmedErc2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionUnconfirmedErc721
      errorMessages.push("Failed to construct AddressTokensTransactionUnconfirmedErc721: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionUnconfirmedOmni") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionUnconfirmedOmni["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionUnconfirmedOmni from JS object
        this.actualInstance = _AddressTokensTransactionUnconfirmedOmni["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionUnconfirmedOmni
      errorMessages.push("Failed to construct AddressTokensTransactionUnconfirmedOmni: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `AddressTokensTransactionUnconfirmedToken` with oneOf schemas AddressTokensTransactionUnconfirmedErc20, AddressTokensTransactionUnconfirmedErc721, AddressTokensTransactionUnconfirmedOmni. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `AddressTokensTransactionUnconfirmedToken` with oneOf schemas AddressTokensTransactionUnconfirmedErc20, AddressTokensTransactionUnconfirmedErc721, AddressTokensTransactionUnconfirmedOmni. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>AddressTokensTransactionUnconfirmedToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressTokensTransactionUnconfirmedToken} obj Optional instance to populate.
   * @return {module:model/AddressTokensTransactionUnconfirmedToken} The populated <code>AddressTokensTransactionUnconfirmedToken</code> instance.
   */
  _createClass(AddressTokensTransactionUnconfirmedToken, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>AddressTokensTransactionUnconfirmedErc20</code>, <code>AddressTokensTransactionUnconfirmedErc721</code>, <code>AddressTokensTransactionUnconfirmedOmni</code>.
     * @return {(module:model/AddressTokensTransactionUnconfirmedErc20|module:model/AddressTokensTransactionUnconfirmedErc721|module:model/AddressTokensTransactionUnconfirmedOmni)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddressTokensTransactionUnconfirmedErc20</code>, <code>AddressTokensTransactionUnconfirmedErc721</code>, <code>AddressTokensTransactionUnconfirmedOmni</code>.
     * @param {(module:model/AddressTokensTransactionUnconfirmedErc20|module:model/AddressTokensTransactionUnconfirmedErc721|module:model/AddressTokensTransactionUnconfirmedOmni)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = AddressTokensTransactionUnconfirmedToken.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new AddressTokensTransactionUnconfirmedToken(data);
    }
  }]);
  return AddressTokensTransactionUnconfirmedToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_defineProperty(AddressTokensTransactionUnconfirmedToken, "fromJSON", function (json_string) {
  return AddressTokensTransactionUnconfirmedToken.constructFromObject(JSON.parse(json_string));
});
AddressTokensTransactionUnconfirmedToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionUnconfirmedToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionUnconfirmedToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressTokensTransactionUnconfirmedToken.prototype['amount'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionUnconfirmedToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the unique ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionUnconfirmedToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionUnconfirmedToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */
AddressTokensTransactionUnconfirmedToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionUnconfirmedToken.prototype['createdByTransactionId'] = undefined;
AddressTokensTransactionUnconfirmedToken.OneOf = ["AddressTokensTransactionUnconfirmedErc20", "AddressTokensTransactionUnconfirmedErc721", "AddressTokensTransactionUnconfirmedOmni"];
var _default = AddressTokensTransactionUnconfirmedToken;
exports["default"] = _default;