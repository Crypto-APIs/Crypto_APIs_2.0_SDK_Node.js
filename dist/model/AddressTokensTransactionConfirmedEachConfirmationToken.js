"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressTokensTransactionConfirmedEachConfirmationBep = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationBep20"));
var _AddressTokensTransactionConfirmedEachConfirmationErc = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationErc20"));
var _AddressTokensTransactionConfirmedEachConfirmationErc2 = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationErc721"));
var _AddressTokensTransactionConfirmedEachConfirmationOmni = _interopRequireDefault(require("./AddressTokensTransactionConfirmedEachConfirmationOmni"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddressTokensTransactionConfirmedEachConfirmationToken model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationToken
 * @version 1.11.0
 */
var AddressTokensTransactionConfirmedEachConfirmationToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationToken</code>.
   * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationToken
   * @param {(module:model/AddressTokensTransactionConfirmedEachConfirmationBep20|module:model/AddressTokensTransactionConfirmedEachConfirmationErc20|module:model/AddressTokensTransactionConfirmedEachConfirmationErc721|module:model/AddressTokensTransactionConfirmedEachConfirmationOmni)} instance The actual instance to initialize AddressTokensTransactionConfirmedEachConfirmationToken.
   */
  function AddressTokensTransactionConfirmedEachConfirmationToken() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, AddressTokensTransactionConfirmedEachConfirmationToken);
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
      if (typeof instance === "AddressTokensTransactionConfirmedEachConfirmationErc20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedEachConfirmationErc["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedEachConfirmationErc20 from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedEachConfirmationErc["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedEachConfirmationErc20
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedEachConfirmationErc20: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionConfirmedEachConfirmationErc721") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedEachConfirmationErc2["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedEachConfirmationErc721 from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedEachConfirmationErc2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedEachConfirmationErc721
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedEachConfirmationErc721: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionConfirmedEachConfirmationOmni") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedEachConfirmationOmni["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedEachConfirmationOmni from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedEachConfirmationOmni["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedEachConfirmationOmni
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedEachConfirmationOmni: " + err);
    }
    try {
      if (typeof instance === "AddressTokensTransactionConfirmedEachConfirmationBep20") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _AddressTokensTransactionConfirmedEachConfirmationBep["default"].validateJSON(instance); // throw an exception if no match
        // create AddressTokensTransactionConfirmedEachConfirmationBep20 from JS object
        this.actualInstance = _AddressTokensTransactionConfirmedEachConfirmationBep["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into AddressTokensTransactionConfirmedEachConfirmationBep20
      errorMessages.push("Failed to construct AddressTokensTransactionConfirmedEachConfirmationBep20: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `AddressTokensTransactionConfirmedEachConfirmationToken` with oneOf schemas AddressTokensTransactionConfirmedEachConfirmationBep20, AddressTokensTransactionConfirmedEachConfirmationErc20, AddressTokensTransactionConfirmedEachConfirmationErc721, AddressTokensTransactionConfirmedEachConfirmationOmni. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `AddressTokensTransactionConfirmedEachConfirmationToken` with oneOf schemas AddressTokensTransactionConfirmedEachConfirmationBep20, AddressTokensTransactionConfirmedEachConfirmationErc20, AddressTokensTransactionConfirmedEachConfirmationErc721, AddressTokensTransactionConfirmedEachConfirmationOmni. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationToken} obj Optional instance to populate.
   * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationToken} The populated <code>AddressTokensTransactionConfirmedEachConfirmationToken</code> instance.
   */
  _createClass(AddressTokensTransactionConfirmedEachConfirmationToken, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>AddressTokensTransactionConfirmedEachConfirmationBep20</code>, <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code>, <code>AddressTokensTransactionConfirmedEachConfirmationErc721</code>, <code>AddressTokensTransactionConfirmedEachConfirmationOmni</code>.
     * @return {(module:model/AddressTokensTransactionConfirmedEachConfirmationBep20|module:model/AddressTokensTransactionConfirmedEachConfirmationErc20|module:model/AddressTokensTransactionConfirmedEachConfirmationErc721|module:model/AddressTokensTransactionConfirmedEachConfirmationOmni)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddressTokensTransactionConfirmedEachConfirmationBep20</code>, <code>AddressTokensTransactionConfirmedEachConfirmationErc20</code>, <code>AddressTokensTransactionConfirmedEachConfirmationErc721</code>, <code>AddressTokensTransactionConfirmedEachConfirmationOmni</code>.
     * @param {(module:model/AddressTokensTransactionConfirmedEachConfirmationBep20|module:model/AddressTokensTransactionConfirmedEachConfirmationErc20|module:model/AddressTokensTransactionConfirmedEachConfirmationErc721|module:model/AddressTokensTransactionConfirmedEachConfirmationOmni)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = AddressTokensTransactionConfirmedEachConfirmationToken.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new AddressTokensTransactionConfirmedEachConfirmationToken(data);
    }
  }]);
  return AddressTokensTransactionConfirmedEachConfirmationToken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
_defineProperty(AddressTokensTransactionConfirmedEachConfirmationToken, "fromJSON", function (json_string) {
  return AddressTokensTransactionConfirmedEachConfirmationToken.constructFromObject(JSON.parse(json_string));
});
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['symbol'] = undefined;

/**
 * Defines how many decimals can be used to break the token.
 * @member {String} decimals
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['decimals'] = undefined;

/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['amount'] = undefined;

/**
 * Defines the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['contractAddress'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['tokenId'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionConfirmedEachConfirmationToken.prototype['createdByTransactionId'] = undefined;
AddressTokensTransactionConfirmedEachConfirmationToken.OneOf = ["AddressTokensTransactionConfirmedEachConfirmationBep20", "AddressTokensTransactionConfirmedEachConfirmationErc20", "AddressTokensTransactionConfirmedEachConfirmationErc721", "AddressTokensTransactionConfirmedEachConfirmationOmni"];
var _default = AddressTokensTransactionConfirmedEachConfirmationToken;
exports["default"] = _default;