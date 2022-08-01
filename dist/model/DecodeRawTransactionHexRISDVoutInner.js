"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DecodeRawTransactionHexRISDVoutInnerScriptPubKey = _interopRequireDefault(require("./DecodeRawTransactionHexRISDVoutInnerScriptPubKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRISDVoutInner model module.
 * @module model/DecodeRawTransactionHexRISDVoutInner
 * @version 1.7.2
 */
var DecodeRawTransactionHexRISDVoutInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISDVoutInner</code>.
   * @alias module:model/DecodeRawTransactionHexRISDVoutInner
   * @param scriptPubKey {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} 
   */
  function DecodeRawTransactionHexRISDVoutInner(scriptPubKey) {
    _classCallCheck(this, DecodeRawTransactionHexRISDVoutInner);

    DecodeRawTransactionHexRISDVoutInner.initialize(this, scriptPubKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRISDVoutInner, null, [{
    key: "initialize",
    value: function initialize(obj, scriptPubKey) {
      obj['scriptPubKey'] = scriptPubKey;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRISDVoutInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISDVoutInner} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISDVoutInner} The populated <code>DecodeRawTransactionHexRISDVoutInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISDVoutInner();

        if (data.hasOwnProperty('scriptPubKey')) {
          obj['scriptPubKey'] = _DecodeRawTransactionHexRISDVoutInnerScriptPubKey["default"].constructFromObject(data['scriptPubKey']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRISDVoutInner;
}();
/**
 * @member {module:model/DecodeRawTransactionHexRISDVoutInnerScriptPubKey} scriptPubKey
 */


DecodeRawTransactionHexRISDVoutInner.prototype['scriptPubKey'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */

DecodeRawTransactionHexRISDVoutInner.prototype['value'] = undefined;
var _default = DecodeRawTransactionHexRISDVoutInner;
exports["default"] = _default;