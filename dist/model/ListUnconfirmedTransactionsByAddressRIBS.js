"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
var _ListConfirmedTransactionsByAddressRIBSBSCGasPrice = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSBSCGasPrice"));
var _ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner = _interopRequireDefault(require("./ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner"));
var _ListUnconfirmedTransactionsByAddressRIBSB = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSB"));
var _ListUnconfirmedTransactionsByAddressRIBSBC = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBC"));
var _ListUnconfirmedTransactionsByAddressRIBSBSC = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSBSC"));
var _ListUnconfirmedTransactionsByAddressRIBSD = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSD"));
var _ListUnconfirmedTransactionsByAddressRIBSD2 = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSD2"));
var _ListUnconfirmedTransactionsByAddressRIBSE = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSE"));
var _ListUnconfirmedTransactionsByAddressRIBSEC = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSEC"));
var _ListUnconfirmedTransactionsByAddressRIBSECFee = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSECFee"));
var _ListUnconfirmedTransactionsByAddressRIBSL = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSL"));
var _ListUnconfirmedTransactionsByAddressRIBSZ = _interopRequireDefault(require("./ListUnconfirmedTransactionsByAddressRIBSZ"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListUnconfirmedTransactionsByAddressRIBS model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBS
 * @version 1.13.0
 */
var ListUnconfirmedTransactionsByAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBS</code>.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBS
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSB
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSBC
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSL
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSD
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSD2
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSE
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSEC
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSZ
   * @implements module:model/ListUnconfirmedTransactionsByAddressRIBSBSC
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param size {Number} Represents the total size of this transaction.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Defines the version of the transaction.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
   * @param fee {module:model/ListUnconfirmedTransactionsByAddressRIBSECFee} 
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param gasPrice {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} 
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
  function ListUnconfirmedTransactionsByAddressRIBS(locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBS);
    _ListUnconfirmedTransactionsByAddressRIBSB["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListUnconfirmedTransactionsByAddressRIBSBC["default"].initialize(this, locktime, size, version, vin, vout);
    _ListUnconfirmedTransactionsByAddressRIBSL["default"].initialize(this, locktime, size, vSize, version, vin, vout);
    _ListUnconfirmedTransactionsByAddressRIBSD["default"].initialize(this, locktime, size, version, vin, vout);
    _ListUnconfirmedTransactionsByAddressRIBSD2["default"].initialize(this, locktime, size, version, vin, vout);
    _ListUnconfirmedTransactionsByAddressRIBSE["default"].initialize(this, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus);
    _ListUnconfirmedTransactionsByAddressRIBSEC["default"].initialize(this, fee, gasLimit, gasPrice, nonce, transactionStatus);
    _ListUnconfirmedTransactionsByAddressRIBSZ["default"].initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
    _ListUnconfirmedTransactionsByAddressRIBSBSC["default"].initialize(this, gasLimit, gasPrice, inputData, nonce, transactionStatus);
    ListUnconfirmedTransactionsByAddressRIBS.initialize(this, locktime, size, vSize, version, vin, vout, fee, gasLimit, gasPrice, inputData, nonce, transactionStatus, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, versionGroupId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListUnconfirmedTransactionsByAddressRIBS, null, [{
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
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBS} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBS} The populated <code>ListUnconfirmedTransactionsByAddressRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBS();
        _ListUnconfirmedTransactionsByAddressRIBSB["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSBC["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSL["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSD["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSD2["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSE["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSEC["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSZ["default"].constructFromObject(data, obj);
        _ListUnconfirmedTransactionsByAddressRIBSBSC["default"].constructFromObject(data, obj);
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
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ListUnconfirmedTransactionsByAddressRIBSECFee["default"].constructFromObject(data['fee']);
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
  return ListUnconfirmedTransactionsByAddressRIBS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['locktime'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['size'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vSize'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['version'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vout'] = undefined;

/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSECFee} fee
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['fee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['gasLimit'] = undefined;

/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['inputData'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['nonce'] = undefined;

/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['transactionStatus'] = undefined;

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['joinSplitSig'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['overwintered'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['vShieldedSpend'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
ListUnconfirmedTransactionsByAddressRIBS.prototype['versionGroupId'] = undefined;

// Implement ListUnconfirmedTransactionsByAddressRIBSB interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListUnconfirmedTransactionsByAddressRIBSB["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListUnconfirmedTransactionsByAddressRIBSB["default"].prototype['size'] = undefined;
/**
 * Defines the transaction's virtual size.
 * @member {Number} vSize
 */
_ListUnconfirmedTransactionsByAddressRIBSB["default"].prototype['vSize'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_ListUnconfirmedTransactionsByAddressRIBSB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBVinInner>} vin
 */
_ListUnconfirmedTransactionsByAddressRIBSB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBVoutInner>} vout
 */
_ListUnconfirmedTransactionsByAddressRIBSB["default"].prototype['vout'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSBC interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListUnconfirmedTransactionsByAddressRIBSBC["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListUnconfirmedTransactionsByAddressRIBSBC["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListUnconfirmedTransactionsByAddressRIBSBC["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBCVinInner>} vin
 */
_ListUnconfirmedTransactionsByAddressRIBSBC["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInner>} vout
 */
_ListUnconfirmedTransactionsByAddressRIBSBC["default"].prototype['vout'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSL interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListUnconfirmedTransactionsByAddressRIBSL["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListUnconfirmedTransactionsByAddressRIBSL["default"].prototype['size'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_ListUnconfirmedTransactionsByAddressRIBSL["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListUnconfirmedTransactionsByAddressRIBSL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSLVinInner>} vin
 */
_ListUnconfirmedTransactionsByAddressRIBSL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSLVoutInner>} vout
 */
_ListUnconfirmedTransactionsByAddressRIBSL["default"].prototype['vout'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSD interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListUnconfirmedTransactionsByAddressRIBSD["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListUnconfirmedTransactionsByAddressRIBSD["default"].prototype['size'] = undefined;
/**
 * Numeric representation of the transaction version
 * @member {Number} version
 */
_ListUnconfirmedTransactionsByAddressRIBSD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSDVinInner>} vin
 */
_ListUnconfirmedTransactionsByAddressRIBSD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSDVoutInner>} vout
 */
_ListUnconfirmedTransactionsByAddressRIBSD["default"].prototype['vout'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSD2 interface:
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListUnconfirmedTransactionsByAddressRIBSD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListUnconfirmedTransactionsByAddressRIBSD2["default"].prototype['size'] = undefined;
/**
 * Represents the transaction's version number.
 * @member {Number} version
 */
_ListUnconfirmedTransactionsByAddressRIBSD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSD2VinInner>} vin
 */
_ListUnconfirmedTransactionsByAddressRIBSD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListUnconfirmedTransactionsByAddressRIBSD2VoutInner>} vout
 */
_ListUnconfirmedTransactionsByAddressRIBSD2["default"].prototype['vout'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSE interface:
/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSEFee} fee
 */
_ListUnconfirmedTransactionsByAddressRIBSE["default"].prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListUnconfirmedTransactionsByAddressRIBSE["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSEGasPrice} gasPrice
 */
_ListUnconfirmedTransactionsByAddressRIBSE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListUnconfirmedTransactionsByAddressRIBSE["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListUnconfirmedTransactionsByAddressRIBSE["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListUnconfirmedTransactionsByAddressRIBSE["default"].prototype['transactionStatus'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSEC interface:
/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSECFee} fee
 */
_ListUnconfirmedTransactionsByAddressRIBSEC["default"].prototype['fee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListUnconfirmedTransactionsByAddressRIBSEC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListUnconfirmedTransactionsByAddressRIBSECGasPrice} gasPrice
 */
_ListUnconfirmedTransactionsByAddressRIBSEC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListUnconfirmedTransactionsByAddressRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListUnconfirmedTransactionsByAddressRIBSEC["default"].prototype['transactionStatus'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSZ interface:
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['joinSplitSig'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['overwintered'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['size'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner>} vJoinSplit
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['valueBalance'] = undefined;
/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['vin'] = undefined;
/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
_ListUnconfirmedTransactionsByAddressRIBSZ["default"].prototype['vout'] = undefined;
// Implement ListUnconfirmedTransactionsByAddressRIBSBSC interface:
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_ListUnconfirmedTransactionsByAddressRIBSBSC["default"].prototype['gasLimit'] = undefined;
/**
 * @member {module:model/ListConfirmedTransactionsByAddressRIBSBSCGasPrice} gasPrice
 */
_ListUnconfirmedTransactionsByAddressRIBSBSC["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_ListUnconfirmedTransactionsByAddressRIBSBSC["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_ListUnconfirmedTransactionsByAddressRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * String representation of the transaction status
 * @member {String} transactionStatus
 */
_ListUnconfirmedTransactionsByAddressRIBSBSC["default"].prototype['transactionStatus'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBS;
exports["default"] = _default;