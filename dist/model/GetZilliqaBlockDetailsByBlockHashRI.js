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
 * The GetZilliqaBlockDetailsByBlockHashRI model module.
 * @module model/GetZilliqaBlockDetailsByBlockHashRI
 * @version 1.13.0
 */
var GetZilliqaBlockDetailsByBlockHashRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetZilliqaBlockDetailsByBlockHashRI</code>.
   * @alias module:model/GetZilliqaBlockDetailsByBlockHashRI
   * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param difficulty {String} Defines how difficult it is for a specific miner to mine the block.
   * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
   * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
   * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param microBlocks {Array.<String>} 
   * @param nextBlockHash {String} Defines the hash of the next block from the specific blockchain.
   * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   */
  function GetZilliqaBlockDetailsByBlockHashRI(blockHeight, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks, nextBlockHash, previousBlockHash, timestamp, transactionsCount) {
    _classCallCheck(this, GetZilliqaBlockDetailsByBlockHashRI);
    GetZilliqaBlockDetailsByBlockHashRI.initialize(this, blockHeight, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks, nextBlockHash, previousBlockHash, timestamp, transactionsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetZilliqaBlockDetailsByBlockHashRI, null, [{
    key: "initialize",
    value: function initialize(obj, blockHeight, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks, nextBlockHash, previousBlockHash, timestamp, transactionsCount) {
      obj['blockHeight'] = blockHeight;
      obj['difficulty'] = difficulty;
      obj['dsBlock'] = dsBlock;
      obj['dsDifficulty'] = dsDifficulty;
      obj['dsLeader'] = dsLeader;
      obj['gasLimit'] = gasLimit;
      obj['gasUsed'] = gasUsed;
      obj['microBlocks'] = microBlocks;
      obj['nextBlockHash'] = nextBlockHash;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetZilliqaBlockDetailsByBlockHashRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaBlockDetailsByBlockHashRI} obj Optional instance to populate.
     * @return {module:model/GetZilliqaBlockDetailsByBlockHashRI} The populated <code>GetZilliqaBlockDetailsByBlockHashRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetZilliqaBlockDetailsByBlockHashRI();
        if (data.hasOwnProperty('blockHeight')) {
          obj['blockHeight'] = _ApiClient["default"].convertToType(data['blockHeight'], 'Number');
        }
        if (data.hasOwnProperty('difficulty')) {
          obj['difficulty'] = _ApiClient["default"].convertToType(data['difficulty'], 'String');
        }
        if (data.hasOwnProperty('dsBlock')) {
          obj['dsBlock'] = _ApiClient["default"].convertToType(data['dsBlock'], 'Number');
        }
        if (data.hasOwnProperty('dsDifficulty')) {
          obj['dsDifficulty'] = _ApiClient["default"].convertToType(data['dsDifficulty'], 'String');
        }
        if (data.hasOwnProperty('dsLeader')) {
          obj['dsLeader'] = _ApiClient["default"].convertToType(data['dsLeader'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'Number');
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'Number');
        }
        if (data.hasOwnProperty('microBlocks')) {
          obj['microBlocks'] = _ApiClient["default"].convertToType(data['microBlocks'], ['String']);
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
      }
      return obj;
    }
  }]);
  return GetZilliqaBlockDetailsByBlockHashRI;
}();
/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['blockHeight'] = undefined;

/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['difficulty'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['dsLeader'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['gasUsed'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['microBlocks'] = undefined;

/**
 * Defines the hash of the next block from the specific blockchain.
 * @member {String} nextBlockHash
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['timestamp'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetZilliqaBlockDetailsByBlockHashRI.prototype['transactionsCount'] = undefined;
var _default = GetZilliqaBlockDetailsByBlockHashRI;
exports["default"] = _default;