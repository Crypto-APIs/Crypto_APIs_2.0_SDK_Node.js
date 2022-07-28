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
 * The ListSyncedAddressesRISN model module.
 * @module model/ListSyncedAddressesRISN
 * @version 1.7.0
 */
var ListSyncedAddressesRISN = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSyncedAddressesRISN</code>.
   * Non Fungible Token Asset Data
   * @alias module:model/ListSyncedAddressesRISN
   * @param contract {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param tokenId {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   * @param type {String} Defines the specific token type.
   */
  function ListSyncedAddressesRISN(contract, tokenId, type) {
    _classCallCheck(this, ListSyncedAddressesRISN);

    ListSyncedAddressesRISN.initialize(this, contract, tokenId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSyncedAddressesRISN, null, [{
    key: "initialize",
    value: function initialize(obj, contract, tokenId, type) {
      obj['contract'] = contract;
      obj['tokenId'] = tokenId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListSyncedAddressesRISN</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRISN} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRISN} The populated <code>ListSyncedAddressesRISN</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSyncedAddressesRISN();

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSyncedAddressesRISN;
}();
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */


ListSyncedAddressesRISN.prototype['contract'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} tokenId
 */

ListSyncedAddressesRISN.prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListSyncedAddressesRISN.prototype['type'] = undefined;
var _default = ListSyncedAddressesRISN;
exports["default"] = _default;