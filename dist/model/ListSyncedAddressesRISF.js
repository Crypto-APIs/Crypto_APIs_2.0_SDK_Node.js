"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListSyncedAddressesRISF model module.
 * @module model/ListSyncedAddressesRISF
 * @version 1.7.0
 */
var ListSyncedAddressesRISF = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSyncedAddressesRISF</code>.
   * Fungible Token Asset Data
   * @alias module:model/ListSyncedAddressesRISF
   * @param amount {String} Defines the available fingible tokens amount in the specific address.
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param type {String} Defines the specific token type.
   */
  function ListSyncedAddressesRISF(amount, contractAddress, type) {
    _classCallCheck(this, ListSyncedAddressesRISF);

    ListSyncedAddressesRISF.initialize(this, amount, contractAddress, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSyncedAddressesRISF, null, [{
    key: "initialize",
    value: function initialize(obj, amount, contractAddress, type) {
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListSyncedAddressesRISF</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRISF} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRISF} The populated <code>ListSyncedAddressesRISF</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSyncedAddressesRISF();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSyncedAddressesRISF;
}();
/**
 * Defines the available fingible tokens amount in the specific address.
 * @member {String} amount
 */


ListSyncedAddressesRISF.prototype['amount'] = undefined;
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */

ListSyncedAddressesRISF.prototype['contractAddress'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListSyncedAddressesRISF.prototype['type'] = undefined;
var _default = ListSyncedAddressesRISF;
exports["default"] = _default;