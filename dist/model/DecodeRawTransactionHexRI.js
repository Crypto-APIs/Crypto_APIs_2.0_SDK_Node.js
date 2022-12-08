"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRIS = _interopRequireDefault(require("./DecodeRawTransactionHexRIS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRI model module.
 * @module model/DecodeRawTransactionHexRI
 * @version 1.11.0
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

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(DecodeRawTransactionHexRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // validate the optional field `blockchainSpeficicData`
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['blockchainSpeficicData']) {
        // data not null
        _DecodeRawTransactionHexRIS["default"].validateJSON(data['blockchainSpeficicData']);
      }
      // ensure the json data is a string
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
      }
      return true;
    }
  }]);
  return DecodeRawTransactionHexRI;
}();
DecodeRawTransactionHexRI.RequiredProperties = ["blockchainSpeficicData", "size", "transactionId"];

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