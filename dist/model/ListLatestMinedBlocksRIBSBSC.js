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
 * The ListLatestMinedBlocksRIBSBSC model module.
 * @module model/ListLatestMinedBlocksRIBSBSC
 * @version 1.13.0
 */
var ListLatestMinedBlocksRIBSBSC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListLatestMinedBlocksRIBSBSC</code>.
   * Binance Smart Chain
   * @alias module:model/ListLatestMinedBlocksRIBSBSC
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
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
  function ListLatestMinedBlocksRIBSBSC(difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles) {
    _classCallCheck(this, ListLatestMinedBlocksRIBSBSC);
    ListLatestMinedBlocksRIBSBSC.initialize(this, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListLatestMinedBlocksRIBSBSC, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, extraData, gasLimit, gasUsed, minedInSeconds, nonce, sha3Uncles, size, totalDifficulty, uncles) {
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
    }

    /**
     * Constructs a <code>ListLatestMinedBlocksRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListLatestMinedBlocksRIBSBSC} obj Optional instance to populate.
     * @return {module:model/ListLatestMinedBlocksRIBSBSC} The populated <code>ListLatestMinedBlocksRIBSBSC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListLatestMinedBlocksRIBSBSC();
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
  }]);
  return ListLatestMinedBlocksRIBSBSC;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
ListLatestMinedBlocksRIBSBSC.prototype['difficulty'] = undefined;

/**
 * Represents any data that can be included by the miner in the block.
 * @member {String} extraData
 */
ListLatestMinedBlocksRIBSBSC.prototype['extraData'] = undefined;

/**
 * Defines the total gas limit of all transactions in the block.
 * @member {String} gasLimit
 */
ListLatestMinedBlocksRIBSBSC.prototype['gasLimit'] = undefined;

/**
 * Represents the total amount of gas used by all transactions in this block.
 * @member {String} gasUsed
 */
ListLatestMinedBlocksRIBSBSC.prototype['gasUsed'] = undefined;

/**
 * Specifies the amount of time required for the block to be mined in second
 * @member {Number} minedInSeconds
 */
ListLatestMinedBlocksRIBSBSC.prototype['minedInSeconds'] = undefined;

/**
 * Represents a random value that can be adjusted to satisfy the proof of work
 * @member {String} nonce
 */
ListLatestMinedBlocksRIBSBSC.prototype['nonce'] = undefined;

/**
 * Defines the combined hash of all uncles for a given parent.
 * @member {String} sha3Uncles
 */
ListLatestMinedBlocksRIBSBSC.prototype['sha3Uncles'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
ListLatestMinedBlocksRIBSBSC.prototype['size'] = undefined;

/**
 * Defines the total difficulty of the chain until this block, i.e. how difficult it is for a specific miner to mine a new block
 * @member {String} totalDifficulty
 */
ListLatestMinedBlocksRIBSBSC.prototype['totalDifficulty'] = undefined;

/**
 * @member {Array.<String>} uncles
 */
ListLatestMinedBlocksRIBSBSC.prototype['uncles'] = undefined;
var _default = ListLatestMinedBlocksRIBSBSC;
exports["default"] = _default;