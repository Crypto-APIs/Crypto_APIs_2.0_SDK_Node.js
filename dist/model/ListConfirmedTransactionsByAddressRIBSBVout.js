"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListConfirmedTransactionsByAddressRIBSBScriptPubKey = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressRIBSBVout model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSBVout
 * @version 1.4.0
 */
var ListConfirmedTransactionsByAddressRIBSBVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSBVout</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSBVout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListConfirmedTransactionsByAddressRIBSBScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListConfirmedTransactionsByAddressRIBSBVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSBVout);

    ListConfirmedTransactionsByAddressRIBSBVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSBVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSBVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSBVout} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSBVout} The populated <code>ListConfirmedTransactionsByAddressRIBSBVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSBVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListConfirmedTransactionsByAddressRIBSBScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListConfirmedTransactionsByAddressRIBSBVout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListConfirmedTransactionsByAddressRIBSBVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBScriptPubKey} scriptPubKey
 */

ListConfirmedTransactionsByAddressRIBSBVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListConfirmedTransactionsByAddressRIBSBVout.prototype['value'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSBVout;
exports["default"] = _default;