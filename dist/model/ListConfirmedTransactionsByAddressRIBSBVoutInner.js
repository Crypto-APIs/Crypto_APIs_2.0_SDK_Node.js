"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListConfirmedTransactionsByAddressRIBSBVoutInnerScriptPubKey = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBVoutInnerScriptPubKey"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBSBVoutInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSBVoutInner
 * @version 1.13.0
 */
var ListConfirmedTransactionsByAddressRIBSBVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSBVoutInner</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListConfirmedTransactionsByAddressRIBSBVoutInnerScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListConfirmedTransactionsByAddressRIBSBVoutInner(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSBVoutInner);
    ListConfirmedTransactionsByAddressRIBSBVoutInner.initialize(this, isSpent, scriptPubKey, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBSBVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSBVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner} The populated <code>ListConfirmedTransactionsByAddressRIBSBVoutInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSBVoutInner();
        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }
        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListConfirmedTransactionsByAddressRIBSBVoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBSBVoutInner;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
ListConfirmedTransactionsByAddressRIBSBVoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBVoutInnerScriptPubKey} scriptPubKey
 */
ListConfirmedTransactionsByAddressRIBSBVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListConfirmedTransactionsByAddressRIBSBVoutInner.prototype['value'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSBVoutInner;
exports["default"] = _default;