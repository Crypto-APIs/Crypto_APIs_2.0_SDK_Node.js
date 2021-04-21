"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin model module.
 * @module model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin
 * @version 2.0.0
 */
var GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin</code>.
   * Bitcoin
   * @alias module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout>} Represents the transaction outputs.
   */
  function GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin(locktime, size, vSize, version, vin, vout) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin);

    GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.initialize(this, locktime, size, vSize, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin, null, [{
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin} The populated <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin();

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin>} vin
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout>} vout
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin;
exports["default"] = _default;