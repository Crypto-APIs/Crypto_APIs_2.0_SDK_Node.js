"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DecodeRawTransactionHexRBDataItem model module.
 * @module model/DecodeRawTransactionHexRBDataItem
 * @version 1.7.2
 */
var DecodeRawTransactionHexRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRBDataItem</code>.
   * @alias module:model/DecodeRawTransactionHexRBDataItem
   * @param rawTransactionHex {String} Represents the raw transaction Hex that has to be decoded.
   */
  function DecodeRawTransactionHexRBDataItem(rawTransactionHex) {
    _classCallCheck(this, DecodeRawTransactionHexRBDataItem);

    DecodeRawTransactionHexRBDataItem.initialize(this, rawTransactionHex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DecodeRawTransactionHexRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, rawTransactionHex) {
      obj['rawTransactionHex'] = rawTransactionHex;
    }
    /**
     * Constructs a <code>DecodeRawTransactionHexRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRBDataItem} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRBDataItem} The populated <code>DecodeRawTransactionHexRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRBDataItem();

        if (data.hasOwnProperty('rawTransactionHex')) {
          obj['rawTransactionHex'] = _ApiClient["default"].convertToType(data['rawTransactionHex'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DecodeRawTransactionHexRBDataItem;
}();
/**
 * Represents the raw transaction Hex that has to be decoded.
 * @member {String} rawTransactionHex
 */


DecodeRawTransactionHexRBDataItem.prototype['rawTransactionHex'] = undefined;
var _default = DecodeRawTransactionHexRBDataItem;
exports["default"] = _default;