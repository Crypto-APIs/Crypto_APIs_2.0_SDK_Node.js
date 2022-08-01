"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance = _interopRequireDefault(require("./GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance"));

var _GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner = _interopRequireDefault(require("./GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner"));

var _GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner = _interopRequireDefault(require("./GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetHDWalletXPubYPubZPubAssetsRI model module.
 * @module model/GetHDWalletXPubYPubZPubAssetsRI
 * @version 1.7.2
 */
var GetHDWalletXPubYPubZPubAssetsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetHDWalletXPubYPubZPubAssetsRI</code>.
   * @alias module:model/GetHDWalletXPubYPubZPubAssetsRI
   * @param confirmedBalance {module:model/GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance} 
   */
  function GetHDWalletXPubYPubZPubAssetsRI(confirmedBalance) {
    _classCallCheck(this, GetHDWalletXPubYPubZPubAssetsRI);

    GetHDWalletXPubYPubZPubAssetsRI.initialize(this, confirmedBalance);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHDWalletXPubYPubZPubAssetsRI, null, [{
    key: "initialize",
    value: function initialize(obj, confirmedBalance) {
      obj['confirmedBalance'] = confirmedBalance;
    }
    /**
     * Constructs a <code>GetHDWalletXPubYPubZPubAssetsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHDWalletXPubYPubZPubAssetsRI} obj Optional instance to populate.
     * @return {module:model/GetHDWalletXPubYPubZPubAssetsRI} The populated <code>GetHDWalletXPubYPubZPubAssetsRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHDWalletXPubYPubZPubAssetsRI();

        if (data.hasOwnProperty('fungibleTokens')) {
          obj['fungibleTokens'] = _ApiClient["default"].convertToType(data['fungibleTokens'], [_GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner["default"]]);
        }

        if (data.hasOwnProperty('nonFungibleTokens')) {
          obj['nonFungibleTokens'] = _ApiClient["default"].convertToType(data['nonFungibleTokens'], [_GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner["default"]]);
        }

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }
      }

      return obj;
    }
  }]);

  return GetHDWalletXPubYPubZPubAssetsRI;
}();
/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/GetHDWalletXPubYPubZPubAssetsRIFungibleTokensInner>} fungibleTokens
 */


GetHDWalletXPubYPubZPubAssetsRI.prototype['fungibleTokens'] = undefined;
/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/GetHDWalletXPubYPubZPubAssetsRINonFungibleTokensInner>} nonFungibleTokens
 */

GetHDWalletXPubYPubZPubAssetsRI.prototype['nonFungibleTokens'] = undefined;
/**
 * @member {module:model/GetHDWalletXPubYPubZPubAssetsRIConfirmedBalance} confirmedBalance
 */

GetHDWalletXPubYPubZPubAssetsRI.prototype['confirmedBalance'] = undefined;
var _default = GetHDWalletXPubYPubZPubAssetsRI;
exports["default"] = _default;