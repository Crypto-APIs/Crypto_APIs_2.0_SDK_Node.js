"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
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
 * The GetBlockDetailsByBlockHeightRIBSEC model module.
 * @module model/GetBlockDetailsByBlockHeightRIBSEC
 * @version 1.11.0
 */
var GetBlockDetailsByBlockHeightRIBSEC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRIBSEC</code>.
   * Ethereum Classic
   * @alias module:model/GetBlockDetailsByBlockHeightRIBSEC
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {String} Defines the total gas limit of all transactions in the block.
   * @param gasUsed {String} Represents the total amount of gas used by all transactions in this block.
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
   */
  function GetBlockDetailsByBlockHeightRIBSEC(difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightRIBSEC);
    GetBlockDetailsByBlockHeightRIBSEC.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHeightRIBSEC, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty) {
      obj['difficulty'] = difficulty;
      obj['extraData'] = extraData;
      obj['gasLimit'] = gasLimit;
      obj['gasUsed'] = gasUsed;
      obj['minedInSeconds'] = minedInSeconds;
      obj['nonce'] = nonce;
      obj['sha3Uncles'] = sha3Uncles;
      obj['size'] = size;
      obj['totalDifficulty'] = totalDifficulty;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightRIBSEC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRIBSEC} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRIBSEC} The populated <code>GetBlockDetailsByBlockHeightRIBSEC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightRIBSEC();
        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }
        if (data.hasOwnProperty('extraData')) {
          obj['extraData'] = _ApiClient["default"].convertToType(data['extraData'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }
        if (data.hasOwnProperty('minedInSeconds')) {
          obj['minedInSeconds'] = _ApiClient["default"].convertToType(data['minedInSeconds'], 'Number');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('sha3Uncles')) {
          obj['sha3Uncles'] = _ApiClient["default"].convertToType(data['sha3Uncles'], 'String');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('totalDifficulty')) {
          obj['totalDifficulty'] = _ApiClient["default"].convertToType(data['totalDifficulty'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetBlockDetailsByBlockHeightRIBSEC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetBlockDetailsByBlockHeightRIBSEC</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetBlockDetailsByBlockHeightRIBSEC.RequiredProperties),
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
      if (data['difficulty'] && !(typeof data['difficulty'] === 'string' || data['difficulty'] instanceof String)) {
        throw new Error("Expected the field `difficulty` to be a primitive type in the JSON string but got " + data['difficulty']);
      }
      // ensure the json data is a string
      if (data['extraData'] && !(typeof data['extraData'] === 'string' || data['extraData'] instanceof String)) {
        throw new Error("Expected the field `extraData` to be a primitive type in the JSON string but got " + data['extraData']);
      }
      // ensure the json data is a string
      if (data['gasLimit'] && !(typeof data['gasLimit'] === 'string' || data['gasLimit'] instanceof String)) {
        throw new Error("Expected the field `gasLimit` to be a primitive type in the JSON string but got " + data['gasLimit']);
      }
      // ensure the json data is a string
      if (data['gasUsed'] && !(typeof data['gasUsed'] === 'string' || data['gasUsed'] instanceof String)) {
        throw new Error("Expected the field `gasUsed` to be a primitive type in the JSON string but got " + data['gasUsed']);
      }
      // ensure the json data is a string
      if (data['nonce'] && !(typeof data['nonce'] === 'string' || data['nonce'] instanceof String)) {
        throw new Error("Expected the field `nonce` to be a primitive type in the JSON string but got " + data['nonce']);
      }
      // ensure the json data is a string
      if (data['sha3Uncles'] && !(typeof data['sha3Uncles'] === 'string' || data['sha3Uncles'] instanceof String)) {
        throw new Error("Expected the field `sha3Uncles` to be a primitive type in the JSON string but got " + data['sha3Uncles']);
      }
      // ensure the json data is a string
      if (data['totalDifficulty'] && !(typeof data['totalDifficulty'] === 'string' || data['totalDifficulty'] instanceof String)) {
        throw new Error("Expected the field `totalDifficulty` to be a primitive type in the JSON string but got " + data['totalDifficulty']);
      }
      return true;
    }
  }]);
  return GetBlockDetailsByBlockHeightRIBSEC;
}();
GetBlockDetailsByBlockHeightRIBSEC.RequiredProperties = ["difficulty", "extraData", "gasLimit", "gasUsed", "minedInSeconds", "nonce", "sha3Uncles", "size", "totalDifficulty"];

/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['difficulty'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['extraData'] = undefined;

/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['gasLimit'] = undefined;

/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['minedInSeconds'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['nonce'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['sha3Uncles'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['size'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHeightRIBSEC.prototype['totalDifficulty'] = undefined;
var _default = GetBlockDetailsByBlockHeightRIBSEC;
exports["default"] = _default;