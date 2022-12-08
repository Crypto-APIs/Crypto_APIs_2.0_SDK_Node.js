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
 * The GetLastMinedBlockRIBSBC model module.
 * @module model/GetLastMinedBlockRIBSBC
 * @version 1.11.0
 */
var GetLastMinedBlockRIBSBC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLastMinedBlockRIBSBC</code>.
   * Bitcoin Cash
   * @alias module:model/GetLastMinedBlockRIBSBC
   * @param bits {String} A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the proof of work
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param version {Number} Represents the version of the specific block on the blockchain.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   */
  function GetLastMinedBlockRIBSBC(bits, chainwork, merkleRoot, nonce, size, version, versionHex) {
    _classCallCheck(this, GetLastMinedBlockRIBSBC);
    GetLastMinedBlockRIBSBC.initialize(this, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetLastMinedBlockRIBSBC, null, [{
    key: "initialize",
    value: function initialize(obj, bits, chainwork, merkleRoot, nonce, size, version, versionHex) {
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['merkleRoot'] = merkleRoot;
      obj['nonce'] = nonce;
      obj['size'] = size;
      obj['version'] = version;
      obj['versionHex'] = versionHex;
    }

    /**
     * Constructs a <code>GetLastMinedBlockRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLastMinedBlockRIBSBC} obj Optional instance to populate.
     * @return {module:model/GetLastMinedBlockRIBSBC} The populated <code>GetLastMinedBlockRIBSBC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLastMinedBlockRIBSBC();
        if (data.hasOwnProperty('bits')) {
          obj['bits'] = _ApiClient["default"].convertToType(data['bits'], 'String');
        }
        if (data.hasOwnProperty('chainwork')) {
          obj['chainwork'] = _ApiClient["default"].convertToType(data['chainwork'], 'String');
        }
        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }
        if (data.hasOwnProperty('merkleRoot')) {
          obj['merkleRoot'] = _ApiClient["default"].convertToType(data['merkleRoot'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('versionHex')) {
          obj['versionHex'] = _ApiClient["default"].convertToType(data['versionHex'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetLastMinedBlockRIBSBC</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetLastMinedBlockRIBSBC</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetLastMinedBlockRIBSBC.RequiredProperties),
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
      if (data['bits'] && !(typeof data['bits'] === 'string' || data['bits'] instanceof String)) {
        throw new Error("Expected the field `bits` to be a primitive type in the JSON string but got " + data['bits']);
      }
      // ensure the json data is a string
      if (data['chainwork'] && !(typeof data['chainwork'] === 'string' || data['chainwork'] instanceof String)) {
        throw new Error("Expected the field `chainwork` to be a primitive type in the JSON string but got " + data['chainwork']);
      }
      // ensure the json data is a string
      if (data['difficulty'] && !(typeof data['difficulty'] === 'string' || data['difficulty'] instanceof String)) {
        throw new Error("Expected the field `difficulty` to be a primitive type in the JSON string but got " + data['difficulty']);
      }
      // ensure the json data is a string
      if (data['merkleRoot'] && !(typeof data['merkleRoot'] === 'string' || data['merkleRoot'] instanceof String)) {
        throw new Error("Expected the field `merkleRoot` to be a primitive type in the JSON string but got " + data['merkleRoot']);
      }
      // ensure the json data is a string
      if (data['nonce'] && !(typeof data['nonce'] === 'string' || data['nonce'] instanceof String)) {
        throw new Error("Expected the field `nonce` to be a primitive type in the JSON string but got " + data['nonce']);
      }
      // ensure the json data is a string
      if (data['versionHex'] && !(typeof data['versionHex'] === 'string' || data['versionHex'] instanceof String)) {
        throw new Error("Expected the field `versionHex` to be a primitive type in the JSON string but got " + data['versionHex']);
      }
      return true;
    }
  }]);
  return GetLastMinedBlockRIBSBC;
}();
GetLastMinedBlockRIBSBC.RequiredProperties = ["bits", "chainwork", "merkleRoot", "nonce", "size", "version", "versionHex"];

/**
 * A sub-unit of BCH equal to 0.000001 BCH, or 100 Satoshi, and is the same as microbitcoincash (μBCH). Bits have two-decimal precision.
 * @member {String} bits
 */
GetLastMinedBlockRIBSBC.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetLastMinedBlockRIBSBC.prototype['chainwork'] = undefined;

/**
 * Numeric representation of the block difficulty
 * @member {String} difficulty
 */
GetLastMinedBlockRIBSBC.prototype['difficulty'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetLastMinedBlockRIBSBC.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
GetLastMinedBlockRIBSBC.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetLastMinedBlockRIBSBC.prototype['size'] = undefined;

/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetLastMinedBlockRIBSBC.prototype['version'] = undefined;

/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */
GetLastMinedBlockRIBSBC.prototype['versionHex'] = undefined;
var _default = GetLastMinedBlockRIBSBC;
exports["default"] = _default;