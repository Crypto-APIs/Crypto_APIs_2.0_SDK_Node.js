"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVinInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVinInner"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVoutInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB
 * @version 1.13.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB</code>.
   * Bitcoin
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB
   * @param vin {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVoutInner>} Represents the transaction outputs.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB(vin, vout) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB.initialize(this, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB, null, [{
    key: "initialize",
    value: function initialize(obj, vin, vout) {
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB();
        if (data.hasOwnProperty('replaceable')) {
          obj['replaceable'] = _ApiClient["default"].convertToType(data['replaceable'], 'Boolean');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB;
}();
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB.prototype['replaceable'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVinInner>} vin
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSBVoutInner>} vout
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB.prototype['vout'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSB;
exports["default"] = _default;