"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISZVinInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVinInner"));
var _DecodeRawTransactionHexRISZVoutInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRISZ model module.
 * @module model/DecodeRawTransactionHexRISZ
 * @version 1.13.0
 */
var DecodeRawTransactionHexRISZ = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISZ</code>.
   * Zcash
   * @alias module:model/DecodeRawTransactionHexRISZ
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param saplinged {Boolean} Defines if the transaction includes sapling or not.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param valueBalance {String} Defines the transaction value balance.
   * @param version {Number} Represents the transaction version number.
   * @param versionGroupId {String} Represents the transaction version group ID
   * @param vin {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} Represents the Inputs of the transaction
   * @param vout {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} Represents the Inputs of the transaction
   */
  function DecodeRawTransactionHexRISZ(expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout) {
    _classCallCheck(this, DecodeRawTransactionHexRISZ);
    DecodeRawTransactionHexRISZ.initialize(this, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISZ, null, [{
    key: "initialize",
    value: function initialize(obj, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout) {
      obj['expiryHeight'] = expiryHeight;
      obj['locktime'] = locktime;
      obj['overwintered'] = overwintered;
      obj['saplinged'] = saplinged;
      obj['transactionHash'] = transactionHash;
      obj['valueBalance'] = valueBalance;
      obj['version'] = version;
      obj['versionGroupId'] = versionGroupId;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZ} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZ} The populated <code>DecodeRawTransactionHexRISZ</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISZ();
        if (data.hasOwnProperty('expiryHeight')) {
          obj['expiryHeight'] = _ApiClient["default"].convertToType(data['expiryHeight'], 'Number');
        }
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }
        if (data.hasOwnProperty('saplinged')) {
          obj['saplinged'] = _ApiClient["default"].convertToType(data['saplinged'], 'Boolean');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('valueBalance')) {
          obj['valueBalance'] = _ApiClient["default"].convertToType(data['valueBalance'], 'String');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('versionGroupId')) {
          obj['versionGroupId'] = _ApiClient["default"].convertToType(data['versionGroupId'], 'String');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_DecodeRawTransactionHexRISZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_DecodeRawTransactionHexRISZVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return DecodeRawTransactionHexRISZ;
}();
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
DecodeRawTransactionHexRISZ.prototype['expiryHeight'] = undefined;

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISZ.prototype['locktime'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
DecodeRawTransactionHexRISZ.prototype['overwintered'] = undefined;

/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
DecodeRawTransactionHexRISZ.prototype['saplinged'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISZ.prototype['transactionHash'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
DecodeRawTransactionHexRISZ.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISZ.prototype['version'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
DecodeRawTransactionHexRISZ.prototype['versionGroupId'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
DecodeRawTransactionHexRISZ.prototype['vin'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
DecodeRawTransactionHexRISZ.prototype['vout'] = undefined;
var _default = DecodeRawTransactionHexRISZ;
exports["default"] = _default;