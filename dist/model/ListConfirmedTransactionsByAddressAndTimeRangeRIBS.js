"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSB = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSB"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSD"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2 = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSE = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSE"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSL = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSL"));
var _ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ"));
var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));
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
 * The ListConfirmedTransactionsByAddressAndTimeRangeRIBS model module.
 * @module model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS
 * @version 1.13.0
 */
var ListConfirmedTransactionsByAddressAndTimeRangeRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBS</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSB
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSL
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSE
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC
   * @implements module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} String representation of the transaction status
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
   */
  function ListConfirmedTransactionsByAddressAndTimeRangeRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressAndTimeRangeRIBS);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].initialize(this, locktime, size, version, vin);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].initialize(this, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    ListConfirmedTransactionsByAddressAndTimeRangeRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListConfirmedTransactionsByAddressAndTimeRangeRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
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
    }

    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressAndTimeRangeRIBS} The populated <code>ListConfirmedTransactionsByAddressAndTimeRangeRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressAndTimeRangeRIBS();
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].constructFromObject(data, obj);
        _ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].constructFromObject(data, obj);
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
      }
      return obj;
    }
  }]);
  return ListConfirmedTransactionsByAddressAndTimeRangeRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListConfirmedTransactionsByAddressAndTimeRangeRIBS.prototype['versionGroupId'] = undefined;

// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSB interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVinInner>} vin
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSB["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBC["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSL interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSLVinInner>} vin
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSL["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSD interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSDVinInner>} vin
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2 interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2VinInner>} vin
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSD2VoutInner>} vout
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSD2["default"].prototype['vout'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSECGasPrice} gasPrice
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSEC["default"].prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSEGasPrice} gasPrice
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSBSC["default"].prototype['transactionStatus'] = undefined;
// Implement ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVinInner>} vin
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
_ListConfirmedTransactionsByAddressAndTimeRangeRIBSZ["default"].prototype['vout'] = undefined;
var _default = ListConfirmedTransactionsByAddressAndTimeRangeRIBS;
exports["default"] = _default;