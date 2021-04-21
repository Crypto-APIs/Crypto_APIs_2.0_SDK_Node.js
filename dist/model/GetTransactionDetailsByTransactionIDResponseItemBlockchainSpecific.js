"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice"));

var _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific model module.
 * @module model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum
   * @implements module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
   * @param vsize {Number} Represents the virtual size of this transaction.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction.
   */
  function GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific(locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, locktime, size, version, vin, vout);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].initialize(this, locktime, size, version, vin, vout, vsize);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].initialize(this, locktime, size, version, vin, vout);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].initialize(this, locktime, size, version, vin, vout);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);

    GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.initialize(this, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['vsize'] = vsize;
      obj['contract'] = contract;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific} The populated <code>GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific();

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

        _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout["default"]]);
        }

        if (data.hasOwnProperty('vsize')) {
          obj['vsize'] = _ApiClient["default"].convertToType(data['vsize'], 'Number');
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice["default"].constructFromObject(data['gasPrice']);
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }

        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }

        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin>} vin
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout>} vout
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['vsize'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific.prototype['transactionStatus'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVin>} vin
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout>} vout
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoin["default"].prototype['vout'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vout'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVin>} vin
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVout>} vout
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoin["default"].prototype['vsize'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVin>} vin
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout>} vout
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoin["default"].prototype['vout'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVin>} vin
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDashVout>} vout
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDash["default"].prototype['vout'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereum["default"].prototype['transactionStatus'] = undefined; // Implement GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

_GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
var _default = GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecific;
exports["default"] = _default;