"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSCGasPrice"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetWalletTransactionDetailsByTransactionIDRIBSB = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSB"));
var _GetWalletTransactionDetailsByTransactionIDRIBSBC = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSBC"));
var _GetWalletTransactionDetailsByTransactionIDRIBSBSC = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSBSC"));
var _GetWalletTransactionDetailsByTransactionIDRIBSD = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSD"));
var _GetWalletTransactionDetailsByTransactionIDRIBSD2 = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSD2"));
var _GetWalletTransactionDetailsByTransactionIDRIBSE = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSE"));
var _GetWalletTransactionDetailsByTransactionIDRIBSEC = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSEC"));
var _GetWalletTransactionDetailsByTransactionIDRIBSL = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSL"));
var _GetWalletTransactionDetailsByTransactionIDRIBST = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBST"));
var _GetWalletTransactionDetailsByTransactionIDRIBSZ = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSZ"));
var _GetWalletTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetWalletTransactionDetailsByTransactionIDRIBSZVinInner"));
var _ListTransactionsByBlockHeightRIBSZVoutInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetWalletTransactionDetailsByTransactionIDRIBS model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIBS
 * @version 1.13.0
 */
var GetWalletTransactionDetailsByTransactionIDRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIBS</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIBS
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSB
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSE
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSL
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSBC
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSEC
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSD
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSZ
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBSBSC
   * @implements module:model/GetWalletTransactionDetailsByTransactionIDRIBST
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param contract {String} Numeric representation of the transaction contract
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} 
   * @param gasUsed {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param valueBalance {String} String representation of the transaction value balance
   * @param versionGroupId {String} Represents the transaction version group ID.
   * @param amount {String} String representation of the amount value
   * @param bandwidthUsed {String} Numeric representation of the transaction used bandwidth
   * @param energyUsed {String} String representation of the transaction used energy
   * @param hasInternalTransactions {Boolean} 
   * @param hasTokenTransfers {Boolean} 
   * @param input {String} Numeric representation of the transaction input
   * @param status {String} String representation of the transaction status
   */
  function GetWalletTransactionDetailsByTransactionIDRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, valueBalance, versionGroupId, amount, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status) {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIBS);
    _GetWalletTransactionDetailsByTransactionIDRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _GetWalletTransactionDetailsByTransactionIDRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _GetWalletTransactionDetailsByTransactionIDRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);
    _GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
    _GetWalletTransactionDetailsByTransactionIDRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, valueBalance, version, versionGroupId, vin, vout);
    _GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
    _GetWalletTransactionDetailsByTransactionIDRIBST["default"].initialize(this, amount, bandwidthUsed, contract, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status);
    GetWalletTransactionDetailsByTransactionIDRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, valueBalance, versionGroupId, amount, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, valueBalance, versionGroupId, amount, bandwidthUsed, energyUsed, hasInternalTransactions, hasTokenTransfers, input, status) {
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
      obj['valueBalance'] = valueBalance;
      obj['versionGroupId'] = versionGroupId;
      obj['amount'] = amount;
      obj['bandwidthUsed'] = bandwidthUsed;
      obj['energyUsed'] = energyUsed;
      obj['hasInternalTransactions'] = hasInternalTransactions;
      obj['hasTokenTransfers'] = hasTokenTransfers;
      obj['input'] = input;
      obj['status'] = status;
    }

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIBS} The populated <code>GetWalletTransactionDetailsByTransactionIDRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIBS();
        _GetWalletTransactionDetailsByTransactionIDRIBSB["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSE["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSL["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSD["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].constructFromObject(data, obj);
        _GetWalletTransactionDetailsByTransactionIDRIBST["default"].constructFromObject(data, obj);
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetWalletTransactionDetailsByTransactionIDRIBSZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHeightRIBSZVoutInner["default"]]);
        }
        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
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
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
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
        if (data.hasOwnProperty('input')) {
          obj['input'] = _ApiClient["default"].convertToType(data['input'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRIBS;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vout'] = undefined;

/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['versionGroupId'] = undefined;

/**
 * String representation of the amount value
 * @member {String} amount
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['amount'] = undefined;

/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['bandwidthUsed'] = undefined;

/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['energyUsed'] = undefined;

/**
 * @member {Boolean} hasInternalTransactions
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['hasInternalTransactions'] = undefined;

/**
 * @member {Boolean} hasTokenTransfers
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['hasTokenTransfers'] = undefined;

/**
 * Numeric representation of the transaction input
 * @member {String} input
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['input'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} status
 */
GetWalletTransactionDetailsByTransactionIDRIBS.prototype['status'] = undefined;

// Implement GetWalletTransactionDetailsByTransactionIDRIBSB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetWalletTransactionDetailsByTransactionIDRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetWalletTransactionDetailsByTransactionIDRIBSB["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_GetWalletTransactionDetailsByTransactionIDRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetWalletTransactionDetailsByTransactionIDRIBSB["default"].prototype['version'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVinInner>} vin
 */
_GetWalletTransactionDetailsByTransactionIDRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSBVoutInner>} vout
 */
_GetWalletTransactionDetailsByTransactionIDRIBSB["default"].prototype['vout'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetWalletTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_GetWalletTransactionDetailsByTransactionIDRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetWalletTransactionDetailsByTransactionIDRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetWalletTransactionDetailsByTransactionIDRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_GetWalletTransactionDetailsByTransactionIDRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetWalletTransactionDetailsByTransactionIDRIBSL["default"].prototype['version'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSLVinInner>} vin
 */
_GetWalletTransactionDetailsByTransactionIDRIBSL["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
_GetWalletTransactionDetailsByTransactionIDRIBSL["default"].prototype['vout'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSBC interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].prototype['version'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSBCVinInner>} vin
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBC["default"].prototype['vout'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} gasPrice
 */
_GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetWalletTransactionDetailsByTransactionIDRIBSEC["default"].prototype['nonce'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD["default"].prototype['version'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSDVinInner>} vin
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD["default"].prototype['vout'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].prototype['version'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSD2VinInner>} vin
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VoutInner>} vout
 */
_GetWalletTransactionDetailsByTransactionIDRIBSD2["default"].prototype['vout'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetWalletTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
_GetWalletTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vout'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBSBSC interface:
/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetWalletTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['nonce'] = undefined;
// Implement GetWalletTransactionDetailsByTransactionIDRIBST interface:
/**
 * String representation of the amount value
 * @member {String} amount
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['amount'] = undefined;
/**
 * Numeric representation of the transaction used bandwidth
 * @member {String} bandwidthUsed
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['bandwidthUsed'] = undefined;
/**
 * Numeric representation of the transaction contract
 * @member {String} contract
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['contract'] = undefined;
/**
 * String representation of the transaction used energy
 * @member {String} energyUsed
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['energyUsed'] = undefined;
/**
 * @member {Boolean} hasInternalTransactions
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['hasInternalTransactions'] = undefined;
/**
 * @member {Boolean} hasTokenTransfers
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['hasTokenTransfers'] = undefined;
/**
 * Numeric representation of the transaction input
 * @member {String} input
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['input'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} status
 */
_GetWalletTransactionDetailsByTransactionIDRIBST["default"].prototype['status'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIBS;
exports["default"] = _default;