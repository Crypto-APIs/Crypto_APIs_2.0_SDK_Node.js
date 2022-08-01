"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken"));

var _CreateAutomaticTokensForwardingRBTokenDataEthereumToken = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRBTokenDataEthereumToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingRBTokenData model module.
 * @module model/CreateAutomaticTokensForwardingRBTokenData
 * @version 1.7.2
 */
var CreateAutomaticTokensForwardingRBTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRBTokenData</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRBTokenData
   * @implements module:model/CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken
   * @implements module:model/CreateAutomaticTokensForwardingRBTokenDataEthereumToken
   * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function CreateAutomaticTokensForwardingRBTokenData(propertyId, contractAddress) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRBTokenData);

    _CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _CreateAutomaticTokensForwardingRBTokenDataEthereumToken["default"].initialize(this, contractAddress);

    CreateAutomaticTokensForwardingRBTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRBTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRBTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRBTokenData} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRBTokenData} The populated <code>CreateAutomaticTokensForwardingRBTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRBTokenData();

        _CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _CreateAutomaticTokensForwardingRBTokenDataEthereumToken["default"].constructFromObject(data, obj);

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

  return CreateAutomaticTokensForwardingRBTokenData;
}();
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */


CreateAutomaticTokensForwardingRBTokenData.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

CreateAutomaticTokensForwardingRBTokenData.prototype['contractAddress'] = undefined; // Implement CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken interface:

/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */

_CreateAutomaticTokensForwardingRBTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement CreateAutomaticTokensForwardingRBTokenDataEthereumToken interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_CreateAutomaticTokensForwardingRBTokenDataEthereumToken["default"].prototype['contractAddress'] = undefined;
var _default = CreateAutomaticTokensForwardingRBTokenData;
exports["default"] = _default;