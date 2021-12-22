"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput"));

var _ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVJoinSplit = _interopRequireDefault(require("./ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVJoinSplit"));

var _ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend = _interopRequireDefault(require("./ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListUnspentTransactionOutputsByAddressRIBlockchainSpecific model module.
 * @module model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecific
 * @version 1.4.0
 */
var ListUnspentTransactionOutputsByAddressRIBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnspentTransactionOutputsByAddressRIBlockchainSpecific</code>.
   * @alias module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecific
   * @param vSize {Number} Represents the virtual size of this transaction
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param vShieldedSpend {Array.<module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} Defines the transaction value balance.
   * @param versionGroupId {String} Represents the transaction version group ID.
   */
  function ListUnspentTransactionOutputsByAddressRIBlockchainSpecific(vSize, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vShieldedSpend, valueBalance, versionGroupId) {
    _classCallCheck(this, ListUnspentTransactionOutputsByAddressRIBlockchainSpecific);

    ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.initialize(this, vSize, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vShieldedSpend, valueBalance, versionGroupId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnspentTransactionOutputsByAddressRIBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, vSize, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, overwintered, vShieldedSpend, valueBalance, versionGroupId) {
      obj['vSize'] = vSize;
      obj['bindingSig'] = bindingSig;
      obj['expiryHeight'] = expiryHeight;
      obj['joinSplitPubKey'] = joinSplitPubKey;
      obj['joinSplitSig'] = joinSplitSig;
      obj['overwintered'] = overwintered;
      obj['vShieldedSpend'] = vShieldedSpend;
      obj['valueBalance'] = valueBalance;
      obj['versionGroupId'] = versionGroupId;
    }
    /**
     * Constructs a <code>ListUnspentTransactionOutputsByAddressRIBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecific} The populated <code>ListUnspentTransactionOutputsByAddressRIBlockchainSpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnspentTransactionOutputsByAddressRIBlockchainSpecific();

        if (data.hasOwnProperty('vSize')) {
          obj['vSize'] = _ApiClient["default"].convertToType(data['vSize'], 'Number');
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
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVJoinSplit["default"]]);
        }

        if (data.hasOwnProperty('vShieldedOutput')) {
          obj['vShieldedOutput'] = _ApiClient["default"].convertToType(data['vShieldedOutput'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput["default"]]);
        }

        if (data.hasOwnProperty('vShieldedSpend')) {
          obj['vShieldedSpend'] = _ApiClient["default"].convertToType(data['vShieldedSpend'], [_ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend["default"]]);
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

  return ListUnspentTransactionOutputsByAddressRIBlockchainSpecific;
}();
/**
 * Represents the virtual size of this transaction
 * @member {Number} vSize
 */


ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['vSize'] = undefined;
/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['bindingSig'] = undefined;
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['expiryHeight'] = undefined;
/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['joinSplitPubKey'] = undefined;
/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['joinSplitSig'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['overwintered'] = undefined;
/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVJoinSplit>} vJoinSplit
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['vJoinSplit'] = undefined;
/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutput>} vShieldedOutput
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['vShieldedOutput'] = undefined;
/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/ListUnspentTransactionOutputsByAddressRIBlockchainSpecificVShieldedSpend>} vShieldedSpend
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['vShieldedSpend'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */

ListUnspentTransactionOutputsByAddressRIBlockchainSpecific.prototype['versionGroupId'] = undefined;
var _default = ListUnspentTransactionOutputsByAddressRIBlockchainSpecific;
exports["default"] = _default;