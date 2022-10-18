"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI
 * @version 1.9.0
 */var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI
   * @param amount {String} Representation of the amount of the transaction
   * @param recipient {String} Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
   * @param sender {String} Represents a sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
   * @param sigHash {String} Representation of the hash that should be signed.
   * @param blockchainSpecific {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS} 
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI(amount, recipient, sender, sigHash, blockchainSpecific) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI);
    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI.initialize(this, amount, recipient, sender, sigHash, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipient, sender, sigHash, blockchainSpecific) {
      obj['amount'] = amount;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['sigHash'] = sigHash;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI();
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('sigHash')) {
          obj['sigHash'] = _ApiClient["default"].convertToType(data['sigHash'], 'String');
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI;
}(); /**
      * Representation of the amount of the transaction
      * @member {String} amount
      */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['amount'] = undefined;

/**
 * Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['recipient'] = undefined;

/**
 * Represents a sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['sender'] = undefined;

/**
 * Representation of the hash that should be signed.
 * @member {String} sigHash
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS} blockchainSpecific
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI.prototype['blockchainSpecific'] = undefined;
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRI;
exports["default"] = _default;