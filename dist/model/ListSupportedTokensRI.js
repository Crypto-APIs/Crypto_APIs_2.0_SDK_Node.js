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
 * The ListSupportedTokensRI model module.
 * @module model/ListSupportedTokensRI
 * @version 1.13.0
 */
var ListSupportedTokensRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSupportedTokensRI</code>.
   * @alias module:model/ListSupportedTokensRI
   * @param decimals {Number} Defines the token's decimal number or all of its points after the zero.
   * @param identifier {String} Represents a unique identifier for the specific blockchain and network, e.g. smart contract address, property ID, etc.
   * @param name {String} Defines the token name.
   * @param symbol {String} Defines the token's unique symbol in the Crypto APIs listings.
   * @param type {String} Represents the token's type representation, e.g. ERC-20, Omni, etc.
   */
  function ListSupportedTokensRI(decimals, identifier, name, symbol, type) {
    _classCallCheck(this, ListSupportedTokensRI);
    ListSupportedTokensRI.initialize(this, decimals, identifier, name, symbol, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListSupportedTokensRI, null, [{
    key: "initialize",
    value: function initialize(obj, decimals, identifier, name, symbol, type) {
      obj['decimals'] = decimals;
      obj['identifier'] = identifier;
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>ListSupportedTokensRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSupportedTokensRI} obj Optional instance to populate.
     * @return {module:model/ListSupportedTokensRI} The populated <code>ListSupportedTokensRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSupportedTokensRI();
        if (data.hasOwnProperty('decimals')) {
          obj['decimals'] = _ApiClient["default"].convertToType(data['decimals'], 'Number');
        }
        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListSupportedTokensRI;
}();
/**
 * Defines the token's decimal number or all of its points after the zero.
 * @member {Number} decimals
 */
ListSupportedTokensRI.prototype['decimals'] = undefined;

/**
 * Represents a unique identifier for the specific blockchain and network, e.g. smart contract address, property ID, etc.
 * @member {String} identifier
 */
ListSupportedTokensRI.prototype['identifier'] = undefined;

/**
 * Defines the token name.
 * @member {String} name
 */
ListSupportedTokensRI.prototype['name'] = undefined;

/**
 * Defines the token's unique symbol in the Crypto APIs listings.
 * @member {String} symbol
 */
ListSupportedTokensRI.prototype['symbol'] = undefined;

/**
 * Represents the token's type representation, e.g. ERC-20, Omni, etc.
 * @member {String} type
 */
ListSupportedTokensRI.prototype['type'] = undefined;
var _default = ListSupportedTokensRI;
exports["default"] = _default;