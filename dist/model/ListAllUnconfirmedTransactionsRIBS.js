"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput"));

var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend"));

var _GetTransactionDetailsByTransactionIDRIBSZVin = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVin"));

var _GetTransactionDetailsByTransactionIDRIBSZVout = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVout"));

var _ListAllUnconfirmedTransactionsRIBSB = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSB"));

var _ListAllUnconfirmedTransactionsRIBSBC = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSBC"));

var _ListAllUnconfirmedTransactionsRIBSBSC = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSBSC"));

var _ListAllUnconfirmedTransactionsRIBSD = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSD"));

var _ListAllUnconfirmedTransactionsRIBSD2 = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSD2"));

var _ListAllUnconfirmedTransactionsRIBSE = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSE"));

var _ListAllUnconfirmedTransactionsRIBSEC = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSEC"));

var _ListAllUnconfirmedTransactionsRIBSECFee = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSECFee"));

var _ListAllUnconfirmedTransactionsRIBSL = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSL"));

var _ListAllUnconfirmedTransactionsRIBSZ = _interopRequireDefault(require("./ListAllUnconfirmedTransactionsRIBSZ"));

var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));

var _ListConfirmedTransactionsByAddressRIBSZVJoinSplit = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVJoinSplit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListAllUnconfirmedTransactionsRIBS model module.
 * @module model/ListAllUnconfirmedTransactionsRIBS
 * @version 1.5.0
 */
var ListAllUnconfirmedTransactionsRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAllUnconfirmedTransactionsRIBS</code>.
   * @alias module:model/ListAllUnconfirmedTransactionsRIBS
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSB
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSBC
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSL
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSD
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSD2
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSE
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSEC
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSZ
   * @implements module:model/ListAllUnconfirmedTransactionsRIBSBSC
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVin>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVout>} Object Array representation of transaction outputs
   * @param fee {module:model/ListAllUnconfirmedTransactionsRIBSECFee} 
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Defines the transaction status.
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param vJoinSplit {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplit>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} Defines the transaction value balance.
   * @param versionGroupId {String} Represents the transaction version group ID.
   */
  function ListAllUnconfirmedTransactionsRIBS(locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, ListAllUnconfirmedTransactionsRIBS);

    _ListAllUnconfirmedTransactionsRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListAllUnconfirmedTransactionsRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);

    _ListAllUnconfirmedTransactionsRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);

    _ListAllUnconfirmedTransactionsRIBSD["default"].initialize(this, locktime, size, version, vin, vout);

    _ListAllUnconfirmedTransactionsRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);

    _ListAllUnconfirmedTransactionsRIBSE["default"].initialize(this, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus);

    _ListAllUnconfirmedTransactionsRIBSEC["default"].initialize(this, fee, gasLimit, gasPrice, nonce, transactionStatus);

    _ListAllUnconfirmedTransactionsRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);

    _ListAllUnconfirmedTransactionsRIBSBSC["default"].initialize(this, gasLimit, gasPrice, inputData, nonce, transactionStatus);

    ListAllUnconfirmedTransactionsRIBS.initialize(this, locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAllUnconfirmedTransactionsRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['fee'] = fee;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['inputData'] = inputData;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
      obj['bindingSig'] = bindingSig;
      obj['expiryHeight'] = expiryHeight;
      obj['joinSplitPubKey'] = joinSplitPubKey;
      obj['joinSplitSig'] = joinSplitSig;
      obj['overwintered'] = overwintered;
      obj['vJoinSplit'] = vJoinSplit;
      obj['vShieldedOutput'] = vShieldedOutput;
      obj['vShieldedSpend'] = vShieldedSpend;
      obj['valueBalance'] = valueBalance;
      obj['versionGroupId'] = versionGroupId;
    }
    /**
     * Constructs a <code>ListAllUnconfirmedTransactionsRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAllUnconfirmedTransactionsRIBS} obj Optional instance to populate.
     * @return {module:model/ListAllUnconfirmedTransactionsRIBS} The populated <code>ListAllUnconfirmedTransactionsRIBS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAllUnconfirmedTransactionsRIBS();

        _ListAllUnconfirmedTransactionsRIBSB["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSBC["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSL["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSD["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSD2["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSE["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSEC["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSZ["default"].constructFromObject(data, obj);

        _ListAllUnconfirmedTransactionsRIBSBSC["default"].constructFromObject(data, obj);

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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDRIBSZVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSZVout["default"]]);
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListAllUnconfirmedTransactionsRIBSECFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListConfirmedTransactionsByAddressRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
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

        if (data.hasOwnProperty('bindingSig')) {
          obj['bindingSig'] = _ApiClient["default"].convertToType(data['bindingSig'], 'String');
        }

        if (data.hasOwnProperty('expiryHeight')) {
          obj['expiryHeight'] = _ApiClient["default"].convertToType(data['expiryHeight'], 'Number');
        }

        if (data.hasOwnProperty('joinSplitPubKey')) {
          obj['joinSplitPubKey'] = _ApiClient["default"].convertToType(data['joinSplitPubKey'], 'String');
        }

        if (data.hasOwnProperty('joinSplitSig')) {
          obj['joinSplitSig'] = _ApiClient["default"].convertToType(data['joinSplitSig'], 'String');
        }

        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }

        if (data.hasOwnProperty('vJoinSplit')) {
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_ListConfirmedTransactionsByAddressRIBSZVJoinSplit["default"]]);
        }

        if (data.hasOwnProperty('vShieldedOutput')) {
          obj['vShieldedOutput'] = _ApiClient["default"].convertToType(data['vShieldedOutput'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput["default"]]);
        }

        if (data.hasOwnProperty('vShieldedSpend')) {
          obj['vShieldedSpend'] = _ApiClient["default"].convertToType(data['vShieldedSpend'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend["default"]]);
        }

        if (data.hasOwnProperty('valueBalance')) {
          obj['valueBalance'] = _ApiClient["default"].convertToType(data['valueBalance'], 'String');
        }

        if (data.hasOwnProperty('versionGroupId')) {
          obj['versionGroupId'] = _ApiClient["default"].convertToType(data['versionGroupId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAllUnconfirmedTransactionsRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */


ListAllUnconfirmedTransactionsRIBS.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListAllUnconfirmedTransactionsRIBS.prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

ListAllUnconfirmedTransactionsRIBS.prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

ListAllUnconfirmedTransactionsRIBS.prototype['version'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVin>} vin
 */

ListAllUnconfirmedTransactionsRIBS.prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVout>} vout
 */

ListAllUnconfirmedTransactionsRIBS.prototype['vout'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECFee} fee
 */

ListAllUnconfirmedTransactionsRIBS.prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

ListAllUnconfirmedTransactionsRIBS.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */

ListAllUnconfirmedTransactionsRIBS.prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

ListAllUnconfirmedTransactionsRIBS.prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

ListAllUnconfirmedTransactionsRIBS.prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */

ListAllUnconfirmedTransactionsRIBS.prototype['transactionStatus'] = undefined;
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */

ListAllUnconfirmedTransactionsRIBS.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */

ListAllUnconfirmedTransactionsRIBS.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */

ListAllUnconfirmedTransactionsRIBS.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */

ListAllUnconfirmedTransactionsRIBS.prototype['joinSplitSig'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */

ListAllUnconfirmedTransactionsRIBS.prototype['overwintered'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplit>} vJoinSplit
 */

ListAllUnconfirmedTransactionsRIBS.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput>} vShieldedOutput
 */

ListAllUnconfirmedTransactionsRIBS.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend>} vShieldedSpend
 */

ListAllUnconfirmedTransactionsRIBS.prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */

ListAllUnconfirmedTransactionsRIBS.prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */

ListAllUnconfirmedTransactionsRIBS.prototype['versionGroupId'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSB interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListAllUnconfirmedTransactionsRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListAllUnconfirmedTransactionsRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */

_ListAllUnconfirmedTransactionsRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

_ListAllUnconfirmedTransactionsRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBVin>} vin
 */

_ListAllUnconfirmedTransactionsRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBVout>} vout
 */

_ListAllUnconfirmedTransactionsRIBSB["default"].prototype['vout'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSBC interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListAllUnconfirmedTransactionsRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListAllUnconfirmedTransactionsRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListAllUnconfirmedTransactionsRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVin>} vin
 */

_ListAllUnconfirmedTransactionsRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSBCVout>} vout
 */

_ListAllUnconfirmedTransactionsRIBSBC["default"].prototype['vout'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSL interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListAllUnconfirmedTransactionsRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListAllUnconfirmedTransactionsRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */

_ListAllUnconfirmedTransactionsRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListAllUnconfirmedTransactionsRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSLVin>} vin
 */

_ListAllUnconfirmedTransactionsRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVout>} vout
 */

_ListAllUnconfirmedTransactionsRIBSL["default"].prototype['vout'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSD interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListAllUnconfirmedTransactionsRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListAllUnconfirmedTransactionsRIBSD["default"].prototype['size'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

_ListAllUnconfirmedTransactionsRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSDVin>} vin
 */

_ListAllUnconfirmedTransactionsRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVout>} vout
 */

_ListAllUnconfirmedTransactionsRIBSD["default"].prototype['vout'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSD2 interface:

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListAllUnconfirmedTransactionsRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListAllUnconfirmedTransactionsRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */

_ListAllUnconfirmedTransactionsRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListAllUnconfirmedTransactionsRIBSD2Vin>} vin
 */

_ListAllUnconfirmedTransactionsRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2Vout>} vout
 */

_ListAllUnconfirmedTransactionsRIBSD2["default"].prototype['vout'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSE interface:

/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSEFee} fee
 */

_ListAllUnconfirmedTransactionsRIBSE["default"].prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListAllUnconfirmedTransactionsRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSEGasPrice} gasPrice
 */

_ListAllUnconfirmedTransactionsRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListAllUnconfirmedTransactionsRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListAllUnconfirmedTransactionsRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */

_ListAllUnconfirmedTransactionsRIBSE["default"].prototype['transactionStatus'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSEC interface:

/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECFee} fee
 */

_ListAllUnconfirmedTransactionsRIBSEC["default"].prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListAllUnconfirmedTransactionsRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListAllUnconfirmedTransactionsRIBSECGasPrice} gasPrice
 */

_ListAllUnconfirmedTransactionsRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListAllUnconfirmedTransactionsRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */

_ListAllUnconfirmedTransactionsRIBSEC["default"].prototype['transactionStatus'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSZ interface:

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplit>} vJoinSplit
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput>} vShieldedOutput
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpend>} vShieldedSpend
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVin>} vin
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVout>} vout
 */

_ListAllUnconfirmedTransactionsRIBSZ["default"].prototype['vout'] = undefined; // Implement ListAllUnconfirmedTransactionsRIBSBSC interface:

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */

_ListAllUnconfirmedTransactionsRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */

_ListAllUnconfirmedTransactionsRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */

_ListAllUnconfirmedTransactionsRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

_ListAllUnconfirmedTransactionsRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Defines the transaction status.
 * @member {String} transactionStatus
 */

_ListAllUnconfirmedTransactionsRIBSBSC["default"].prototype['transactionStatus'] = undefined;
var _default = ListAllUnconfirmedTransactionsRIBS;
exports["default"] = _default;