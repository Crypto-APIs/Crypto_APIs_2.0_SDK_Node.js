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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner
 * @version 1.8.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner
   * @param address {String} Representation of the address
   * @param satoshis {Number} Representation of the satoshis value
   * @param script {String} Representation of the script
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner(address, satoshis, script) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner);

    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner.initialize(this, address, satoshis, script);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, satoshis, script) {
      obj['address'] = address;
      obj['satoshis'] = satoshis;
      obj['script'] = script;
    }
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('satoshis')) {
          obj['satoshis'] = _ApiClient["default"].convertToType(data['satoshis'], 'Number');
        }

        if (data.hasOwnProperty('script')) {
          obj['script'] = _ApiClient["default"].convertToType(data['script'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner;
}();
/**
 * Representation of the address
 * @member {String} address
 */


PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner.prototype['address'] = undefined;
/**
 * Representation of the satoshis value
 * @member {Number} satoshis
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner.prototype['satoshis'] = undefined;
/**
 * Representation of the script
 * @member {String} script
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner.prototype['script'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner;
exports["default"] = _default;