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
 * The ValidateAddressRI model module.
 * @module model/ValidateAddressRI
 * @version 1.7.2
 */
var ValidateAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidateAddressRI</code>.
   * @alias module:model/ValidateAddressRI
   * @param address {String} Represents the specific address that will be checked if it's valid or not.
   * @param isValid {Boolean} Defines whether the address is valid or not. Set as boolean.
   */
  function ValidateAddressRI(address, isValid) {
    _classCallCheck(this, ValidateAddressRI);

    ValidateAddressRI.initialize(this, address, isValid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidateAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, isValid) {
      obj['address'] = address;
      obj['isValid'] = isValid;
    }
    /**
     * Constructs a <code>ValidateAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateAddressRI} obj Optional instance to populate.
     * @return {module:model/ValidateAddressRI} The populated <code>ValidateAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidateAddressRI();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('isValid')) {
          obj['isValid'] = _ApiClient["default"].convertToType(data['isValid'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ValidateAddressRI;
}();
/**
 * Represents the specific address that will be checked if it's valid or not.
 * @member {String} address
 */


ValidateAddressRI.prototype['address'] = undefined;
/**
 * Defines whether the address is valid or not. Set as boolean.
 * @member {Boolean} isValid
 */

ValidateAddressRI.prototype['isValid'] = undefined;
var _default = ValidateAddressRI;
exports["default"] = _default;