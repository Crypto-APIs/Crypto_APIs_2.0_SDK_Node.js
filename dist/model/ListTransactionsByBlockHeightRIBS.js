"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHashRIBSBCVin = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBCVin"));

var _ListTransactionsByBlockHashRIBSBCVout = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBCVout"));

var _ListTransactionsByBlockHeightRIBSB = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSB"));

var _ListTransactionsByBlockHeightRIBSBC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBC"));

var _ListTransactionsByBlockHeightRIBSD = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSD"));

var _ListTransactionsByBlockHeightRIBSD2 = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSD2"));

var _ListTransactionsByBlockHeightRIBSE = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSE"));

var _ListTransactionsByBlockHeightRIBSEC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSEC"));

var _ListTransactionsByBlockHeightRIBSECGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSECGasPrice"));

var _ListTransactionsByBlockHeightRIBSL = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightRIBS model module.
 * @module model/ListTransactionsByBlockHeightRIBS
 * @version 1.2.1
 */
var ListTransactionsByBlockHeightRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBS</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBS
   * @implements module:model/ListTransactionsByBlockHeightRIBSB
   * @implements module:model/ListTransactionsByBlockHeightRIBSE
   * @implements module:model/ListTransactionsByBlockHeightRIBSD
   * @implements module:model/ListTransactionsByBlockHeightRIBSD2
   * @implements module:model/ListTransactionsByBlockHeightRIBSL
   * @implements module:model/ListTransactionsByBlockHeightRIBSBC
   * @implements module:model/ListTransactionsByBlockHeightRIBSEC
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the total size of this transaction.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} Represents the transaction outputs.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByBlockHeightRIBSECGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction.
   * @param vsize {Number} Represents the virtual size of this transaction.
   */
  function ListTransactionsByBlockHeightRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBS);

    _ListTransactionsByBlockHeightRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByBlockHeightRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _ListTransactionsByBlockHeightRIBSD["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHeightRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHeightRIBSL["default"].initialize(this, locktime, size, version, vin, vout, vsize);

    _ListTransactionsByBlockHeightRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByBlockHeightRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);

    ListTransactionsByBlockHeightRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, vsize);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightRIBS, null, [{
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
     * Constructs a <code>ListTransactionsByBlockHeightRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBS} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBS} The populated <code>ListTransactionsByBlockHeightRIBS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBS();

        _ListTransactionsByBlockHeightRIBSB["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightRIBSE["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightRIBSD["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightRIBSD2["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightRIBSL["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightRIBSBC["default"].constructFromObject(data, obj);

        _ListTransactionsByBlockHeightRIBSEC["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashRIBSBCVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHashRIBSBCVout["default"]]);
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListTransactionsByBlockHeightRIBSECGasPrice["default"].constructFromObject(data['gasPrice']);
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

  return ListTransactionsByBlockHeightRIBS;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


ListTransactionsByBlockHeightRIBS.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHeightRIBS.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListTransactionsByBlockHeightRIBS.prototype['vSize'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */

ListTransactionsByBlockHeightRIBS.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} vin
 */

ListTransactionsByBlockHeightRIBS.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} vout
 */

ListTransactionsByBlockHeightRIBS.prototype['vout'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

ListTransactionsByBlockHeightRIBS.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListTransactionsByBlockHeightRIBS.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSECGasPrice} gasPrice
 */

ListTransactionsByBlockHeightRIBS.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

ListTransactionsByBlockHeightRIBS.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListTransactionsByBlockHeightRIBS.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

ListTransactionsByBlockHeightRIBS.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

ListTransactionsByBlockHeightRIBS.prototype['transactionStatus'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

ListTransactionsByBlockHeightRIBS.prototype['vsize'] = undefined; // Implement ListTransactionsByBlockHeightRIBSB interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightRIBSB["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListTransactionsByBlockHeightRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVin>} vin
 */

_ListTransactionsByBlockHeightRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSBVout>} vout
 */

_ListTransactionsByBlockHeightRIBSB["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightRIBSE interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

_ListTransactionsByBlockHeightRIBSE["default"].prototype['transactionStatus'] = undefined; // Implement ListTransactionsByBlockHeightRIBSD interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVin>} vin
 */

_ListTransactionsByBlockHeightRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVout>} vout
 */

_ListTransactionsByBlockHeightRIBSD["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightRIBSD2 interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSD2Vin>} vin
 */

_ListTransactionsByBlockHeightRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVout>} vout
 */

_ListTransactionsByBlockHeightRIBSD2["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightRIBSL interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVin>} vin
 */

_ListTransactionsByBlockHeightRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVout>} vout
 */

_ListTransactionsByBlockHeightRIBSL["default"].prototype['vout'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vsize
 */

_ListTransactionsByBlockHeightRIBSL["default"].prototype['vsize'] = undefined; // Implement ListTransactionsByBlockHeightRIBSBC interface:

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

_ListTransactionsByBlockHeightRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByBlockHeightRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} version
 */

_ListTransactionsByBlockHeightRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVin>} vin
 */

_ListTransactionsByBlockHeightRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVout>} vout
 */

_ListTransactionsByBlockHeightRIBSBC["default"].prototype['vout'] = undefined; // Implement ListTransactionsByBlockHeightRIBSEC interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByBlockHeightRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByBlockHeightRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSECGasPrice} gasPrice
 */

_ListTransactionsByBlockHeightRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByBlockHeightRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByBlockHeightRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */

_ListTransactionsByBlockHeightRIBSEC["default"].prototype['nonce'] = undefined;
var _default = ListTransactionsByBlockHeightRIBS;
exports["default"] = _default;