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
 * The ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey model module.
 * @module model/ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey
 * @version 2.0.0
 */
var ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey</code>.
   * Represents the script public key.
   * @alias module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey
   * @param addresses {Array.<String>} 
   * @param asm {String} Represents the assembly of the script public key of the address.
   * @param hex {String} Represents the hex of the script public key of the address.
   * @param reqSigs {Number} Represents the required signatures.
   * @param type {String} Represents the script type.
   */
  function ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey(addresses, asm, hex, reqSigs, type) {
    _classCallCheck(this, ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey);

    ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey.initialize(this, addresses, asm, hex, reqSigs, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, asm, hex, reqSigs, type) {
      obj['addresses'] = addresses;
      obj['asm'] = asm;
      obj['hex'] = hex;
      obj['reqSigs'] = reqSigs;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey} The populated <code>ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('asm')) {
          obj['asm'] = _ApiClient["default"].convertToType(data['asm'], 'String');
        }

        if (data.hasOwnProperty('hex')) {
          obj['hex'] = _ApiClient["default"].convertToType(data['hex'], 'String');
        }

        if (data.hasOwnProperty('reqSigs')) {
          obj['reqSigs'] = _ApiClient["default"].convertToType(data['reqSigs'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey;
}();
/**
 * @member {Array.<String>} addresses
 */


ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey.prototype['addresses'] = undefined;
/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey.prototype['asm'] = undefined;
/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey.prototype['hex'] = undefined;
/**
 * Represents the required signatures.
 * @member {Number} reqSigs
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey.prototype['reqSigs'] = undefined;
/**
 * Represents the script type.
 * @member {String} type
 */

ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey.prototype['type'] = undefined;
var _default = ListTransactionsByAddressResponseItemBlockchainSpecificDashScriptPubKey;
exports["default"] = _default;