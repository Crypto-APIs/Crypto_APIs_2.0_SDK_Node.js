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
 * The GetBlockDetailsByBlockHeightRIBSZ2 model module.
 * @module model/GetBlockDetailsByBlockHeightRIBSZ2
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHeightRIBSZ2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightRIBSZ2</code>.
   * Zilliqa
   * @alias module:model/GetBlockDetailsByBlockHeightRIBSZ2
   * @param difficulty {String} Represents a mathematical value of how hard it is to find a valid hash for this block.
   * @param dsBlock {Number} Numeric representation of the ds block
   * @param dsDifficulty {String} Numeric representation of the ds difficulty
   * @param dsLeader {String} String representation of the ds leader
   * @param gasLimit {Number} Numeric representation of the block gas_limit
   * @param gasUsed {Number} Numeric representation of the block gas_limit
   * @param microBlocks {Array.<String>} 
   */
  function GetBlockDetailsByBlockHeightRIBSZ2(difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightRIBSZ2);
    GetBlockDetailsByBlockHeightRIBSZ2.initialize(this, difficulty, dsBlock, dsDifficulty, dsLeader, gasLimit, gasUsed, microBlocks);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHeightRIBSZ2, null, [{
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
     * Constructs a <code>GetBlockDetailsByBlockHeightRIBSZ2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightRIBSZ2} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightRIBSZ2} The populated <code>GetBlockDetailsByBlockHeightRIBSZ2</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightRIBSZ2();
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
  return GetBlockDetailsByBlockHeightRIBSZ2;
}();
/**
 * Represents a mathematical value of how hard it is to find a valid hash for this block.
 * @member {String} difficulty
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['difficulty'] = undefined;

/**
 * Numeric representation of the ds block
 * @member {Number} dsBlock
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['dsBlock'] = undefined;

/**
 * Numeric representation of the ds difficulty
 * @member {String} dsDifficulty
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['dsDifficulty'] = undefined;

/**
 * String representation of the ds leader
 * @member {String} dsLeader
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['dsLeader'] = undefined;

/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasLimit
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['gasLimit'] = undefined;

/**
 * Numeric representation of the block gas_limit
 * @member {Number} gasUsed
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['gasUsed'] = undefined;

/**
 * @member {Array.<String>} microBlocks
 */
GetBlockDetailsByBlockHeightRIBSZ2.prototype['microBlocks'] = undefined;
var _default = GetBlockDetailsByBlockHeightRIBSZ2;
exports["default"] = _default;