"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAllUnconfirmedTransactionsRIBSBCVinInner = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSBCVinInner"));

var _ListAllUnconfirmedTransactionsRIBSBCVoutInner = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSBCVoutInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSBC model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSBC
 * @version 1.7.3
 */
var ListAllUnconfirmedTransactionsRIBSBC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSBC</code>.
   * Bitcoin Cash
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSBC
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVinInner>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVoutInner>} Object Array representation of transaction outputs
   */
  function ListAllUnconfirmedTransactionsRIBSBC(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSBC);

    ListAllUnconfirmedTransactionsRIBSBC.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSBC, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSBC} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSBC} The populated <code>ListAllUnconfirmedTransactionsRIBSBC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSBC();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListAllUnconfirmedTransactionsRIBSBCVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListAllUnconfirmedTransactionsRIBSBCVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRIBSBC;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListAllUnconfirmedTransactionsRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListAllUnconfirmedTransactionsRIBSBC.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListAllUnconfirmedTransactionsRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVinInner>} vin
 */

ListAllUnconfirmedTransactionsRIBSBC.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVoutInner>} vout
 */

ListAllUnconfirmedTransactionsRIBSBC.prototype['vout'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSBC;
exports["default"] = _default;