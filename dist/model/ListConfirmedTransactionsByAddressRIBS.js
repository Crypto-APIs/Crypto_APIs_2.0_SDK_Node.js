"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListConfirmedTransactionsByAddressRIBSB = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSB"));
var _ListConfirmedTransactionsByAddressRIBSBC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBC"));
var _ListConfirmedTransactionsByAddressRIBSBSC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSC"));
var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));
var _ListConfirmedTransactionsByAddressRIBSD = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD"));
var _ListConfirmedTransactionsByAddressRIBSD2 = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSD2"));
var _ListConfirmedTransactionsByAddressRIBSE = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSE"));
var _ListConfirmedTransactionsByAddressRIBSEC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSEC"));
var _ListConfirmedTransactionsByAddressRIBSL = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSL"));
var _ListConfirmedTransactionsByAddressRIBST = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBST"));
var _ListConfirmedTransactionsByAddressRIBSZ = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZ"));
var _ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner"));
var _ListConfirmedTransactionsByAddressRIBSZVinInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListConfirmedTransactionsByAddressRIBS model module.
 * @module model/ListConfirmedTransactionsByAddressRIBS
 * @version 1.13.0
 */
var ListConfirmedTransactionsByAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBS</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBS
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSB
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSBC
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSL
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSD
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSD2
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSEC
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSE
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSBSC
   * @implements module:model/ListConfirmedTransactionsByAddressRIBSZ
   * @implements module:model/ListConfirmedTransactionsByAddressRIBST
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param contract {String} Numeric representation of the transaction contract
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Numeric representation of the transaction input
   * @param internalTransactionsCount {Number} Representation of the internal transactions count
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param tokenTransfersCount {Number} Representation of the token transfers count
   * @param transactionStatus {String} Represents if the transaction is successfull or failed.
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param vJoinSplit {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} Defines the transaction value balance.
   * @param versionGroupId {String} Represents the transaction version group ID.
   * @param bandwidthUsed {String} Numeric representation of the transaction used bandwidth
   * @param energyUsed {String} String representation of the transaction used energy
   * @param hasInternalTransactions {Boolean} Defines if there are internal transactions (true) or not (false)
   * @param hasTokenTransfers {Boolean} Defines if there are  tokens transfers (true) or not (false)
   */
  function ListConfirmedTransactionsByAddressRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBS);
    _ListConfirmedTransactionsByAddressRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListConfirmedTransactionsByAddressRIBSBC["default"].initialize(this, locktime, size, version, vin);
    _ListConfirmedTransactionsByAddressRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListConfirmedTransactionsByAddressRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _ListConfirmedTransactionsByAddressRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _ListConfirmedTransactionsByAddressRIBSEC["default"].initialize(this, gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus);
    _ListConfirmedTransactionsByAddressRIBSE["default"].initialize(this, gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus);
    _ListConfirmedTransactionsByAddressRIBSBSC["default"].initialize(this, gasLimit, gasPrice, gasUsed, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus);
    _ListConfirmedTransactionsByAddressRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    _ListConfirmedTransactionsByAddressRIBST["default"].initialize(this, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, inputData, internalTransactionsCount, tokenTransfersCount, transactionStatus);
    ListConfirmedTransactionsByAddressRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, internalTransactionsCount, nonce, tokenTransfersCount, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers) {
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
      obj['internalTransactionsCount'] = internalTransactionsCount;
      obj['nonce'] = nonce;
      obj['tokenTransfersCount'] = tokenTransfersCount;
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
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['energyUsed'] = energyUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBS} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBS} The populated <code>ListConfirmedTransactionsByAddressRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBS();
        _ListConfirmedTransactionsByAddressRIBSB["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSBC["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSL["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSD["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSD2["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSEC["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSE["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSBSC["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBSZ["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressRIBST["default"].constructFromObject(data, obj);
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListConfirmedTransactionsByAddressRIBSZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSZVoutInner["default"]]);
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ListConfirmedTransactionsByAddressRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'String');
        }
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('internalTransactionsCount')) {
          obj['internalTransactionsCount'] = _ApiClient["default"].convertToType(data['internalTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
        if (data.hasOwnProperty('tokenTransfersCount')) {
          obj['tokenTransfersCount'] = _ApiClient["default"].convertToType(data['tokenTransfersCount'], 'Number');
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
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner["default"]]);
        }
        if (data.hasOwnProperty('vShieldedOutput')) {
          obj['vShieldedOutput'] = _ApiClient["default"].convertToType(data['vShieldedOutput'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner["default"]]);
        }
        if (data.hasOwnProperty('vShieldedSpend')) {
          obj['vShieldedSpend'] = _ApiClient["default"].convertToType(data['vShieldedSpend'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner["default"]]);
        }
        if (data.hasOwnProperty('valueBalance')) {
          obj['valueBalance'] = _ApiClient["default"].convertToType(data['valueBalance'], 'String');
        }
        if (data.hasOwnProperty('versionGroupId')) {
          obj['versionGroupId'] = _ApiClient["default"].convertToType(data['versionGroupId'], 'String');
        }
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _ApiClient["default"].convertToType(data['bandwidthUsed'], 'String');
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _ApiClient["default"].convertToType(data['energyUsed'], 'String');
        }
        if (data.hasOwnProperty('hasInternalTransactions')) {
          obj['hasInternalTransactions'] = _ApiClient["default"].convertToType(data['hasInternalTransactions'], 'Boolean');
        }
        if (data.hasOwnProperty('hasTokenTransfers')) {
          obj['hasTokenTransfers'] = _ApiClient["default"].convertToType(data['hasTokenTransfers'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return ListConfirmedTransactionsByAddressRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vout'] = undefined;

/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['gasUsed'] = undefined;

/**
 * Numeric representation of the transaction input
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressRIBS.prototype['inputData'] = undefined;

/**
 * Representation of the internal transactions count
 * @member {Number} internalTransactionsCount
 */
ListConfirmedTransactionsByAddressRIBS.prototype['internalTransactionsCount'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressRIBS.prototype['nonce'] = undefined;

/**
 * Representation of the token transfers count
 * @member {Number} tokenTransfersCount
 */
ListConfirmedTransactionsByAddressRIBS.prototype['tokenTransfersCount'] = undefined;

/**
 * Represents if the transaction is successfull or failed.
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListConfirmedTransactionsByAddressRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListConfirmedTransactionsByAddressRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListConfirmedTransactionsByAddressRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListConfirmedTransactionsByAddressRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListConfirmedTransactionsByAddressRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListConfirmedTransactionsByAddressRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListConfirmedTransactionsByAddressRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListConfirmedTransactionsByAddressRIBS.prototype['versionGroupId'] = undefined;

/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
ListConfirmedTransactionsByAddressRIBS.prototype['energyUsed'] = undefined;

/**
 * Defines if there are internal transactions (true) or not (false)
 * @member {Boolean} hasInternalTransactions
 */
ListConfirmedTransactionsByAddressRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if there are  tokens transfers (true) or not (false)
 * @member {Boolean} hasTokenTransfers
 */
ListConfirmedTransactionsByAddressRIBS.prototype['hasTokenTransfers'] = undefined;

// Implement ListConfirmedTransactionsByAddressRIBSB interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
_ListConfirmedTransactionsByAddressRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVinInner>} vin
 */
_ListConfirmedTransactionsByAddressRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressRIBSB["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSBC interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */
_ListConfirmedTransactionsByAddressRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressRIBSBC["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSL interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_ListConfirmedTransactionsByAddressRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSLVinInner>} vin
 */
_ListConfirmedTransactionsByAddressRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressRIBSL["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSD interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSDVinInner>} vin
 */
_ListConfirmedTransactionsByAddressRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressRIBSD["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSD2 interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2VinInner>} vin
 */
_ListConfirmedTransactionsByAddressRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInner>} vout
 */
_ListConfirmedTransactionsByAddressRIBSD2["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSECGasPrice} gasPrice
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the total internal transactions count.
 * @member {Number} internalTransactionsCount
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['internalTransactionsCount'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Represents the total token transfers count.
 * @member {Number} tokenTransfersCount
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['tokenTransfersCount'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressRIBSEC["default"].prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSEGasPrice} gasPrice
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the total internal transactions count.
 * @member {Number} internalTransactionsCount
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['internalTransactionsCount'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Represents the total token transfers count.
 * @member {Number} tokenTransfersCount
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['tokenTransfersCount'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSBSC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the total internal transactions count.
 * @member {Number} internalTransactionsCount
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['internalTransactionsCount'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Represents the total token transfers count.
 * @member {Number} tokenTransfersCount
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['tokenTransfersCount'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressRIBSBSC["default"].prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressRIBSZ["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressRIBST interface:
/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['bandwidthUsed'] = undefined;
/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['contract'] = undefined;
/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['energyUsed'] = undefined;
/**
 * Defines if there are internal transactions (true) or not (false)
 * @member {Boolean} hasInternalTransactions
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['hasInternalTransactions'] = undefined;
/**
 * Defines if there are  tokens transfers (true) or not (false)
 * @member {Boolean} hasTokenTransfers
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['hasTokenTransfers'] = undefined;
/**
 * Numeric representation of the transaction input
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['inputData'] = undefined;
/**
 * Representation of the internal transactions count
 * @member {Number} internalTransactionsCount
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['internalTransactionsCount'] = undefined;
/**
 * Representation of the token transfers count
 * @member {Number} tokenTransfersCount
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['tokenTransfersCount'] = undefined;
/**
 * Represents if the transaction is successfull or failed.
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressRIBST["default"].prototype['transactionStatus'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBS;
exports["default"] = _default;