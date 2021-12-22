"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashRIBSLScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSLScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListTransactionsByBlockHashRIBSLVout model module.
 * @module model/ListTransactionsByBlockHashRIBSLVout
 * @version 1.4.0
 */
var ListTransactionsByBlockHashRIBSLVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSLVout</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBSLVout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHashRIBSLScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHashRIBSLVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSLVout);

    ListTransactionsByBlockHashRIBSLVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashRIBSLVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSLVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSLVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSLVout} The populated <code>ListTransactionsByBlockHashRIBSLVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSLVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHashRIBSLScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashRIBSLVout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHashRIBSLVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashRIBSLScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHashRIBSLVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHashRIBSLVout.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHashRIBSLVout;
exports["default"] = _default;