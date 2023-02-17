"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSZ model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ
 * @version 1.13.0
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBSZ = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code>.
   * Zcash
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vJoinSplit {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} String representation of the transaction value balance
   * @param version {Number} Defines the version of the transaction.
   * @param versionGroupId {String} Represents the transaction version group ID
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} Object Array representation of transaction outputs
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBSZ(bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ);
    GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBSZ, null, [{
    key: "initialize",
    value: function initialize(obj, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) {
      obj['bindingSig'] = bindingSig;
      obj['expiryHeight'] = expiryHeight;
      obj['joinSplitPubKey'] = joinSplitPubKey;
      obj['joinSplitSig'] = joinSplitSig;
      obj['locktime'] = locktime;
      obj['overwintered'] = overwintered;
      obj['size'] = size;
      obj['vJoinSplit'] = vJoinSplit;
      obj['vShieldedOutput'] = vShieldedOutput;
      obj['vShieldedSpend'] = vShieldedSpend;
      obj['valueBalance'] = valueBalance;
      obj['version'] = version;
      obj['versionGroupId'] = versionGroupId;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSZ();
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
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
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
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('versionGroupId')) {
          obj['versionGroupId'] = _ApiClient["default"].convertToType(data['versionGroupId'], 'String');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDRIBSZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return GetTransactionDetailsByTransactionIDFromCallbackRIBSZ;
}();
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['joinSplitSig'] = undefined;

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['locktime'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['overwintered'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['size'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['valueBalance'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['version'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['versionGroupId'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDFromCallbackRIBSZ.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBSZ;
exports["default"] = _default;