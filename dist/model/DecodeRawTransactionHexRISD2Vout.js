"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISD2ScriptPubKey = _interopRequireDefault(require("./DecodeRawTransactionHexRISD2ScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISD2Vout model module.
 * @module model/DecodeRawTransactionHexRISD2Vout
 * @version 1.5.0
 */
var DecodeRawTransactionHexRISD2Vout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISD2Vout</code>.
   * @alias module:model/DecodeRawTransactionHexRISD2Vout
   * @param scriptPubKey {module:model/DecodeRawTransactionHexRISD2ScriptPubKey} 
   */
  function DecodeRawTransactionHexRISD2Vout(scriptPubKey) {
    _classCallCheck(this, DecodeRawTransactionHexRISD2Vout);

    DecodeRawTransactionHexRISD2Vout.initialize(this, scriptPubKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISD2Vout, null, [{
    key: "initialize",
    value: function initialize(obj, scriptPubKey) {
      obj['scriptPubKey'] = scriptPubKey;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISD2Vout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISD2Vout} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISD2Vout} The populated <code>DecodeRawTransactionHexRISD2Vout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISD2Vout();

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _DecodeRawTransactionHexRISD2ScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISD2Vout;
}();
/**
 * @member {module:model/DecodeRawTransactionHexRISD2ScriptPubKey} scriptPubKey
 */


DecodeRawTransactionHexRISD2Vout.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

DecodeRawTransactionHexRISD2Vout.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISD2Vout;
exports["default"] = _default;