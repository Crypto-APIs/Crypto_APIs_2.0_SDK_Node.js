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
 * The DeriveAndSyncNewReceivingAddressesRI model module.
 * @module model/DeriveAndSyncNewReceivingAddressesRI
 * @version 1.13.0
 */
var DeriveAndSyncNewReceivingAddressesRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeriveAndSyncNewReceivingAddressesRI</code>.
   * @alias module:model/DeriveAndSyncNewReceivingAddressesRI
   * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
   * @param addressFormat {String} Represents the format of the address.
   * @param addressType {module:model/DeriveAndSyncNewReceivingAddressesRI.AddressTypeEnum} Defines the address type.
   * @param derivationType {module:model/DeriveAndSyncNewReceivingAddressesRI.DerivationTypeEnum} Represents the derivation type
   * @param index {String} Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
   */
  function DeriveAndSyncNewReceivingAddressesRI(address, addressFormat, addressType, derivationType, index) {
    _classCallCheck(this, DeriveAndSyncNewReceivingAddressesRI);
    DeriveAndSyncNewReceivingAddressesRI.initialize(this, address, addressFormat, addressType, derivationType, index);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DeriveAndSyncNewReceivingAddressesRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, addressFormat, addressType, derivationType, index) {
      obj['address'] = address;
      obj['addressFormat'] = addressFormat;
      obj['addressType'] = addressType;
      obj['derivationType'] = derivationType;
      obj['index'] = index;
    }

    /**
     * Constructs a <code>DeriveAndSyncNewReceivingAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeriveAndSyncNewReceivingAddressesRI} obj Optional instance to populate.
     * @return {module:model/DeriveAndSyncNewReceivingAddressesRI} The populated <code>DeriveAndSyncNewReceivingAddressesRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeriveAndSyncNewReceivingAddressesRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('addressFormat')) {
          obj['addressFormat'] = _ApiClient["default"].convertToType(data['addressFormat'], 'String');
        }
        if (data.hasOwnProperty('addressType')) {
          obj['addressType'] = _ApiClient["default"].convertToType(data['addressType'], 'String');
        }
        if (data.hasOwnProperty('derivationType')) {
          obj['derivationType'] = _ApiClient["default"].convertToType(data['derivationType'], 'String');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DeriveAndSyncNewReceivingAddressesRI;
}();
/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} address
 */
DeriveAndSyncNewReceivingAddressesRI.prototype['address'] = undefined;

/**
 * Represents the format of the address.
 * @member {String} addressFormat
 */
DeriveAndSyncNewReceivingAddressesRI.prototype['addressFormat'] = undefined;

/**
 * Defines the address type.
 * @member {module:model/DeriveAndSyncNewReceivingAddressesRI.AddressTypeEnum} addressType
 */
DeriveAndSyncNewReceivingAddressesRI.prototype['addressType'] = undefined;

/**
 * Represents the derivation type
 * @member {module:model/DeriveAndSyncNewReceivingAddressesRI.DerivationTypeEnum} derivationType
 */
DeriveAndSyncNewReceivingAddressesRI.prototype['derivationType'] = undefined;

/**
 * Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
 * @member {String} index
 */
DeriveAndSyncNewReceivingAddressesRI.prototype['index'] = undefined;

/**
 * Allowed values for the <code>addressType</code> property.
 * @enum {String}
 * @readonly
 */
DeriveAndSyncNewReceivingAddressesRI['AddressTypeEnum'] = {
  /**
   * value: "change"
   * @const
   */
  "change": "change"
};

/**
 * Allowed values for the <code>derivationType</code> property.
 * @enum {String}
 * @readonly
 */
DeriveAndSyncNewReceivingAddressesRI['DerivationTypeEnum'] = {
  /**
   * value: "account"
   * @const
   */
  "account": "account",
  /**
   * value: "bip32"
   * @const
   */
  "bip32": "bip32"
};
var _default = DeriveAndSyncNewReceivingAddressesRI;
exports["default"] = _default;