"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken"));

var _CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingRequestBodyTokenData model module.
 * @module model/CreateAutomaticTokensForwardingRequestBodyTokenData
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingRequestBodyTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRequestBodyTokenData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRequestBodyTokenData
   * @implements module:model/CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken
   * @implements module:model/CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken
   * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function CreateAutomaticTokensForwardingRequestBodyTokenData(propertyId, contractAddress) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRequestBodyTokenData);

    _CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken["default"].initialize(this, contractAddress);

    CreateAutomaticTokensForwardingRequestBodyTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRequestBodyTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRequestBodyTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRequestBodyTokenData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRequestBodyTokenData} The populated <code>CreateAutomaticTokensForwardingRequestBodyTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRequestBodyTokenData();

        _CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken["default"].constructFromObject(data, obj);

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

  return CreateAutomaticTokensForwardingRequestBodyTokenData;
}();
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */


CreateAutomaticTokensForwardingRequestBodyTokenData.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

CreateAutomaticTokensForwardingRequestBodyTokenData.prototype['contractAddress'] = undefined; // Implement CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken interface:

/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */

_CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_CreateAutomaticTokensForwardingRequestBodyTokenDataEthereumToken["default"].prototype['contractAddress'] = undefined;
var _default = CreateAutomaticTokensForwardingRequestBodyTokenData;
exports["default"] = _default;