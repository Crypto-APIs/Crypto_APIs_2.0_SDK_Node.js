"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareANonFungibleTokenTransferFromAddressRIBS = _interopRequireDefault(require("./PrepareANonFungibleTokenTransferFromAddressRIBS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareANonFungibleTokenTransferFromAddressRI model module.
 * @module model/PrepareANonFungibleTokenTransferFromAddressRI
 * @version 1.13.0
 */
var PrepareANonFungibleTokenTransferFromAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareANonFungibleTokenTransferFromAddressRI</code>.
   * @alias module:model/PrepareANonFungibleTokenTransferFromAddressRI
   * @param recipient {String} Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
   * @param sender {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param tokenId {String} Represents the unique token identifier.
   * @param blockchainSpecific {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS} 
   */
  function PrepareANonFungibleTokenTransferFromAddressRI(recipient, sender, tokenId, blockchainSpecific) {
    _classCallCheck(this, PrepareANonFungibleTokenTransferFromAddressRI);
    PrepareANonFungibleTokenTransferFromAddressRI.initialize(this, recipient, sender, tokenId, blockchainSpecific);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareANonFungibleTokenTransferFromAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, recipient, sender, tokenId, blockchainSpecific) {
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['tokenId'] = tokenId;
      obj['blockchainSpecific'] = blockchainSpecific;
    }

    /**
     * Constructs a <code>PrepareANonFungibleTokenTransferFromAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareANonFungibleTokenTransferFromAddressRI} obj Optional instance to populate.
     * @return {module:model/PrepareANonFungibleTokenTransferFromAddressRI} The populated <code>PrepareANonFungibleTokenTransferFromAddressRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareANonFungibleTokenTransferFromAddressRI();
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }
        if (data.hasOwnProperty('blockchainSpecific')) {
          obj['blockchainSpecific'] = _PrepareANonFungibleTokenTransferFromAddressRIBS["default"].constructFromObject(data['blockchainSpecific']);
        }
      }
      return obj;
    }
  }]);
  return PrepareANonFungibleTokenTransferFromAddressRI;
}();
/**
 * Represents the address which sends this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one sender.
 * @member {String} recipient
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['recipient'] = undefined;

/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} sender
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['sender'] = undefined;

/**
 * Represents the unique token identifier.
 * @member {String} tokenId
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['tokenId'] = undefined;

/**
 * @member {module:model/PrepareANonFungibleTokenTransferFromAddressRIBS} blockchainSpecific
 */
PrepareANonFungibleTokenTransferFromAddressRI.prototype['blockchainSpecific'] = undefined;
var _default = PrepareANonFungibleTokenTransferFromAddressRI;
exports["default"] = _default;