"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST model module.
 * @module model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST
 * @version 1.7.2
 */
var CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST</code>.
   * Tron Trc20 Token
   * @alias module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST
   * @param contractAddress {String} Defines the contract address in the blockchain for an ERC20 token.
   * @param feeLimit {String} Defines the fee limit value.
   * @param symbol {String} Defines the Token symbol.
   */
  function CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST(contractAddress, feeLimit, symbol) {
    _classCallCheck(this, CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST);

    CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.initialize(this, contractAddress, feeLimit, symbol);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress, feeLimit, symbol) {
      obj['contractAddress'] = contractAddress;
      obj['feeLimit'] = feeLimit;
      obj['symbol'] = symbol;
    }
    /**
     * Constructs a <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST} obj Optional instance to populate.
     * @return {module:model/CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST} The populated <code>CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST();

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

  return CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST;
}();
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */


CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.prototype['contractAddress'] = undefined;
/**
 * Defines the fee limit value.
 * @member {String} feeLimit
 */

CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.prototype['feeLimit'] = undefined;
/**
 * Defines the Token symbol.
 * @member {String} symbol
 */

CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST.prototype['symbol'] = undefined;
var _default = CreateFungibleTokenTransactionRequestFromAddressWithoutFeePriorityRIST;
exports["default"] = _default;