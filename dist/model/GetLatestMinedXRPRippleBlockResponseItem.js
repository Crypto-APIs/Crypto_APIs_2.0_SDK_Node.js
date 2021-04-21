"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetLatestMinedXRPRippleBlockResponseItemTotalCoins = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockResponseItemTotalCoins"));

var _GetLatestMinedXRPRippleBlockResponseItemTotalFees = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockResponseItemTotalFees"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetLatestMinedXRPRippleBlockResponseItem model module.
 * @module model/GetLatestMinedXRPRippleBlockResponseItem
 * @version 2.0.0
 */
var GetLatestMinedXRPRippleBlockResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetLatestMinedXRPRippleBlockResponseItem</code>.
   * @alias module:model/GetLatestMinedXRPRippleBlockResponseItem
   * @param blockHash {String} Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
   * @param blockHeight {Number} Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
   * @param previousBlockHash {String} Represents the hash of the previous block, also known as the parent block.
   * @param timestamp {Number} Defines the exact date/time when this block was mined in Unix Timestamp.
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockResponseItemTotalCoins} 
   * @param totalFees {module:model/GetLatestMinedXRPRippleBlockResponseItemTotalFees} 
   */
  function GetLatestMinedXRPRippleBlockResponseItem(blockHash, blockHeight, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees) {
    _classCallCheck(this, GetLatestMinedXRPRippleBlockResponseItem);

    GetLatestMinedXRPRippleBlockResponseItem.initialize(this, blockHash, blockHeight, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetLatestMinedXRPRippleBlockResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockHash, blockHeight, previousBlockHash, timestamp, transactionsCount, totalCoins, totalFees) {
      obj['blockHash'] = blockHash;
      obj['blockHeight'] = blockHeight;
      obj['previousBlockHash'] = previousBlockHash;
      obj['timestamp'] = timestamp;
      obj['transactionsCount'] = transactionsCount;
      obj['totalCoins'] = totalCoins;
      obj['totalFees'] = totalFees;
    }
    /**
     * Constructs a <code>GetLatestMinedXRPRippleBlockResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLatestMinedXRPRippleBlockResponseItem} obj Optional instance to populate.
     * @return {module:model/GetLatestMinedXRPRippleBlockResponseItem} The populated <code>GetLatestMinedXRPRippleBlockResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetLatestMinedXRPRippleBlockResponseItem();

        if (data.hasOwnProperty('blockHash')) {
          obj['blockHash'] = _ApiClient["default"].convertToType(data['blockHash'], 'String');
        }

        if (data.hasOwnProperty('blockHeight')) {
          obj['blockHeight'] = _ApiClient["default"].convertToType(data['blockHeight'], 'Number');
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

        if (data.hasOwnProperty('totalCoins')) {
          obj['totalCoins'] = _GetLatestMinedXRPRippleBlockResponseItemTotalCoins["default"].constructFromObject(data['totalCoins']);
        }

        if (data.hasOwnProperty('totalFees')) {
          obj['totalFees'] = _GetLatestMinedXRPRippleBlockResponseItemTotalFees["default"].constructFromObject(data['totalFees']);
        }
      }

      return obj;
    }
  }]);

  return GetLatestMinedXRPRippleBlockResponseItem;
}();
/**
 * Represents the hash of the block, which is its unique identifier. It represents a cryptographic digital fingerprint made by hashing the block header twice through the SHA256 algorithm.
 * @member {String} blockHash
 */


GetLatestMinedXRPRippleBlockResponseItem.prototype['blockHash'] = undefined;
/**
 * Represents the number of blocks in the blockchain preceding this specific block. Block numbers have no gaps. A blockchain usually starts with block 0 called the \"Genesis block\".
 * @member {Number} blockHeight
 */

GetLatestMinedXRPRippleBlockResponseItem.prototype['blockHeight'] = undefined;
/**
 * Represents the hash of the previous block, also known as the parent block.
 * @member {String} previousBlockHash
 */

GetLatestMinedXRPRippleBlockResponseItem.prototype['previousBlockHash'] = undefined;
/**
 * Defines the exact date/time when this block was mined in Unix Timestamp.
 * @member {Number} timestamp
 */

GetLatestMinedXRPRippleBlockResponseItem.prototype['timestamp'] = undefined;
/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */

GetLatestMinedXRPRippleBlockResponseItem.prototype['transactionsCount'] = undefined;
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockResponseItemTotalCoins} totalCoins
 */

GetLatestMinedXRPRippleBlockResponseItem.prototype['totalCoins'] = undefined;
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockResponseItemTotalFees} totalFees
 */

GetLatestMinedXRPRippleBlockResponseItem.prototype['totalFees'] = undefined;
var _default = GetLatestMinedXRPRippleBlockResponseItem;
exports["default"] = _default;