"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetAssetDetailsByAssetIDRIAssetLogo = _interopRequireDefault(require("./GetAssetDetailsByAssetIDRIAssetLogo"));
var _GetAssetDetailsByAssetIDRILatestRate = _interopRequireDefault(require("./GetAssetDetailsByAssetIDRILatestRate"));
var _GetAssetDetailsByAssetSymbolRIS = _interopRequireDefault(require("./GetAssetDetailsByAssetSymbolRIS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAssetDetailsByAssetSymbolRI model module.
 * @module model/GetAssetDetailsByAssetSymbolRI
 * @version 1.13.0
 */
var GetAssetDetailsByAssetSymbolRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAssetDetailsByAssetSymbolRI</code>.
   * @alias module:model/GetAssetDetailsByAssetSymbolRI
   * @param assetId {String} Defines the unique ID of the specific asset.
   * @param assetLogo {module:model/GetAssetDetailsByAssetIDRIAssetLogo} 
   * @param assetName {String} Specifies the name of the asset in question.
   * @param assetOriginalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
   * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
   * @param assetType {module:model/GetAssetDetailsByAssetSymbolRI.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param latestRate {module:model/GetAssetDetailsByAssetIDRILatestRate} 
   * @param specificData {module:model/GetAssetDetailsByAssetSymbolRIS} 
   */
  function GetAssetDetailsByAssetSymbolRI(assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) {
    _classCallCheck(this, GetAssetDetailsByAssetSymbolRI);
    GetAssetDetailsByAssetSymbolRI.initialize(this, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAssetDetailsByAssetSymbolRI, null, [{
    key: "initialize",
    value: function initialize(obj, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) {
      obj['assetId'] = assetId;
      obj['assetLogo'] = assetLogo;
      obj['assetName'] = assetName;
      obj['assetOriginalSymbol'] = assetOriginalSymbol;
      obj['assetSymbol'] = assetSymbol;
      obj['assetType'] = assetType;
      obj['latestRate'] = latestRate;
      obj['specificData'] = specificData;
    }

    /**
     * Constructs a <code>GetAssetDetailsByAssetSymbolRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetSymbolRI} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetSymbolRI} The populated <code>GetAssetDetailsByAssetSymbolRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAssetDetailsByAssetSymbolRI();
        if (data.hasOwnProperty('assetId')) {
          obj['assetId'] = _ApiClient["default"].convertToType(data['assetId'], 'String');
        }
        if (data.hasOwnProperty('assetLogo')) {
          obj['assetLogo'] = _GetAssetDetailsByAssetIDRIAssetLogo["default"].constructFromObject(data['assetLogo']);
        }
        if (data.hasOwnProperty('assetName')) {
          obj['assetName'] = _ApiClient["default"].convertToType(data['assetName'], 'String');
        }
        if (data.hasOwnProperty('assetOriginalSymbol')) {
          obj['assetOriginalSymbol'] = _ApiClient["default"].convertToType(data['assetOriginalSymbol'], 'String');
        }
        if (data.hasOwnProperty('assetSymbol')) {
          obj['assetSymbol'] = _ApiClient["default"].convertToType(data['assetSymbol'], 'String');
        }
        if (data.hasOwnProperty('assetType')) {
          obj['assetType'] = _ApiClient["default"].convertToType(data['assetType'], 'String');
        }
        if (data.hasOwnProperty('latestRate')) {
          obj['latestRate'] = _GetAssetDetailsByAssetIDRILatestRate["default"].constructFromObject(data['latestRate']);
        }
        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }
        if (data.hasOwnProperty('specificData')) {
          obj['specificData'] = _GetAssetDetailsByAssetSymbolRIS["default"].constructFromObject(data['specificData']);
        }
      }
      return obj;
    }
  }]);
  return GetAssetDetailsByAssetSymbolRI;
}();
/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetId'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRIAssetLogo} assetLogo
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetLogo'] = undefined;

/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetName'] = undefined;

/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} assetOriginalSymbol
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetOriginalSymbol'] = undefined;

/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetSymbol'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/GetAssetDetailsByAssetSymbolRI.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetSymbolRI.prototype['assetType'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRILatestRate} latestRate
 */
GetAssetDetailsByAssetSymbolRI.prototype['latestRate'] = undefined;

/**
 * Represents the asset`s unique slug string in Crypto APIs listings.
 * @member {String} slug
 */
GetAssetDetailsByAssetSymbolRI.prototype['slug'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetSymbolRIS} specificData
 */
GetAssetDetailsByAssetSymbolRI.prototype['specificData'] = undefined;

/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetSymbolRI['AssetTypeEnum'] = {
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
var _default = GetAssetDetailsByAssetSymbolRI;
exports["default"] = _default;