"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _ListTransactionsByBlockHeightRIBSB = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSB"));
var _ListTransactionsByBlockHeightRIBSBC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBC"));
var _ListTransactionsByBlockHeightRIBSBSC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBSC"));
var _ListTransactionsByBlockHeightRIBSBSCGasPrice = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSBSCGasPrice"));
var _ListTransactionsByBlockHeightRIBSD = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSD"));
var _ListTransactionsByBlockHeightRIBSD2 = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSD2"));
var _ListTransactionsByBlockHeightRIBSE = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSE"));
var _ListTransactionsByBlockHeightRIBSEC = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSEC"));
var _ListTransactionsByBlockHeightRIBSL = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSL"));
var _ListTransactionsByBlockHeightRIBSZ = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZ"));
var _ListTransactionsByBlockHeightRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVJoinSplitInner"));
var _ListTransactionsByBlockHeightRIBSZVShieldedOutputInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVShieldedOutputInner"));
var _ListTransactionsByBlockHeightRIBSZVinInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVinInner"));
var _ListTransactionsByBlockHeightRIBSZVoutInner = _interopRequireDefault(require("./ListTransactionsByBlockHeightRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHeightRIBS model module.
 * @module model/ListTransactionsByBlockHeightRIBS
 * @version 1.13.0
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
   * @implements module:model/ListTransactionsByBlockHeightRIBSBSC
   * @implements module:model/ListTransactionsByBlockHeightRIBSZ
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param contract {String} Represents the specific transaction contract.
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} 
   * @param gasUsed {String} Represents the exact unit of gas that was used for the transaction.
   * @param inputData {String} Represents additional information that is required for the transaction.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param vJoinSplit {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} Defines the transaction value balance.
   * @param versionGroupId {String} Represents the transaction version group ID.
   */
  function ListTransactionsByBlockHeightRIBS(locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBS);
    _ListTransactionsByBlockHeightRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListTransactionsByBlockHeightRIBSE["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListTransactionsByBlockHeightRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _ListTransactionsByBlockHeightRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _ListTransactionsByBlockHeightRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListTransactionsByBlockHeightRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);
    _ListTransactionsByBlockHeightRIBSEC["default"].initialize(this, contract, gasLimit, gasPrice, gasUsed, inputData, nonce);
    _ListTransactionsByBlockHeightRIBSBSC["default"].initialize(this, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus);
    _ListTransactionsByBlockHeightRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    ListTransactionsByBlockHeightRIBS.initialize(this, locktime, size, vSize, version, vin, vout, contract, gasLimit, gasPrice, gasUsed, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHeightRIBS, null, [{
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
        _ListTransactionsByBlockHeightRIBSBSC["default"].constructFromObject(data, obj);
        _ListTransactionsByBlockHeightRIBSZ["default"].constructFromObject(data, obj);
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHeightRIBSZVinInner["default"]]);
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
          obj['gasPrice'] = _ListTransactionsByBlockHeightRIBSBSCGasPrice["default"].constructFromObject(data['gasPrice']);
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
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_ListTransactionsByBlockHeightRIBSZVJoinSplitInner["default"]]);
        }
        if (data.hasOwnProperty('vShieldedOutput')) {
          obj['vShieldedOutput'] = _ApiClient["default"].convertToType(data['vShieldedOutput'], [_ListTransactionsByBlockHeightRIBSZVShieldedOutputInner["default"]]);
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
 * Represents the transaction version number.
 * @member {Number} version
 */
ListTransactionsByBlockHeightRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} vin
 */
ListTransactionsByBlockHeightRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
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
 * @member {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} gasPrice
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
 * @member {Number} nonce
 */
ListTransactionsByBlockHeightRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
ListTransactionsByBlockHeightRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListTransactionsByBlockHeightRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListTransactionsByBlockHeightRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListTransactionsByBlockHeightRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListTransactionsByBlockHeightRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListTransactionsByBlockHeightRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} vJoinSplit
 */
ListTransactionsByBlockHeightRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListTransactionsByBlockHeightRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListTransactionsByBlockHeightRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListTransactionsByBlockHeightRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListTransactionsByBlockHeightRIBS.prototype['versionGroupId'] = undefined;

// Implement ListTransactionsByBlockHeightRIBSB interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBVinInner>} vin
 */
_ListTransactionsByBlockHeightRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSBVoutInner>} vout
 */
_ListTransactionsByBlockHeightRIBSB["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSE interface:
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
_ListTransactionsByBlockHeightRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSD interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVinInner>} vin
 */
_ListTransactionsByBlockHeightRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSDVoutInner>} vout
 */
_ListTransactionsByBlockHeightRIBSD["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSD2 interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSD2VinInner>} vin
 */
_ListTransactionsByBlockHeightRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSDVoutInner>} vout
 */
_ListTransactionsByBlockHeightRIBSD2["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSL interface:
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
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_ListTransactionsByBlockHeightRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_ListTransactionsByBlockHeightRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVinInner>} vin
 */
_ListTransactionsByBlockHeightRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSLVoutInner>} vout
 */
_ListTransactionsByBlockHeightRIBSL["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSBC interface:
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
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVinInner>} vin
 */
_ListTransactionsByBlockHeightRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHashRIBSBCVoutInner>} vout
 */
_ListTransactionsByBlockHeightRIBSBC["default"].prototype['vout'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSEC interface:
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
// Implement ListTransactionsByBlockHeightRIBSBSC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListTransactionsByBlockHeightRIBSBSCGasPrice} gasPrice
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction
 * @member {String} transactionStatus
 */
_ListTransactionsByBlockHeightRIBSBSC["default"].prototype['transactionStatus'] = undefined;
// Implement ListTransactionsByBlockHeightRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVJoinSplitInner>} vJoinSplit
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVinInner>} vin
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/ListTransactionsByBlockHeightRIBSZVoutInner>} vout
 */
_ListTransactionsByBlockHeightRIBSZ["default"].prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHeightRIBS;
exports["default"] = _default;