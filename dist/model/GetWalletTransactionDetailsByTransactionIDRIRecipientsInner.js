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
 * The GetWalletTransactionDetailsByTransactionIDRIRecipientsInner model module.
 * @module model/GetWalletTransactionDetailsByTransactionIDRIRecipientsInner
 * @version 1.11.0
 */
var GetWalletTransactionDetailsByTransactionIDRIRecipientsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetWalletTransactionDetailsByTransactionIDRIRecipientsInner</code>.
   * @alias module:model/GetWalletTransactionDetailsByTransactionIDRIRecipientsInner
   */
  function GetWalletTransactionDetailsByTransactionIDRIRecipientsInner() {
    _classCallCheck(this, GetWalletTransactionDetailsByTransactionIDRIRecipientsInner);
    GetWalletTransactionDetailsByTransactionIDRIRecipientsInner.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetWalletTransactionDetailsByTransactionIDRIRecipientsInner, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>GetWalletTransactionDetailsByTransactionIDRIRecipientsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetWalletTransactionDetailsByTransactionIDRIRecipientsInner} obj Optional instance to populate.
     * @return {module:model/GetWalletTransactionDetailsByTransactionIDRIRecipientsInner} The populated <code>GetWalletTransactionDetailsByTransactionIDRIRecipientsInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetWalletTransactionDetailsByTransactionIDRIRecipientsInner();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetWalletTransactionDetailsByTransactionIDRIRecipientsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetWalletTransactionDetailsByTransactionIDRIRecipientsInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
        throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
      }
      // ensure the json data is a string
      if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
        throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
      }
      return true;
    }
  }]);
  return GetWalletTransactionDetailsByTransactionIDRIRecipientsInner;
}();
/**
 * String representation of the receiver address
 * @member {String} address
 */
GetWalletTransactionDetailsByTransactionIDRIRecipientsInner.prototype['address'] = undefined;

/**
 * String representation of the amount
 * @member {String} amount
 */
GetWalletTransactionDetailsByTransactionIDRIRecipientsInner.prototype['amount'] = undefined;
var _default = GetWalletTransactionDetailsByTransactionIDRIRecipientsInner;
exports["default"] = _default;