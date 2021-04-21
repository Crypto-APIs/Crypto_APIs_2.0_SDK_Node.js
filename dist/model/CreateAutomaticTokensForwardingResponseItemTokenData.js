"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken"));

var _CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingResponseItemTokenData model module.
 * @module model/CreateAutomaticTokensForwardingResponseItemTokenData
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingResponseItemTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingResponseItemTokenData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingResponseItemTokenData
   * @implements module:model/CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken
   * @implements module:model/CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function CreateAutomaticTokensForwardingResponseItemTokenData(propertyId, contractAddress) {
    _classCallCheck(this, CreateAutomaticTokensForwardingResponseItemTokenData);

    _CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken["default"].initialize(this, contractAddress);

    CreateAutomaticTokensForwardingResponseItemTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingResponseItemTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingResponseItemTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingResponseItemTokenData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingResponseItemTokenData} The populated <code>CreateAutomaticTokensForwardingResponseItemTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingResponseItemTokenData();

        _CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken["default"].constructFromObject(data, obj);

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

  return CreateAutomaticTokensForwardingResponseItemTokenData;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


CreateAutomaticTokensForwardingResponseItemTokenData.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

CreateAutomaticTokensForwardingResponseItemTokenData.prototype['contractAddress'] = undefined; // Implement CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken interface:

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */

_CreateAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_CreateAutomaticTokensForwardingResponseItemTokenDataEthereumToken["default"].prototype['contractAddress'] = undefined;
var _default = CreateAutomaticTokensForwardingResponseItemTokenData;
exports["default"] = _default;