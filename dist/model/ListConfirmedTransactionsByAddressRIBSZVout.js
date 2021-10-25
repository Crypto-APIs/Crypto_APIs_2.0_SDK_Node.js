"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSZScriptPubKey = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressRIBSZVout model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSZVout
 * @version 1.3.0
 */
var ListConfirmedTransactionsByAddressRIBSZVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSZVout</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSZVout
   * @param isSpent {Boolean} Defines whether the transaction output has been spent or not.
   * @param scriptPubKey {module:model/ListConfirmedTransactionsByAddressRIBSZScriptPubKey} 
   * @param value {String} Represents the specific amount.
   */
  function ListConfirmedTransactionsByAddressRIBSZVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSZVout);

    ListConfirmedTransactionsByAddressRIBSZVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSZVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSZVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSZVout} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSZVout} The populated <code>ListConfirmedTransactionsByAddressRIBSZVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSZVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListConfirmedTransactionsByAddressRIBSZScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListConfirmedTransactionsByAddressRIBSZVout;
}();
/**
 * Defines whether the transaction output has been spent or not.
 * @member {Boolean} isSpent
 */


ListConfirmedTransactionsByAddressRIBSZVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSZScriptPubKey} scriptPubKey
 */

ListConfirmedTransactionsByAddressRIBSZVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the specific amount.
 * @member {String} value
 */

ListConfirmedTransactionsByAddressRIBSZVout.prototype['value'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSZVout;
exports["default"] = _default;