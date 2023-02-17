"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRIS = _interopRequireDefault(require("./DecodeRawTransactionHexRIS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRI model module.
 * @module model/DecodeRawTransactionHexRI
 * @version 1.13.0
 */
var DecodeRawTransactionHexRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRI</code>.
   * @alias module:model/DecodeRawTransactionHexRI
   * @param blockchainSpeficicData {module:model/DecodeRawTransactionHexRIS} 
   * @param size {Number} Represents the total size of this transaction.
   * @param transactionId {String} Represents the decoded transaction hex.
   */
  function DecodeRawTransactionHexRI(blockchainSpeficicData, size, transactionId) {
    _classCallCheck(this, DecodeRawTransactionHexRI);
    DecodeRawTransactionHexRI.initialize(this, blockchainSpeficicData, size, transactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRI, null, [{
    key: "initialize",
    value: function initialize(obj, blockchainSpeficicData, size, transactionId) {
      obj['blockchainSpeficicData'] = blockchainSpeficicData;
      obj['size'] = size;
      obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRI} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRI} The populated <code>DecodeRawTransactionHexRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRI();
        if (data.hasOwnProperty('blockchainSpeficicData')) {
          obj['blockchainSpeficicData'] = _DecodeRawTransactionHexRIS["default"].constructFromObject(data['blockchainSpeficicData']);
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return DecodeRawTransactionHexRI;
}();
/**
 * @member {module:model/DecodeRawTransactionHexRIS} blockchainSpeficicData
 */
DecodeRawTransactionHexRI.prototype['blockchainSpeficicData'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
DecodeRawTransactionHexRI.prototype['size'] = undefined;

/**
 * Represents the decoded transaction hex.
 * @member {String} transactionId
 */
DecodeRawTransactionHexRI.prototype['transactionId'] = undefined;
var _default = DecodeRawTransactionHexRI;
exports["default"] = _default;