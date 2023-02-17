"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHeightRIBSD model module.
 * @module model/GetBlockDetailsByBlockHeightRIBSD
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHeightRIBSD = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRIBSD</code>.
   * Dogecoin
   * @alias module:model/GetBlockDetailsByBlockHeightRIBSD
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param bits {String} Represents a specific sub-unit of Doge. Bits have two-decimal precision.
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {String} Represents a random value that can be adjusted to satisfy the Proof of Work.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param strippedSize {Number} Defines the numeric representation of the block size excluding the witness data.
   * @param version {Number} Represents the version of the specific block on the blockchain.
   * @param weight {Number} Represents a measurement to compare the size of different transactions to each other in proportion to the block size limi
   */
  function GetBlockDetailsByBlockHeightRIBSD(difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, weight) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightRIBSD);
    GetBlockDetailsByBlockHeightRIBSD.initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, weight);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHeightRIBSD, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, bits, chainwork, merkleRoot, nonce, size, strippedSize, version, weight) {
      obj['difficulty'] = difficulty;
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['merkleRoot'] = merkleRoot;
      obj['nonce'] = nonce;
      obj['size'] = size;
      obj['strippedSize'] = strippedSize;
      obj['version'] = version;
      obj['weight'] = weight;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRIBSD} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRIBSD} The populated <code>GetBlockDetailsByBlockHeightRIBSD</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightRIBSD();
        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }
        if (data.hasOwnProperty('bits')) {
          obj['bits'] = _ApiClient["default"].convertToType(data['bits'], 'String');
        }
        if (data.hasOwnProperty('chainwork')) {
          obj['chainwork'] = _ApiClient["default"].convertToType(data['chainwork'], 'String');
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
        if (data.hasOwnProperty('strippedSize')) {
          obj['strippedSize'] = _ApiClient["default"].convertToType(data['strippedSize'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetBlockDetailsByBlockHeightRIBSD;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['difficulty'] = undefined;

/**
 * Represents a specific sub-unit of Doge. Bits have two-decimal precision.
 * @member {String} bits
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['bits'] = undefined;

/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['chainwork'] = undefined;

/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['merkleRoot'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the Proof of Work.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['nonce'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['size'] = undefined;

/**
 * Defines the numeric representation of the block size excluding the witness data.
 * @member {Number} strippedSize
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['strippedSize'] = undefined;

/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['version'] = undefined;

/**
 * Represents a measurement to compare the size of different transactions to each other in proportion to the block size limi
 * @member {Number} weight
 */
GetBlockDetailsByBlockHeightRIBSD.prototype['weight'] = undefined;
var _default = GetBlockDetailsByBlockHeightRIBSD;
exports["default"] = _default;