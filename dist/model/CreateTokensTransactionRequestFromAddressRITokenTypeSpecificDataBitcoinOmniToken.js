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
 * The CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken model module.
 * @module model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken
 * @version 1.1.0
 */
var CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken</code>.
   * Bitcoin Omni Token
   * @alias module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken
   * @param propertyId {String} Defines the `propertyID` from Omni layer.
   */
  function CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken(propertyId) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken);

    CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken.initialize(this, propertyId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId) {
      obj['propertyId'] = propertyId;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken} The populated <code>CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken();

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken;
}();
/**
 * Defines the `propertyID` from Omni layer.
 * @member {String} propertyId
 */


CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken.prototype['propertyId'] = undefined;
var _default = CreateTokensTransactionRequestFromAddressRITokenTypeSpecificDataBitcoinOmniToken;
exports["default"] = _default;