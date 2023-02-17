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
 * The AddressTokensTransactionUnconfirmedOmni model module.
 * @module model/AddressTokensTransactionUnconfirmedOmni
 * @version 1.13.0
 */
var AddressTokensTransactionUnconfirmedOmni = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionUnconfirmedOmni</code>.
   * OMNI
   * @alias module:model/AddressTokensTransactionUnconfirmedOmni
   * @param name {String} Specifies the name of the token.
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction made.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   * @param amount {String} Defines the amount of tokens sent with the transaction that is pending confirmation.
   */
  function AddressTokensTransactionUnconfirmedOmni(name, propertyId, transactionType, createdByTransactionId, amount) {
    _classCallCheck(this, AddressTokensTransactionUnconfirmedOmni);
    AddressTokensTransactionUnconfirmedOmni.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionUnconfirmedOmni, null, [{
    key: "initialize",
    value: function initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) {
      obj['name'] = name;
      obj['propertyId'] = propertyId;
      obj['transactionType'] = transactionType;
      obj['createdByTransactionId'] = createdByTransactionId;
      obj['amount'] = amount;
    }

    /**
     * Constructs a <code>AddressTokensTransactionUnconfirmedOmni</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedOmni} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedOmni} The populated <code>AddressTokensTransactionUnconfirmedOmni</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionUnconfirmedOmni();
        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('createdByTransactionId')) {
          obj['createdByTransactionId'] = _ApiClient["default"].convertToType(data['createdByTransactionId'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddressTokensTransactionUnconfirmedOmni;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */
AddressTokensTransactionUnconfirmedOmni.prototype['name'] = undefined;

/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */
AddressTokensTransactionUnconfirmedOmni.prototype['propertyId'] = undefined;

/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */
AddressTokensTransactionUnconfirmedOmni.prototype['transactionType'] = undefined;

/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */
AddressTokensTransactionUnconfirmedOmni.prototype['createdByTransactionId'] = undefined;

/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */
AddressTokensTransactionUnconfirmedOmni.prototype['amount'] = undefined;
var _default = AddressTokensTransactionUnconfirmedOmni;
exports["default"] = _default;