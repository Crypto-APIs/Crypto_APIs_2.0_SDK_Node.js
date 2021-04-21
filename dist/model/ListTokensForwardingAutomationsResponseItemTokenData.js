"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken = _interopRequireDefault(require("./ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken"));

var _ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken = _interopRequireDefault(require("./ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTokensForwardingAutomationsResponseItemTokenData model module.
 * @module model/ListTokensForwardingAutomationsResponseItemTokenData
 * @version 2.0.0
 */
var ListTokensForwardingAutomationsResponseItemTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTokensForwardingAutomationsResponseItemTokenData</code>.
   * @alias module:model/ListTokensForwardingAutomationsResponseItemTokenData
   * @implements module:model/ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken
   * @implements module:model/ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken
   * @param propertyId {Number} Defines the Property ID of the Omni Layer token.
   * @param contractAddress {String} Defines the token contract address.
   */
  function ListTokensForwardingAutomationsResponseItemTokenData(propertyId, contractAddress) {
    _classCallCheck(this, ListTokensForwardingAutomationsResponseItemTokenData);

    _ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken["default"].initialize(this, contractAddress);

    ListTokensForwardingAutomationsResponseItemTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTokensForwardingAutomationsResponseItemTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>ListTokensForwardingAutomationsResponseItemTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTokensForwardingAutomationsResponseItemTokenData} obj Optional instance to populate.
     * @return {module:model/ListTokensForwardingAutomationsResponseItemTokenData} The populated <code>ListTokensForwardingAutomationsResponseItemTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTokensForwardingAutomationsResponseItemTokenData();

        _ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken["default"].constructFromObject(data, obj);

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

  return ListTokensForwardingAutomationsResponseItemTokenData;
}();
/**
 * Defines the Property ID of the Omni Layer token.
 * @member {Number} propertyId
 */


ListTokensForwardingAutomationsResponseItemTokenData.prototype['propertyId'] = undefined;
/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */

ListTokensForwardingAutomationsResponseItemTokenData.prototype['contractAddress'] = undefined; // Implement ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken interface:

/**
 * Defines the Property ID of the Omni Layer token.
 * @member {Number} propertyId
 */

_ListTokensForwardingAutomationsResponseItemTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken interface:

/**
 * Defines the token contract address.
 * @member {String} contractAddress
 */

_ListTokensForwardingAutomationsResponseItemTokenDataEthereumToken["default"].prototype['contractAddress'] = undefined;
var _default = ListTokensForwardingAutomationsResponseItemTokenData;
exports["default"] = _default;