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
 * The CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken model module.
 * @module model/CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken
 * @version 2.0.0
 */
var CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken</code>.
   * Bitcoin Omni Token
   * @alias module:model/CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken
   * @param propertyId {Number} Represents the specific `propertyId` of the token data that will be forwarded.
   */
  function CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken(propertyId) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken);

    CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken.initialize(this, propertyId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId) {
      obj['propertyId'] = propertyId;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken} The populated <code>CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken();

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken;
}();
/**
 * Represents the specific `propertyId` of the token data that will be forwarded.
 * @member {Number} propertyId
 */


CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken.prototype['propertyId'] = undefined;
var _default = CreateAutomaticTokensForwardingRequestBodyTokenDataBitcoinOmniToken;
exports["default"] = _default;