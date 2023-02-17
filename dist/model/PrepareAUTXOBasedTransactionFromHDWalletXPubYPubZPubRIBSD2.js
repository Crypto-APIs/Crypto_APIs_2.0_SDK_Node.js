"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VinInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VinInner"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VoutInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2 model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2
 * @version 1.13.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2</code>.
   * Dash
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2
   * @param vin {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VoutInner>} Represents the transaction outputs.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2(vin, vout) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2.initialize(this, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2, null, [{
    key: "initialize",
    value: function initialize(obj, vin, vout) {
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2();
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2;
}();
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VinInner>} vin
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2VoutInner>} vout
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2.prototype['vout'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSD2;
exports["default"] = _default;