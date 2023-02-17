"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISB = _interopRequireDefault(require("./DecodeRawTransactionHexRISB"));
var _DecodeRawTransactionHexRISB2 = _interopRequireDefault(require("./DecodeRawTransactionHexRISB2"));
var _DecodeRawTransactionHexRISB3 = _interopRequireDefault(require("./DecodeRawTransactionHexRISB22"));
var _DecodeRawTransactionHexRISD = _interopRequireDefault(require("./DecodeRawTransactionHexRISD"));
var _DecodeRawTransactionHexRISD2 = _interopRequireDefault(require("./DecodeRawTransactionHexRISD2"));
var _DecodeRawTransactionHexRISE = _interopRequireDefault(require("./DecodeRawTransactionHexRISE"));
var _DecodeRawTransactionHexRISE2 = _interopRequireDefault(require("./DecodeRawTransactionHexRISE2"));
var _DecodeRawTransactionHexRISL = _interopRequireDefault(require("./DecodeRawTransactionHexRISL"));
var _DecodeRawTransactionHexRISZ = _interopRequireDefault(require("./DecodeRawTransactionHexRISZ"));
var _DecodeRawTransactionHexRISZVinInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVinInner"));
var _DecodeRawTransactionHexRISZVoutInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVoutInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRIS model module.
 * @module model/DecodeRawTransactionHexRIS
 * @version 1.13.0
 */
var DecodeRawTransactionHexRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRIS</code>.
   * Represents the specific transaction data according to the blockchain
   * @alias module:model/DecodeRawTransactionHexRIS
   * @implements module:model/DecodeRawTransactionHexRISB
   * @implements module:model/DecodeRawTransactionHexRISB2
   * @implements module:model/DecodeRawTransactionHexRISD
   * @implements module:model/DecodeRawTransactionHexRISD2
   * @implements module:model/DecodeRawTransactionHexRISL
   * @implements module:model/DecodeRawTransactionHexRISE
   * @implements module:model/DecodeRawTransactionHexRISE2
   * @implements module:model/DecodeRawTransactionHexRISB22
   * @implements module:model/DecodeRawTransactionHexRISZ
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param vSize {Number} Represents the virtual size of this transaction.
   * @param version {Number} Represents the transaction version number.
   * @param vin {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} Represents the Inputs of the transaction
   * @param vout {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} Represents the Inputs of the transaction
   * @param gasLimit {String} Represents the amount of gas used by this specific transaction alone.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param type {Number} Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param saplinged {Boolean} Defines if the transaction includes sapling or not.
   * @param valueBalance {String} Defines the transaction value balance.
   * @param versionGroupId {String} Represents the transaction version group ID
   */
  function DecodeRawTransactionHexRIS(locktime, transactionHash, vSize, version, vin, vout, gasLimit, nonce, recipient, sender, type, expiryHeight, overwintered, saplinged, valueBalance, versionGroupId) {
    _classCallCheck(this, DecodeRawTransactionHexRIS);
    _DecodeRawTransactionHexRISB["default"].initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    _DecodeRawTransactionHexRISB2["default"].initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    _DecodeRawTransactionHexRISD["default"].initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    _DecodeRawTransactionHexRISD2["default"].initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    _DecodeRawTransactionHexRISL["default"].initialize(this, locktime, transactionHash, vSize, version, vin, vout);
    _DecodeRawTransactionHexRISE["default"].initialize(this, gasLimit, nonce, recipient, sender, type);
    _DecodeRawTransactionHexRISE2["default"].initialize(this, gasLimit, nonce, recipient, sender, type);
    _DecodeRawTransactionHexRISB3["default"].initialize(this, gasLimit, nonce, recipient, sender, type);
    _DecodeRawTransactionHexRISZ["default"].initialize(this, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout);
    DecodeRawTransactionHexRIS.initialize(this, locktime, transactionHash, vSize, version, vin, vout, gasLimit, nonce, recipient, sender, type, expiryHeight, overwintered, saplinged, valueBalance, versionGroupId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRIS, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, transactionHash, vSize, version, vin, vout, gasLimit, nonce, recipient, sender, type, expiryHeight, overwintered, saplinged, valueBalance, versionGroupId) {
      obj['locktime'] = locktime;
      obj['transactionHash'] = transactionHash;
      obj['vSize'] = vSize;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
      obj['gasLimit'] = gasLimit;
      obj['nonce'] = nonce;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['type'] = type;
      obj['expiryHeight'] = expiryHeight;
      obj['overwintered'] = overwintered;
      obj['saplinged'] = saplinged;
      obj['valueBalance'] = valueBalance;
      obj['versionGroupId'] = versionGroupId;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRIS} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRIS} The populated <code>DecodeRawTransactionHexRIS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRIS();
        _DecodeRawTransactionHexRISB["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISB2["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISD["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISD2["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISL["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISE["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISE2["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISB3["default"].constructFromObject(data, obj);
        _DecodeRawTransactionHexRISZ["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('vSize')) {
          obj['vSize'] = _ApiClient["default"].convertToType(data['vSize'], 'Number');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_DecodeRawTransactionHexRISZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_DecodeRawTransactionHexRISZVoutInner["default"]]);
        }
        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
        if (data.hasOwnProperty('approximateFee')) {
          obj['approximateFee'] = _ApiClient["default"].convertToType(data['approximateFee'], 'String');
        }
        if (data.hasOwnProperty('approximateMinimumRequiredFee')) {
          obj['approximateMinimumRequiredFee'] = _ApiClient["default"].convertToType(data['approximateMinimumRequiredFee'], 'String');
        }
        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'String');
        }
        if (data.hasOwnProperty('gasPaidForData')) {
          obj['gasPaidForData'] = _ApiClient["default"].convertToType(data['gasPaidForData'], 'String');
        }
        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _ApiClient["default"].convertToType(data['gasPrice'], 'String');
        }
        if (data.hasOwnProperty('inputData')) {
          obj['inputData'] = _ApiClient["default"].convertToType(data['inputData'], 'String');
        }
        if (data.hasOwnProperty('maxFeePerGas')) {
          obj['maxFeePerGas'] = _ApiClient["default"].convertToType(data['maxFeePerGas'], 'String');
        }
        if (data.hasOwnProperty('maxFeePriorityPerGas')) {
          obj['maxFeePriorityPerGas'] = _ApiClient["default"].convertToType(data['maxFeePriorityPerGas'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }
        if (data.hasOwnProperty('r')) {
          obj['r'] = _ApiClient["default"].convertToType(data['r'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('s')) {
          obj['s'] = _ApiClient["default"].convertToType(data['s'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'Number');
        }
        if (data.hasOwnProperty('v')) {
          obj['v'] = _ApiClient["default"].convertToType(data['v'], 'String');
        }
        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
        if (data.hasOwnProperty('expiryHeight')) {
          obj['expiryHeight'] = _ApiClient["default"].convertToType(data['expiryHeight'], 'Number');
        }
        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }
        if (data.hasOwnProperty('saplinged')) {
          obj['saplinged'] = _ApiClient["default"].convertToType(data['saplinged'], 'Boolean');
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
  return DecodeRawTransactionHexRIS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRIS.prototype['locktime'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRIS.prototype['transactionHash'] = undefined;

/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
DecodeRawTransactionHexRIS.prototype['vSize'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRIS.prototype['version'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
DecodeRawTransactionHexRIS.prototype['vin'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
DecodeRawTransactionHexRIS.prototype['vout'] = undefined;

/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
DecodeRawTransactionHexRIS.prototype['weight'] = undefined;

/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
DecodeRawTransactionHexRIS.prototype['approximateFee'] = undefined;

/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
DecodeRawTransactionHexRIS.prototype['approximateMinimumRequiredFee'] = undefined;

/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
DecodeRawTransactionHexRIS.prototype['gasLimit'] = undefined;

/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
DecodeRawTransactionHexRIS.prototype['gasPaidForData'] = undefined;

/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
DecodeRawTransactionHexRIS.prototype['gasPrice'] = undefined;

/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
DecodeRawTransactionHexRIS.prototype['inputData'] = undefined;

/**
 * Defines the maximum amount that customer is willing to pay per unit of gas to get his transaction included in a block.
 * @member {String} maxFeePerGas
 */
DecodeRawTransactionHexRIS.prototype['maxFeePerGas'] = undefined;

/**
 * Represents determined by the user value that is paid directly to miners.
 * @member {String} maxFeePriorityPerGas
 */
DecodeRawTransactionHexRIS.prototype['maxFeePriorityPerGas'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
DecodeRawTransactionHexRIS.prototype['nonce'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
DecodeRawTransactionHexRIS.prototype['r'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
DecodeRawTransactionHexRIS.prototype['recipient'] = undefined;

/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
DecodeRawTransactionHexRIS.prototype['s'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
DecodeRawTransactionHexRIS.prototype['sender'] = undefined;

/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
DecodeRawTransactionHexRIS.prototype['type'] = undefined;

/**
 * Defines the the recovery id.
 * @member {String} v
 */
DecodeRawTransactionHexRIS.prototype['v'] = undefined;

/**
 * Represents the sent/received amount.
 * @member {String} value
 */
DecodeRawTransactionHexRIS.prototype['value'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
DecodeRawTransactionHexRIS.prototype['expiryHeight'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
DecodeRawTransactionHexRIS.prototype['overwintered'] = undefined;

/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
DecodeRawTransactionHexRIS.prototype['saplinged'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
DecodeRawTransactionHexRIS.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
DecodeRawTransactionHexRIS.prototype['versionGroupId'] = undefined;

// Implement DecodeRawTransactionHexRISB interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_DecodeRawTransactionHexRISB["default"].prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
_DecodeRawTransactionHexRISB["default"].prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_DecodeRawTransactionHexRISB["default"].prototype['vSize'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_DecodeRawTransactionHexRISB["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVinInner>} vin
 */
_DecodeRawTransactionHexRISB["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISBVoutInner>} vout
 */
_DecodeRawTransactionHexRISB["default"].prototype['vout'] = undefined;
/**
 * Represents the size of Bitcoin block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
_DecodeRawTransactionHexRISB["default"].prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISB2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_DecodeRawTransactionHexRISB2["default"].prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
_DecodeRawTransactionHexRISB2["default"].prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_DecodeRawTransactionHexRISB2["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_DecodeRawTransactionHexRISB2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISB2VinInner>} vin
 */
_DecodeRawTransactionHexRISB2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISB2VoutInner>} vout
 */
_DecodeRawTransactionHexRISB2["default"].prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
_DecodeRawTransactionHexRISB2["default"].prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISD interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_DecodeRawTransactionHexRISD["default"].prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
_DecodeRawTransactionHexRISD["default"].prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_DecodeRawTransactionHexRISD["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_DecodeRawTransactionHexRISD["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISDVinInner>} vin
 */
_DecodeRawTransactionHexRISD["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISDVoutInner>} vout
 */
_DecodeRawTransactionHexRISD["default"].prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
_DecodeRawTransactionHexRISD["default"].prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISD2 interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
_DecodeRawTransactionHexRISD2["default"].prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
_DecodeRawTransactionHexRISD2["default"].prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_DecodeRawTransactionHexRISD2["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number
 * @member {Number} version
 */
_DecodeRawTransactionHexRISD2["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISD2VinInner>} vin
 */
_DecodeRawTransactionHexRISD2["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISD2VoutInner>} vout
 */
_DecodeRawTransactionHexRISD2["default"].prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
_DecodeRawTransactionHexRISD2["default"].prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISL interface:
/**
 * Represents the time at which a particular transaction can be added to the blockchain
 * @member {Number} locktime
 */
_DecodeRawTransactionHexRISL["default"].prototype['locktime'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
_DecodeRawTransactionHexRISL["default"].prototype['transactionHash'] = undefined;
/**
 * Represents the virtual size of this transaction.
 * @member {Number} vSize
 */
_DecodeRawTransactionHexRISL["default"].prototype['vSize'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */
_DecodeRawTransactionHexRISL["default"].prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISLVinInner>} vin
 */
_DecodeRawTransactionHexRISL["default"].prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/DecodeRawTransactionHexRISLVoutInner>} vout
 */
_DecodeRawTransactionHexRISL["default"].prototype['vout'] = undefined;
/**
 * Represents the size of a block, measured in weight units and including the segwit discount.
 * @member {Number} weight
 */
_DecodeRawTransactionHexRISL["default"].prototype['weight'] = undefined;
// Implement DecodeRawTransactionHexRISE interface:
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
_DecodeRawTransactionHexRISE["default"].prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
_DecodeRawTransactionHexRISE["default"].prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_DecodeRawTransactionHexRISE["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
_DecodeRawTransactionHexRISE["default"].prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
_DecodeRawTransactionHexRISE["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_DecodeRawTransactionHexRISE["default"].prototype['inputData'] = undefined;
/**
 * Defines the maximum amount that customer is willing to pay per unit of gas to get his transaction included in a block.
 * @member {String} maxFeePerGas
 */
_DecodeRawTransactionHexRISE["default"].prototype['maxFeePerGas'] = undefined;
/**
 * Represents determined by the user value that is paid directly to miners.
 * @member {String} maxFeePriorityPerGas
 */
_DecodeRawTransactionHexRISE["default"].prototype['maxFeePriorityPerGas'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_DecodeRawTransactionHexRISE["default"].prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
_DecodeRawTransactionHexRISE["default"].prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
_DecodeRawTransactionHexRISE["default"].prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
_DecodeRawTransactionHexRISE["default"].prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
_DecodeRawTransactionHexRISE["default"].prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
_DecodeRawTransactionHexRISE["default"].prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */
_DecodeRawTransactionHexRISE["default"].prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */
_DecodeRawTransactionHexRISE["default"].prototype['value'] = undefined;
// Implement DecodeRawTransactionHexRISE2 interface:
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
_DecodeRawTransactionHexRISE2["default"].prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
_DecodeRawTransactionHexRISE2["default"].prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_DecodeRawTransactionHexRISE2["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
_DecodeRawTransactionHexRISE2["default"].prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
_DecodeRawTransactionHexRISE2["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_DecodeRawTransactionHexRISE2["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_DecodeRawTransactionHexRISE2["default"].prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
_DecodeRawTransactionHexRISE2["default"].prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
_DecodeRawTransactionHexRISE2["default"].prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
_DecodeRawTransactionHexRISE2["default"].prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
_DecodeRawTransactionHexRISE2["default"].prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
_DecodeRawTransactionHexRISE2["default"].prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */
_DecodeRawTransactionHexRISE2["default"].prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */
_DecodeRawTransactionHexRISE2["default"].prototype['value'] = undefined;
// Implement DecodeRawTransactionHexRISB22 interface:
/**
 * Defines the approximate fee value. When isConfirmed is True - Defines the amount of the transaction fee When isConfirmed is False - For ETH-based blockchains this attribute represents the max fee value.
 * @member {String} approximateFee
 */
_DecodeRawTransactionHexRISB3["default"].prototype['approximateFee'] = undefined;
/**
 * Defines the approximate minimum fee that is required for the transaction.
 * @member {String} approximateMinimumRequiredFee
 */
_DecodeRawTransactionHexRISB3["default"].prototype['approximateMinimumRequiredFee'] = undefined;
/**
 * Represents the amount of gas used by this specific transaction alone.
 * @member {String} gasLimit
 */
_DecodeRawTransactionHexRISB3["default"].prototype['gasLimit'] = undefined;
/**
 * Represents the amount of gas paid for the data in the transaction.
 * @member {String} gasPaidForData
 */
_DecodeRawTransactionHexRISB3["default"].prototype['gasPaidForData'] = undefined;
/**
 * Represents the price offered to the miner to purchase this amount of gas.
 * @member {String} gasPrice
 */
_DecodeRawTransactionHexRISB3["default"].prototype['gasPrice'] = undefined;
/**
 * Represents additional information that is required for the transaction.
 * @member {String} inputData
 */
_DecodeRawTransactionHexRISB3["default"].prototype['inputData'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */
_DecodeRawTransactionHexRISB3["default"].prototype['nonce'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} r
 */
_DecodeRawTransactionHexRISB3["default"].prototype['r'] = undefined;
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
_DecodeRawTransactionHexRISB3["default"].prototype['recipient'] = undefined;
/**
 * Represents output of an ECDSA signature.
 * @member {String} s
 */
_DecodeRawTransactionHexRISB3["default"].prototype['s'] = undefined;
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
_DecodeRawTransactionHexRISB3["default"].prototype['sender'] = undefined;
/**
 * Specifies the transaction type as one from three options: if response returns a `\"0\"` it means the raw transaction includes legacy transaction data, if it is `\"1\"` - includes access lists for EIP2930, and if it is `\"2\"` - EIP1559 data.
 * @member {Number} type
 */
_DecodeRawTransactionHexRISB3["default"].prototype['type'] = undefined;
/**
 * Defines the the recovery id.
 * @member {String} v
 */
_DecodeRawTransactionHexRISB3["default"].prototype['v'] = undefined;
/**
 * Represents the sent/received amount.
 * @member {String} value
 */
_DecodeRawTransactionHexRISB3["default"].prototype['value'] = undefined;
// Implement DecodeRawTransactionHexRISZ interface:
/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
_DecodeRawTransactionHexRISZ["default"].prototype['expiryHeight'] = undefined;
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_DecodeRawTransactionHexRISZ["default"].prototype['locktime'] = undefined;
/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
_DecodeRawTransactionHexRISZ["default"].prototype['overwintered'] = undefined;
/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
_DecodeRawTransactionHexRISZ["default"].prototype['saplinged'] = undefined;
/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
_DecodeRawTransactionHexRISZ["default"].prototype['transactionHash'] = undefined;
/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
_DecodeRawTransactionHexRISZ["default"].prototype['valueBalance'] = undefined;
/**
 * Represents the transaction version number.
 * @member {Number} version
 */
_DecodeRawTransactionHexRISZ["default"].prototype['version'] = undefined;
/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
_DecodeRawTransactionHexRISZ["default"].prototype['versionGroupId'] = undefined;
/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
_DecodeRawTransactionHexRISZ["default"].prototype['vin'] = undefined;
/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
_DecodeRawTransactionHexRISZ["default"].prototype['vout'] = undefined;
var _default = DecodeRawTransactionHexRIS;
exports["default"] = _default;