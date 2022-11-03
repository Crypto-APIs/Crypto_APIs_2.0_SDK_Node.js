"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecificFee = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecificFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific
 * @version 1.10.0
 */
var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific
   * @param dataHex {String} Representation of the data in hex value
   * @param derivationIndex {Number} Representation of the derivation index of the xpub address
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param fee {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecificFee} 
   * @param transactionType {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.TransactionTypeEnum} Representation of the transaction type
   * @param unit {String} Represents the unit of the amount to be sent.
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific(dataHex, derivationIndex, nonce, fee, transactionType, unit) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific);
    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.initialize(this, dataHex, derivationIndex, nonce, fee, transactionType, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific, null, [{
    key: "initialize",
    value: function initialize(obj, dataHex, derivationIndex, nonce, fee, transactionType, unit) {
      obj['dataHex'] = dataHex;
      obj['derivationIndex'] = derivationIndex;
      obj['nonce'] = nonce;
      obj['fee'] = fee;
      obj['transactionType'] = transactionType;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific();
        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecificFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific;
}();
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.prototype['dataHex'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.prototype['derivationIndex'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.prototype['nonce'] = undefined;

/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecificFee} fee
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.TransactionTypeEnum} transactionType
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific.prototype['unit'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction",
  /**
   * value: "access-list-transaction"
   * @const
   */
  "access-list-transaction": "access-list-transaction",
  /**
   * value: "gas-fee-market-transaction"
   * @const
   */
  "gas-fee-market-transaction": "gas-fee-market-transaction"
};
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBlockchainSpecific;
exports["default"] = _default;