"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner"));

var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI
 * @version 1.7.2
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI
   * @param fee {String} When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param replaceable {Boolean} Representation of whether the transaction is replaceable
   * @param size {Number} Represents the total size of this transaction.
   * @param vin {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner>} Represents the transaction outputs.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI(fee, locktime, replaceable, size, vin, vout) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI);

    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.initialize(this, fee, locktime, replaceable, size, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI, null, [{
    key: "initialize",
    value: function initialize(obj, fee, locktime, replaceable, size, vin, vout) {
      obj['fee'] = fee;
      obj['locktime'] = locktime;
      obj['replaceable'] = replaceable;
      obj['size'] = size;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();

        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'String');
        }

        if (data.hasOwnProperty('feePerByte')) {
          obj['feePerByte'] = _ApiClient["default"].convertToType(data['feePerByte'], 'String');
        }

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('replaceable')) {
          obj['replaceable'] = _ApiClient["default"].convertToType(data['replaceable'], 'Boolean');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI;
}();
/**
 * Representation of the additional data
 * @member {String} additionalData
 */


PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['additionalData'] = undefined;
/**
 * When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} fee
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['fee'] = undefined;
/**
 * Defines the fee per byte value
 * @member {String} feePerByte
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['feePerByte'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['locktime'] = undefined;
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['replaceable'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['size'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVinInner>} vin
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIVoutInner>} vout
 */

PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['vout'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI;
exports["default"] = _default;