"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSB = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSB"));
var _GetTransactionDetailsByTransactionIDRIBSBC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBC"));
var _GetTransactionDetailsByTransactionIDRIBSBSC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSC"));
var _GetTransactionDetailsByTransactionIDRIBSBSCGasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSBSCGasPrice"));
var _GetTransactionDetailsByTransactionIDRIBSD = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSD"));
var _GetTransactionDetailsByTransactionIDRIBSD2 = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSD2"));
var _GetTransactionDetailsByTransactionIDRIBSE = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSE"));
var _GetTransactionDetailsByTransactionIDRIBSEC = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSEC"));
var _GetTransactionDetailsByTransactionIDRIBSL = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSL"));
var _GetTransactionDetailsByTransactionIDRIBSZ = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZ"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDRIBS model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBS
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBS</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBS
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSB
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSBC
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSL
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSD
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSD2
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSE
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSEC
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSBSC
   * @implements module:model/GetTransactionDetailsByTransactionIDRIBSZ
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} 
   * @param gasUsed {String} Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
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
   * @param versionGroupId {String} Represents the transaction version group ID.
   */
  function GetTransactionDetailsByTransactionIDRIBS(locktime, size, vSize, version, vin, vout, gasLimit, gasPrice, gasUsed, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBS);
    _GetTransactionDetailsByTransactionIDRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _GetTransactionDetailsByTransactionIDRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);
    _GetTransactionDetailsByTransactionIDRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _GetTransactionDetailsByTransactionIDRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _GetTransactionDetailsByTransactionIDRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _GetTransactionDetailsByTransactionIDRIBSE["default"].initialize(this, gasLimit, gasPrice, gasUsed, nonce, transactionStatus);
    _GetTransactionDetailsByTransactionIDRIBSEC["default"].initialize(this, gasLimit, gasPrice, gasUsed, nonce);
    _GetTransactionDetailsByTransactionIDRIBSBSC["default"].initialize(this, gasLimit, gasPrice, gasUsed, nonce);
    _GetTransactionDetailsByTransactionIDRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    GetTransactionDetailsByTransactionIDRIBS.initialize(this, locktime, size, vSize, version, vin, vout, gasLimit, gasPrice, gasUsed, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, vSize, version, vin, vout, gasLimit, gasPrice, gasUsed, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
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
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBS} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBS} The populated <code>GetTransactionDetailsByTransactionIDRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBS();
        _GetTransactionDetailsByTransactionIDRIBSB["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSBC["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSL["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSD["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSD2["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSE["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSEC["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSBSC["default"].constructFromObject(data, obj);
        _GetTransactionDetailsByTransactionIDRIBSZ["default"].constructFromObject(data, obj);
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
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSZVoutInner["default"]]);
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
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vout'] = undefined;

/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['contract'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasPrice'] = undefined;

/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['gasUsed'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['nonce'] = undefined;

/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDRIBS.prototype['versionGroupId'] = undefined;

// Implement GetTransactionDetailsByTransactionIDRIBSB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDRIBSB["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_GetTransactionDetailsByTransactionIDRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDRIBSB["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSBC interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSBCVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDRIBSBC["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_GetTransactionDetailsByTransactionIDRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSLVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDRIBSL["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDRIBSD["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDRIBSD["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VinInner>} vin
 */
_GetTransactionDetailsByTransactionIDRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSD2VoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDRIBSD2["default"].prototype['vout'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSE interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSEGasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */
_GetTransactionDetailsByTransactionIDRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSEC interface:
/**
 * Represents the specific transaction contract.
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDRIBSEC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetTransactionDetailsByTransactionIDRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSECGasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the exact unit of gas that was used for the transaction.
 * @member {String} gasUsed
 */
_GetTransactionDetailsByTransactionIDRIBSEC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetTransactionDetailsByTransactionIDRIBSEC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDRIBSEC["default"].prototype['nonce'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSBSC interface:
/**
 * Represents the specific transaction contract
 * @member {String} contract
 */
_GetTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['contract'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_GetTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDRIBSBSCGasPrice} gasPrice
 */
_GetTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Defines the unit of the gas price amount, e.g. BTC, ETH, XRP.
 * @member {String} gasUsed
 */
_GetTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['gasUsed'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_GetTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_GetTransactionDetailsByTransactionIDRIBSBSC["default"].prototype['nonce'] = undefined;
// Implement GetTransactionDetailsByTransactionIDRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
_GetTransactionDetailsByTransactionIDRIBSZ["default"].prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBS;
exports["default"] = _default;