"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificDash = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificDash"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificDashVin = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificDashVin"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificDashVout = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificDashVout"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificEthereum = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificEthereum"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice"));

var _ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin = _interopRequireDefault(require("./ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressResponseItemBlockchainSpecific model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecific
 * @version 2.0.0
 */
var ListTransactionsByAddressResponseItemBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecific</code>.
   * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecific
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDash
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic
   * @implements module:model/ListTransactionsByAddressResponseItemBlockchainSpecificEthereum
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListTransactionsByAddressResponseItemBlockchainSpecific(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
    _classCallCheck(this, ListTransactionsByAddressResponseItemBlockchainSpecific);

    _ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);

    ListTransactionsByAddressResponseItemBlockchainSpecific.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressResponseItemBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
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
    }
    /**
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecific} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecific();

        _ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByAddressResponseItemBlockchainSpecificDashVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByAddressResponseItemBlockchainSpecificDashVout["default"]]);
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice["default"].constructFromObject(data['gasPrice']);
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }

        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByAddressResponseItemBlockchainSpecific;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin>} vin
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVout>} vout
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['vout'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

ListTransactionsByAddressResponseItemBlockchainSpecific.prototype['transactionStatus'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinVin>} vin
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinVout>} vout
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCashVin>} vin
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificBitcoinCashVout>} vout
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificBitcoinCash["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificLitecoinVin>} vin
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificLitecoinVout>} vout
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificLitecoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDogecoinVin>} vin
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDResponseItemBlockchainSpecificDogecoinVout>} vout
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDogecoin["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificDash interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVin>} vin
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashVout>} vout
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificDash["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassicGasPrice} gasPrice
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereumClassic["default"].prototype['transactionStatus'] = undefined; // Implement ListTransactionsByAddressResponseItemBlockchainSpecificEthereum interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificEthereumGasPrice} gasPrice
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByAddressResponseItemBlockchainSpecificEthereum["default"].prototype['nonce'] = undefined;
var _default = ListTransactionsByAddressResponseItemBlockchainSpecific;
exports["default"] = _default;