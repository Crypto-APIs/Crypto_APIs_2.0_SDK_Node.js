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
 * The SyncHDWalletXPubYPubZPubRI model module.
 * @module model/SyncHDWalletXPubYPubZPubRI
 * @version 1.7.2
 */
var SyncHDWalletXPubYPubZPubRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SyncHDWalletXPubYPubZPubRI</code>.
   * @alias module:model/SyncHDWalletXPubYPubZPubRI
   * @param extendedPublicKey {String} Defines the account extended publicly known key which is used to derive all child public keys.
   */
  function SyncHDWalletXPubYPubZPubRI(extendedPublicKey) {
    _classCallCheck(this, SyncHDWalletXPubYPubZPubRI);

    SyncHDWalletXPubYPubZPubRI.initialize(this, extendedPublicKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SyncHDWalletXPubYPubZPubRI, null, [{
    key: "initialize",
    value: function initialize(obj, extendedPublicKey) {
      obj['extendedPublicKey'] = extendedPublicKey;
    }
    /**
     * Constructs a <code>SyncHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/SyncHDWalletXPubYPubZPubRI} The populated <code>SyncHDWalletXPubYPubZPubRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SyncHDWalletXPubYPubZPubRI();

        if (data.hasOwnProperty('extendedPublicKey')) {
          obj['extendedPublicKey'] = _ApiClient["default"].convertToType(data['extendedPublicKey'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SyncHDWalletXPubYPubZPubRI;
}();
/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} extendedPublicKey
 */


SyncHDWalletXPubYPubZPubRI.prototype['extendedPublicKey'] = undefined;
var _default = SyncHDWalletXPubYPubZPubRI;
exports["default"] = _default;