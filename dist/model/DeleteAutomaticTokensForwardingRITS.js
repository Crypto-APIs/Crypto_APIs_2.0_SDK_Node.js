"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeleteAutomaticTokensForwardingRITSBOT = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingRITSBOT"));

var _DeleteAutomaticTokensForwardingRITSET = _interopRequireDefault(require("./DeleteAutomaticTokensForwardingRITSET"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeleteAutomaticTokensForwardingRITS model module.
 * @module model/DeleteAutomaticTokensForwardingRITS
 * @version 1.7.2
 */
var DeleteAutomaticTokensForwardingRITS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteAutomaticTokensForwardingRITS</code>.
   * @alias module:model/DeleteAutomaticTokensForwardingRITS
   * @implements module:model/DeleteAutomaticTokensForwardingRITSBOT
   * @implements module:model/DeleteAutomaticTokensForwardingRITSET
   * @param propertyId {Number} Defines the `propertyId` of the Omni Layer token.
   * @param contractAddress {String} Represents the specific `contractAddress` of the Token that will be forwarded.
   */
  function DeleteAutomaticTokensForwardingRITS(propertyId, contractAddress) {
    _classCallCheck(this, DeleteAutomaticTokensForwardingRITS);

    _DeleteAutomaticTokensForwardingRITSBOT["default"].initialize(this, propertyId);

    _DeleteAutomaticTokensForwardingRITSET["default"].initialize(this, contractAddress);

    DeleteAutomaticTokensForwardingRITS.initialize(this, propertyId, contractAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteAutomaticTokensForwardingRITS, null, [{
    key: "initialize",
    value: function initialize(obj, propertyId, contractAddress) {
      obj['propertyId'] = propertyId;
      obj['contractAddress'] = contractAddress;
    }
    /**
     * Constructs a <code>DeleteAutomaticTokensForwardingRITS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteAutomaticTokensForwardingRITS} obj Optional instance to populate.
     * @return {module:model/DeleteAutomaticTokensForwardingRITS} The populated <code>DeleteAutomaticTokensForwardingRITS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteAutomaticTokensForwardingRITS();

        _DeleteAutomaticTokensForwardingRITSBOT["default"].constructFromObject(data, obj);

        _DeleteAutomaticTokensForwardingRITSET["default"].constructFromObject(data, obj);

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

  return DeleteAutomaticTokensForwardingRITS;
}();
/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */


DeleteAutomaticTokensForwardingRITS.prototype['propertyId'] = undefined;
/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

DeleteAutomaticTokensForwardingRITS.prototype['contractAddress'] = undefined; // Implement DeleteAutomaticTokensForwardingRITSBOT interface:

/**
 * Defines the `propertyId` of the Omni Layer token.
 * @member {Number} propertyId
 */

_DeleteAutomaticTokensForwardingRITSBOT["default"].prototype['propertyId'] = undefined; // Implement DeleteAutomaticTokensForwardingRITSET interface:

/**
 * Represents the specific `contractAddress` of the Token that will be forwarded.
 * @member {String} contractAddress
 */

_DeleteAutomaticTokensForwardingRITSET["default"].prototype['contractAddress'] = undefined;
var _default = DeleteAutomaticTokensForwardingRITS;
exports["default"] = _default;