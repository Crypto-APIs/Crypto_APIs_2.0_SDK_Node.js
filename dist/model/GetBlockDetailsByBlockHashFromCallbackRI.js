"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetBlockDetailsByBlockHashFromCallbackRIBS = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetBlockDetailsByBlockHashFromCallbackRI model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRI
 * @version 1.7.2
 */
var GetBlockDetailsByBlockHashFromCallbackRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRI</code>.
   * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRI
   * @param hash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param height {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   * @param blockchainSpecific {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} 
   */
  function GetBlockDetailsByBlockHashFromCallbackRI(hash, height, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) {
    _classCallCheck(this, GetBlockDetailsByBlockHashFromCallbackRI);

    GetBlockDetailsByBlockHashFromCallbackRI.initialize(this, hash, height, previousBlockHash, timestamp, transactionsCount, blockchainSpecific);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetBlockDetailsByBlockHashFromCallbackRI, null, [{
    key: "initialize",
    value: function initialize(obj, hash, height, previousBlockHash, timestamp, transactionsCount, blockchainSpecific) {
      obj['hash'] = hash;
      obj['height'] = height;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['transactionsCount'] = transactionsCount;
      obj['blockchainSpecific'] = blockchainSpecific;
    }
    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRI} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRI} The populated <code>GetBlockDetailsByBlockHashFromCallbackRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHashFromCallbackRI();

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
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
          obj['blockchainSpecific'] = _GetBlockDetailsByBlockHashFromCallbackRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }

      return obj;
    }
  }]);

  return GetBlockDetailsByBlockHashFromCallbackRI;
}();
/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} hash
 */


GetBlockDetailsByBlockHashFromCallbackRI.prototype['hash'] = undefined;
/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} height
 */

GetBlockDetailsByBlockHashFromCallbackRI.prototype['height'] = undefined;
/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */

GetBlockDetailsByBlockHashFromCallbackRI.prototype['previousBlockHash'] = undefined;
/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */

GetBlockDetailsByBlockHashFromCallbackRI.prototype['timestamp'] = undefined;
/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */

GetBlockDetailsByBlockHashFromCallbackRI.prototype['transactionsCount'] = undefined;
/**
 * @member {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} blockchainSpecific
 */

GetBlockDetailsByBlockHashFromCallbackRI.prototype['blockchainSpecific'] = undefined;
var _default = GetBlockDetailsByBlockHashFromCallbackRI;
exports["default"] = _default;