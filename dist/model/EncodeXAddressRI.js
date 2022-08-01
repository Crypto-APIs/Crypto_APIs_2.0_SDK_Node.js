"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The EncodeXAddressRI model module.
 * @module model/EncodeXAddressRI
 * @version 1.7.2
 */
var EncodeXAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EncodeXAddressRI</code>.
   * @alias module:model/EncodeXAddressRI
   * @param xAddress {String} Represents the encoded classic address with its destination tag.
   */
  function EncodeXAddressRI(xAddress) {
    _classCallCheck(this, EncodeXAddressRI);

    EncodeXAddressRI.initialize(this, xAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EncodeXAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, xAddress) {
      obj['xAddress'] = xAddress;
    }
    /**
     * Constructs a <code>EncodeXAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncodeXAddressRI} obj Optional instance to populate.
     * @return {module:model/EncodeXAddressRI} The populated <code>EncodeXAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncodeXAddressRI();

        if (data.hasOwnProperty('xAddress')) {
          obj['xAddress'] = _ApiClient["default"].convertToType(data['xAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EncodeXAddressRI;
}();
/**
 * Represents the encoded classic address with its destination tag.
 * @member {String} xAddress
 */


EncodeXAddressRI.prototype['xAddress'] = undefined;
var _default = EncodeXAddressRI;
exports["default"] = _default;