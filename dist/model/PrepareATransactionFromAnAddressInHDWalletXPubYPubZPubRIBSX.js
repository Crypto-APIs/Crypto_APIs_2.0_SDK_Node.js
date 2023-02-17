"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX
 * @version 1.13.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX</code>.
   * XRP
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX
   * @param derivationIndex {Number} Representation of the derivation index of the xpub address
   * @param fee {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee} 
   * @param publicKey {String} Representation of the public key.
   * @param sequence {String} Representation of the sequence
   * @param unit {String} Represents the unit of the amount to be sent.
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX(derivationIndex, fee, publicKey, sequence, unit) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX.initialize(this, derivationIndex, fee, publicKey, sequence, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX, null, [{
    key: "initialize",
    value: function initialize(obj, derivationIndex, fee, publicKey, sequence, unit) {
      obj['derivationIndex'] = derivationIndex;
      obj['fee'] = fee;
      obj['publicKey'] = publicKey;
      obj['sequence'] = sequence;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX();
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('publicKey')) {
          obj['publicKey'] = _ApiClient["default"].convertToType(data['publicKey'], 'String');
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX;
}();
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX.prototype['derivationIndex'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSXFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX.prototype['fee'] = undefined;

/**
 * Representation of the public key.
 * @member {String} publicKey
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX.prototype['publicKey'] = undefined;

/**
 * Representation of the sequence
 * @member {String} sequence
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX.prototype['sequence'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX.prototype['unit'] = undefined;
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSX;
exports["default"] = _default;