"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAutomaticTokensForwardingRITSBOT = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRITSBOT"));

var _CreateAutomaticTokensForwardingRITSET = _interopRequireDefault(require("./CreateAutomaticTokensForwardingRITSET"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CreateAutomaticTokensForwardingRITS model module.
 * @module model/CreateAutomaticTokensForwardingRITS
 * @version 1.7.2
 */
var CreateAutomaticTokensForwardingRITS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAutomaticTokensForwardingRITS</code>.
   * @alias module:model/CreateAutomaticTokensForwardingRITS
   * @implements module:model/CreateAutomaticTokensForwardingRITSBOT
   * @implements module:model/CreateAutomaticTokensForwardingRITSET
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function CreateAutomaticTokensForwardingRITS(propertyId, contractAddress) {
    _classCallCheck(this, CreateAutomaticTokensForwardingRITS);

    _CreateAutomaticTokensForwardingRITSBOT["default"].initialize(this, propertyId);

    _CreateAutomaticTokensForwardingRITSET["default"].initialize(this, contractAddress);

    CreateAutomaticTokensForwardingRITS.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAutomaticTokensForwardingRITS, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>CreateAutomaticTokensForwardingRITS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAutomaticTokensForwardingRITS} obj Optional instance to populate.
     * @return {module:model/CreateAutomaticTokensForwardingRITS} The populated <code>CreateAutomaticTokensForwardingRITS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAutomaticTokensForwardingRITS();

        _CreateAutomaticTokensForwardingRITSBOT["default"].constructFromObject(data, obj);

        _CreateAutomaticTokensForwardingRITSET["default"].constructFromObject(data, obj);

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

  return CreateAutomaticTokensForwardingRITS;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


CreateAutomaticTokensForwardingRITS.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

CreateAutomaticTokensForwardingRITS.prototype['contractAddress'] = undefined; // Implement CreateAutomaticTokensForwardingRITSBOT interface:

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */

_CreateAutomaticTokensForwardingRITSBOT["default"].prototype['propertyId'] = undefined; // Implement CreateAutomaticTokensForwardingRITSET interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_CreateAutomaticTokensForwardingRITSET["default"].prototype['contractAddress'] = undefined;
var _default = CreateAutomaticTokensForwardingRITS;
exports["default"] = _default;