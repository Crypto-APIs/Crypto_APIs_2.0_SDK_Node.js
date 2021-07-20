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
 * The ListAssetsDetailsRIAssetLogo model module.
 * @module model/ListAssetsDetailsRIAssetLogo
 * @version 1.1.0
 */
var ListAssetsDetailsRIAssetLogo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListAssetsDetailsRIAssetLogo</code>.
   * Defines the logo of the asset.
   * @alias module:model/ListAssetsDetailsRIAssetLogo
   * @param encoding {String} Defines the encoding of the image data which is usually base64.
   * @param imageData {String} Defines the encoded image data as a string.
   * @param mimeType {String} Defines the image type of the logo - jpg, png, svg, etc.
   */
  function ListAssetsDetailsRIAssetLogo(encoding, imageData, mimeType) {
    _classCallCheck(this, ListAssetsDetailsRIAssetLogo);

    ListAssetsDetailsRIAssetLogo.initialize(this, encoding, imageData, mimeType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListAssetsDetailsRIAssetLogo, null, [{
    key: "initialize",
    value: function initialize(obj, encoding, imageData, mimeType) {
      obj['encoding'] = encoding;
      obj['imageData'] = imageData;
      obj['mimeType'] = mimeType;
    }
    /**
     * Constructs a <code>ListAssetsDetailsRIAssetLogo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListAssetsDetailsRIAssetLogo} obj Optional instance to populate.
     * @return {module:model/ListAssetsDetailsRIAssetLogo} The populated <code>ListAssetsDetailsRIAssetLogo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListAssetsDetailsRIAssetLogo();

        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient["default"].convertToType(data['encoding'], 'String');
        }

        if (data.hasOwnProperty('imageData')) {
          obj['imageData'] = _ApiClient["default"].convertToType(data['imageData'], 'String');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListAssetsDetailsRIAssetLogo;
}();
/**
 * Defines the encoding of the image data which is usually base64.
 * @member {String} encoding
 */


ListAssetsDetailsRIAssetLogo.prototype['encoding'] = undefined;
/**
 * Defines the encoded image data as a string.
 * @member {String} imageData
 */

ListAssetsDetailsRIAssetLogo.prototype['imageData'] = undefined;
/**
 * Defines the image type of the logo - jpg, png, svg, etc.
 * @member {String} mimeType
 */

ListAssetsDetailsRIAssetLogo.prototype['mimeType'] = undefined;
var _default = ListAssetsDetailsRIAssetLogo;
exports["default"] = _default;