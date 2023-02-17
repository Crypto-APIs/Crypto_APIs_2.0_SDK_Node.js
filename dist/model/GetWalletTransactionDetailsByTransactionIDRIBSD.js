"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSDVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSDVoutInner"));
var _GetWalletTransactionDetailsByTransactionIDRIBSDVinInner = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSDVinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetWalletTransactionDetailsByTransactionIDRIBSD model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBSD
 * @version 1.13.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBSD = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBSD</code>.
   * Dogecoin
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBSD
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSDVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} Object Array representation of transaction outputs
   */
  function GetWalletTransactionDetailsByTransactionIDRIBSD(locktime, size, version, vin, vout) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBSD);
    GetWalletTransactionDetailsByTransactionIDRIBSD.initialize(this, locktime, size, version, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIBSD, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBSD} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBSD</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBSD();
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetWalletTransactionDetailsByTransactionIDRIBSDVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSDVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRIBSD;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetWalletTransactionDetailsByTransactionIDRIBSD.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetWalletTransactionDetailsByTransactionIDRIBSD.prototype['size'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetWalletTransactionDetailsByTransactionIDRIBSD.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSDVinInner>} vin
 */
GetWalletTransactionDetailsByTransactionIDRIBSD.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBSD.prototype['vout'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBSD;
exports["default"] = _default;