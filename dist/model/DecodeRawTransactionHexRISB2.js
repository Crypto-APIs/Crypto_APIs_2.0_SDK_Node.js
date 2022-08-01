"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISB2VinInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISB2VinInner"));

var _DecodeRawTransactionHexRISB2VoutInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISB2VoutInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISB2 model module.
 * @module model/DecodeRawTransactionHexRISB2
 * @version 1.7.2
 */
var DecodeRawTransactionHexRISB2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISB2</code>.
   * Bitcoin Cash
   * @alias module:model/DecodeRawTransactionHexRISB2
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/DecodeRawTransactionHexRISB2VinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/DecodeRawTransactionHexRISB2VoutInner>} Represents the transaction outputs.
   */
  function DecodeRawTransactionHexRISB2(locktime, transactionHash, vSize, version, vin, vout) {
    _classCallCheck(this, DecodeRawTransactionHexRISB2);

    DecodeRawTransactionHexRISB2.initialize(this, locktime, transactionHash, vSize, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISB2, null, [{
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
     * Constructs a <code>DecodeRawTransactionHexRISB2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB2} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB2} The populated <code>DecodeRawTransactionHexRISB2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISB2();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_DecodeRawTransactionHexRISB2VinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_DecodeRawTransactionHexRISB2VoutInner["default"]]);
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISB2;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


DecodeRawTransactionHexRISB2.prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */

DecodeRawTransactionHexRISB2.prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

DecodeRawTransactionHexRISB2.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

DecodeRawTransactionHexRISB2.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISB2VinInner>} vin
 */

DecodeRawTransactionHexRISB2.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISB2VoutInner>} vout
 */

DecodeRawTransactionHexRISB2.prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */

DecodeRawTransactionHexRISB2.prototype['weight'] = undefined;
var _default = DecodeRawTransactionHexRISB2;
exports["default"] = _default;