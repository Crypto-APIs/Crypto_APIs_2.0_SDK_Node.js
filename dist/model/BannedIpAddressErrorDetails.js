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
 * The BannedIpAddressErrorDetails model module.
 * @module model/BannedIpAddressErrorDetails
 * @version 1.2.1
 */
var BannedIpAddressErrorDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BannedIpAddressErrorDetails</code>.
   * @alias module:model/BannedIpAddressErrorDetails
   * @param attribute {String} Specifies an attribute of the error by name.
   * @param message {String} Specifies the details of an attribute as part from the error.
   */
  function BannedIpAddressErrorDetails(attribute, message) {
    _classCallCheck(this, BannedIpAddressErrorDetails);

    BannedIpAddressErrorDetails.initialize(this, attribute, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BannedIpAddressErrorDetails, null, [{
    key: "initialize",
    value: function initialize(obj, attribute, message) {
      obj['attribute'] = attribute;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>BannedIpAddressErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BannedIpAddressErrorDetails} obj Optional instance to populate.
     * @return {module:model/BannedIpAddressErrorDetails} The populated <code>BannedIpAddressErrorDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BannedIpAddressErrorDetails();

        if (data.hasOwnProperty('attribute')) {
          obj['attribute'] = _ApiClient["default"].convertToType(data['attribute'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BannedIpAddressErrorDetails;
}();
/**
 * Specifies an attribute of the error by name.
 * @member {String} attribute
 */


BannedIpAddressErrorDetails.prototype['attribute'] = undefined;
/**
 * Specifies the details of an attribute as part from the error.
 * @member {String} message
 */

BannedIpAddressErrorDetails.prototype['message'] = undefined;
var _default = BannedIpAddressErrorDetails;
exports["default"] = _default;