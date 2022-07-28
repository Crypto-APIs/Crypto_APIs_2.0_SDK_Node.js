"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSLVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSLVoutInner"));

var _ListAllUnconfirmedTransactionsRIBSLVinInner = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSLVinInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSL model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSL
 * @version 1.7.0
 */
var ListAllUnconfirmedTransactionsRIBSL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSL</code>.
   * Litecoin
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSL
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListAllUnconfirmedTransactionsRIBSLVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} Represents the transaction outputs.
   */
  function ListAllUnconfirmedTransactionsRIBSL(locktime, size, vSize, version, vin, vout) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSL);

    ListAllUnconfirmedTransactionsRIBSL.initialize(this, locktime, size, vSize, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSL, null, [{
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
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSL} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSL} The populated <code>ListAllUnconfirmedTransactionsRIBSL</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSL();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListAllUnconfirmedTransactionsRIBSLVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSLVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRIBSL;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListAllUnconfirmedTransactionsRIBSL.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListAllUnconfirmedTransactionsRIBSL.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListAllUnconfirmedTransactionsRIBSL.prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListAllUnconfirmedTransactionsRIBSL.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSLVinInner>} vin
 */

ListAllUnconfirmedTransactionsRIBSL.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */

ListAllUnconfirmedTransactionsRIBSL.prototype['vout'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSL;
exports["default"] = _default;