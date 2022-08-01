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
 * The ValidateAddressRBDataItem model module.
 * @module model/ValidateAddressRBDataItem
 * @version 1.7.2
 */
var ValidateAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidateAddressRBDataItem</code>.
   * @alias module:model/ValidateAddressRBDataItem
   * @param address {String} Represents the specific address that will be checked if it's valid or not.
   */
  function ValidateAddressRBDataItem(address) {
    _classCallCheck(this, ValidateAddressRBDataItem);

    ValidateAddressRBDataItem.initialize(this, address);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidateAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, address) {
      obj['address'] = address;
    }
    /**
     * Constructs a <code>ValidateAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/ValidateAddressRBDataItem} The populated <code>ValidateAddressRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidateAddressRBDataItem();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValidateAddressRBDataItem;
}();
/**
 * Represents the specific address that will be checked if it's valid or not.
 * @member {String} address
 */


ValidateAddressRBDataItem.prototype['address'] = undefined;
var _default = ValidateAddressRBDataItem;
exports["default"] = _default;