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
 * The GetTransactionRequestDetailsRIRecipientsInner model module.
 * @module model/GetTransactionRequestDetailsRIRecipientsInner
 * @version 1.13.0
 */
var GetTransactionRequestDetailsRIRecipientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionRequestDetailsRIRecipientsInner</code>.
   * @alias module:model/GetTransactionRequestDetailsRIRecipientsInner
   * @param address {String} The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
   * @param amount {String} Represents the amount received to this address.
   * @param unit {String} Defines the unit of the amount.
   */
  function GetTransactionRequestDetailsRIRecipientsInner(address, amount, unit) {
    _classCallCheck(this, GetTransactionRequestDetailsRIRecipientsInner);
    GetTransactionRequestDetailsRIRecipientsInner.initialize(this, address, amount, unit);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionRequestDetailsRIRecipientsInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, amount, unit) {
      obj['address'] = address;
      obj['amount'] = amount;
      obj['unit'] = unit;
    }

    /**
     * Constructs a <code>GetTransactionRequestDetailsRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionRequestDetailsRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionRequestDetailsRIRecipientsInner} The populated <code>GetTransactionRequestDetailsRIRecipientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionRequestDetailsRIRecipientsInner();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('addressTag')) {
          obj['addressTag'] = _ApiClient["default"].convertToType(data['addressTag'], 'Number');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('classicAddress')) {
          obj['classicAddress'] = _ApiClient["default"].convertToType(data['classicAddress'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
      }
      return obj;
    }
  }]);
  return GetTransactionRequestDetailsRIRecipientsInner;
}();
/**
 * The address which receives this transaction. In UTXO-based protocols like Bitcoin there could be several senders while in account-based protocols like Ethereum there is always only one recipient.
 * @member {String} address
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['address'] = undefined;

/**
 * Defines a specific Tag that is an additional XRP address feature. It helps identify a transaction recipient beyond a wallet address. The tag that was encoded into the x-Address along with the Classic Address.
 * @member {Number} addressTag
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['addressTag'] = undefined;

/**
 * Represents the amount received to this address.
 * @member {String} amount
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['amount'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. A classic address is shown when the destination address is an x-Address.
 * @member {String} classicAddress
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['classicAddress'] = undefined;

/**
 * Defines the unit of the amount.
 * @member {String} unit
 */
GetTransactionRequestDetailsRIRecipientsInner.prototype['unit'] = undefined;
var _default = GetTransactionRequestDetailsRIRecipientsInner;
exports["default"] = _default;