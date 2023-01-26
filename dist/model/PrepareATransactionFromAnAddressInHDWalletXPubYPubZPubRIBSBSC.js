"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSCFee = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSCFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC
 * @version 1.12.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC</code>.
   * Binance Smart Chain
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC
   * @param dataHex {String} Representation of the data in hex value
   * @param derivationIndex {Number} Representation of the derivation index of the xpub address
   * @param fee {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSCFee} 
   * @param nonce {String} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionType {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.TransactionTypeEnum} Representation of the transaction type
   * @param unit {String} Represents the unit of the amount to be sent.
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC(dataHex, derivationIndex, fee, nonce, transactionType, unit) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.initialize(this, dataHex, derivationIndex, fee, nonce, transactionType, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC, null, [{
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
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC();
        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSCFee["default"].constructFromObject(data['fee']);
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
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC;
}();
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['dataHex'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {Number} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['derivationIndex'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSCFee} fee
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['fee'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['nonce'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.TransactionTypeEnum} transactionType
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['transactionType'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC.prototype['unit'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction"
};
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSBSC;
exports["default"] = _default;