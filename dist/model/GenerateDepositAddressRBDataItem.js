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
 * The GenerateDepositAddressRBDataItem model module.
 * @module model/GenerateDepositAddressRBDataItem
 * @version 1.7.2
 */
var GenerateDepositAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateDepositAddressRBDataItem</code>.
   * @alias module:model/GenerateDepositAddressRBDataItem
   * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
   */
  function GenerateDepositAddressRBDataItem(label) {
    _classCallCheck(this, GenerateDepositAddressRBDataItem);

    GenerateDepositAddressRBDataItem.initialize(this, label);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateDepositAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, label) {
      obj['label'] = label;
    }
    /**
     * Constructs a <code>GenerateDepositAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateDepositAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/GenerateDepositAddressRBDataItem} The populated <code>GenerateDepositAddressRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateDepositAddressRBDataItem();

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GenerateDepositAddressRBDataItem;
}();
/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */


GenerateDepositAddressRBDataItem.prototype['label'] = undefined;
var _default = GenerateDepositAddressRBDataItem;
exports["default"] = _default;