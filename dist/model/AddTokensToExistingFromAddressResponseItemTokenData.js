"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken = _interopRequireDefault(require("./AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken"));

var _AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token = _interopRequireDefault(require("./AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AddTokensToExistingFromAddressResponseItemTokenData model module.
 * @module model/AddTokensToExistingFromAddressResponseItemTokenData
 * @version 2.0.0
 */
var AddTokensToExistingFromAddressResponseItemTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressResponseItemTokenData</code>.
   * @alias module:model/AddTokensToExistingFromAddressResponseItemTokenData
   * @implements module:model/AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken
   * @implements module:model/AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   * @param contractAddress {String} Token contract address to be transferred
   */
  function AddTokensToExistingFromAddressResponseItemTokenData(propertyId, contractAddress) {
    _classCallCheck(this, AddTokensToExistingFromAddressResponseItemTokenData);

    _AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token["default"].initialize(this, contractAddress);

    AddTokensToExistingFromAddressResponseItemTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddTokensToExistingFromAddressResponseItemTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>AddTokensToExistingFromAddressResponseItemTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressResponseItemTokenData} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressResponseItemTokenData} The populated <code>AddTokensToExistingFromAddressResponseItemTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressResponseItemTokenData();

        _AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token["default"].constructFromObject(data, obj);

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

  return AddTokensToExistingFromAddressResponseItemTokenData;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


AddTokensToExistingFromAddressResponseItemTokenData.prototype['propertyId'] = undefined;
/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */

AddTokensToExistingFromAddressResponseItemTokenData.prototype['contractAddress'] = undefined; // Implement AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken interface:

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */

_AddTokensToExistingFromAddressResponseItemTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token interface:

/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */

_AddTokensToExistingFromAddressResponseItemTokenDataEthereumErc20Token["default"].prototype['contractAddress'] = undefined;
var _default = AddTokensToExistingFromAddressResponseItemTokenData;
exports["default"] = _default;