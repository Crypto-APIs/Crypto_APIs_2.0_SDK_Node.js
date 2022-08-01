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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner
 * @version 1.7.2
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner
   * @param address {String} Representation of the address
   * @param outputIndex {Number} Representation of the output index
   * @param satoshis {Number} Representation of the satoshis value
   * @param script {String} Representation of the script string
   * @param sighash {String} Representation of the hash that should be signed.
   * @param transactionId {String} Represents the reference transaction identifier.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner(address, outputIndex, satoshis, script, sighash, transactionId) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner);

    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.initialize(this, address, outputIndex, satoshis, script, sighash, transactionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, outputIndex, satoshis, script, sighash, transactionId) {
      obj['address'] = address;
      obj['outputIndex'] = outputIndex;
      obj['satoshis'] = satoshis;
      obj['script'] = script;
      obj['sighash'] = sighash;
      obj['transactionId'] = transactionId;
    }
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('change')) {
          obj['change'] = _ApiClient["default"].convertToType(data['change'], 'Number');
        }

        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }

        if (data.hasOwnProperty('outputIndex')) {
          obj['outputIndex'] = _ApiClient["default"].convertToType(data['outputIndex'], 'Number');
        }

        if (data.hasOwnProperty('satoshis')) {
          obj['satoshis'] = _ApiClient["default"].convertToType(data['satoshis'], 'Number');
        }

        if (data.hasOwnProperty('script')) {
          obj['script'] = _ApiClient["default"].convertToType(data['script'], 'String');
        }

        if (data.hasOwnProperty('sighash')) {
          obj['sighash'] = _ApiClient["default"].convertToType(data['sighash'], 'String');
        }

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner;
}();
/**
 * Representation of the address
 * @member {String} address
 */


PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['address'] = undefined;
/**
 * Representation of the change value
 * @member {Number} change
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['change'] = undefined;
/**
 * Representation of the derivation index of the xpub address.
 * @member {Number} derivationIndex
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['derivationIndex'] = undefined;
/**
 * Representation of the output index
 * @member {Number} outputIndex
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['outputIndex'] = undefined;
/**
 * Representation of the satoshis value
 * @member {Number} satoshis
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['satoshis'] = undefined;
/**
 * Representation of the script string
 * @member {String} script
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['script'] = undefined;
/**
 * Representation of the hash that should be signed.
 * @member {String} sighash
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['sighash'] = undefined;
/**
 * Represents the reference transaction identifier.
 * @member {String} transactionId
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner.prototype['transactionId'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner;
exports["default"] = _default;