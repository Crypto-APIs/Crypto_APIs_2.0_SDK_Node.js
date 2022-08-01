"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISBVinInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISBVinInner"));

var _DecodeRawTransactionHexRISBVoutInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISBVoutInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISB model module.
 * @module model/DecodeRawTransactionHexRISB
 * @version 1.7.2
 */
var DecodeRawTransactionHexRISB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISB</code>.
   * Bitcoin
   * @alias module:model/DecodeRawTransactionHexRISB
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/DecodeRawTransactionHexRISBVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/DecodeRawTransactionHexRISBVoutInner>} Represents the transaction outputs.
   */
  function DecodeRawTransactionHexRISB(locktime, transactionHash, vSize, version, vin, vout) {
    _classCallCheck(this, DecodeRawTransactionHexRISB);

    DecodeRawTransactionHexRISB.initialize(this, locktime, transactionHash, vSize, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISB, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, transactionHash, vSize, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['transactionHash'] = transactionHash;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB} The populated <code>DecodeRawTransactionHexRISB</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISB();

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }

        if (data.hasOwnProperty('vSize')) {
          obj['vSize'] = _ApiClient["default"].convertToType(data['vSize'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_DecodeRawTransactionHexRISBVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_DecodeRawTransactionHexRISBVoutInner["default"]]);
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISB;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


DecodeRawTransactionHexRISB.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */

DecodeRawTransactionHexRISB.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

DecodeRawTransactionHexRISB.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

DecodeRawTransactionHexRISB.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVinInner>} vin
 */

DecodeRawTransactionHexRISB.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVoutInner>} vout
 */

DecodeRawTransactionHexRISB.prototype['vout'] = undefined;
/**
 * Represents the size of Bitcoin block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */

DecodeRawTransactionHexRISB.prototype['weight'] = undefined;
var _default = DecodeRawTransactionHexRISB;
exports["default"] = _default;