"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin"));

var _ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout = _interopRequireDefault(require("./ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassicGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassicGasPrice"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightResponseItemBlockchainSpecific model module.
 * @module model/ListTransactionsByBlockHeightResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var ListTransactionsByBlockHeightResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecific</code>.
   * @alias module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecific
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the total size of this transaction.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} Represents the transaction outputs.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassicGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction.
   * @param vsize {Number} Represents the virtual size of this transaction.
   */
  function ListTransactionsByBlockHeightResponseItemBlockchainSpecific(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize) {
    _classCallCheck(this, ListTransactionsByBlockHeightResponseItemBlockchainSpecific);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].initialize(this, locktime, size, version, vin, vout, vsize);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);

    ListTransactionsByBlockHeightResponseItemBlockchainSpecific.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightResponseItemBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['contract'] = contract;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
      obj['vsize'] = vsize;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecific} The populated <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightResponseItemBlockchainSpecific();

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout["default"]]);
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassicGasPrice["default"].constructFromObject(data['gasPrice']);
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

        if (data.hasOwnProperty('vsize')) {
          obj['vsize'] = _ApiClient["default"].convertToType(data['vsize'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHeightResponseItemBlockchainSpecific;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['vSize'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['vout'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['transactionStatus'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecific.prototype['vsize'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinVin>} vin
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinVout>} vout
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereum["default"].prototype['transactionStatus'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVin>} vin
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout>} vout
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoinVin>} vin
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificDogecoinVout>} vout
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDogecoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoinVin>} vin
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoinVout>} vout
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificLitecoin["default"].prototype['vsize'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

_ListTransactionsByBlockHeightResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
var _default = ListTransactionsByBlockHeightResponseItemBlockchainSpecific;
exports["default"] = _default;