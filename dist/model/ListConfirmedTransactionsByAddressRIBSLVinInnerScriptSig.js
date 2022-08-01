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
 * The ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig
 * @version 1.7.2
 */
var ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code>.
   * Specifies the required signatures.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig
   * @param asm {String} The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
   * @param hex {String} Represents the hex of the public key of the address.
   * @param type {String} Represents the script type of the reference transaction identifier.
   */
  function ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig(asm, hex, type) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig);

    ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig.initialize(this, asm, hex, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig, null, [{
    key: "initialize",
    value: function initialize(obj, asm, hex, type) {
      obj['asm'] = asm;
      obj['hex'] = hex;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig} The populated <code>ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig();

        if (data.hasOwnProperty('asm')) {
          obj['asm'] = _ApiClient["default"].convertToType(data['asm'], 'String');
        }

        if (data.hasOwnProperty('hex')) {
          obj['hex'] = _ApiClient["default"].convertToType(data['hex'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig;
}();
/**
 * The asm strands for assembly, which is the symbolic representation of the Bitcoin's Script language op-codes.
 * @member {String} asm
 */


ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig.prototype['asm'] = undefined;
/**
 * Represents the hex of the public key of the address.
 * @member {String} hex
 */

ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig.prototype['hex'] = undefined;
/**
 * Represents the script type of the reference transaction identifier.
 * @member {String} type
 */

ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig.prototype['type'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSLVinInnerScriptSig;
exports["default"] = _default;