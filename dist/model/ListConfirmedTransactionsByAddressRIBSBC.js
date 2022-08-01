"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSBCVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBCVoutInner"));

var _ListConfirmedTransactionsByAddressRIBSBCVinInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBCVinInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressRIBSBC model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSBC
 * @version 1.7.2
 */
var ListConfirmedTransactionsByAddressRIBSBC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSBC</code>.
   * Bitcoin Cash
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSBC
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} Represents the transaction inputs.
   */
  function ListConfirmedTransactionsByAddressRIBSBC(locktime, size, version, vin) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSBC);

    ListConfirmedTransactionsByAddressRIBSBC.initialize(this, locktime, size, version, vin);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSBC, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSBC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSBC} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSBC} The populated <code>ListConfirmedTransactionsByAddressRIBSBC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSBC();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListConfirmedTransactionsByAddressRIBSBCVinInner["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSBCVoutInner["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListConfirmedTransactionsByAddressRIBSBC;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListConfirmedTransactionsByAddressRIBSBC.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListConfirmedTransactionsByAddressRIBSBC.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListConfirmedTransactionsByAddressRIBSBC.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */

ListConfirmedTransactionsByAddressRIBSBC.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */

ListConfirmedTransactionsByAddressRIBSBC.prototype['vout'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSBC;
exports["default"] = _default;