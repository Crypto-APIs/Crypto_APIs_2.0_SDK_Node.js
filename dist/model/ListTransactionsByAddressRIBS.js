"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByAddressRIBSB = _interopRequireDefault(require("./ListTransactionsByAddressRIBSB"));

var _ListTransactionsByAddressRIBSBC = _interopRequireDefault(require("./ListTransactionsByAddressRIBSBC"));

var _ListTransactionsByAddressRIBSD = _interopRequireDefault(require("./ListTransactionsByAddressRIBSD"));

var _ListTransactionsByAddressRIBSD2 = _interopRequireDefault(require("./ListTransactionsByAddressRIBSD2"));

var _ListTransactionsByAddressRIBSD2Vin = _interopRequireDefault(require("./ListTransactionsByAddressRIBSD2Vin"));

var _ListTransactionsByAddressRIBSD2Vout = _interopRequireDefault(require("./ListTransactionsByAddressRIBSD2Vout"));

var _ListTransactionsByAddressRIBSE = _interopRequireDefault(require("./ListTransactionsByAddressRIBSE"));

var _ListTransactionsByAddressRIBSEC = _interopRequireDefault(require("./ListTransactionsByAddressRIBSEC"));

var _ListTransactionsByAddressRIBSEGasPrice = _interopRequireDefault(require("./ListTransactionsByAddressRIBSEGasPrice"));

var _ListTransactionsByAddressRIBSL = _interopRequireDefault(require("./ListTransactionsByAddressRIBSL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByAddressRIBS model module.
 * @module model/ListTransactionsByAddressRIBS
 * @version 1.2.1
 */
var ListTransactionsByAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressRIBS</code>.
   * @alias module:model/ListTransactionsByAddressRIBS
   * @implements module:model/ListTransactionsByAddressRIBSB
   * @implements module:model/ListTransactionsByAddressRIBSBC
   * @implements module:model/ListTransactionsByAddressRIBSL
   * @implements module:model/ListTransactionsByAddressRIBSD
   * @implements module:model/ListTransactionsByAddressRIBSD2
   * @implements module:model/ListTransactionsByAddressRIBSEC
   * @implements module:model/ListTransactionsByAddressRIBSE
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction's version number.
   * @param vin {Array.<module:model/ListTransactionsByAddressRIBSD2Vin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByAddressRIBSD2Vout>} Represents the transaction outputs.
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByAddressRIBSEGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
   */
  function ListTransactionsByAddressRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus) {
    _classCallCheck(this, ListTransactionsByAddressRIBS);

    _ListTransactionsByAddressRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByAddressRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByAddressRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListTransactionsByAddressRIBSD["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByAddressRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);

    _ListTransactionsByAddressRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    _ListTransactionsByAddressRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);

    ListTransactionsByAddressRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressRIBS, null, [{
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
     * Constructs a <code>ListTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressRIBS} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressRIBS} The populated <code>ListTransactionsByAddressRIBS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressRIBS();

        _ListTransactionsByAddressRIBSB["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressRIBSBC["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressRIBSL["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressRIBSD["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressRIBSD2["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressRIBSEC["default"].constructFromObject(data, obj);

        _ListTransactionsByAddressRIBSE["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByAddressRIBSD2Vin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByAddressRIBSD2Vout["default"]]);
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListTransactionsByAddressRIBSEGasPrice["default"].constructFromObject(data['gasPrice']);
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

  return ListTransactionsByAddressRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListTransactionsByAddressRIBS.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByAddressRIBS.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListTransactionsByAddressRIBS.prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

ListTransactionsByAddressRIBS.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vin>} vin
 */

ListTransactionsByAddressRIBS.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vout>} vout
 */

ListTransactionsByAddressRIBS.prototype['vout'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

ListTransactionsByAddressRIBS.prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressRIBSEGasPrice} gasPrice
 */

ListTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

ListTransactionsByAddressRIBS.prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListTransactionsByAddressRIBS.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

ListTransactionsByAddressRIBS.prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

ListTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined; // Implement ListTransactionsByAddressRIBSB interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */

_ListTransactionsByAddressRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

_ListTransactionsByAddressRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSBVin>} vin
 */

_ListTransactionsByAddressRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSBVout>} vout
 */

_ListTransactionsByAddressRIBSB["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressRIBSBC interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSBCVin>} vin
 */

_ListTransactionsByAddressRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVout>} vout
 */

_ListTransactionsByAddressRIBSBC["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressRIBSL interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListTransactionsByAddressRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSLVin>} vin
 */

_ListTransactionsByAddressRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVout>} vout
 */

_ListTransactionsByAddressRIBSL["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressRIBSD interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSDVin>} vin
 */

_ListTransactionsByAddressRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVout>} vout
 */

_ListTransactionsByAddressRIBSD["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressRIBSD2 interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListTransactionsByAddressRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListTransactionsByAddressRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListTransactionsByAddressRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vin>} vin
 */

_ListTransactionsByAddressRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByAddressRIBSD2Vout>} vout
 */

_ListTransactionsByAddressRIBSD2["default"].prototype['vout'] = undefined; // Implement ListTransactionsByAddressRIBSEC interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressRIBSECGasPrice} gasPrice
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

_ListTransactionsByAddressRIBSEC["default"].prototype['transactionStatus'] = undefined; // Implement ListTransactionsByAddressRIBSE interface:

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */

_ListTransactionsByAddressRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListTransactionsByAddressRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByAddressRIBSEGasPrice} gasPrice
 */

_ListTransactionsByAddressRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */

_ListTransactionsByAddressRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListTransactionsByAddressRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListTransactionsByAddressRIBSE["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */

_ListTransactionsByAddressRIBSE["default"].prototype['transactionStatus'] = undefined;
var _default = ListTransactionsByAddressRIBS;
exports["default"] = _default;