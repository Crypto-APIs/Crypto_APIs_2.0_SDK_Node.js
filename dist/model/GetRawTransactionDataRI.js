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
 * The GetRawTransactionDataRI model module.
 * @module model/GetRawTransactionDataRI
 * @version 1.7.2
 */
var GetRawTransactionDataRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetRawTransactionDataRI</code>.
   * @alias module:model/GetRawTransactionDataRI
   * @param transactionHex {String} Represents the raw transaction data in hexadecimal format.
   */
  function GetRawTransactionDataRI(transactionHex) {
    _classCallCheck(this, GetRawTransactionDataRI);

    GetRawTransactionDataRI.initialize(this, transactionHex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetRawTransactionDataRI, null, [{
    key: "initialize",
    value: function initialize(obj, transactionHex) {
      obj['transactionHex'] = transactionHex;
    }
    /**
     * Constructs a <code>GetRawTransactionDataRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRawTransactionDataRI} obj Optional instance to populate.
     * @return {module:model/GetRawTransactionDataRI} The populated <code>GetRawTransactionDataRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetRawTransactionDataRI();

        if (data.hasOwnProperty('transactionHex')) {
          obj['transactionHex'] = _ApiClient["default"].convertToType(data['transactionHex'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetRawTransactionDataRI;
}();
/**
 * Represents the raw transaction data in hexadecimal format.
 * @member {String} transactionHex
 */


GetRawTransactionDataRI.prototype['transactionHex'] = undefined;
var _default = GetRawTransactionDataRI;
exports["default"] = _default;