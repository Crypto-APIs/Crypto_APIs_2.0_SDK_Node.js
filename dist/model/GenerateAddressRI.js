"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GenerateAddressRIAddresses = _interopRequireDefault(require("./GenerateAddressRIAddresses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GenerateAddressRI model module.
 * @module model/GenerateAddressRI
 * @version 1.3.0
 */
var GenerateAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateAddressRI</code>.
   * @alias module:model/GenerateAddressRI
   * @param addresses {Array.<module:model/GenerateAddressRIAddresses>} 
   * @param privateKey {String} Represents the privately known secret key used for authentication and encryption of the address.
   * @param publicKey {String} Represents the publicly known key used for identification of the address.
   * @param wif {String} Represents the Wallet Import Format which dictates the encoding that allows the copy of the private ECDSA key easily.
   */
  function GenerateAddressRI(addresses, privateKey, publicKey, wif) {
    _classCallCheck(this, GenerateAddressRI);

    GenerateAddressRI.initialize(this, addresses, privateKey, publicKey, wif);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, privateKey, publicKey, wif) {
      obj['addresses'] = addresses;
      obj['privateKey'] = privateKey;
      obj['publicKey'] = publicKey;
      obj['wif'] = wif;
    }
    /**
     * Constructs a <code>GenerateAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateAddressRI} obj Optional instance to populate.
     * @return {module:model/GenerateAddressRI} The populated <code>GenerateAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateAddressRI();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], [_GenerateAddressRIAddresses["default"]]);
        }

        if (data.hasOwnProperty('privateKey')) {
          obj['privateKey'] = _ApiClient["default"].convertToType(data['privateKey'], 'String');
        }

        if (data.hasOwnProperty('publicKey')) {
          obj['publicKey'] = _ApiClient["default"].convertToType(data['publicKey'], 'String');
        }

        if (data.hasOwnProperty('wif')) {
          obj['wif'] = _ApiClient["default"].convertToType(data['wif'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GenerateAddressRI;
}();
/**
 * @member {Array.<module:model/GenerateAddressRIAddresses>} addresses
 */


GenerateAddressRI.prototype['addresses'] = undefined;
/**
 * Represents the privately known secret key used for authentication and encryption of the address.
 * @member {String} privateKey
 */

GenerateAddressRI.prototype['privateKey'] = undefined;
/**
 * Represents the publicly known key used for identification of the address.
 * @member {String} publicKey
 */

GenerateAddressRI.prototype['publicKey'] = undefined;
/**
 * Represents the Wallet Import Format which dictates the encoding that allows the copy of the private ECDSA key easily.
 * @member {String} wif
 */

GenerateAddressRI.prototype['wif'] = undefined;
var _default = GenerateAddressRI;
exports["default"] = _default;