"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHashRIBSLVoutInner model module.
 * @module model/ListTransactionsByBlockHashRIBSLVoutInner
 * @version 1.13.0
 */
var ListTransactionsByBlockHashRIBSLVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSLVoutInner</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBSLVoutInner
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHashRIBSLVoutInner(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSLVoutInner);
    ListTransactionsByBlockHashRIBSLVoutInner.initialize(this, isSpent, scriptPubKey, value);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHashRIBSLVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSLVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSLVoutInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSLVoutInner} The populated <code>ListTransactionsByBlockHashRIBSLVoutInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSLVoutInner();
        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }
        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListTransactionsByBlockHashRIBSLVoutInner;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */
ListTransactionsByBlockHashRIBSLVoutInner.prototype['isSpent'] = undefined;

/**
 * @member {module:model/ListTransactionsByBlockHashRIBSLVoutInnerScriptPubKey} scriptPubKey
 */
ListTransactionsByBlockHashRIBSLVoutInner.prototype['scriptPubKey'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
ListTransactionsByBlockHashRIBSLVoutInner.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHashRIBSLVoutInner;
exports["default"] = _default;