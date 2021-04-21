"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificDogecoinVin = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificDogecoinVin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin
 * @version 2.0.0
 */
var ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin</code>.
   * Dogecoin
   * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoinVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout>} Represents the transaction outputs.
   */
  function ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin);

    ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByAddressResponseItemBlockchainSpecificDogecoinVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin.prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoinVin>} vin
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout>} vout
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin.prototype['vout'] = undefined;
var _default = ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin;
exports["default"] = _default;