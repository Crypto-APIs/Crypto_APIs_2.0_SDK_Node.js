"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST = _interopRequireDefault(require("./CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS
 * @version 1.11.0
 */
var CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code>.
   * Represents the specific token data which depends on its type - if it is a Coin or Token.
   * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS
   * @param {(module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST)} instance The actual instance to initialize CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.
   */
  function CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS);
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
      if (typeof instance === "CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].validateJSON(instance); // throw an exception if no match
        // create CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST from JS object
        this.actualInstance = _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST
      errorMessages.push("Failed to construct CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS` with oneOf schemas CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS` with oneOf schemas CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} obj Optional instance to populate.
   * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code> instance.
   */
  _createClass(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST</code>.
     * @return {(module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST</code>.
     * @param {(module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS(data);
    }
  }]);
  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS;
}();
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */
_defineProperty(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS, "fromJSON", function (json_string) {
  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.constructFromObject(JSON.parse(json_string));
});
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.prototype['contractAddress'] = undefined;

/**
 * Defines the fee limit value.
 * @member {String} feeLimit
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.prototype['feeLimit'] = undefined;

/**
 * Defines the Token symbol.
 * @member {String} symbol
 */
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.prototype['symbol'] = undefined;
CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.OneOf = ["CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST"];
var _default = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS;
exports["default"] = _default;