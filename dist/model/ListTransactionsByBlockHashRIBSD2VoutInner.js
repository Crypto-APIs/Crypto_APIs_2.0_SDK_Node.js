"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashRIBSD2VoutInnerScriptPubKey = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD2VoutInnerScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListTransactionsByBlockHashRIBSD2VoutInner model module.
 * @module model/ListTransactionsByBlockHashRIBSD2VoutInner
 * @version 1.7.2
 */
var ListTransactionsByBlockHashRIBSD2VoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBSD2VoutInner</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBSD2VoutInner
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/ListTransactionsByBlockHashRIBSD2VoutInnerScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function ListTransactionsByBlockHashRIBSD2VoutInner(isSpent, scriptPubKey, value) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBSD2VoutInner);

    ListTransactionsByBlockHashRIBSD2VoutInner.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashRIBSD2VoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHashRIBSD2VoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBSD2VoutInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBSD2VoutInner} The populated <code>ListTransactionsByBlockHashRIBSD2VoutInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBSD2VoutInner();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _ListTransactionsByBlockHashRIBSD2VoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHashRIBSD2VoutInner;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


ListTransactionsByBlockHashRIBSD2VoutInner.prototype['isSpent'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashRIBSD2VoutInnerScriptPubKey} scriptPubKey
 */

ListTransactionsByBlockHashRIBSD2VoutInner.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

ListTransactionsByBlockHashRIBSD2VoutInner.prototype['value'] = undefined;
var _default = ListTransactionsByBlockHashRIBSD2VoutInner;
exports["default"] = _default;