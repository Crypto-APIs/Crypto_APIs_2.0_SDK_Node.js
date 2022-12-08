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
 * The GetLastMinedBlockRIBSBSC model module.
 * @module model/GetLastMinedBlockRIBSBSC
 * @version 1.11.0
 */
var GetLastMinedBlockRIBSBSC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLastMinedBlockRIBSBSC</code>.
   * Binance Smart Chain
   * @alias module:model/GetLastMinedBlockRIBSBSC
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {String} Defines the total gas limit of all transactions in the block.
   * @param gasUsed {String} Represents the total amount of gas used by all transactions in this block.
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in second
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
   * @param uncles {Array.<String>} 
   */
  function GetLastMinedBlockRIBSBSC(extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles) {
    _classCallCheck(this, GetLastMinedBlockRIBSBSC);
    GetLastMinedBlockRIBSBSC.initialize(this, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetLastMinedBlockRIBSBSC, null, [{
    key: "initialize",
    value: function initialize(obj, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles) {
      obj['extraData'] = extraData;
      obj['gasLimit'] = gasLimit;
      obj['gasUsed'] = gasUsed;
      obj['minedInSeconds'] = minedInSeconds;
      obj['nonce'] = nonce;
      obj['sha3Uncles'] = sha3Uncles;
      obj['size'] = size;
      obj['totalDifficulty'] = totalDifficulty;
      obj['uncles'] = uncles;
    }

    /**
     * Constructs a <code>GetLastMinedBlockRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLastMinedBlockRIBSBSC} obj Optional instance to populate.
     * @return {module:model/GetLastMinedBlockRIBSBSC} The populated <code>GetLastMinedBlockRIBSBSC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLastMinedBlockRIBSBSC();
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
        if (data.hasOwnProperty('uncles')) {
          obj['uncles'] = _ApiClient["default"].convertToType(data['uncles'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetLastMinedBlockRIBSBSC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetLastMinedBlockRIBSBSC</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetLastMinedBlockRIBSBSC.RequiredProperties),
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
      // ensure the json data is an array
      if (!Array.isArray(data['uncles'])) {
        throw new Error("Expected the field `uncles` to be an array in the JSON data but got " + data['uncles']);
      }
      return true;
    }
  }]);
  return GetLastMinedBlockRIBSBSC;
}();
GetLastMinedBlockRIBSBSC.RequiredProperties = ["extraData", "gasLimit", "gasUsed", "minedInSeconds", "nonce", "sha3Uncles", "size", "totalDifficulty", "uncles"];

/**
 * String representation of the block difficulty
 * @member {String} difficulty
 */
GetLastMinedBlockRIBSBSC.prototype['difficulty'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetLastMinedBlockRIBSBSC.prototype['extraData'] = undefined;

/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
GetLastMinedBlockRIBSBSC.prototype['gasLimit'] = undefined;

/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
GetLastMinedBlockRIBSBSC.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
GetLastMinedBlockRIBSBSC.prototype['minedInSeconds'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLastMinedBlockRIBSBSC.prototype['nonce'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetLastMinedBlockRIBSBSC.prototype['sha3Uncles'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLastMinedBlockRIBSBSC.prototype['size'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
GetLastMinedBlockRIBSBSC.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetLastMinedBlockRIBSBSC.prototype['uncles'] = undefined;
var _default = GetLastMinedBlockRIBSBSC;
exports["default"] = _default;