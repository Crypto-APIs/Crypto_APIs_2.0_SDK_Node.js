"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token model module.
 * @module model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token
 * @version 1.1.0
 */
var CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token</code>.
   * Ethereum Erc20 Token
   * @alias module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token
   * @param contractAddress {String} Defines the contract address in the blockchain for an ERC20 token.
   */
  function CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token(contractAddress) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token);

    CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token.initialize(this, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress) {
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token} The populated <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token();

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token;
}();
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */


CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token.prototype['contractAddress'] = undefined;
var _default = CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataEthereumErc20Token;
exports["default"] = _default;