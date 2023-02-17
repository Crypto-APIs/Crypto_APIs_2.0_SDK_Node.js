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
 * The DecodeXAddressRI model module.
 * @module model/DecodeXAddressRI
 * @version 1.13.0
 */
var DecodeXAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeXAddressRI</code>.
   * @alias module:model/DecodeXAddressRI
   * @param addressTag {Number} Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
   * @param classicAddress {String} Represents the public address, which is a compressed and shortened form of a public key.
   */
  function DecodeXAddressRI(addressTag, classicAddress) {
    _classCallCheck(this, DecodeXAddressRI);
    DecodeXAddressRI.initialize(this, addressTag, classicAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeXAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, addressTag, classicAddress) {
      obj['addressTag'] = addressTag;
      obj['classicAddress'] = classicAddress;
    }

    /**
     * Constructs a <code>DecodeXAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeXAddressRI} obj Optional instance to populate.
     * @return {module:model/DecodeXAddressRI} The populated <code>DecodeXAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeXAddressRI();
        if (data.hasOwnProperty('addressTag')) {
          obj['addressTag'] = _ApiClient["default"].convertToType(data['addressTag'], 'Number');
        }
        if (data.hasOwnProperty('classicAddress')) {
          obj['classicAddress'] = _ApiClient["default"].convertToType(data['classicAddress'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DecodeXAddressRI;
}();
/**
 * Defines a specific Tag that is an additional XRP address feature. It helps identifying a transaction recipient beyond a wallet address.
 * @member {Number} addressTag
 */
DecodeXAddressRI.prototype['addressTag'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} classicAddress
 */
DecodeXAddressRI.prototype['classicAddress'] = undefined;
var _default = DecodeXAddressRI;
exports["default"] = _default;