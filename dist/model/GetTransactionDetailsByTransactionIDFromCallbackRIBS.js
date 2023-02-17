"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSB = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSB"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSBC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSBC"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSD = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSD"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSD2 = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSD2"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSE = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSE"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSEC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSEC"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSL = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSL"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBST = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBST"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSX = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSX"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIOffer = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIOffer"));
var _GetXRPRippleTransactionDetailsByTransactionIDRIReceive = _interopRequireDefault(require("./GetXRPRippleTransactionDetailsByTransactionIDRIReceive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBS model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBS
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSB
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSE
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBC
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSL
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSEC
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSX
   * @implements module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBST
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} 
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction.
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param vJoinSplit {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} String representation of the transaction value balance
   * @param versionGroupId {String} Represents the transaction version group ID
   * @param additionalData {String} Represents additional data that may be needed.
   * @param offer {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} 
   * @param receive {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} 
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param status {String} Defines the status of the transaction.
   * @param type {String} Defines the type of the transaction.
   * @param value {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} 
   * @param amount {String} Defines the amount of the transaction.
   * @param bandwidthUsed {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} 
   * @param energyUsed {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} 
   * @param hasInternalTransactions {Boolean} Defines if the transaction includes internal transactions (true) or not (false).
   * @param hasTokenTransfers {String} Defines if the transaction includes token transfers (true) or not (false).
   * @param input {String} Represents the transaction's input value.
   * @param recipients {String} Represents the recipient address.
   * @param senders {String} Represents the sender address.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId, additionalData, offer, receive, sequence, status, type, value, amount, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBS);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].initialize(this, gasLimit, gasPrice, gasUsed, nonce, transactionStatus);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].initialize(this, additionalData, offer, receive, sequence, status, type, value);
    _GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].initialize(this, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders, transactionStatus);
    GetTransactionDetailsByTransactionIDFromCallbackRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId, additionalData, offer, receive, sequence, status, type, value, amount, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId, additionalData, offer, receive, sequence, status, type, value, amount, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers, input, recipients, senders) {
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
      obj['additionalData'] = additionalData;
      obj['offer'] = offer;
      obj['receive'] = receive;
      obj['sequence'] = sequence;
      obj['status'] = status;
      obj['type'] = type;
      obj['value'] = value;
      obj['amount'] = amount;
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['energyUsed'] = energyUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
      obj['input'] = input;
      obj['recipients'] = recipients;
      obj['senders'] = senders;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBS} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBS();
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].constructFromObject(data, obj);
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDRIBSZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner["default"]]);
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'Number');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice["default"].constructFromObject(data['gasPrice']);
        }
        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'Number');
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
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner["default"]]);
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
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('destinationTag')) {
          obj['destinationTag'] = _ApiClient["default"].convertToType(data['destinationTag'], 'Number');
        }
        if (data.hasOwnProperty('offer')) {
          obj['offer'] = _GetXRPRippleTransactionDetailsByTransactionIDRIOffer["default"].constructFromObject(data['offer']);
        }
        if (data.hasOwnProperty('receive')) {
          obj['receive'] = _GetXRPRippleTransactionDetailsByTransactionIDRIReceive["default"].constructFromObject(data['receive']);
        }
        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue["default"].constructFromObject(data['value']);
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('bandwidthUsed')) {
          obj['bandwidthUsed'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed["default"].constructFromObject(data['bandwidthUsed']);
        }
        if (data.hasOwnProperty('energyUsed')) {
          obj['energyUsed'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed["default"].constructFromObject(data['energyUsed']);
        }
        if (data.hasOwnProperty('hasInternalTransactions')) {
          obj['hasInternalTransactions'] = _ApiClient["default"].convertToType(data['hasInternalTransactions'], 'Boolean');
        }
        if (data.hasOwnProperty('hasTokenTransfers')) {
          obj['hasTokenTransfers'] = _ApiClient["default"].convertToType(data['hasTokenTransfers'], 'String');
        }
        if (data.hasOwnProperty('input')) {
          obj['input'] = _ApiClient["default"].convertToType(data['input'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], 'String');
        }
        if (data.hasOwnProperty('senders')) {
          obj['senders'] = _ApiClient["default"].convertToType(data['senders'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['contract'] = undefined;

/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['versionGroupId'] = undefined;

/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['additionalData'] = undefined;

/**
 * Defines the destination tag value.
 * @member {Number} destinationTag
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['destinationTag'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['offer'] = undefined;

/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['receive'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['sequence'] = undefined;

/**
 * Defines the status of the transaction.
 * @member {String} status
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['status'] = undefined;

/**
 * Defines the type of the transaction.
 * @member {String} type
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['type'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} value
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['value'] = undefined;

/**
 * Defines the amount of the transaction.
 * @member {String} amount
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['amount'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} bandwidthUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} energyUsed
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['energyUsed'] = undefined;

/**
 * Defines if the transaction includes internal transactions (true) or not (false).
 * @member {Boolean} hasInternalTransactions
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * Defines if the transaction includes token transfers (true) or not (false).
 * @member {String} hasTokenTransfers
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['hasTokenTransfers'] = undefined;

/**
 * Represents the transaction's input value.
 * @member {String} input
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['input'] = undefined;

/**
 * Represents the recipient address.
 * @member {String} recipients
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['recipients'] = undefined;

/**
 * Represents the sender address.
 * @member {String} senders
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBS.prototype['senders'] = undefined;

// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSB["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSBC interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSBCVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBC["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSLVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSL["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSDVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSDVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VinInner>} vin
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSD2VoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSD2["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSEC["default"].prototype['nonce'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC interface:
/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSBSC["default"].prototype['nonce'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 interface:
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].prototype['gasPrice'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].prototype['gasUsed'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2["default"].prototype['transactionStatus'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBSX interface:
/**
 * Represents additional data that may be needed.
 * @member {String} additionalData
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['additionalData'] = undefined;
/**
 * Defines the destination tag value.
 * @member {Number} destinationTag
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['destinationTag'] = undefined;
/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIOffer} offer
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['offer'] = undefined;
/**
 * @member {module:model/GetXRPRippleTransactionDetailsByTransactionIDRIReceive} receive
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['receive'] = undefined;
/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['sequence'] = undefined;
/**
 * Defines the status of the transaction.
 * @member {String} status
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['status'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} type
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['type'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSXValue} value
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBSX["default"].prototype['value'] = undefined;
// Implement GetTransactionDetailsByTransactionIDFromCallbackRIBST interface:
/**
 * Defines the amount of the transaction.
 * @member {String} amount
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['amount'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTBandwidthUsed} bandwidthUsed
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['bandwidthUsed'] = undefined;
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['contract'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSTEnergyUsed} energyUsed
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['energyUsed'] = undefined;
/**
 * Defines if the transaction includes internal transactions (true) or not (false).
 * @member {Boolean} hasInternalTransactions
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['hasInternalTransactions'] = undefined;
/**
 * Defines if the transaction includes token transfers (true) or not (false).
 * @member {String} hasTokenTransfers
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['hasTokenTransfers'] = undefined;
/**
 * Represents the transaction's input value.
 * @member {String} input
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['input'] = undefined;
/**
 * Represents the recipient address.
 * @member {String} recipients
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['recipients'] = undefined;
/**
 * Represents the sender address.
 * @member {String} senders
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['senders'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
_GetTransactionDetailsByTransactionIDFromCallbackRIBST["default"].prototype['transactionStatus'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBS;
exports["default"] = _default;