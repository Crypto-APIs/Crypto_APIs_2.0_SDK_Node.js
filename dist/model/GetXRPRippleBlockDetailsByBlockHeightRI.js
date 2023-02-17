"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetXRPRippleBlockDetailsByBlockHeightRITotalCoins = _interopRequireDefault(require("./GetXRPRippleBlockDetailsByBlockHeightRITotalCoins"));
var _GetXRPRippleBlockDetailsByBlockHeightRITotalFees = _interopRequireDefault(require("./GetXRPRippleBlockDetailsByBlockHeightRITotalFees"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetXRPRippleBlockDetailsByBlockHeightRI model module.
 * @module model/GetXRPRippleBlockDetailsByBlockHeightRI
 * @version 1.13.0
 */
var GetXRPRippleBlockDetailsByBlockHeightRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleBlockDetailsByBlockHeightRI</code>.
   * @alias module:model/GetXRPRippleBlockDetailsByBlockHeightRI
   * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param nextBlockHash {String} Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
   * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param totalCoins {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalCoins} 
   * @param totalFees {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalFees} 
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   */
  function GetXRPRippleBlockDetailsByBlockHeightRI(blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) {
    _classCallCheck(this, GetXRPRippleBlockDetailsByBlockHeightRI);
    GetXRPRippleBlockDetailsByBlockHeightRI.initialize(this, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetXRPRippleBlockDetailsByBlockHeightRI, null, [{
    key: "initialize",
    value: function initialize(obj, blockHash, blockHeight, nextBlockHash, previousBlockHash, timestamp, totalCoins, totalFees, transactionsCount) {
      obj['blockHash'] = blockHash;
      obj['blockHeight'] = blockHeight;
      obj['nextBlockHash'] = nextBlockHash;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['totalCoins'] = totalCoins;
      obj['totalFees'] = totalFees;
      obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetXRPRippleBlockDetailsByBlockHeightRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleBlockDetailsByBlockHeightRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleBlockDetailsByBlockHeightRI} The populated <code>GetXRPRippleBlockDetailsByBlockHeightRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleBlockDetailsByBlockHeightRI();
        if (data.hasOwnProperty('blockHash')) {
          obj['blockHash'] = _ApiClient["default"].convertToType(data['blockHash'], 'String');
        }
        if (data.hasOwnProperty('blockHeight')) {
          obj['blockHeight'] = _ApiClient["default"].convertToType(data['blockHeight'], 'Number');
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
        if (data.hasOwnProperty('totalCoins')) {
          obj['totalCoins'] = _GetXRPRippleBlockDetailsByBlockHeightRITotalCoins["default"].constructFromObject(data['totalCoins']);
        }
        if (data.hasOwnProperty('totalFees')) {
          obj['totalFees'] = _GetXRPRippleBlockDetailsByBlockHeightRITotalFees["default"].constructFromObject(data['totalFees']);
        }
        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetXRPRippleBlockDetailsByBlockHeightRI;
}();
/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['blockHash'] = undefined;

/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['blockHeight'] = undefined;

/**
 * Represents the hash of the next block. When this is the last block of the blockchain this value will be an empty string.
 * @member {String} nextBlockHash
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['nextBlockHash'] = undefined;

/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['previousBlockHash'] = undefined;

/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['timestamp'] = undefined;

/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalCoins} totalCoins
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['totalCoins'] = undefined;

/**
 * @member {module:model/GetXRPRippleBlockDetailsByBlockHeightRITotalFees} totalFees
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['totalFees'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetXRPRippleBlockDetailsByBlockHeightRI.prototype['transactionsCount'] = undefined;
var _default = GetXRPRippleBlockDetailsByBlockHeightRI;
exports["default"] = _default;