"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISB2ScriptPubKey = _interopRequireDefault(require("./DecodeRawTransactionHexRISB2ScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISB2Vout model module.
 * @module model/DecodeRawTransactionHexRISB2Vout
 * @version 1.5.0
 */
var DecodeRawTransactionHexRISB2Vout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISB2Vout</code>.
   * @alias module:model/DecodeRawTransactionHexRISB2Vout
   * @param scriptPubKey {module:model/DecodeRawTransactionHexRISB2ScriptPubKey} 
   */
  function DecodeRawTransactionHexRISB2Vout(scriptPubKey) {
    _classCallCheck(this, DecodeRawTransactionHexRISB2Vout);

    DecodeRawTransactionHexRISB2Vout.initialize(this, scriptPubKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISB2Vout, null, [{
    key: "initialize",
    value: function initialize(obj, scriptPubKey) {
      obj['scriptPubKey'] = scriptPubKey;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISB2Vout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISB2Vout} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISB2Vout} The populated <code>DecodeRawTransactionHexRISB2Vout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISB2Vout();

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _DecodeRawTransactionHexRISB2ScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISB2Vout;
}();
/**
 * @member {module:model/DecodeRawTransactionHexRISB2ScriptPubKey} scriptPubKey
 */


DecodeRawTransactionHexRISB2Vout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

DecodeRawTransactionHexRISB2Vout.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISB2Vout;
exports["default"] = _default;