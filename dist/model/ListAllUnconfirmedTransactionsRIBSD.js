"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSDVout = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSDVout"));

var _ListAllUnconfirmedTransactionsRIBSDVin = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSDVin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBSD model module.
 * @module model/ListAllUnconfirmedTransactionsRIBSD
 * @version 1.4.0
 */
var ListAllUnconfirmedTransactionsRIBSD = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBSD</code>.
   * Dogecoin
   * @alias module:model/ListAllUnconfirmedTransactionsRIBSD
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/ListAllUnconfirmedTransactionsRIBSDVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVout>} Represents the transaction outputs.
   */
  function ListAllUnconfirmedTransactionsRIBSD(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBSD);

    ListAllUnconfirmedTransactionsRIBSD.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBSD, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBSD</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBSD} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBSD} The populated <code>ListAllUnconfirmedTransactionsRIBSD</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBSD();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListAllUnconfirmedTransactionsRIBSDVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSDVout["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRIBSD;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListAllUnconfirmedTransactionsRIBSD.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListAllUnconfirmedTransactionsRIBSD.prototype['size'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

ListAllUnconfirmedTransactionsRIBSD.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSDVin>} vin
 */

ListAllUnconfirmedTransactionsRIBSD.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVout>} vout
 */

ListAllUnconfirmedTransactionsRIBSD.prototype['vout'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBSD;
exports["default"] = _default;