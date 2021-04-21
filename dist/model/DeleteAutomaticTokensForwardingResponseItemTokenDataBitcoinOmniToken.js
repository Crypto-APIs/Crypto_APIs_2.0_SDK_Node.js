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
 * The DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken model module.
 * @module model/DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken
 * @version 2.0.0
 */
var DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken</code>.
   * Bitcoin Omni Token
   * @alias module:model/DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   */
  function DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken(propertyId) {
    _classCallCheck(this, DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken);

    DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken.initialize(this, propertyId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId) {
      obj['propertyId'] = propertyId;
    }
    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken} The populated <code>DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken();

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken.prototype['propertyId'] = undefined;
var _default = DeleteAutomaticTokensForwardingResponseItemTokenDataBitcoinOmniToken;
exports["default"] = _default;