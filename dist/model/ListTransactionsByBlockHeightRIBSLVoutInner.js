"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListTransactionsByBlockHeightRIBSLVoutInnerScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSLVoutInnerScriptPubKey"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHeightRIBSLVoutInner model module.
 * @module model/ListTransactionsByBlockHeightRIBSLVoutInner
 * @version 1.13.0
 */
var ListTransactionsByBlockHeightRIBSLVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSLVoutInner</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBSLVoutInner
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHeightRIBSLVoutInnerScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHeightRIBSLVoutInner(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSLVoutInner);
    ListTransactionsByBlockHeightRIBSLVoutInner.initialize(this, isSpent, scriptPubKey, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHeightRIBSLVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSLVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSLVoutInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSLVoutInner} The populated <code>ListTransactionsByBlockHeightRIBSLVoutInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSLVoutInner();
        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }
        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHeightRIBSLVoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListTransactionsByBlockHeightRIBSLVoutInner;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
ListTransactionsByBlockHeightRIBSLVoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSLVoutInnerScriptPubKey} scriptPubKey
 */
ListTransactionsByBlockHeightRIBSLVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHeightRIBSLVoutInner.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSLVoutInner;
exports["default"] = _default;