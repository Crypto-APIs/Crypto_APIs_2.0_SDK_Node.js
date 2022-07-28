"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListSyncedAddressesRISC = _interopRequireDefault(require("./ListSyncedAddressesRISC"));

var _ListSyncedAddressesRISF = _interopRequireDefault(require("./ListSyncedAddressesRISF"));

var _ListSyncedAddressesRISN = _interopRequireDefault(require("./ListSyncedAddressesRISN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListSyncedAddressesRIS model module.
 * @module model/ListSyncedAddressesRIS
 * @version 1.7.0
 */
var ListSyncedAddressesRIS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSyncedAddressesRIS</code>.
   * Represents the assets&#39; detailed information.
   * @alias module:model/ListSyncedAddressesRIS
   * @implements module:model/ListSyncedAddressesRISC
   * @implements module:model/ListSyncedAddressesRISF
   * @implements module:model/ListSyncedAddressesRISN
   * @param amount {String} Defines the available fingible tokens amount in the specific address.
   * @param contractAddress {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param type {String} Defines the specific token type.
   * @param contract {String} Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
   * @param tokenId {String} Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
   */
  function ListSyncedAddressesRIS(amount, contractAddress, type, contract, tokenId) {
    _classCallCheck(this, ListSyncedAddressesRIS);

    _ListSyncedAddressesRISC["default"].initialize(this, amount);

    _ListSyncedAddressesRISF["default"].initialize(this, amount, contractAddress, type);

    _ListSyncedAddressesRISN["default"].initialize(this, contract, tokenId, type);

    ListSyncedAddressesRIS.initialize(this, amount, contractAddress, type, contract, tokenId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSyncedAddressesRIS, null, [{
    key: "initialize",
    value: function initialize(obj, amount, contractAddress, type, contract, tokenId) {
      obj['amount'] = amount;
      obj['contractAddress'] = contractAddress;
      obj['type'] = type;
      obj['contract'] = contract;
      obj['tokenId'] = tokenId;
    }
    /**
     * Constructs a <code>ListSyncedAddressesRIS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRIS} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRIS} The populated <code>ListSyncedAddressesRIS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSyncedAddressesRIS();

        _ListSyncedAddressesRISC["default"].constructFromObject(data, obj);

        _ListSyncedAddressesRISF["default"].constructFromObject(data, obj);

        _ListSyncedAddressesRISN["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('contract')) {
          obj['contract'] = _ApiClient["default"].convertToType(data['contract'], 'String');
        }

        if (data.hasOwnProperty('tokenId')) {
          obj['tokenId'] = _ApiClient["default"].convertToType(data['tokenId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSyncedAddressesRIS;
}();
/**
 * Defines the available fingible tokens amount in the specific address.
 * @member {String} amount
 */


ListSyncedAddressesRIS.prototype['amount'] = undefined;
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */

ListSyncedAddressesRIS.prototype['contractAddress'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

ListSyncedAddressesRIS.prototype['type'] = undefined;
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */

ListSyncedAddressesRIS.prototype['contract'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} tokenId
 */

ListSyncedAddressesRIS.prototype['tokenId'] = undefined; // Implement ListSyncedAddressesRISC interface:

/**
 * Defines the available coins amount in the specific address.
 * @member {String} amount
 */

_ListSyncedAddressesRISC["default"].prototype['amount'] = undefined; // Implement ListSyncedAddressesRISF interface:

/**
 * Defines the available fingible tokens amount in the specific address.
 * @member {String} amount
 */

_ListSyncedAddressesRISF["default"].prototype['amount'] = undefined;
/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contractAddress
 */

_ListSyncedAddressesRISF["default"].prototype['contractAddress'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

_ListSyncedAddressesRISF["default"].prototype['type'] = undefined; // Implement ListSyncedAddressesRISN interface:

/**
 * Represents the contract address of the token, which controls its logic. It is not the address that holds the tokens.
 * @member {String} contract
 */

_ListSyncedAddressesRISN["default"].prototype['contract'] = undefined;
/**
 * Defines the specific token identifier. For Bitcoin-based transactions it should be the propertyId and for Ethereum-based transactions - the contract.
 * @member {String} tokenId
 */

_ListSyncedAddressesRISN["default"].prototype['tokenId'] = undefined;
/**
 * Defines the specific token type.
 * @member {String} type
 */

_ListSyncedAddressesRISN["default"].prototype['type'] = undefined;
var _default = ListSyncedAddressesRIS;
exports["default"] = _default;