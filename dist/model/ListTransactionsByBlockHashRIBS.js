"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListTransactionsByBlockHashRIBSB = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSB"));
var _ListTransactionsByBlockHashRIBSBC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBC"));
var _ListTransactionsByBlockHashRIBSBSC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBSC"));
var _ListTransactionsByBlockHashRIBSBSCGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSBSCGasPrice"));
var _ListTransactionsByBlockHashRIBSD = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD"));
var _ListTransactionsByBlockHashRIBSD2 = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSD2"));
var _ListTransactionsByBlockHashRIBSE = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSE"));
var _ListTransactionsByBlockHashRIBSEC = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSEC"));
var _ListTransactionsByBlockHashRIBSL = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSL"));
var _ListTransactionsByBlockHashRIBSZ = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZ"));
var _ListTransactionsByBlockHashRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVJoinSplitInner"));
var _ListTransactionsByBlockHashRIBSZVinInner = _interopRequireDefault(require("./ListTransactionsByBlockHashRIBSZVinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHashRIBS model module.
 * @module model/ListTransactionsByBlockHashRIBS
 * @version 1.13.0
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
   * @implements module:model/ListTransactionsByBlockHashRIBSBSC
   * @implements module:model/ListTransactionsByBlockHashRIBSZ
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Numeric representation of the transaction Represents the transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHashRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByBlockHashRIBSBSCGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param vJoinSplit {Array.<module:model/ListTransactionsByBlockHashRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} Defines the transaction value balance.
   * @param versionGroupId {String} Represents the transaction version group ID.
   */
  function ListTransactionsByBlockHashRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, ListTransactionsByBlockHashRIBS);
    _ListTransactionsByBlockHashRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListTransactionsByBlockHashRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);
    _ListTransactionsByBlockHashRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListTransactionsByBlockHashRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _ListTransactionsByBlockHashRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _ListTransactionsByBlockHashRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListTransactionsByBlockHashRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListTransactionsByBlockHashRIBSBSC["default"].initialize(this, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListTransactionsByBlockHashRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    ListTransactionsByBlockHashRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHashRIBS, null, [{
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
        _ListTransactionsByBlockHashRIBSBSC["default"].constructFromObject(data, obj);
        _ListTransactionsByBlockHashRIBSZ["default"].constructFromObject(data, obj);
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHashRIBSZVinInner["default"]]);
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
          obj['gasPrice'] = _ListTransactionsByBlockHashRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
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
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_ListTransactionsByBlockHashRIBSZVJoinSplitInner["default"]]);
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
 * Numeric representation of the transaction Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHashRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVinInner>} vin
 */
ListTransactionsByBlockHashRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListTransactionsByBlockHashRIBS.prototype['vout'] = undefined;

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
 * @member {module:model/ListTransactionsByBlockHashRIBSBSCGasPrice} gasPrice
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
 * @member {Number} nonce
 */
ListTransactionsByBlockHashRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHashRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHashRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHashRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHashRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHashRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHashRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHashRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHashRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHashRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHashRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHashRIBS.prototype['versionGroupId'] = undefined;

// Implement ListTransactionsByBlockHashRIBSB interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVinInner>} vin
 */
_ListTransactionsByBlockHashRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVoutInner>} vout
 */
_ListTransactionsByBlockHashRIBSB["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashRIBSBC interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVinInner>} vin
 */
_ListTransactionsByBlockHashRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVoutInner>} vout
 */
_ListTransactionsByBlockHashRIBSBC["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashRIBSL interface:
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
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_ListTransactionsByBlockHashRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_ListTransactionsByBlockHashRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSLVinInner>} vin
 */
_ListTransactionsByBlockHashRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSLVoutInner>} vout
 */
_ListTransactionsByBlockHashRIBSL["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashRIBSD interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVinInner>} vin
 */
_ListTransactionsByBlockHashRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVoutInner>} vout
 */
_ListTransactionsByBlockHashRIBSD["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashRIBSD2 interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSD2VinInner>} vin
 */
_ListTransactionsByBlockHashRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSD2VoutInner>} vout
 */
_ListTransactionsByBlockHashRIBSD2["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHashRIBSE interface:
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
_ListTransactionsByBlockHashRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHashRIBSEC interface:
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
// Implement ListTransactionsByBlockHashRIBSBSC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHashRIBSBSCGasPrice} gasPrice
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
_ListTransactionsByBlockHashRIBSBSC["default"].prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHashRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVJoinSplitInner>} vJoinSplit
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Numeric representation of the transaction Represents the transaction version number.
 * @member {Number} version
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSZVinInner>} vin
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
_ListTransactionsByBlockHashRIBSZ["default"].prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHashRIBS;
exports["default"] = _default;