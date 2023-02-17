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
 * The ListTokensByAddressRI model module.
 * @module model/ListTokensByAddressRI
 * @version 1.13.0
 */
var ListTokensByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensByAddressRI</code>.
   * @alias module:model/ListTokensByAddressRI
   * @param confirmedBalance {String} Defines the token balance that has been confirmed.
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param name {String} Defines the token's name as a string.
   * @param symbol {String} Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
   * @param type {String} Defines the specific token type.
   */
  function ListTokensByAddressRI(confirmedBalance, contractAddress, name, symbol, type) {
    _classCallCheck(this, ListTokensByAddressRI);
    ListTokensByAddressRI.initialize(this, confirmedBalance, contractAddress, name, symbol, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTokensByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance, contractAddress, name, symbol, type) {
      obj['confirmedBalance'] = confirmedBalance;
      obj['contractAddress'] = contractAddress;
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>ListTokensByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListTokensByAddressRI} The populated <code>ListTokensByAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensByAddressRI();
        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _ApiClient["default"].convertToType(data['confirmedBalance'], 'String');
        }
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
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
  return ListTokensByAddressRI;
}();
/**
 * Defines the token balance that has been confirmed.
 * @member {String} confirmedBalance
 */
ListTokensByAddressRI.prototype['confirmedBalance'] = undefined;

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */
ListTokensByAddressRI.prototype['contractAddress'] = undefined;

/**
 * Defines the token's name as a string.
 * @member {String} name
 */
ListTokensByAddressRI.prototype['name'] = undefined;

/**
 * Defines the token symbol by which the token contract is known. It is usually 3-4 characters in length.
 * @member {String} symbol
 */
ListTokensByAddressRI.prototype['symbol'] = undefined;

/**
 * Defines the specific token type.
 * @member {String} type
 */
ListTokensByAddressRI.prototype['type'] = undefined;
var _default = ListTokensByAddressRI;
exports["default"] = _default;