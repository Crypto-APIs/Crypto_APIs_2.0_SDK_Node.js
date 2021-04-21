"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout model module.
 * @module model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout
 * @version 2.0.0
 */
var ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout</code>.
   * @alias module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout);

    ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout} The populated <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout;
exports["default"] = _default;