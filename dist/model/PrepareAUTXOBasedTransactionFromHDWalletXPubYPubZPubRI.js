"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS"));
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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI
 * @version 1.11.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI
   * @param fee {String} When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param blockchainSpecific {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS} 
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI(fee, locktime, size, blockchainSpecific) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.initialize(this, fee, locktime, size, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI, null, [{
    key: "initialize",
    value: function initialize(obj, fee, locktime, size, blockchainSpecific) {
      obj['fee'] = fee;
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'String');
        }
        if (data.hasOwnProperty('feePerByte')) {
          obj['feePerByte'] = _ApiClient["default"].convertToType(data['feePerByte'], 'String');
        }
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['additionalData'] && !(typeof data['additionalData'] === 'string' || data['additionalData'] instanceof String)) {
        throw new Error("Expected the field `additionalData` to be a primitive type in the JSON string but got " + data['additionalData']);
      }
      // ensure the json data is a string
      if (data['fee'] && !(typeof data['fee'] === 'string' || data['fee'] instanceof String)) {
        throw new Error("Expected the field `fee` to be a primitive type in the JSON string but got " + data['fee']);
      }
      // ensure the json data is a string
      if (data['feePerByte'] && !(typeof data['feePerByte'] === 'string' || data['feePerByte'] instanceof String)) {
        throw new Error("Expected the field `feePerByte` to be a primitive type in the JSON string but got " + data['feePerByte']);
      }
      // validate the optional field `blockchainSpecific`
      if (data['blockchainSpecific']) {
        // data not null
        _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS["default"].validateJSON(data['blockchainSpecific']);
      }
      return true;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI;
}();
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.RequiredProperties = ["fee", "locktime", "size", "blockchainSpecific"];

/**
 * Representation of the additional data
 * @member {String} additionalData
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['additionalData'] = undefined;

/**
 * When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} fee
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['fee'] = undefined;

/**
 * Defines the fee per byte value
 * @member {String} feePerByte
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['feePerByte'] = undefined;

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['size'] = undefined;

/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBS} blockchainSpecific
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['blockchainSpecific'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRI;
exports["default"] = _default;