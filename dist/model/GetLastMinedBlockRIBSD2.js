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
 * The GetLastMinedBlockRIBSD2 model module.
 * @module model/GetLastMinedBlockRIBSD2
 * @version 1.7.2
 */
var GetLastMinedBlockRIBSD2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLastMinedBlockRIBSD2</code>.
   * Dash
   * @alias module:model/GetLastMinedBlockRIBSD2
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param bits {String} Represents a specific sub-unit of Dash. Bits have two-decimal precision.
   * @param chainwork {String} Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
   * @param merkleRoot {String} Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
   * @param nonce {Number} Numeric representation of the block nonce
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param version {Number} Represents the version of the specific block on the blockchain.
   * @param versionHex {String} Is the hexadecimal string representation of the block's version.
   */
  function GetLastMinedBlockRIBSD2(difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex) {
    _classCallCheck(this, GetLastMinedBlockRIBSD2);

    GetLastMinedBlockRIBSD2.initialize(this, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLastMinedBlockRIBSD2, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, bits, chainwork, merkleRoot, nonce, size, version, versionHex) {
      obj['difficulty'] = difficulty;
      obj['bits'] = bits;
      obj['chainwork'] = chainwork;
      obj['merkleRoot'] = merkleRoot;
      obj['nonce'] = nonce;
      obj['size'] = size;
      obj['version'] = version;
      obj['versionHex'] = versionHex;
    }
    /**
     * Constructs a <code>GetLastMinedBlockRIBSD2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLastMinedBlockRIBSD2} obj Optional instance to populate.
     * @return {module:model/GetLastMinedBlockRIBSD2} The populated <code>GetLastMinedBlockRIBSD2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLastMinedBlockRIBSD2();

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
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
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
  }]);

  return GetLastMinedBlockRIBSD2;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */


GetLastMinedBlockRIBSD2.prototype['difficulty'] = undefined;
/**
 * Represents a specific sub-unit of Dash. Bits have two-decimal precision.
 * @member {String} bits
 */

GetLastMinedBlockRIBSD2.prototype['bits'] = undefined;
/**
 * Represents a hexadecimal number of all the hashes necessary to produce the current chain. E.g., when converting 0000000000000000000000000000000000000000000086859f7a841475b236fd to a decimal you get 635262017308958427068157 hashes, or 635262 exahashes.
 * @member {String} chainwork
 */

GetLastMinedBlockRIBSD2.prototype['chainwork'] = undefined;
/**
 * Defines the single and final (root) node of a Merkle tree. It is the combined hash of all transactions' hashes that are part of a blockchain block.
 * @member {String} merkleRoot
 */

GetLastMinedBlockRIBSD2.prototype['merkleRoot'] = undefined;
/**
 * Numeric representation of the block nonce
 * @member {Number} nonce
 */

GetLastMinedBlockRIBSD2.prototype['nonce'] = undefined;
/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */

GetLastMinedBlockRIBSD2.prototype['size'] = undefined;
/**
 * Represents the version of the specific block on the blockchain.
 * @member {Number} version
 */

GetLastMinedBlockRIBSD2.prototype['version'] = undefined;
/**
 * Is the hexadecimal string representation of the block's version.
 * @member {String} versionHex
 */

GetLastMinedBlockRIBSD2.prototype['versionHex'] = undefined;
var _default = GetLastMinedBlockRIBSD2;
exports["default"] = _default;