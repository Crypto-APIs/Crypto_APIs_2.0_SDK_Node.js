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
 * The ListLatestMinedBlocksRIBST model module.
 * @module model/ListLatestMinedBlocksRIBST
 * @version 1.13.0
 */
var ListLatestMinedBlocksRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListLatestMinedBlocksRIBST</code>.
   * Tron
   * @alias module:model/ListLatestMinedBlocksRIBST
   * @param size {Number} Represents the total size of the block in Bytes.
   */
  function ListLatestMinedBlocksRIBST(size) {
    _classCallCheck(this, ListLatestMinedBlocksRIBST);
    ListLatestMinedBlocksRIBST.initialize(this, size);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListLatestMinedBlocksRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, size) {
      obj['size'] = size;
    }

    /**
     * Constructs a <code>ListLatestMinedBlocksRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListLatestMinedBlocksRIBST} obj Optional instance to populate.
     * @return {module:model/ListLatestMinedBlocksRIBST} The populated <code>ListLatestMinedBlocksRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListLatestMinedBlocksRIBST();
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _ApiClient["default"].convertToType(data['bandwidthUsed'], 'String');
        }
        if (data.hasOwnProperty('burnedTRX')) {
          obj['burnedTRX'] = _ApiClient["default"].convertToType(data['burnedTRX'], 'String');
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _ApiClient["default"].convertToType(data['energyUsed'], 'String');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return ListLatestMinedBlocksRIBST;
}();
/**
 * Representation of the blocks' bandwidth limit.
 * @member {String} bandwidthUsed
 */
ListLatestMinedBlocksRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Representation of the blocks' burned TRX.
 * @member {String} burnedTRX
 */
ListLatestMinedBlocksRIBST.prototype['burnedTRX'] = undefined;

/**
 * Representation of the blocks' energy used.
 * @member {String} energyUsed
 */
ListLatestMinedBlocksRIBST.prototype['energyUsed'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
ListLatestMinedBlocksRIBST.prototype['size'] = undefined;
var _default = ListLatestMinedBlocksRIBST;
exports["default"] = _default;