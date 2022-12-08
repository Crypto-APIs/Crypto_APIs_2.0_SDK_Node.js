"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetBlockDetailsByBlockHeightRIBS = _interopRequireDefault(require("./GetBlockDetailsByBlockHeightRIBS"));
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
 * The GetBlockDetailsByBlockHeightRI model module.
 * @module model/GetBlockDetailsByBlockHeightRI
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHeightRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRI</code>.
   * @alias module:model/GetBlockDetailsByBlockHeightRI
   * @param hash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param height {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param nextBlockHash {String} Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
   * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   * @param blockchainSpecific {module:model/GetBlockDetailsByBlockHeightRIBS} 
   */
  function GetBlockDetailsByBlockHeightRI(hash, height, nextBlockHash, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightRI);
    GetBlockDetailsByBlockHeightRI.initialize(this, hash, height, nextBlockHash, previousBlockHash, timestamp, transactionsCount, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHeightRI, null, [{
    key: "initialize",
    value: function initialize(obj, hash, height, nextBlockHash, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) {
      obj['hash'] = hash;
      obj['height'] = height;
      obj['nextBlockHash'] = nextBlockHash;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['transactionsCount'] = transactionsCount;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRI} The populated <code>GetBlockDetailsByBlockHeightRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightRI();
        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }
        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }
        if (data.hasOwnProperty('nextBlockHash')) {
          obj['nextBlockHash'] = _ApiClient["default"].convertToType(data['nextBlockHash'], 'String');
        }
        if (data.hasOwnProperty('previousBlockHash')) {
          obj['previousBlockHash'] = _ApiClient["default"].convertToType(data['previousBlockHash'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _GetBlockDetailsByBlockHeightRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBlockDetailsByBlockHeightRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBlockDetailsByBlockHeightRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetBlockDetailsByBlockHeightRI.RequiredProperties),
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
      if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
        throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
      }
      // ensure the json data is a string
      if (data['nextBlockHash'] && !(typeof data['nextBlockHash'] === 'string' || data['nextBlockHash'] instanceof String)) {
        throw new Error("Expected the field `nextBlockHash` to be a primitive type in the JSON string but got " + data['nextBlockHash']);
      }
      // ensure the json data is a string
      if (data['previousBlockHash'] && !(typeof data['previousBlockHash'] === 'string' || data['previousBlockHash'] instanceof String)) {
        throw new Error("Expected the field `previousBlockHash` to be a primitive type in the JSON string but got " + data['previousBlockHash']);
      }
      // validate the optional field `blockchainSpecific`
      if (data['blockchainSpecific']) {
        // data not null
        _GetBlockDetailsByBlockHeightRIBS["default"].validateJSON(data['blockchainSpecific']);
      }
      return true;
    }
  }]);
  return GetBlockDetailsByBlockHeightRI;
}();
GetBlockDetailsByBlockHeightRI.RequiredProperties = ["hash", "height", "nextBlockHash", "previousBlockHash", "timestamp", "transactionsCount", "blockchainSpecific"];

/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} hash
 */
GetBlockDetailsByBlockHeightRI.prototype['hash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} height
 */
GetBlockDetailsByBlockHeightRI.prototype['height'] = undefined;

/**
 * Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
 * @member {String} nextBlockHash
 */
GetBlockDetailsByBlockHeightRI.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetBlockDetailsByBlockHeightRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix
 * @member {Number} timestamp
 */
GetBlockDetailsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetBlockDetailsByBlockHeightRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetBlockDetailsByBlockHeightRIBS} blockchainSpecific
 */
GetBlockDetailsByBlockHeightRI.prototype['blockchainSpecific'] = undefined;
var _default = GetBlockDetailsByBlockHeightRI;
exports["default"] = _default;