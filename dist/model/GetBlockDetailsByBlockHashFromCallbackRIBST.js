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
 * The GetBlockDetailsByBlockHashFromCallbackRIBST model module.
 * @module model/GetBlockDetailsByBlockHashFromCallbackRIBST
 * @version 1.13.0
 */
var GetBlockDetailsByBlockHashFromCallbackRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code>.
   * Tron
   * @alias module:model/GetBlockDetailsByBlockHashFromCallbackRIBST
   * @param bandwidthUsed {String} Represents the bandwidth used for the transaction.
   * @param burnedTrx {String} Represents the block burned TRX.
   * @param energyUsed {String} Representats the used energy for the transaction.
   * @param size {Number} Represents the total size of the block in Bytes.
   */
  function GetBlockDetailsByBlockHashFromCallbackRIBST(bandwidthUsed, burnedTrx, energyUsed, size) {
    _classCallCheck(this, GetBlockDetailsByBlockHashFromCallbackRIBST);
    GetBlockDetailsByBlockHashFromCallbackRIBST.initialize(this, bandwidthUsed, burnedTrx, energyUsed, size);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetBlockDetailsByBlockHashFromCallbackRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, bandwidthUsed, burnedTrx, energyUsed, size) {
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['burnedTrx'] = burnedTrx;
      obj['energyUsed'] = energyUsed;
      obj['size'] = size;
    }

    /**
     * Constructs a <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHashFromCallbackRIBST} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHashFromCallbackRIBST} The populated <code>GetBlockDetailsByBlockHashFromCallbackRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHashFromCallbackRIBST();
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _ApiClient["default"].convertToType(data['bandwidthUsed'], 'String');
        }
        if (data.hasOwnProperty('burnedTrx')) {
          obj['burnedTrx'] = _ApiClient["default"].convertToType(data['burnedTrx'], 'String');
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
  return GetBlockDetailsByBlockHashFromCallbackRIBST;
}();
/**
 * Represents the bandwidth used for the transaction.
 * @member {String} bandwidthUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['bandwidthUsed'] = undefined;

/**
 * Represents the block burned TRX.
 * @member {String} burnedTrx
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['burnedTrx'] = undefined;

/**
 * Representats the used energy for the transaction.
 * @member {String} energyUsed
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['energyUsed'] = undefined;

/**
 * Represents the total size of the block in Bytes.
 * @member {Number} size
 */
GetBlockDetailsByBlockHashFromCallbackRIBST.prototype['size'] = undefined;
var _default = GetBlockDetailsByBlockHashFromCallbackRIBST;
exports["default"] = _default;