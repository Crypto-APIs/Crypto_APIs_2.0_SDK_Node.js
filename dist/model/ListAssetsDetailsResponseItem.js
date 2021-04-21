"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListAssetsDetailsResponseItemAssetLogo = _interopRequireDefault(require("./ListAssetsDetailsResponseItemAssetLogo"));

var _ListAssetsDetailsResponseItemLatestRate = _interopRequireDefault(require("./ListAssetsDetailsResponseItemLatestRate"));

var _ListAssetsDetailsResponseItemSpecificData = _interopRequireDefault(require("./ListAssetsDetailsResponseItemSpecificData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListAssetsDetailsResponseItem model module.
 * @module model/ListAssetsDetailsResponseItem
 * @version 2.0.0
 */
var ListAssetsDetailsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAssetsDetailsResponseItem</code>.
   * @alias module:model/ListAssetsDetailsResponseItem
   * @param assetId {String} Defines the unique ID of the specific asset.
   * @param assetLogo {module:model/ListAssetsDetailsResponseItemAssetLogo} 
   * @param assetName {String} Specifies the name of the asset in question.
   * @param assetOriginalSymbol {String} Specifies the asset's original symbol as introduced by its founders.
   * @param assetSymbol {String} Specifies the asset's unique symbol in the Crypto APIs listings.
   * @param assetType {module:model/ListAssetsDetailsResponseItem.AssetTypeEnum} Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
   * @param latestRate {module:model/ListAssetsDetailsResponseItemLatestRate} 
   * @param specificData {module:model/ListAssetsDetailsResponseItemSpecificData} 
   */
  function ListAssetsDetailsResponseItem(assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData) {
    _classCallCheck(this, ListAssetsDetailsResponseItem);

    ListAssetsDetailsResponseItem.initialize(this, assetId, assetLogo, assetName, assetOriginalSymbol, assetSymbol, assetType, latestRate, specificData);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAssetsDetailsResponseItem, null, [{
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
     * Constructs a <code>ListAssetsDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsResponseItem} The populated <code>ListAssetsDetailsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAssetsDetailsResponseItem();

        if (data.hasOwnProperty('assetId')) {
          obj['assetId'] = _ApiClient["default"].convertToType(data['assetId'], 'String');
        }

        if (data.hasOwnProperty('assetLogo')) {
          obj['assetLogo'] = _ListAssetsDetailsResponseItemAssetLogo["default"].constructFromObject(data['assetLogo']);
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
          obj['latestRate'] = _ListAssetsDetailsResponseItemLatestRate["default"].constructFromObject(data['latestRate']);
        }

        if (data.hasOwnProperty('specificData')) {
          obj['specificData'] = _ListAssetsDetailsResponseItemSpecificData["default"].constructFromObject(data['specificData']);
        }
      }

      return obj;
    }
  }]);

  return ListAssetsDetailsResponseItem;
}();
/**
 * Defines the unique ID of the specific asset.
 * @member {String} assetId
 */


ListAssetsDetailsResponseItem.prototype['assetId'] = undefined;
/**
 * @member {module:model/ListAssetsDetailsResponseItemAssetLogo} assetLogo
 */

ListAssetsDetailsResponseItem.prototype['assetLogo'] = undefined;
/**
 * Specifies the name of the asset in question.
 * @member {String} assetName
 */

ListAssetsDetailsResponseItem.prototype['assetName'] = undefined;
/**
 * Specifies the asset's original symbol as introduced by its founders.
 * @member {String} assetOriginalSymbol
 */

ListAssetsDetailsResponseItem.prototype['assetOriginalSymbol'] = undefined;
/**
 * Specifies the asset's unique symbol in the Crypto APIs listings.
 * @member {String} assetSymbol
 */

ListAssetsDetailsResponseItem.prototype['assetSymbol'] = undefined;
/**
 * Defines the type of the supported asset. This could be either \"crypto\" or \"fiat\".
 * @member {module:model/ListAssetsDetailsResponseItem.AssetTypeEnum} assetType
 */

ListAssetsDetailsResponseItem.prototype['assetType'] = undefined;
/**
 * @member {module:model/ListAssetsDetailsResponseItemLatestRate} latestRate
 */

ListAssetsDetailsResponseItem.prototype['latestRate'] = undefined;
/**
 * @member {module:model/ListAssetsDetailsResponseItemSpecificData} specificData
 */

ListAssetsDetailsResponseItem.prototype['specificData'] = undefined;
/**
 * Allowed values for the <code>assetType</code> property.
 * @enum {String}
 * @readonly
 */

ListAssetsDetailsResponseItem['AssetTypeEnum'] = {
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
var _default = ListAssetsDetailsResponseItem;
exports["default"] = _default;