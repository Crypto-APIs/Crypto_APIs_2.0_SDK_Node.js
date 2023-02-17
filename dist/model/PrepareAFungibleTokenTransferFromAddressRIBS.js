"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAFungibleTokenTransferFromAddressRIBSBSC = _interopRequireDefault(require("./PrepareAFungibleTokenTransferFromAddressRIBSBSC"));
var _PrepareAFungibleTokenTransferFromAddressRIBSE = _interopRequireDefault(require("./PrepareAFungibleTokenTransferFromAddressRIBSE"));
var _PrepareAFungibleTokenTransferFromAddressRIBSEC = _interopRequireDefault(require("./PrepareAFungibleTokenTransferFromAddressRIBSEC"));
var _PrepareAFungibleTokenTransferFromAddressRIBSEFee = _interopRequireDefault(require("./PrepareAFungibleTokenTransferFromAddressRIBSEFee"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAFungibleTokenTransferFromAddressRIBS model module.
 * @module model/PrepareAFungibleTokenTransferFromAddressRIBS
 * @version 1.13.0
 */
var PrepareAFungibleTokenTransferFromAddressRIBS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAFungibleTokenTransferFromAddressRIBS</code>.
   * @alias module:model/PrepareAFungibleTokenTransferFromAddressRIBS
   * @implements module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC
   * @implements module:model/PrepareAFungibleTokenTransferFromAddressRIBSBSC
   * @implements module:model/PrepareAFungibleTokenTransferFromAddressRIBSE
   * @param sigHash {String} Representation of the hash that should be signed
   * @param fee {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} 
   * @param transactionType {module:model/PrepareAFungibleTokenTransferFromAddressRIBS.TransactionTypeEnum} Representation of the transaction type
   */
  function PrepareAFungibleTokenTransferFromAddressRIBS(sigHash, fee, transactionType) {
    _classCallCheck(this, PrepareAFungibleTokenTransferFromAddressRIBS);
    _PrepareAFungibleTokenTransferFromAddressRIBSEC["default"].initialize(this, sigHash, fee, transactionType);
    _PrepareAFungibleTokenTransferFromAddressRIBSBSC["default"].initialize(this, sigHash, fee, transactionType);
    _PrepareAFungibleTokenTransferFromAddressRIBSE["default"].initialize(this, sigHash, fee, transactionType);
    PrepareAFungibleTokenTransferFromAddressRIBS.initialize(this, sigHash, fee, transactionType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAFungibleTokenTransferFromAddressRIBS, null, [{
    key: "initialize",
    value: function initialize(obj, sigHash, fee, transactionType) {
      obj['sigHash'] = sigHash;
      obj['fee'] = fee;
      obj['transactionType'] = transactionType;
    }

    /**
     * Constructs a <code>PrepareAFungibleTokenTransferFromAddressRIBS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAFungibleTokenTransferFromAddressRIBS} obj Optional instance to populate.
     * @return {module:model/PrepareAFungibleTokenTransferFromAddressRIBS} The populated <code>PrepareAFungibleTokenTransferFromAddressRIBS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAFungibleTokenTransferFromAddressRIBS();
        _PrepareAFungibleTokenTransferFromAddressRIBSEC["default"].constructFromObject(data, obj);
        _PrepareAFungibleTokenTransferFromAddressRIBSBSC["default"].constructFromObject(data, obj);
        _PrepareAFungibleTokenTransferFromAddressRIBSE["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('dataHex')) {
          obj['dataHex'] = _ApiClient["default"].convertToType(data['dataHex'], 'String');
        }
        if (data.hasOwnProperty('sigHash')) {
          obj['sigHash'] = _ApiClient["default"].convertToType(data['sigHash'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAFungibleTokenTransferFromAddressRIBSEFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareAFungibleTokenTransferFromAddressRIBS;
}();
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
PrepareAFungibleTokenTransferFromAddressRIBS.prototype['dataHex'] = undefined;

/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
PrepareAFungibleTokenTransferFromAddressRIBS.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} fee
 */
PrepareAFungibleTokenTransferFromAddressRIBS.prototype['fee'] = undefined;

/**
 * Representation of the transaction type
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBS.TransactionTypeEnum} transactionType
 */
PrepareAFungibleTokenTransferFromAddressRIBS.prototype['transactionType'] = undefined;

// Implement PrepareAFungibleTokenTransferFromAddressRIBSEC interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_PrepareAFungibleTokenTransferFromAddressRIBSEC["default"].prototype['dataHex'] = undefined;
/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
_PrepareAFungibleTokenTransferFromAddressRIBSEC["default"].prototype['sigHash'] = undefined;
/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} fee
 */
_PrepareAFungibleTokenTransferFromAddressRIBSEC["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEC.TransactionTypeEnum} transactionType
 */
_PrepareAFungibleTokenTransferFromAddressRIBSEC["default"].prototype['transactionType'] = undefined;
// Implement PrepareAFungibleTokenTransferFromAddressRIBSBSC interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_PrepareAFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['dataHex'] = undefined;
/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
_PrepareAFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['sigHash'] = undefined;
/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBSBSCFee} fee
 */
_PrepareAFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSBSC.TransactionTypeEnum} transactionType
 */
_PrepareAFungibleTokenTransferFromAddressRIBSBSC["default"].prototype['transactionType'] = undefined;
// Implement PrepareAFungibleTokenTransferFromAddressRIBSE interface:
/**
 * Representation of the data in hex value
 * @member {String} dataHex
 */
_PrepareAFungibleTokenTransferFromAddressRIBSE["default"].prototype['dataHex'] = undefined;
/**
 * Representation of the hash that should be signed
 * @member {String} sigHash
 */
_PrepareAFungibleTokenTransferFromAddressRIBSE["default"].prototype['sigHash'] = undefined;
/**
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSEFee} fee
 */
_PrepareAFungibleTokenTransferFromAddressRIBSE["default"].prototype['fee'] = undefined;
/**
 * Representation of the transaction type
 * @member {module:model/PrepareAFungibleTokenTransferFromAddressRIBSE.TransactionTypeEnum} transactionType
 */
_PrepareAFungibleTokenTransferFromAddressRIBSE["default"].prototype['transactionType'] = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAFungibleTokenTransferFromAddressRIBS['TransactionTypeEnum'] = {
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
var _default = PrepareAFungibleTokenTransferFromAddressRIBS;
exports["default"] = _default;