"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISLVinInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISLVinInner"));
var _DecodeRawTransactionHexRISLVoutInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISLVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISL model module.
 * @module model/DecodeRawTransactionHexRISL
 * @version 1.13.0
 */
var DecodeRawTransactionHexRISL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISL</code>.
   * Litecoin
   * @alias module:model/DecodeRawTransactionHexRISL
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/DecodeRawTransactionHexRISLVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/DecodeRawTransactionHexRISLVoutInner>} Represents the transaction outputs.
   */
  function DecodeRawTransactionHexRISL(locktime, transactionHash, vSize, version, vin, vout) {
    _classCallCheck(this, DecodeRawTransactionHexRISL);
    DecodeRawTransactionHexRISL.initialize(this, locktime, transactionHash, vSize, version, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISL, null, [{
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
     * Constructs a <code>DecodeRawTransactionHexRISL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISL} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISL} The populated <code>DecodeRawTransactionHexRISL</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISL();
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_DecodeRawTransactionHexRISLVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_DecodeRawTransactionHexRISLVoutInner["default"]]);
        }
        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return DecodeRawTransactionHexRISL;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISL.prototype['locktime'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISL.prototype['transactionHash'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRISL.prototype['vSize'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISL.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISLVinInner>} vin
 */
DecodeRawTransactionHexRISL.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISLVoutInner>} vout
 */
DecodeRawTransactionHexRISL.prototype['vout'] = undefined;

/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRISL.prototype['weight'] = undefined;
var _default = DecodeRawTransactionHexRISL;
exports["default"] = _default;