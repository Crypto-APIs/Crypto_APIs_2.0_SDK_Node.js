"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSD2ScriptPubKey = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD2ScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListUnconfirmedTransactionsByAddressRIBSD2Vout model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSD2Vout
 * @version 1.5.0
 */
var ListUnconfirmedTransactionsByAddressRIBSD2Vout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSD2Vout</code>.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSD2Vout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListConfirmedTransactionsByAddressRIBSD2ScriptPubKey} 
   * @param value {String} String representation of the amount
   */
  function ListUnconfirmedTransactionsByAddressRIBSD2Vout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSD2Vout);

    ListUnconfirmedTransactionsByAddressRIBSD2Vout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedTransactionsByAddressRIBSD2Vout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSD2Vout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSD2Vout} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSD2Vout} The populated <code>ListUnconfirmedTransactionsByAddressRIBSD2Vout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSD2Vout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListConfirmedTransactionsByAddressRIBSD2ScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListUnconfirmedTransactionsByAddressRIBSD2Vout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListUnconfirmedTransactionsByAddressRIBSD2Vout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSD2ScriptPubKey} scriptPubKey
 */

ListUnconfirmedTransactionsByAddressRIBSD2Vout.prototype['scriptPubKey'] = undefined;
/**
 * String representation of the amount
 * @member {String} value
 */

ListUnconfirmedTransactionsByAddressRIBSD2Vout.prototype['value'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSD2Vout;
exports["default"] = _default;