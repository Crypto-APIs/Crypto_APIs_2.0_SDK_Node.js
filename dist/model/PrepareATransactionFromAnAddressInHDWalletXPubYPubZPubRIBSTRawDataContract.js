"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract
 * @version 1.13.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract</code>.
   * Defines the contract information
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract
   * @param parameter {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter} 
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract(parameter) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract.initialize(this, parameter);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract, null, [{
    key: "initialize",
    value: function initialize(obj, parameter) {
      obj['parameter'] = parameter;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract();
        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter["default"].constructFromObject(data['parameter']);
        }
      }
      return obj;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract;
}();
/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContractParameter} parameter
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract.prototype['parameter'] = undefined;
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawDataContract;
exports["default"] = _default;