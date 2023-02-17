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
 * The CreateNewMasterWalletRBDataItem model module.
 * @module model/CreateNewMasterWalletRBDataItem
 * @version 1.13.0
 */
var CreateNewMasterWalletRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateNewMasterWalletRBDataItem</code>.
   * @alias module:model/CreateNewMasterWalletRBDataItem
   * @param walletName {String} Defines the name of the wallet that will be generated.
   * @param walletType {module:model/CreateNewMasterWalletRBDataItem.WalletTypeEnum} Represents if the generated wallet is only for mainnet or only for testnet .
   */
  function CreateNewMasterWalletRBDataItem(walletName, walletType) {
    _classCallCheck(this, CreateNewMasterWalletRBDataItem);
    CreateNewMasterWalletRBDataItem.initialize(this, walletName, walletType);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateNewMasterWalletRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, walletName, walletType) {
      obj['walletName'] = walletName;
      obj['walletType'] = walletType;
    }

    /**
     * Constructs a <code>CreateNewMasterWalletRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNewMasterWalletRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateNewMasterWalletRBDataItem} The populated <code>CreateNewMasterWalletRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateNewMasterWalletRBDataItem();
        if (data.hasOwnProperty('walletName')) {
          obj['walletName'] = _ApiClient["default"].convertToType(data['walletName'], 'String');
        }
        if (data.hasOwnProperty('walletType')) {
          obj['walletType'] = _ApiClient["default"].convertToType(data['walletType'], 'String');
        }
      }
      return obj;
    }
  }]);
  return CreateNewMasterWalletRBDataItem;
}();
/**
 * Defines the name of the wallet that will be generated.
 * @member {String} walletName
 */
CreateNewMasterWalletRBDataItem.prototype['walletName'] = undefined;

/**
 * Represents if the generated wallet is only for mainnet or only for testnet .
 * @member {module:model/CreateNewMasterWalletRBDataItem.WalletTypeEnum} walletType
 */
CreateNewMasterWalletRBDataItem.prototype['walletType'] = undefined;

/**
 * Allowed values for the <code>walletType</code> property.
 * @enum {String}
 * @readonly
 */
CreateNewMasterWalletRBDataItem['WalletTypeEnum'] = {
  /**
   * value: "main"
   * @const
   */
  "main": "main",
  /**
   * value: "test"
   * @const
   */
  "test": "test"
};
var _default = CreateNewMasterWalletRBDataItem;
exports["default"] = _default;