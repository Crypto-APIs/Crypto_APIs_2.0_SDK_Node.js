"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout model module.
 * @module model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout
 * @version 2.0.0
 */
var ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout</code>.
   * @alias module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout);

    ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout} The populated <code>ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout;
exports["default"] = _default;