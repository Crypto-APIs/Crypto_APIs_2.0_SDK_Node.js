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
 * The AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token model module.
 * @module model/AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token
 * @version 2.0.0
 */
var AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token</code>.
   * Ethereum erc-20 token
   * @alias module:model/AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token(contractAddress) {
    _classCallCheck(this, AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token);

    AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token.initialize(this, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token, null, [{
    key: "initialize",
    value: function initialize(obj, contractAddress) {
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token} The populated <code>AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token();

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token;
}();
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */


AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token.prototype['contractAddress'] = undefined;
var _default = AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token;
exports["default"] = _default;