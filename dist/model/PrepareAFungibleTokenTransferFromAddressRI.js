"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAFungibleTokenTransferFromAddressRIBS = _interopRequireDefault(require("./PrepareAFungibleTokenTransferFromAddressRIBS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAFungibleTokenTransferFromAddressRI model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRI
 * @version 1.13.0
 */
var PrepareAFungibleTokenTransferFromAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRI</code>.
   * @alias module:model/PrepareAFungibleTokenTransferFromAddressRI
   * @param amount {String} Representation of the amount to be transferred
   * @param recipient {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param sender {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param blockchainSpecific {module:model/PrepareAFungibleTokenTransferFromAddressRIBS} 
   */
  function PrepareAFungibleTokenTransferFromAddressRI(amount, recipient, sender, blockchainSpecific) {
    _classCallCheck(this, PrepareAFungibleTokenTransferFromAddressRI);
    PrepareAFungibleTokenTransferFromAddressRI.initialize(this, amount, recipient, sender, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAFungibleTokenTransferFromAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipient, sender, blockchainSpecific) {
      obj['amount'] = amount;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRI} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRI} The populated <code>PrepareAFungibleTokenTransferFromAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAFungibleTokenTransferFromAddressRI();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
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
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _PrepareAFungibleTokenTransferFromAddressRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return PrepareAFungibleTokenTransferFromAddressRI;
}();
/**
 * Representation of the amount to be transferred
 * @member {String} amount
 */
PrepareAFungibleTokenTransferFromAddressRI.prototype['amount'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareAFungibleTokenTransferFromAddressRI.prototype['nonce'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} recipient
 */
PrepareAFungibleTokenTransferFromAddressRI.prototype['recipient'] = undefined;

/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} sender
 */
PrepareAFungibleTokenTransferFromAddressRI.prototype['sender'] = undefined;

/**
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBS} blockchainSpecific
 */
PrepareAFungibleTokenTransferFromAddressRI.prototype['blockchainSpecific'] = undefined;
var _default = PrepareAFungibleTokenTransferFromAddressRI;
exports["default"] = _default;