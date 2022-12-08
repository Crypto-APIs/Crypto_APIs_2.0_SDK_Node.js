"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetAssetDetailsByAssetIDRIAssetLogo = _interopRequireDefault(require("./GetAssetDetailsByAssetIDRIAssetLogo"));
var _GetAssetDetailsByAssetIDRILatestRate = _interopRequireDefault(require("./GetAssetDetailsByAssetIDRILatestRate"));
var _GetAssetDetailsByAssetIDRIS = _interopRequireDefault(require("./GetAssetDetailsByAssetIDRIS"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAssetDetailsByAssetIDRI model module.
 * @module model/GetAssetDetailsByAssetIDRI
 * @version 1.11.0
 */
var GetAssetDetailsByAssetIDRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAssetDetailsByAssetIDRI</code>.
   * @alias module:model/GetAssetDetailsByAssetIDRI
   * @param assetId {String} Defines the unique ID of the specific asset.
   * @param assetLogo {module:model/GetAssetDetailsByAssetIDRIAssetLogo} 
   * @param assetName {String} Specifies the name of the asset in question.
   * @param assetOriginalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
   * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
   * @param assetType {module:model/GetAssetDetailsByAssetIDRI.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param latestRate {module:model/GetAssetDetailsByAssetIDRILatestRate} 
   * @param specificData {module:model/GetAssetDetailsByAssetIDRIS} 
   */
  function GetAssetDetailsByAssetIDRI(assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) {
    _classCallCheck(this, GetAssetDetailsByAssetIDRI);
    GetAssetDetailsByAssetIDRI.initialize(this, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAssetDetailsByAssetIDRI, null, [{
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
     * Constructs a <code>GetAssetDetailsByAssetIDRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetDetailsByAssetIDRI} obj Optional instance to populate.
     * @return {module:model/GetAssetDetailsByAssetIDRI} The populated <code>GetAssetDetailsByAssetIDRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAssetDetailsByAssetIDRI();
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
          obj['specificData'] = _GetAssetDetailsByAssetIDRIS["default"].constructFromObject(data['specificData']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetAssetDetailsByAssetIDRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetAssetDetailsByAssetIDRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetAssetDetailsByAssetIDRI.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['assetId'] && !(typeof data['assetId'] === 'string' || data['assetId'] instanceof String)) {
        throw new Error("Expected the field `assetId` to be a primitive type in the JSON string but got " + data['assetId']);
      }
      // validate the optional field `assetLogo`
      if (data['assetLogo']) {
        // data not null
        _GetAssetDetailsByAssetIDRIAssetLogo["default"].validateJSON(data['assetLogo']);
      }
      // ensure the json data is a string
      if (data['assetName'] && !(typeof data['assetName'] === 'string' || data['assetName'] instanceof String)) {
        throw new Error("Expected the field `assetName` to be a primitive type in the JSON string but got " + data['assetName']);
      }
      // ensure the json data is a string
      if (data['assetOriginalSymbol'] && !(typeof data['assetOriginalSymbol'] === 'string' || data['assetOriginalSymbol'] instanceof String)) {
        throw new Error("Expected the field `assetOriginalSymbol` to be a primitive type in the JSON string but got " + data['assetOriginalSymbol']);
      }
      // ensure the json data is a string
      if (data['assetSymbol'] && !(typeof data['assetSymbol'] === 'string' || data['assetSymbol'] instanceof String)) {
        throw new Error("Expected the field `assetSymbol` to be a primitive type in the JSON string but got " + data['assetSymbol']);
      }
      // ensure the json data is a string
      if (data['assetType'] && !(typeof data['assetType'] === 'string' || data['assetType'] instanceof String)) {
        throw new Error("Expected the field `assetType` to be a primitive type in the JSON string but got " + data['assetType']);
      }
      // validate the optional field `latestRate`
      if (data['latestRate']) {
        // data not null
        _GetAssetDetailsByAssetIDRILatestRate["default"].validateJSON(data['latestRate']);
      }
      // ensure the json data is a string
      if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
        throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
      }
      // validate the optional field `specificData`
      if (data['specificData']) {
        // data not null
        _GetAssetDetailsByAssetIDRIS["default"].validateJSON(data['specificData']);
      }
      return true;
    }
  }]);
  return GetAssetDetailsByAssetIDRI;
}();
GetAssetDetailsByAssetIDRI.RequiredProperties = ["assetId", "assetLogo", "assetName", "assetOriginalSymbol", "assetSymbol", "assetType", "latestRate", "specificData"];

/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */
GetAssetDetailsByAssetIDRI.prototype['assetId'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRIAssetLogo} assetLogo
 */
GetAssetDetailsByAssetIDRI.prototype['assetLogo'] = undefined;

/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */
GetAssetDetailsByAssetIDRI.prototype['assetName'] = undefined;

/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} assetOriginalSymbol
 */
GetAssetDetailsByAssetIDRI.prototype['assetOriginalSymbol'] = undefined;

/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */
GetAssetDetailsByAssetIDRI.prototype['assetSymbol'] = undefined;

/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/GetAssetDetailsByAssetIDRI.AssetTypeEnum} assetType
 */
GetAssetDetailsByAssetIDRI.prototype['assetType'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRILatestRate} latestRate
 */
GetAssetDetailsByAssetIDRI.prototype['latestRate'] = undefined;

/**
 * Represents the asset`s unique slug string in Crypto APIs listings.
 * @member {String} slug
 */
GetAssetDetailsByAssetIDRI.prototype['slug'] = undefined;

/**
 * @member {module:model/GetAssetDetailsByAssetIDRIS} specificData
 */
GetAssetDetailsByAssetIDRI.prototype['specificData'] = undefined;

/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */
GetAssetDetailsByAssetIDRI['AssetTypeEnum'] = {
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
var _default = GetAssetDetailsByAssetIDRI;
exports["default"] = _default;