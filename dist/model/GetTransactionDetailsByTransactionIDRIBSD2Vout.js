"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDRIBSD2Vout model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSD2Vout
 * @version 1.4.0
 */
var GetTransactionDetailsByTransactionIDRIBSD2Vout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSD2Vout</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSD2Vout
   * @param isSpent {Boolean} Defines whether the output is spent or not.
   * @param scriptPubKey {module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey} 
   * @param value {String} Represents the sent/received amount.
   */
  function GetTransactionDetailsByTransactionIDRIBSD2Vout(isSpent, scriptPubKey, value) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSD2Vout);

    GetTransactionDetailsByTransactionIDRIBSD2Vout.initialize(this, isSpent, scriptPubKey, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDRIBSD2Vout, null, [{
    key: "initialize",
    value: function initialize(obj, isSpent, scriptPubKey, value) {
      obj['isSpent'] = isSpent;
      obj['scriptPubKey'] = scriptPubKey;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSD2Vout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSD2Vout} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSD2Vout} The populated <code>GetTransactionDetailsByTransactionIDRIBSD2Vout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSD2Vout();

        if (data.hasOwnProperty('isSpent')) {
          obj['isSpent'] = _ApiClient["default"].convertToType(data['isSpent'], 'Boolean');
        }

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDRIBSD2Vout;
}();
/**
 * Defines whether the output is spent or not.
 * @member {Boolean} isSpent
 */


GetTransactionDetailsByTransactionIDRIBSD2Vout.prototype['isSpent'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSD2ScriptPubKey} scriptPubKey
 */

GetTransactionDetailsByTransactionIDRIBSD2Vout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

GetTransactionDetailsByTransactionIDRIBSD2Vout.prototype['value'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSD2Vout;
exports["default"] = _default;