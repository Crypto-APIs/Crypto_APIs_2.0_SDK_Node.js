"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AddressTokensTransactionUnconfirmedOmnilayertoken model module.
 * @module model/AddressTokensTransactionUnconfirmedOmnilayertoken
 * @version 1.1.0
 */
var AddressTokensTransactionUnconfirmedOmnilayertoken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionUnconfirmedOmnilayertoken</code>.
   * omniLayerToken
   * @alias module:model/AddressTokensTransactionUnconfirmedOmnilayertoken
   * @param name {String} Specifies the name of the token.
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction made.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   * @param amount {String} Defines the amount of tokens sent with the transaction that is pending confirmation.
   */
  function AddressTokensTransactionUnconfirmedOmnilayertoken(name, propertyId, transactionType, createdByTransactionId, amount) {
    _classCallCheck(this, AddressTokensTransactionUnconfirmedOmnilayertoken);

    AddressTokensTransactionUnconfirmedOmnilayertoken.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressTokensTransactionUnconfirmedOmnilayertoken, null, [{
    key: "initialize",
    value: function initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) {
      obj['name'] = name;
      obj['propertyId'] = propertyId;
      obj['transactionType'] = transactionType;
      obj['createdByTransactionId'] = createdByTransactionId;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>AddressTokensTransactionUnconfirmedOmnilayertoken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionUnconfirmedOmnilayertoken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionUnconfirmedOmnilayertoken} The populated <code>AddressTokensTransactionUnconfirmedOmnilayertoken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionUnconfirmedOmnilayertoken();

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

  return AddressTokensTransactionUnconfirmedOmnilayertoken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


AddressTokensTransactionUnconfirmedOmnilayertoken.prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */

AddressTokensTransactionUnconfirmedOmnilayertoken.prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction made.
 * @member {String} transactionType
 */

AddressTokensTransactionUnconfirmedOmnilayertoken.prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */

AddressTokensTransactionUnconfirmedOmnilayertoken.prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the transaction that is pending confirmation.
 * @member {String} amount
 */

AddressTokensTransactionUnconfirmedOmnilayertoken.prototype['amount'] = undefined;
var _default = AddressTokensTransactionUnconfirmedOmnilayertoken;
exports["default"] = _default;