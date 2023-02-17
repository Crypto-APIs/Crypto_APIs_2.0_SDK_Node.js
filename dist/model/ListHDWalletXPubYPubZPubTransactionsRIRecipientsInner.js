"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner model module.
 * @module model/ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner
 * @version 1.13.0
 */
var ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner</code>.
   * @alias module:model/ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner
   * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param amount {String} Represents the amount received to this address.
   * @param isMember {Boolean} Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
   */
  function ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner(address, amount, isMember) {
    _classCallCheck(this, ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner);
    ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner.initialize(this, address, amount, isMember);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount, isMember) {
      obj['address'] = address;
      obj['amount'] = amount;
      obj['isMember'] = isMember;
    }

    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner} The populated <code>ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('isMember')) {
          obj['isMember'] = _ApiClient["default"].convertToType(data['isMember'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner;
}();
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */
ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner.prototype['address'] = undefined;

/**
 * Represents the amount received to this address.
 * @member {String} amount
 */
ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner.prototype['amount'] = undefined;

/**
 * Defines whether an address is a child address derived from the HD wallet (xPub, yPub, zPub) as boolean.
 * @member {Boolean} isMember
 */
ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner.prototype['isMember'] = undefined;
var _default = ListHDWalletXPubYPubZPubTransactionsRIRecipientsInner;
exports["default"] = _default;