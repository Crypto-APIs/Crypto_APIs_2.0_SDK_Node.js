"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner model module.
 * @module model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner
 * @version 1.13.0
 */
var DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner</code>.
   * @alias module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner
   * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
   * @param index {Number} Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
   */
  function DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner(address, index) {
    _classCallCheck(this, DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner);
    DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner.initialize(this, address, index);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, index) {
      obj['address'] = address;
      obj['index'] = index;
    }

    /**
     * Constructs a <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner} obj Optional instance to populate.
     * @return {module:model/DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner} The populated <code>DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner;
}();
/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} address
 */
DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner.prototype['address'] = undefined;

/**
 * Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
 * @member {Number} index
 */
DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner.prototype['index'] = undefined;
var _default = DeriveHDWalletXPubYPubZPubChangeOrReceivingAddressesRIAddressesInner;
exports["default"] = _default;