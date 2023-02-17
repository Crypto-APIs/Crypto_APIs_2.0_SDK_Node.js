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
 * The GetBlockDetailsByBlockHashFromCallbackRIBSZ model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBSZ
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHashFromCallbackRIBSZ = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code>.
   * Zilliqa
   * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ
   * @param difficulty {String} Defines how difficult it is for a specific miner to mine the block.
   * @param dsBlock {Number} Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
   * @param dsDifficulty {String} Defines how difficult it is to mine the dsBlocks.
   * @param dsLeader {String} Represents a part of the DS Committee which leads the consensus protocol for the epoch.
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param microBlocks {Array.<String>} 
   */
  function GetBlockDetailsByBlockHashFromCallbackRIBSZ(difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks) {
    _classCallCheck(this, GetBlockDetailsByBlockHashFromCallbackRIBSZ);
    GetBlockDetailsByBlockHashFromCallbackRIBSZ.initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHashFromCallbackRIBSZ, null, [{
    key: "initialize",
    value: function initialize(obj, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks) {
      obj['difficulty'] = difficulty;
      obj['dsBlock'] = dsBlock;
      obj['dsDifficulty'] = dsDifficulty;
      obj['dsLeader'] = dsLeader;
      obj['gasLimit'] = gasLimit;
      obj['gasUsed'] = gasUsed;
      obj['microBlocks'] = microBlocks;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBSZ} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBSZ</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBSZ();
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
      }
      return obj;
    }
  }]);
  return GetBlockDetailsByBlockHashFromCallbackRIBSZ;
}();
/**
 * Defines how difficult it is for a specific miner to mine the block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['difficulty'] = undefined;

/**
 * Represents the Directory Service block which contains metadata about the miners who participate in the consensus protocol.
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsBlock'] = undefined;

/**
 * Defines how difficult it is to mine the dsBlocks.
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsDifficulty'] = undefined;

/**
 * Represents a part of the DS Committee which leads the consensus protocol for the epoch.
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['dsLeader'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['gasLimit'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['gasUsed'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHashFromCallbackRIBSZ.prototype['microBlocks'] = undefined;
var _default = GetBlockDetailsByBlockHashFromCallbackRIBSZ;
exports["default"] = _default;