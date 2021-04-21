"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificDashScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificDashScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout model module.
 * @module model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout
 * @version 2.0.0
 */
var ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout</code>.
   * @alias module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout);

    ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout} The populated <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHashResponseItemBlockchainSpecificDashScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout;
exports["default"] = _default;