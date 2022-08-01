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
 * The ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey model module.
 * @module model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey
 * @version 1.7.2
 */
var ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey</code>.
   * Represents the script public key.
   * @alias module:model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey
   * @param addresses {Array.<String>} 
   * @param asm {String} Represents the assembly of the script public key of the address.
   * @param hex {String} Represents the hex of the script public key of the address.
   * @param type {String} String representation of the type
   */
  function ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey(addresses, asm, hex, type) {
    _classCallCheck(this, ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey);

    ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey.initialize(this, addresses, asm, hex, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey, null, [{
    key: "initialize",
    value: function initialize(obj, addresses, asm, hex, type) {
      obj['addresses'] = addresses;
      obj['asm'] = asm;
      obj['hex'] = hex;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey} obj Optional instance to populate.
     * @return {module:model/ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey} The populated <code>ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey();

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

  return ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey;
}();
/**
 * @member {Array.<String>} addresses
 */


ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey.prototype['addresses'] = undefined;
/**
 * Represents the assembly of the script public key of the address.
 * @member {String} asm
 */

ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey.prototype['asm'] = undefined;
/**
 * Represents the hex of the script public key of the address.
 * @member {String} hex
 */

ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey.prototype['hex'] = undefined;
/**
 * Represents the required signatures.
 * @member {Number} reqSigs
 */

ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey.prototype['reqSigs'] = undefined;
/**
 * String representation of the type
 * @member {String} type
 */

ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey.prototype['type'] = undefined;
var _default = ListUnconfirmedTransactionsByAddressRIBSBCVoutInnerScriptPubKey;
exports["default"] = _default;