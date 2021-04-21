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
 * The SyncHDWalletxPubYPubZPubResponseItem model module.
 * @module model/SyncHDWalletxPubYPubZPubResponseItem
 * @version 2.0.0
 */
var SyncHDWalletxPubYPubZPubResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SyncHDWalletxPubYPubZPubResponseItem</code>.
   * @alias module:model/SyncHDWalletxPubYPubZPubResponseItem
   * @param extendedPublicKey {String} Defines the account extended publicly known key which is used to derive all child public keys.
   */
  function SyncHDWalletxPubYPubZPubResponseItem(extendedPublicKey) {
    _classCallCheck(this, SyncHDWalletxPubYPubZPubResponseItem);

    SyncHDWalletxPubYPubZPubResponseItem.initialize(this, extendedPublicKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SyncHDWalletxPubYPubZPubResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, extendedPublicKey) {
      obj['extendedPublicKey'] = extendedPublicKey;
    }
    /**
     * Constructs a <code>SyncHDWalletxPubYPubZPubResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncHDWalletxPubYPubZPubResponseItem} obj Optional instance to populate.
     * @return {module:model/SyncHDWalletxPubYPubZPubResponseItem} The populated <code>SyncHDWalletxPubYPubZPubResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SyncHDWalletxPubYPubZPubResponseItem();

        if (data.hasOwnProperty('extendedPublicKey')) {
          obj['extendedPublicKey'] = _ApiClient["default"].convertToType(data['extendedPublicKey'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SyncHDWalletxPubYPubZPubResponseItem;
}();
/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} extendedPublicKey
 */


SyncHDWalletxPubYPubZPubResponseItem.prototype['extendedPublicKey'] = undefined;
var _default = SyncHDWalletxPubYPubZPubResponseItem;
exports["default"] = _default;