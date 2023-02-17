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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS
 * @version 1.13.0
 */
var CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code>.
   * Represents the specific token data which depends on its type - if it is a Coin or Token.
   * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS
   * @implements module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST
   * @param contractAddress {String} Defines the contract address in the blockchain for an ERC20 token.
   * @param feeLimit {String} Defines the fee limit value.
   * @param symbol {String} Defines the Token symbol.
   */
  function CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS(contractAddress, feeLimit, symbol) {
    _classCallCheck(this, CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS);
    _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].initialize(this, contractAddress, feeLimit, symbol);
    CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS.initialize(this, contractAddress, feeLimit, symbol);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress, feeLimit, symbol) {
      obj['contractAddress'] = contractAddress;
      obj['feeLimit'] = feeLimit;
      obj['symbol'] = symbol;
    }

    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS();
        _CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
        if (data.hasOwnProperty('feeLimit')) {
          obj['feeLimit'] = _ApiClient["default"].convertToType(data['feeLimit'], 'String');
        }
        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS;
}();
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */
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

// Implement CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST interface:
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */
_CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].prototype['contractAddress'] = undefined;
/**
 * Defines the fee limit value.
 * @member {String} feeLimit
 */
_CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].prototype['feeLimit'] = undefined;
/**
 * Defines the Token symbol.
 * @member {String} symbol
 */
_CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST["default"].prototype['symbol'] = undefined;
var _default = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIS;
exports["default"] = _default;