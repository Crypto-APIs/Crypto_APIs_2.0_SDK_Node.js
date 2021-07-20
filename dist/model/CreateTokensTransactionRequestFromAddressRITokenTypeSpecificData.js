"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken"));

var _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData model module.
 * @module model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData
 * @version 1.1.0
 */
var CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData</code>.
   * Represents the specific token data which depends on its type - if it is a Coin or Token.
   * @alias module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData
   * @implements module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken
   * @implements module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token
   * @param propertyId {String} Defines the `propertyID` from Omni layer.
   * @param contractAddress {String} Defines the contract address in the blockchain for an ERC20 token.
   */
  function CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData(propertyId, contractAddress) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData);

    _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token["default"].initialize(this, contractAddress);

    CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData} The populated <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData();

        _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'String');
        }

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData;
}();
/**
 * Defines the `propertyID` from Omni layer.
 * @member {String} propertyId
 */


CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData.prototype['propertyId'] = undefined;
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */

CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData.prototype['contractAddress'] = undefined; // Implement CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken interface:

/**
 * Defines the `propertyID` from Omni layer.
 * @member {String} propertyId
 */

_CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token interface:

/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */

_CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token["default"].prototype['contractAddress'] = undefined;
var _default = CreateTokensTransactionRequestFromAddressRITokenTypeSpecificData;
exports["default"] = _default;