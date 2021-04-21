"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout model module.
 * @module model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout
 * @version 2.0.0
 */
var ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout</code>.
   * @alias module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout);

    ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout} The populated <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout;
exports["default"] = _default;