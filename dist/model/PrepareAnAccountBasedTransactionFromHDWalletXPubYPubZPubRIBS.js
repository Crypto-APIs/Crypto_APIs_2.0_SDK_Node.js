"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC"));
var _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee = _interopRequireDefault(require("./PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS model module.
 * @module model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS
 * @version 1.9.0
 */var PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS
   * @implements module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE
   * @implements module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC
   * @implements module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC
   * @param dataHex {String} Representation of the data in hex value
   * @param derivationIndex {Number} Representation of the derivation index of the xpub address
   * @param fee {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee} 
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionType {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.TransactionTypeEnum} Representation of the transaction type
   * @param unit {String} Represents the unit of the amount to be sent.
   */
  function PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS(dataHex, derivationIndex, fee, nonce, transactionType, unit) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS);
    _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
    _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
    _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
    PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, dataHex, derivationIndex, fee, nonce, transactionType, unit) {
      obj['dataHex'] = dataHex;
      obj['derivationIndex'] = derivationIndex;
      obj['fee'] = fee;
      obj['nonce'] = nonce;
      obj['transactionType'] = transactionType;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS} The populated <code>PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS();
        _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].constructFromObject(data, obj);
        _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].constructFromObject(data, obj);
        _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
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
  return PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS;
}(); /**
      * Representation of the data in hex value
      * @member {String} dataHex
      */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['dataHex'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['derivationIndex'] = undefined;

/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee} fee
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['fee'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.TransactionTypeEnum} transactionType
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS.prototype['unit'] = undefined;

// Implement PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEFee} fee
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE.TransactionTypeEnum} transactionType
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSE["default"].prototype['unit'] = undefined;
// Implement PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSCFee} fee
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC.TransactionTypeEnum} transactionType
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSBSC["default"].prototype['unit'] = undefined;
// Implement PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].prototype['dataHex'] = undefined;
/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].prototype['derivationIndex'] = undefined;
/**
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSECFee} fee
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].prototype['fee'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].prototype['nonce'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC.TransactionTypeEnum} transactionType
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].prototype['transactionType'] = undefined;
/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
_PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBSEC["default"].prototype['unit'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction"
};
var _default = PrepareAnAccountBasedTransactionFromHDWalletXPubYPubZPubRIBS;
exports["default"] = _default;