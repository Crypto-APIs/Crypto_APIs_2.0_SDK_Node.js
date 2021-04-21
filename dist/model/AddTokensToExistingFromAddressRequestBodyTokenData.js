"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken = _interopRequireDefault(require("./AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken"));

var _AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token = _interopRequireDefault(require("./AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AddTokensToExistingFromAddressRequestBodyTokenData model module.
 * @module model/AddTokensToExistingFromAddressRequestBodyTokenData
 * @version 2.0.0
 */
var AddTokensToExistingFromAddressRequestBodyTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRequestBodyTokenData</code>.
   * @alias module:model/AddTokensToExistingFromAddressRequestBodyTokenData
   * @implements module:model/AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken
   * @implements module:model/AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token
   * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function AddTokensToExistingFromAddressRequestBodyTokenData(propertyId, contractAddress) {
    _classCallCheck(this, AddTokensToExistingFromAddressRequestBodyTokenData);

    _AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token["default"].initialize(this, contractAddress);

    AddTokensToExistingFromAddressRequestBodyTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddTokensToExistingFromAddressRequestBodyTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>AddTokensToExistingFromAddressRequestBodyTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRequestBodyTokenData} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRequestBodyTokenData} The populated <code>AddTokensToExistingFromAddressRequestBodyTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressRequestBodyTokenData();

        _AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddTokensToExistingFromAddressRequestBodyTokenData;
}();
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */


AddTokensToExistingFromAddressRequestBodyTokenData.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

AddTokensToExistingFromAddressRequestBodyTokenData.prototype['contractAddress'] = undefined; // Implement AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken interface:

/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */

_AddTokensToExistingFromAddressRequestBodyTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_AddTokensToExistingFromAddressRequestBodyTokenDataEthereumErc20Token["default"].prototype['contractAddress'] = undefined;
var _default = AddTokensToExistingFromAddressRequestBodyTokenData;
exports["default"] = _default;