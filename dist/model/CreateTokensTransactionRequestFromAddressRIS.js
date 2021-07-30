"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTokensTransactionRequestFromAddressRISB = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRISB"));

var _CreateTokensTransactionRequestFromAddressRISE = _interopRequireDefault(require("./CreateTokensTransactionRequestFromAddressRISE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTokensTransactionRequestFromAddressRIS model module.
 * @module model/CreateTokensTransactionRequestFromAddressRIS
 * @version 1.2.0
 */
var CreateTokensTransactionRequestFromAddressRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTokensTransactionRequestFromAddressRIS</code>.
   * Represents the specific token data which depends on its type - if it is a Coin or Token.
   * @alias module:model/CreateTokensTransactionRequestFromAddressRIS
   * @implements module:model/CreateTokensTransactionRequestFromAddressRISB
   * @implements module:model/CreateTokensTransactionRequestFromAddressRISE
   * @param propertyId {String} Defines the `propertyID` from Omni layer.
   * @param contractAddress {String} Defines the contract address in the blockchain for an ERC20 token.
   */
  function CreateTokensTransactionRequestFromAddressRIS(propertyId, contractAddress) {
    _classCallCheck(this, CreateTokensTransactionRequestFromAddressRIS);

    _CreateTokensTransactionRequestFromAddressRISB["default"].initialize(this, propertyId);

    _CreateTokensTransactionRequestFromAddressRISE["default"].initialize(this, contractAddress);

    CreateTokensTransactionRequestFromAddressRIS.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTokensTransactionRequestFromAddressRIS, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateTokensTransactionRequestFromAddressRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTokensTransactionRequestFromAddressRIS} obj Optional instance to populate.
     * @return {module:model/CreateTokensTransactionRequestFromAddressRIS} The populated <code>CreateTokensTransactionRequestFromAddressRIS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTokensTransactionRequestFromAddressRIS();

        _CreateTokensTransactionRequestFromAddressRISB["default"].constructFromObject(data, obj);

        _CreateTokensTransactionRequestFromAddressRISE["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'String');
        }

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTokensTransactionRequestFromAddressRIS;
}();
/**
 * Defines the `propertyID` from Omni layer.
 * @member {String} propertyId
 */


CreateTokensTransactionRequestFromAddressRIS.prototype['propertyId'] = undefined;
/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */

CreateTokensTransactionRequestFromAddressRIS.prototype['contractAddress'] = undefined; // Implement CreateTokensTransactionRequestFromAddressRISB interface:

/**
 * Defines the `propertyID` from Omni layer.
 * @member {String} propertyId
 */

_CreateTokensTransactionRequestFromAddressRISB["default"].prototype['propertyId'] = undefined; // Implement CreateTokensTransactionRequestFromAddressRISE interface:

/**
 * Defines the contract address in the blockchain for an ERC20 token.
 * @member {String} contractAddress
 */

_CreateTokensTransactionRequestFromAddressRISE["default"].prototype['contractAddress'] = undefined;
var _default = CreateTokensTransactionRequestFromAddressRIS;
exports["default"] = _default;