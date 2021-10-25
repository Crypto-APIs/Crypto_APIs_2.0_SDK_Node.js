"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHeightRIBSZScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightRIBSZVout model module.
 * @module model/ListTransactionsByBlockHeightRIBSZVout
 * @version 1.3.0
 */
var ListTransactionsByBlockHeightRIBSZVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSZVout</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBSZVout
   * @param isSpent {Boolean} Defines whether the transaction output has been spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHeightRIBSZScriptPubKey} 
   * @param value {String} Represents the specific amount.
   */
  function ListTransactionsByBlockHeightRIBSZVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSZVout);

    ListTransactionsByBlockHeightRIBSZVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightRIBSZVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZVout} The populated <code>ListTransactionsByBlockHeightRIBSZVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSZVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHeightRIBSZScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHeightRIBSZVout;
}();
/**
 * Defines whether the transaction output has been spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHeightRIBSZVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSZScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHeightRIBSZVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the specific amount.
 * @member {String} value
 */

ListTransactionsByBlockHeightRIBSZVout.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSZVout;
exports["default"] = _default;