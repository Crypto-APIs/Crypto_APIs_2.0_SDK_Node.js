"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHeightRIBSLVin = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSLVin"));

var _ListTransactionsByBlockHeightRIBSLVout = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSLVout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightRIBSL model module.
 * @module model/ListTransactionsByBlockHeightRIBSL
 * @version 1.1.0
 */
var ListTransactionsByBlockHeightRIBSL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSL</code>.
   * Litecoin
   * @alias module:model/ListTransactionsByBlockHeightRIBSL
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSLVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSLVout>} Represents the transaction outputs.
   * @param vsize {Number} Represents the virtual size of this transaction.
   */
  function ListTransactionsByBlockHeightRIBSL(locktime, size, version, vin, vout, vsize) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSL);

    ListTransactionsByBlockHeightRIBSL.initialize(this, locktime, size, version, vin, vout, vsize);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightRIBSL, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout, vsize) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['vsize'] = vsize;
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

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHeightRIBSLVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHeightRIBSLVout["default"]]);
        }

        if (data.hasOwnProperty('vsize')) {
          obj['vsize'] = _ApiClient["default"].convertToType(data['vsize'], 'Number');
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
 * Represents transaction version number.
 * @member {Number} version
 */

ListTransactionsByBlockHeightRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVin>} vin
 */

ListTransactionsByBlockHeightRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVout>} vout
 */

ListTransactionsByBlockHeightRIBSL.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

ListTransactionsByBlockHeightRIBSL.prototype['vsize'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSL;
exports["default"] = _default;