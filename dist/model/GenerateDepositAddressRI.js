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
 * The GenerateDepositAddressRI model module.
 * @module model/GenerateDepositAddressRI
 * @version 1.13.0
 */
var GenerateDepositAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateDepositAddressRI</code>.
   * @alias module:model/GenerateDepositAddressRI
   * @param address {String} Specifies the specific address's unique string value.
   * @param createdTimestamp {Number} Defines the specific UNIX time when the deposit address was created.
   * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
   */
  function GenerateDepositAddressRI(address, createdTimestamp, label) {
    _classCallCheck(this, GenerateDepositAddressRI);
    GenerateDepositAddressRI.initialize(this, address, createdTimestamp, label);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GenerateDepositAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, createdTimestamp, label) {
      obj['address'] = address;
      obj['createdTimestamp'] = createdTimestamp;
      obj['label'] = label;
    }

    /**
     * Constructs a <code>GenerateDepositAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateDepositAddressRI} obj Optional instance to populate.
     * @return {module:model/GenerateDepositAddressRI} The populated <code>GenerateDepositAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateDepositAddressRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GenerateDepositAddressRI;
}();
/**
 * Specifies the specific address's unique string value.
 * @member {String} address
 */
GenerateDepositAddressRI.prototype['address'] = undefined;

/**
 * Defines the specific UNIX time when the deposit address was created.
 * @member {Number} createdTimestamp
 */
GenerateDepositAddressRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */
GenerateDepositAddressRI.prototype['label'] = undefined;
var _default = GenerateDepositAddressRI;
exports["default"] = _default;