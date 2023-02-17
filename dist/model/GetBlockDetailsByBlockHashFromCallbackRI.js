"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetBlockDetailsByBlockHashFromCallbackRIBS = _interopRequireDefault(require("./GetBlockDetailsByBlockHashFromCallbackRIBS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetBlockDetailsByBlockHashFromCallbackRI model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRI
 * @version 1.13.0
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
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param extraData {String} Represents any data that can be included by the miner in the block.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param minedInSeconds {Number} Specifies the amount of time required for the block to be mined in seconds.
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param sha3Uncles {String} Defines the combined hash of all uncles for a given parent.
   * @param size {Number} Represents the total size of the block in Bytes.
   * @param totalDifficulty {String} Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
   * @param uncles {Array.<String>} 
   * @param blockchainSpecific {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} 
   */
  function GetBlockDetailsByBlockHashFromCallbackRI(hash, height, previousBlockHash, timestamp, transactionsCount, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles, blockchainSpecific) {
    _classCallCheck(this, GetBlockDetailsByBlockHashFromCallbackRI);
    GetBlockDetailsByBlockHashFromCallbackRI.initialize(this, hash, height, previousBlockHash, timestamp, transactionsCount, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHashFromCallbackRI, null, [{
    key: "initialize",
    value: function initialize(obj, hash, height, previousBlockHash, timestamp, transactionsCount, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles, blockchainSpecific) {
      obj['hash'] = hash;
      obj['height'] = height;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['transactionsCount'] = transactionsCount;
      obj['difficulty'] = difficulty;
      obj['extraData'] = extraData;
      obj['gasLimit'] = gasLimit;
      obj['gasUsed'] = gasUsed;
      obj['minedInSeconds'] = minedInSeconds;
      obj['nonce'] = nonce;
      obj['sha3Uncles'] = sha3Uncles;
      obj['size'] = size;
      obj['totalDifficulty'] = totalDifficulty;
      obj['uncles'] = uncles;
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
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['difficulty'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['extraData'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['gasLimit'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in seconds.
 * @member {Number} minedInSeconds
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['minedInSeconds'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['nonce'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['sha3Uncles'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['size'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block.
 * @member {String} totalDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['uncles'] = undefined;

/**
 * @member {module:model/GetBlockDetailsByBlockHashFromCallbackRIBS} blockchainSpecific
 */
GetBlockDetailsByBlockHashFromCallbackRI.prototype['blockchainSpecific'] = undefined;
var _default = GetBlockDetailsByBlockHashFromCallbackRI;
exports["default"] = _default;