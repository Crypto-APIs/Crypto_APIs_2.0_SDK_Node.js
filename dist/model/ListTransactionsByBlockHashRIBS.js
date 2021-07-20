"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashRIBSB = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSB"));

var _ListTransactionsByBlockHashRIBSBC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBC"));

var _ListTransactionsByBlockHashRIBSD = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD"));

var _ListTransactionsByBlockHashRIBSD2 = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD2"));

var _ListTransactionsByBlockHashRIBSD2Vin = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD2Vin"));

var _ListTransactionsByBlockHashRIBSD2Vout = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD2Vout"));

var _ListTransactionsByBlockHashRIBSE = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSE"));

var _ListTransactionsByBlockHashRIBSEC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSEC"));

var _ListTransactionsByBlockHashRIBSEGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSEGasPrice"));

var _ListTransactionsByBlockHashRIBSL = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHashRIBS model module.
 * @module model/ListTransactionsByBlockHashRIBS
 * @version 1.1.0
 */
var ListTransactionsByBlockHashRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHashRIBS</code>.
   * @alias module:model/ListTransactionsByBlockHashRIBS
   * @implements module:model/ListTransactionsByBlockHashRIBSB
   * @implements module:model/ListTransactionsByBlockHashRIBSBC
   * @implements module:model/ListTransactionsByBlockHashRIBSL
   * @implements module:model/ListTransactionsByBlockHashRIBSD
   * @implements module:model/ListTransactionsByBlockHashRIBSD2
   * @implements module:model/ListTransactionsByBlockHashRIBSE
   * @implements module:model/ListTransactionsByBlockHashRIBSEC
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSD2Vin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHashRIBSD2Vout>} Represents the transaction outputs.
   * @param vsize {Number} Represents the virtual size of this transaction.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByBlockHashRIBSEGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListTransactionsByBlockHashRIBS(locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBS);

    _ListTransactionsByBlockHashRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByBlockHashRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHashRIBSL["default"].initialize(this, locktime, size, version, vin, vout, vsize);

    _ListTransactionsByBlockHashRIBSD["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHashRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHashRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _ListTransactionsByBlockHashRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    ListTransactionsByBlockHashRIBS.initialize(this, locktime, size, vSize, version, vin, vout, vsize, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHashRIBS, null, [{
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
     * Constructs a <code>ListTransactionsByBlockHashRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHashRIBS} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHashRIBS} The populated <code>ListTransactionsByBlockHashRIBS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHashRIBS();

        _ListTransactionsByBlockHashRIBSB["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashRIBSBC["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashRIBSL["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashRIBSD["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashRIBSD2["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashRIBSE["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHashRIBSEC["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashRIBSD2Vin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHashRIBSD2Vout["default"]]);
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
          obj['gasPrice'] = _ListTransactionsByBlockHashRIBSEGasPrice["default"].constructFromObject(data['gasPrice']);
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

  return ListTransactionsByBlockHashRIBS;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


ListTransactionsByBlockHashRIBS.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHashRIBS.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListTransactionsByBlockHashRIBS.prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

ListTransactionsByBlockHashRIBS.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSD2Vin>} vin
 */

ListTransactionsByBlockHashRIBS.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSD2Vout>} vout
 */

ListTransactionsByBlockHashRIBS.prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

ListTransactionsByBlockHashRIBS.prototype['vsize'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

ListTransactionsByBlockHashRIBS.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListTransactionsByBlockHashRIBS.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashRIBSEGasPrice} gasPrice
 */

ListTransactionsByBlockHashRIBS.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

ListTransactionsByBlockHashRIBS.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListTransactionsByBlockHashRIBS.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

ListTransactionsByBlockHashRIBS.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

ListTransactionsByBlockHashRIBS.prototype['transactionStatus'] = undefined; // Implement ListTransactionsByBlockHashRIBSB interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashRIBSB["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListTransactionsByBlockHashRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVin>} vin
 */

_ListTransactionsByBlockHashRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBVout>} vout
 */

_ListTransactionsByBlockHashRIBSB["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashRIBSBC interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} vin
 */

_ListTransactionsByBlockHashRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} vout
 */

_ListTransactionsByBlockHashRIBSBC["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashRIBSL interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSLVin>} vin
 */

_ListTransactionsByBlockHashRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSLVout>} vout
 */

_ListTransactionsByBlockHashRIBSL["default"].prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

_ListTransactionsByBlockHashRIBSL["default"].prototype['vsize'] = undefined; // Implement ListTransactionsByBlockHashRIBSD interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVin>} vin
 */

_ListTransactionsByBlockHashRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVout>} vout
 */

_ListTransactionsByBlockHashRIBSD["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashRIBSD2 interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHashRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHashRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHashRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSD2Vin>} vin
 */

_ListTransactionsByBlockHashRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSD2Vout>} vout
 */

_ListTransactionsByBlockHashRIBSD2["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHashRIBSE interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['contract'] = undefined;
/**
 * String representation of the transaction Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashRIBSEGasPrice} gasPrice
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

_ListTransactionsByBlockHashRIBSE["default"].prototype['transactionStatus'] = undefined; // Implement ListTransactionsByBlockHashRIBSEC interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashRIBSEGasPrice} gasPrice
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

_ListTransactionsByBlockHashRIBSEC["default"].prototype['transactionStatus'] = undefined;
var _default = ListTransactionsByBlockHashRIBS;
exports["default"] = _default;