"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken"));

var _DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteAutomaticTokensForwardingResponseItemTokenData model module.
 * @module model/DeleteAutomaticTokensForwardingResponseItemTokenData
 * @version 2.0.0
 */
var DeleteAutomaticTokensForwardingResponseItemTokenData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAutomaticTokensForwardingResponseItemTokenData</code>.
   * @alias module:model/DeleteAutomaticTokensForwardingResponseItemTokenData
   * @implements module:model/DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken
   * @implements module:model/DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function DeleteAutomaticTokensForwardingResponseItemTokenData(propertyId, contractAddress) {
    _classCallCheck(this, DeleteAutomaticTokensForwardingResponseItemTokenData);

    _DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken["default"].initialize(this, propertyId);

    _DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken["default"].initialize(this, contractAddress);

    DeleteAutomaticTokensForwardingResponseItemTokenData.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteAutomaticTokensForwardingResponseItemTokenData, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingResponseItemTokenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingResponseItemTokenData} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingResponseItemTokenData} The populated <code>DeleteAutomaticTokensForwardingResponseItemTokenData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteAutomaticTokensForwardingResponseItemTokenData();

        _DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken["default"].constructFromObject(data, obj);

        _DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken["default"].constructFromObject(data, obj);

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

  return DeleteAutomaticTokensForwardingResponseItemTokenData;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


DeleteAutomaticTokensForwardingResponseItemTokenData.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

DeleteAutomaticTokensForwardingResponseItemTokenData.prototype['contractAddress'] = undefined; // Implement DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken interface:

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */

_DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken["default"].prototype['propertyId'] = undefined; // Implement DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_DeleteAutomaticTokensForwardingResponseItemTokenDataEthereumToken["default"].prototype['contractAddress'] = undefined;
var _default = DeleteAutomaticTokensForwardingResponseItemTokenData;
exports["default"] = _default;