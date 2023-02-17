"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareTransactionFromAddressRIBS = _interopRequireDefault(require("./PrepareTransactionFromAddressRIBS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareTransactionFromAddressRI model module.
 * @module model/PrepareTransactionFromAddressRI
 * @version 1.13.0
 */
var PrepareTransactionFromAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRI</code>.
   * @alias module:model/PrepareTransactionFromAddressRI
   * @param amount {String} Representation of the transacted amount
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param sighash {String} Representation of the hash that should be signed
   * @param blockchainSpecific {module:model/PrepareTransactionFromAddressRIBS} 
   */
  function PrepareTransactionFromAddressRI(amount, recipient, sender, sighash, blockchainSpecific) {
    _classCallCheck(this, PrepareTransactionFromAddressRI);
    PrepareTransactionFromAddressRI.initialize(this, amount, recipient, sender, sighash, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareTransactionFromAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipient, sender, sighash, blockchainSpecific) {
      obj['amount'] = amount;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['sighash'] = sighash;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRI} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRI} The populated <code>PrepareTransactionFromAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareTransactionFromAddressRI();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('sighash')) {
          obj['sighash'] = _ApiClient["default"].convertToType(data['sighash'], 'String');
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _PrepareTransactionFromAddressRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return PrepareTransactionFromAddressRI;
}();
/**
 * Representation of the transacted amount
 * @member {String} amount
 */
PrepareTransactionFromAddressRI.prototype['amount'] = undefined;

/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareTransactionFromAddressRI.prototype['dataHex'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareTransactionFromAddressRI.prototype['nonce'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
PrepareTransactionFromAddressRI.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
PrepareTransactionFromAddressRI.prototype['sender'] = undefined;

/**
 * Representation of the hash that should be signed
 * @member {String} sighash
 */
PrepareTransactionFromAddressRI.prototype['sighash'] = undefined;

/**
 * @member {module:model/PrepareTransactionFromAddressRIBS} blockchainSpecific
 */
PrepareTransactionFromAddressRI.prototype['blockchainSpecific'] = undefined;
var _default = PrepareTransactionFromAddressRI;
exports["default"] = _default;