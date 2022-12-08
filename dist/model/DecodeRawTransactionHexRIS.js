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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The DecodeRawTransactionHexRIS model module.
 * @module model/DecodeRawTransactionHexRIS
 * @version 1.11.0
 */
var DecodeRawTransactionHexRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRIS</code>.
   * Represents the specific transaction data according to the blockchain
   * @alias module:model/DecodeRawTransactionHexRIS
   * @param {(module:model/DecodeRawTransactionHexRISB|module:model/DecodeRawTransactionHexRISB2|module:model/DecodeRawTransactionHexRISB22|module:model/DecodeRawTransactionHexRISD|module:model/DecodeRawTransactionHexRISD2|module:model/DecodeRawTransactionHexRISE|module:model/DecodeRawTransactionHexRISE2|module:model/DecodeRawTransactionHexRISL|module:model/DecodeRawTransactionHexRISZ)} instance The actual instance to initialize DecodeRawTransactionHexRIS.
   */
  function DecodeRawTransactionHexRIS() {
    var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, DecodeRawTransactionHexRIS);
    _defineProperty(this, "toJSON", function () {
      return this.getActualInstance();
    });
    if (instance === null) {
      this.actualInstance = null;
      return;
    }
    var match = 0;
    var errorMessages = [];
    try {
      if (typeof instance === "DecodeRawTransactionHexRISB") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISB["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISB from JS object
        this.actualInstance = _DecodeRawTransactionHexRISB["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISB
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISB: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISB2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISB2["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISB2 from JS object
        this.actualInstance = _DecodeRawTransactionHexRISB2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISB2
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISB2: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISD") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISD["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISD from JS object
        this.actualInstance = _DecodeRawTransactionHexRISD["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISD
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISD: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISD2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISD2["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISD2 from JS object
        this.actualInstance = _DecodeRawTransactionHexRISD2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISD2
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISD2: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISL") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISL["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISL from JS object
        this.actualInstance = _DecodeRawTransactionHexRISL["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISL
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISL: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISE") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISE["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISE from JS object
        this.actualInstance = _DecodeRawTransactionHexRISE["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISE
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISE: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISE2") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISE2["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISE2 from JS object
        this.actualInstance = _DecodeRawTransactionHexRISE2["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISE2
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISE2: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISB22") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISB3["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISB22 from JS object
        this.actualInstance = _DecodeRawTransactionHexRISB3["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISB22
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISB22: " + err);
    }
    try {
      if (typeof instance === "DecodeRawTransactionHexRISZ") {
        this.actualInstance = instance;
      } else {
        // plain JS object
        // validate the object
        _DecodeRawTransactionHexRISZ["default"].validateJSON(instance); // throw an exception if no match
        // create DecodeRawTransactionHexRISZ from JS object
        this.actualInstance = _DecodeRawTransactionHexRISZ["default"].constructFromObject(instance);
      }
      match++;
    } catch (err) {
      // json data failed to deserialize into DecodeRawTransactionHexRISZ
      errorMessages.push("Failed to construct DecodeRawTransactionHexRISZ: " + err);
    }
    if (match > 1) {
      throw new Error("Multiple matches found constructing `DecodeRawTransactionHexRIS` with oneOf schemas DecodeRawTransactionHexRISB, DecodeRawTransactionHexRISB2, DecodeRawTransactionHexRISB22, DecodeRawTransactionHexRISD, DecodeRawTransactionHexRISD2, DecodeRawTransactionHexRISE, DecodeRawTransactionHexRISE2, DecodeRawTransactionHexRISL, DecodeRawTransactionHexRISZ. Input: " + JSON.stringify(instance));
    } else if (match === 0) {
      this.actualInstance = null; // clear the actual instance in case there are multiple matches
      throw new Error("No match found constructing `DecodeRawTransactionHexRIS` with oneOf schemas DecodeRawTransactionHexRISB, DecodeRawTransactionHexRISB2, DecodeRawTransactionHexRISB22, DecodeRawTransactionHexRISD, DecodeRawTransactionHexRISD2, DecodeRawTransactionHexRISE, DecodeRawTransactionHexRISE2, DecodeRawTransactionHexRISL, DecodeRawTransactionHexRISZ. Details: " + errorMessages.join(", "));
    } else {// only 1 match
      // the input is valid
    }
  }

  /**
   * Constructs a <code>DecodeRawTransactionHexRIS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodeRawTransactionHexRIS} obj Optional instance to populate.
   * @return {module:model/DecodeRawTransactionHexRIS} The populated <code>DecodeRawTransactionHexRIS</code> instance.
   */
  _createClass(DecodeRawTransactionHexRIS, [{
    key: "getActualInstance",
    value:
    /**
     * Gets the actual instance, which can be <code>DecodeRawTransactionHexRISB</code>, <code>DecodeRawTransactionHexRISB2</code>, <code>DecodeRawTransactionHexRISB22</code>, <code>DecodeRawTransactionHexRISD</code>, <code>DecodeRawTransactionHexRISD2</code>, <code>DecodeRawTransactionHexRISE</code>, <code>DecodeRawTransactionHexRISE2</code>, <code>DecodeRawTransactionHexRISL</code>, <code>DecodeRawTransactionHexRISZ</code>.
     * @return {(module:model/DecodeRawTransactionHexRISB|module:model/DecodeRawTransactionHexRISB2|module:model/DecodeRawTransactionHexRISB22|module:model/DecodeRawTransactionHexRISD|module:model/DecodeRawTransactionHexRISD2|module:model/DecodeRawTransactionHexRISE|module:model/DecodeRawTransactionHexRISE2|module:model/DecodeRawTransactionHexRISL|module:model/DecodeRawTransactionHexRISZ)} The actual instance.
     */
    function getActualInstance() {
      return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>DecodeRawTransactionHexRISB</code>, <code>DecodeRawTransactionHexRISB2</code>, <code>DecodeRawTransactionHexRISB22</code>, <code>DecodeRawTransactionHexRISD</code>, <code>DecodeRawTransactionHexRISD2</code>, <code>DecodeRawTransactionHexRISE</code>, <code>DecodeRawTransactionHexRISE2</code>, <code>DecodeRawTransactionHexRISL</code>, <code>DecodeRawTransactionHexRISZ</code>.
     * @param {(module:model/DecodeRawTransactionHexRISB|module:model/DecodeRawTransactionHexRISB2|module:model/DecodeRawTransactionHexRISB22|module:model/DecodeRawTransactionHexRISD|module:model/DecodeRawTransactionHexRISD2|module:model/DecodeRawTransactionHexRISE|module:model/DecodeRawTransactionHexRISE2|module:model/DecodeRawTransactionHexRISL|module:model/DecodeRawTransactionHexRISZ)} obj The actual instance.
     */
  }, {
    key: "setActualInstance",
    value: function setActualInstance(obj) {
      this.actualInstance = DecodeRawTransactionHexRIS.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
  }], [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      return new DecodeRawTransactionHexRIS(data);
    }
  }]);
  return DecodeRawTransactionHexRIS;
}();
/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
_defineProperty(DecodeRawTransactionHexRIS, "fromJSON", function (json_string) {
  return DecodeRawTransactionHexRIS.constructFromObject(JSON.parse(json_string));
});
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
DecodeRawTransactionHexRIS.OneOf = ["DecodeRawTransactionHexRISB", "DecodeRawTransactionHexRISB2", "DecodeRawTransactionHexRISB22", "DecodeRawTransactionHexRISD", "DecodeRawTransactionHexRISD2", "DecodeRawTransactionHexRISE", "DecodeRawTransactionHexRISE2", "DecodeRawTransactionHexRISL", "DecodeRawTransactionHexRISZ"];
var _default = DecodeRawTransactionHexRIS;
exports["default"] = _default;