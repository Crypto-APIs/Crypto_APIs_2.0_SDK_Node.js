"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses model module.
 * @module model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses
 * @version 1.5.0
 */
var DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses</code>.
   * @alias module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses
   * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
   * @param index {Number} Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
   */
  function DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses(address, index) {
    _classCallCheck(this, DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses);

    DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses.initialize(this, address, index);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses, null, [{
    key: "initialize",
    value: function initialize(obj, address, index) {
      obj['address'] = address;
      obj['index'] = index;
    }
    /**
     * Constructs a <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses} obj Optional instance to populate.
     * @return {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses} The populated <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses;
}();
/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} address
 */


DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses.prototype['address'] = undefined;
/**
 * Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
 * @member {Number} index
 */

DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses.prototype['index'] = undefined;
var _default = DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddresses;
exports["default"] = _default;