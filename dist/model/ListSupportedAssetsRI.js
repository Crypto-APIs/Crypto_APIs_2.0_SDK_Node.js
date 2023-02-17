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
 * The ListSupportedAssetsRI model module.
 * @module model/ListSupportedAssetsRI
 * @version 1.13.0
 */
var ListSupportedAssetsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSupportedAssetsRI</code>.
   * @alias module:model/ListSupportedAssetsRI
   * @param assetId {String} Defines the unique ID of the specific asset.
   * @param assetName {String} Specifies the name of the asset in question.
   * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
   * @param assetType {module:model/ListSupportedAssetsRI.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param originalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
   */
  function ListSupportedAssetsRI(assetId, assetName, assetSymbol, assetType, originalSymbol) {
    _classCallCheck(this, ListSupportedAssetsRI);
    ListSupportedAssetsRI.initialize(this, assetId, assetName, assetSymbol, assetType, originalSymbol);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListSupportedAssetsRI, null, [{
    key: "initialize",
    value: function initialize(obj, assetId, assetName, assetSymbol, assetType, originalSymbol) {
      obj['assetId'] = assetId;
      obj['assetName'] = assetName;
      obj['assetSymbol'] = assetSymbol;
      obj['assetType'] = assetType;
      obj['originalSymbol'] = originalSymbol;
    }

    /**
     * Constructs a <code>ListSupportedAssetsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSupportedAssetsRI} obj Optional instance to populate.
     * @return {module:model/ListSupportedAssetsRI} The populated <code>ListSupportedAssetsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSupportedAssetsRI();
        if (data.hasOwnProperty('assetId')) {
          obj['assetId'] = _ApiClient["default"].convertToType(data['assetId'], 'String');
        }
        if (data.hasOwnProperty('assetName')) {
          obj['assetName'] = _ApiClient["default"].convertToType(data['assetName'], 'String');
        }
        if (data.hasOwnProperty('assetSymbol')) {
          obj['assetSymbol'] = _ApiClient["default"].convertToType(data['assetSymbol'], 'String');
        }
        if (data.hasOwnProperty('assetType')) {
          obj['assetType'] = _ApiClient["default"].convertToType(data['assetType'], 'String');
        }
        if (data.hasOwnProperty('originalSymbol')) {
          obj['originalSymbol'] = _ApiClient["default"].convertToType(data['originalSymbol'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListSupportedAssetsRI;
}();
/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */
ListSupportedAssetsRI.prototype['assetId'] = undefined;

/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */
ListSupportedAssetsRI.prototype['assetName'] = undefined;

/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */
ListSupportedAssetsRI.prototype['assetSymbol'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/ListSupportedAssetsRI.AssetTypeEnum} assetType
 */
ListSupportedAssetsRI.prototype['assetType'] = undefined;

/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} originalSymbol
 */
ListSupportedAssetsRI.prototype['originalSymbol'] = undefined;

/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
ListSupportedAssetsRI['AssetTypeEnum'] = {
  /**
   * value: "fiat"
   * @const
   */
  "fiat": "fiat",
  /**
   * value: "crypto"
   * @const
   */
  "crypto": "crypto"
};
var _default = ListSupportedAssetsRI;
exports["default"] = _default;