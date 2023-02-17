"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddTokensToExistingFromAddressRITSBOT = _interopRequireDefault(require("./AddTokensToExistingFromAddressRITSBOT"));
var _AddTokensToExistingFromAddressRITSET = _interopRequireDefault(require("./AddTokensToExistingFromAddressRITSET"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The AddTokensToExistingFromAddressRITS model module.
 * @module model/AddTokensToExistingFromAddressRITS
 * @version 1.13.0
 */
var AddTokensToExistingFromAddressRITS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddTokensToExistingFromAddressRITS</code>.
   * @alias module:model/AddTokensToExistingFromAddressRITS
   * @implements module:model/AddTokensToExistingFromAddressRITSBOT
   * @implements module:model/AddTokensToExistingFromAddressRITSET
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   * @param contractAddress {String} Token contract address to be transferred
   */
  function AddTokensToExistingFromAddressRITS(propertyId, contractAddress) {
    _classCallCheck(this, AddTokensToExistingFromAddressRITS);
    _AddTokensToExistingFromAddressRITSBOT["default"].initialize(this, propertyId);
    _AddTokensToExistingFromAddressRITSET["default"].initialize(this, contractAddress);
    AddTokensToExistingFromAddressRITS.initialize(this, propertyId, contractAddress);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddTokensToExistingFromAddressRITS, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }

    /**
     * Constructs a <code>AddTokensToExistingFromAddressRITS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddTokensToExistingFromAddressRITS} obj Optional instance to populate.
     * @return {module:model/AddTokensToExistingFromAddressRITS} The populated <code>AddTokensToExistingFromAddressRITS</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddTokensToExistingFromAddressRITS();
        _AddTokensToExistingFromAddressRITSBOT["default"].constructFromObject(data, obj);
        _AddTokensToExistingFromAddressRITSET["default"].constructFromObject(data, obj);
        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }
        if (data.hasOwnProperty('contractAddress')) {
          obj['contractAddress'] = _ApiClient["default"].convertToType(data['contractAddress'], 'String');
        }
      }
      return obj;
    }
  }]);
  return AddTokensToExistingFromAddressRITS;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
AddTokensToExistingFromAddressRITS.prototype['propertyId'] = undefined;

/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */
AddTokensToExistingFromAddressRITS.prototype['contractAddress'] = undefined;

// Implement AddTokensToExistingFromAddressRITSBOT interface:
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */
_AddTokensToExistingFromAddressRITSBOT["default"].prototype['propertyId'] = undefined;
// Implement AddTokensToExistingFromAddressRITSET interface:
/**
 * Token contract address to be transferred
 * @member {String} contractAddress
 */
_AddTokensToExistingFromAddressRITSET["default"].prototype['contractAddress'] = undefined;
var _default = AddTokensToExistingFromAddressRITS;
exports["default"] = _default;