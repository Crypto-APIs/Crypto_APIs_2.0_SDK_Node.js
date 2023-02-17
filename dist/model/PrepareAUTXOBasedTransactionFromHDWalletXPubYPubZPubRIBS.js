"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2 = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS
 * @version 1.13.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS
   * @implements module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB
   * @implements module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC
   * @implements module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL
   * @implements module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD
   * @implements module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2
   * @implements module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ
   * @param vin {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner>} Represents the transaction outputs.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS(vin, vout) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS);
    _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].initialize(this, vin, vout);
    _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC["default"].initialize(this, vin, vout);
    _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].initialize(this, vin, vout);
    _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD["default"].initialize(this, vin, vout);
    _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2["default"].initialize(this, vin, vout);
    _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].initialize(this, vin, vout);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.initialize(this, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, vin, vout) {
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS();
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].constructFromObject(data, obj);
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC["default"].constructFromObject(data, obj);
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].constructFromObject(data, obj);
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD["default"].constructFromObject(data, obj);
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2["default"].constructFromObject(data, obj);
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('replaceable')) {
          obj['replaceable'] = _ApiClient["default"].convertToType(data['replaceable'], 'Boolean');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS;
}();
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['replaceable'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner>} vin
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner>} vout
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['vout'] = undefined;

// Implement PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB interface:
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].prototype['replaceable'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVinInner>} vin
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVoutInner>} vout
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB["default"].prototype['vout'] = undefined;
// Implement PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC interface:
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBCVinInner>} vin
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBCVoutInner>} vout
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBC["default"].prototype['vout'] = undefined;
// Implement PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL interface:
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].prototype['replaceable'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner>} vin
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVoutInner>} vout
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL["default"].prototype['vout'] = undefined;
// Implement PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD interface:
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner>} vin
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVoutInner>} vout
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD["default"].prototype['vout'] = undefined;
// Implement PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2 interface:
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VinInner>} vin
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VoutInner>} vout
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2["default"].prototype['vout'] = undefined;
// Implement PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ interface:
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].prototype['replaceable'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVinInner>} vin
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZVoutInner>} vout
 */
_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSZ["default"].prototype['vout'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS;
exports["default"] = _default;