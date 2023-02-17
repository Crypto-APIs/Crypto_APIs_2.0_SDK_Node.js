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
 * The AddressTokensTransactionConfirmedTrc721 model module.
 * @module model/AddressTokensTransactionConfirmedTrc721
 * @version 1.13.0
 */
var AddressTokensTransactionConfirmedTrc721 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedTrc721</code>.
   * TRC-721
   * @alias module:model/AddressTokensTransactionConfirmedTrc721
   * @param name {String} 
   * @param symbol {String} 
   * @param tokenId {String} 
   * @param contractAddress {String} 
   */
  function AddressTokensTransactionConfirmedTrc721(name, symbol, tokenId, contractAddress) {
    _classCallCheck(this, AddressTokensTransactionConfirmedTrc721);
    AddressTokensTransactionConfirmedTrc721.initialize(this, name, symbol, tokenId, contractAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionConfirmedTrc721, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, tokenId, contractAddress) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedTrc721</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedTrc721} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedTrc721} The populated <code>AddressTokensTransactionConfirmedTrc721</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedTrc721();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddressTokensTransactionConfirmedTrc721;
}();
/**
 * @member {String} name
 */
AddressTokensTransactionConfirmedTrc721.prototype['name'] = undefined;

/**
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedTrc721.prototype['symbol'] = undefined;

/**
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedTrc721.prototype['tokenId'] = undefined;

/**
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedTrc721.prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionConfirmedTrc721;
exports["default"] = _default;