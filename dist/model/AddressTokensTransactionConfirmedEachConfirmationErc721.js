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
 * The AddressTokensTransactionConfirmedEachConfirmationErc721 model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationErc721
 * @version 1.13.0
 */
var AddressTokensTransactionConfirmedEachConfirmationErc721 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationErc721</code>.
   * ERC-721
   * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationErc721
   * @param name {String} Specifies the name of the token.
   * @param symbol {String} Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
   * @param tokenId {String} Specifies the ID of the token.
   * @param contractAddress {String} Specifies the address of the contract.
   */
  function AddressTokensTransactionConfirmedEachConfirmationErc721(name, symbol, tokenId, contractAddress) {
    _classCallCheck(this, AddressTokensTransactionConfirmedEachConfirmationErc721);
    AddressTokensTransactionConfirmedEachConfirmationErc721.initialize(this, name, symbol, tokenId, contractAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionConfirmedEachConfirmationErc721, null, [{
    key: "initialize",
    value: function initialize(obj, name, symbol, tokenId, contractAddress) {
      obj['name'] = name;
      obj['symbol'] = symbol;
      obj['tokenId'] = tokenId;
      obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationErc721</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationErc721} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationErc721} The populated <code>AddressTokensTransactionConfirmedEachConfirmationErc721</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedEachConfirmationErc721();
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
  return AddressTokensTransactionConfirmedEachConfirmationErc721;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionConfirmedEachConfirmationErc721.prototype['name'] = undefined;

/**
 * Specifies an identifier of the token, where up to five alphanumeric characters can be used for it.
 * @member {String} symbol
 */
AddressTokensTransactionConfirmedEachConfirmationErc721.prototype['symbol'] = undefined;

/**
 * Specifies the ID of the token.
 * @member {String} tokenId
 */
AddressTokensTransactionConfirmedEachConfirmationErc721.prototype['tokenId'] = undefined;

/**
 * Specifies the address of the contract.
 * @member {String} contractAddress
 */
AddressTokensTransactionConfirmedEachConfirmationErc721.prototype['contractAddress'] = undefined;
var _default = AddressTokensTransactionConfirmedEachConfirmationErc721;
exports["default"] = _default;