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
 * The AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken model module.
 * @module model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken
 * @version 1.1.0
 */
var AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken</code>.
   * omniLayerToken
   * @alias module:model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken
   * @param name {String} Specifies the name of the token.
   * @param propertyId {String} Defines the ID of the property for Omni Layer.
   * @param transactionType {String} Defines the type of the transaction.
   * @param createdByTransactionId {String} The transaction ID used to create the token.
   * @param amount {String} Defines the amount of tokens sent with the confirmed transaction.
   */
  function AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken(name, propertyId, transactionType, createdByTransactionId, amount) {
    _classCallCheck(this, AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken);

    AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.initialize(this, name, propertyId, transactionType, createdByTransactionId, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken, null, [{
    key: "initialize",
    value: function initialize(obj, name, propertyId, transactionType, createdByTransactionId, amount) {
      obj['name'] = name;
      obj['propertyId'] = propertyId;
      obj['transactionType'] = transactionType;
      obj['createdByTransactionId'] = createdByTransactionId;
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken} The populated <code>AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken();

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

  return AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken;
}();
/**
 * Specifies the name of the token.
 * @member {String} name
 */


AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['name'] = undefined;
/**
 * Defines the ID of the property for Omni Layer.
 * @member {String} propertyId
 */

AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['propertyId'] = undefined;
/**
 * Defines the type of the transaction.
 * @member {String} transactionType
 */

AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['transactionType'] = undefined;
/**
 * The transaction ID used to create the token.
 * @member {String} createdByTransactionId
 */

AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['createdByTransactionId'] = undefined;
/**
 * Defines the amount of tokens sent with the confirmed transaction.
 * @member {String} amount
 */

AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken.prototype['amount'] = undefined;
var _default = AddressTokensTransactionConfirmedEachConfirmationOmnilayertoken;
exports["default"] = _default;