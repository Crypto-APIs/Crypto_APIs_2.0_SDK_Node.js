"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI
 * @version 1.13.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI</code>.
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI
   * @param amount {String} Representation of the amount of the transaction
   * @param recipient {String} Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
   * @param sender {String} Represents a sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
   * @param sigHash {String} Representation of the hash that should be signed.
   * @param blockchainSpecific {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} 
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI(amount, recipient, sender, sigHash, blockchainSpecific) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.initialize(this, amount, recipient, sender, sigHash, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI, null, [{
    key: "initialize",
    value: function initialize(obj, amount, recipient, sender, sigHash, blockchainSpecific) {
      obj['amount'] = amount;
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['sigHash'] = sigHash;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI();
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
          obj['blockchainSpecific'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI;
}();
/**
 * Representation of the amount of the transaction
 * @member {String} amount
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['amount'] = undefined;

/**
 * Represents a recipient addresses. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['recipient'] = undefined;

/**
 * Represents a sender address with the respective amount. In account-based protocols like Ethereum there is only one address in this list.
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['sender'] = undefined;

/**
 * Representation of the hash that should be signed.
 * @member {String} sigHash
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['sigHash'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBS} blockchainSpecific
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI.prototype['blockchainSpecific'] = undefined;
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRI;
exports["default"] = _default;