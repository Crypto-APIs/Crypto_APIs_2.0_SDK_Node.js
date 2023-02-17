"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVoutInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL
 * @version 1.13.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL</code>.
   * Litecoin
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL
   * @param vin {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVoutInner>} Represents the transaction outputs.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL(vin, vout) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL.initialize(this, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL, null, [{
    key: "initialize",
    value: function initialize(obj, vin, vout) {
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL();
        if (data.hasOwnProperty('replaceable')) {
          obj['replaceable'] = _ApiClient["default"].convertToType(data['replaceable'], 'Boolean');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL;
}();
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL.prototype['replaceable'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVinInner>} vin
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSLVoutInner>} vout
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL.prototype['vout'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSL;
exports["default"] = _default;