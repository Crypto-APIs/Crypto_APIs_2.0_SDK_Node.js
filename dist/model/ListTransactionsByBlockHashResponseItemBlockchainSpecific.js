"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificDash"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashResponseItemBlockchainSpecific model module.
 * @module model/ListTransactionsByBlockHashResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var ListTransactionsByBlockHashResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashResponseItemBlockchainSpecific</code>.
   * @alias module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecific
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDash
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum
   * @implements module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
   * @param vsize {Number} Represents the virtual size of this transaction.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListTransactionsByBlockHashResponseItemBlockchainSpecific(locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
    _classCallCheck(this, ListTransactionsByBlockHashResponseItemBlockchainSpecific);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].initialize(this, locktime, size, version, vin, vout, vsize);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    ListTransactionsByBlockHashResponseItemBlockchainSpecific.initialize(this, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashResponseItemBlockchainSpecific, null, [{
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
     * Constructs a <code>ListTransactionsByBlockHashResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecific} The populated <code>ListTransactionsByBlockHashResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashResponseItemBlockchainSpecific();

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout["default"]]);
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
          obj['gasPrice'] = _ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice["default"].constructFromObject(data['gasPrice']);
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

  return ListTransactionsByBlockHashResponseItemBlockchainSpecific;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin>} vin
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout>} vout
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['vsize'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

ListTransactionsByBlockHashResponseItemBlockchainSpecific.prototype['transactionStatus'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinVin>} vin
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinVout>} vout
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVin>} vin
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoinVout>} vout
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificLitecoin["default"].prototype['vsize'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVin>} vin
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout>} vout
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificDash interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVin>} vin
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDashVout>} vout
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificDash["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['contract'] = undefined;
/**
 * String representation of the transaction Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereum["default"].prototype['transactionStatus'] = undefined; // Implement ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

_ListTransactionsByBlockHashResponseItemBlockchainSpecificEthereumClassic["default"].prototype['transactionStatus'] = undefined;
var _default = ListTransactionsByBlockHashResponseItemBlockchainSpecific;
exports["default"] = _default;