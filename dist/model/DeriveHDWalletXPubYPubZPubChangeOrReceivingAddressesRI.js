"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner = _interopRequireDefault(require("./DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI model module.
 * @module model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI
 * @version 1.7.2
 */
var DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI</code>.
   * @alias module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI
   * @param addresses {Array.<module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner>} Represents the address details.
   */
  function DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI(addresses) {
    _classCallCheck(this, DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI);

    DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI.initialize(this, addresses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI, null, [{
    key: "initialize",
    value: function initialize(obj, addresses) {
      obj['addresses'] = addresses;
    }
    /**
     * Constructs a <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI} obj Optional instance to populate.
     * @return {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI} The populated <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], [_DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI;
}();
/**
 * Represents the address details.
 * @member {Array.<module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner>} addresses
 */


DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI.prototype['addresses'] = undefined;
var _default = DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRI;
exports["default"] = _default;