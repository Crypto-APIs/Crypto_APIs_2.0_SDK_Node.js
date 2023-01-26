"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareANonFungibleTokenTransferFromAddressRIBSBSC = _interopRequireDefault(require("./PrepareANonFungibleTokenTransferFromAddressRIBSBSC"));
var _PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee = _interopRequireDefault(require("./PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee"));
var _PrepareANonFungibleTokenTransferFromAddressRIBSE = _interopRequireDefault(require("./PrepareANonFungibleTokenTransferFromAddressRIBSE"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareANonFungibleTokenTransferFromAddressRIBS model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRIBS
 * @version 1.12.0
 */
var PrepareANonFungibleTokenTransferFromAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRIBS</code>.
   * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRIBS
   * @implements module:model/PrepareANonFungibleTokenTransferFromAddressRIBSE
   * @implements module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC
   * @param sigHash {String} Representation of the hash that should be signed
   * @param fee {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} 
   * @param transactionType {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS.TransactionTypeEnum} Representation of the transaction type
   */
  function PrepareANonFungibleTokenTransferFromAddressRIBS(sigHash, fee, transactionType) {
    _classCallCheck(this, PrepareANonFungibleTokenTransferFromAddressRIBS);
    _PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].initialize(this, sigHash, fee, transactionType);
    _PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].initialize(this, sigHash, fee, transactionType);
    PrepareANonFungibleTokenTransferFromAddressRIBS.initialize(this, sigHash, fee, transactionType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareANonFungibleTokenTransferFromAddressRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, sigHash, fee, transactionType) {
      obj['sigHash'] = sigHash;
      obj['fee'] = fee;
      obj['transactionType'] = transactionType;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS} The populated <code>PrepareANonFungibleTokenTransferFromAddressRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareANonFungibleTokenTransferFromAddressRIBS();
        _PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].constructFromObject(data, obj);
        _PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }
        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'String');
        }
        if (data.hasOwnProperty('sigHash')) {
          obj['sigHash'] = _ApiClient["default"].convertToType(data['sigHash'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareANonFungibleTokenTransferFromAddressRIBS;
}();
/**
 * 0x0079006f00750072004100640064006900740069006f006e0061006c00440061007400610048006500720065
 * @member {String} dataHex
 */
PrepareANonFungibleTokenTransferFromAddressRIBS.prototype['dataHex'] = undefined;

/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
PrepareANonFungibleTokenTransferFromAddressRIBS.prototype['nonce'] = undefined;

/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
PrepareANonFungibleTokenTransferFromAddressRIBS.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} fee
 */
PrepareANonFungibleTokenTransferFromAddressRIBS.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS.TransactionTypeEnum} transactionType
 */
PrepareANonFungibleTokenTransferFromAddressRIBS.prototype['transactionType'] = undefined;

// Implement PrepareANonFungibleTokenTransferFromAddressRIBSE interface:
/**
 * 0x0079006f00750072004100640064006900740069006f006e0061006c00440061007400610048006500720065
 * @member {String} dataHex
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].prototype['dataHex'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].prototype['nonce'] = undefined;
/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].prototype['sigHash'] = undefined;
/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSEFee} fee
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSE.TransactionTypeEnum} transactionType
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSE["default"].prototype['transactionType'] = undefined;
// Implement PrepareANonFungibleTokenTransferFromAddressRIBSBSC interface:
/**
 * 0x0079006f00750072004100640064006900740069006f006e0061006c00440061007400610048006500720065
 * @member {String} dataHex
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['dataHex'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {String} nonce
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['nonce'] = undefined;
/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['sigHash'] = undefined;
/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} fee
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSC.TransactionTypeEnum} transactionType
 */
_PrepareANonFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['transactionType'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareANonFungibleTokenTransferFromAddressRIBS['TransactionTypeEnum'] = {
  /**
   * value: "legacy-transaction"
   * @const
   */
  "legacy-transaction": "legacy-transaction"
};
var _default = PrepareANonFungibleTokenTransferFromAddressRIBS;
exports["default"] = _default;