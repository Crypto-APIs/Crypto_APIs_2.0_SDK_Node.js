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
 * The ListDepositAddressesRI model module.
 * @module model/ListDepositAddressesRI
 * @version 1.2.0
 */
var ListDepositAddressesRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDepositAddressesRI</code>.
   * @alias module:model/ListDepositAddressesRI
   * @param address {String} Specifies the specific address's unique string value.
   * @param createdTimestamp {Number} Defines the specific UNIX time when the deposit address was created.
   * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
   */
  function ListDepositAddressesRI(address, createdTimestamp, label) {
    _classCallCheck(this, ListDepositAddressesRI);

    ListDepositAddressesRI.initialize(this, address, createdTimestamp, label);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListDepositAddressesRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, createdTimestamp, label) {
      obj['address'] = address;
      obj['createdTimestamp'] = createdTimestamp;
      obj['label'] = label;
    }
    /**
     * Constructs a <code>ListDepositAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRI} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRI} The populated <code>ListDepositAddressesRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDepositAddressesRI();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListDepositAddressesRI;
}();
/**
 * Specifies the specific address's unique string value.
 * @member {String} address
 */


ListDepositAddressesRI.prototype['address'] = undefined;
/**
 * Defines the specific UNIX time when the deposit address was created.
 * @member {Number} createdTimestamp
 */

ListDepositAddressesRI.prototype['createdTimestamp'] = undefined;
/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */

ListDepositAddressesRI.prototype['label'] = undefined;
var _default = ListDepositAddressesRI;
exports["default"] = _default;