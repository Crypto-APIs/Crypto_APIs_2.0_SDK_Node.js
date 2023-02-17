"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListTransactionsByBlockHeightRIBSLVinInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSLVinInner"));
var _ListTransactionsByBlockHeightRIBSLVoutInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSLVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHeightRIBSL model module.
 * @module model/ListTransactionsByBlockHeightRIBSL
 * @version 1.13.0
 */
var ListTransactionsByBlockHeightRIBSL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSL</code>.
   * Litecoin
   * @alias module:model/ListTransactionsByBlockHeightRIBSL
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSLVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSLVoutInner>} Represents the transaction outputs.
   */
  function ListTransactionsByBlockHeightRIBSL(locktime, size, vSize, version, vin, vout) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSL);
    ListTransactionsByBlockHeightRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHeightRIBSL, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSL} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSL} The populated <code>ListTransactionsByBlockHeightRIBSL</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSL();
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('vSize')) {
          obj['vSize'] = _ApiClient["default"].convertToType(data['vSize'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHeightRIBSLVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHeightRIBSLVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ListTransactionsByBlockHeightRIBSL;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
ListTransactionsByBlockHeightRIBSL.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListTransactionsByBlockHeightRIBSL.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListTransactionsByBlockHeightRIBSL.prototype['vSize'] = undefined;

/**
 * Represents transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBSL.prototype['version'] = undefined;

/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVinInner>} vin
 */
ListTransactionsByBlockHeightRIBSL.prototype['vin'] = undefined;

/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVoutInner>} vout
 */
ListTransactionsByBlockHeightRIBSL.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSL;
exports["default"] = _default;