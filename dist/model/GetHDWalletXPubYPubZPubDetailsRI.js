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
 * The GetHDWalletXPubYPubZPubDetailsRI model module.
 * @module model/GetHDWalletXPubYPubZPubDetailsRI
 * @version 1.13.0
 */
var GetHDWalletXPubYPubZPubDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletXPubYPubZPubDetailsRI</code>.
   * @alias module:model/GetHDWalletXPubYPubZPubDetailsRI
   * @param confirmedBalance {String} Specifies the confirmed coins balance of the Wallet.
   */
  function GetHDWalletXPubYPubZPubDetailsRI(confirmedBalance) {
    _classCallCheck(this, GetHDWalletXPubYPubZPubDetailsRI);
    GetHDWalletXPubYPubZPubDetailsRI.initialize(this, confirmedBalance);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetHDWalletXPubYPubZPubDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance) {
      obj['confirmedBalance'] = confirmedBalance;
    }

    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubDetailsRI} The populated <code>GetHDWalletXPubYPubZPubDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletXPubYPubZPubDetailsRI();
        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _ApiClient["default"].convertToType(data['confirmedBalance'], 'String');
        }
        if (data.hasOwnProperty('totalReceived')) {
          obj['totalReceived'] = _ApiClient["default"].convertToType(data['totalReceived'], 'String');
        }
        if (data.hasOwnProperty('totalSpent')) {
          obj['totalSpent'] = _ApiClient["default"].convertToType(data['totalSpent'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetHDWalletXPubYPubZPubDetailsRI;
}();
/**
 * Specifies the confirmed coins balance of the Wallet.
 * @member {String} confirmedBalance
 */
GetHDWalletXPubYPubZPubDetailsRI.prototype['confirmedBalance'] = undefined;

/**
 * Defines the total currency received to the Wallet.
 * @member {String} totalReceived
 */
GetHDWalletXPubYPubZPubDetailsRI.prototype['totalReceived'] = undefined;

/**
 * Defines the total currency spent from the Wallet.
 * @member {String} totalSpent
 */
GetHDWalletXPubYPubZPubDetailsRI.prototype['totalSpent'] = undefined;
var _default = GetHDWalletXPubYPubZPubDetailsRI;
exports["default"] = _default;