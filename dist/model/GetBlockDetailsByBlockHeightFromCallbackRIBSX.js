"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetLatestMinedXRPRippleBlockRITotalCoins = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockRITotalCoins"));

var _GetLatestMinedXRPRippleBlockRITotalFees = _interopRequireDefault(require("./GetLatestMinedXRPRippleBlockRITotalFees"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetBlockDetailsByBlockHeightFromCallbackRIBSX model module.
 * @module model/GetBlockDetailsByBlockHeightFromCallbackRIBSX
 * @version 1.7.2
 */
var GetBlockDetailsByBlockHeightFromCallbackRIBSX = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code>.
   * XRP
   * @alias module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX
   * @param totalCoins {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} 
   * @param totalFees {module:model/GetLatestMinedXRPRippleBlockRITotalFees} 
   */
  function GetBlockDetailsByBlockHeightFromCallbackRIBSX(totalCoins, totalFees) {
    _classCallCheck(this, GetBlockDetailsByBlockHeightFromCallbackRIBSX);

    GetBlockDetailsByBlockHeightFromCallbackRIBSX.initialize(this, totalCoins, totalFees);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetBlockDetailsByBlockHeightFromCallbackRIBSX, null, [{
    key: "initialize",
    value: function initialize(obj, totalCoins, totalFees) {
      obj['totalCoins'] = totalCoins;
      obj['totalFees'] = totalFees;
    }
    /**
     * Constructs a <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX} obj Optional instance to populate.
     * @return {module:model/GetBlockDetailsByBlockHeightFromCallbackRIBSX} The populated <code>GetBlockDetailsByBlockHeightFromCallbackRIBSX</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetBlockDetailsByBlockHeightFromCallbackRIBSX();

        if (data.hasOwnProperty('totalCoins')) {
          obj['totalCoins'] = _GetLatestMinedXRPRippleBlockRITotalCoins["default"].constructFromObject(data['totalCoins']);
        }

        if (data.hasOwnProperty('totalFees')) {
          obj['totalFees'] = _GetLatestMinedXRPRippleBlockRITotalFees["default"].constructFromObject(data['totalFees']);
        }
      }

      return obj;
    }
  }]);

  return GetBlockDetailsByBlockHeightFromCallbackRIBSX;
}();
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalCoins} totalCoins
 */


GetBlockDetailsByBlockHeightFromCallbackRIBSX.prototype['totalCoins'] = undefined;
/**
 * @member {module:model/GetLatestMinedXRPRippleBlockRITotalFees} totalFees
 */

GetBlockDetailsByBlockHeightFromCallbackRIBSX.prototype['totalFees'] = undefined;
var _default = GetBlockDetailsByBlockHeightFromCallbackRIBSX;
exports["default"] = _default;