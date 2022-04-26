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
 * The ListOmniTokensByAddressRI model module.
 * @module model/ListOmniTokensByAddressRI
 * @version 1.5.0
 */
var ListOmniTokensByAddressRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListOmniTokensByAddressRI</code>.
   * @alias module:model/ListOmniTokensByAddressRI
   * @param balance {String} Defines the balance of the Omni tokens to send in the address.
   * @param frozen {String} Defines the amount frozen by the issuer (applies to managed properties only).
   * @param name {String} Defines the name of the Omni tokens to send.
   * @param propertyId {Number} Represents the identifier of the tokens to send.
   * @param reserved {String} Represents the amount reserved by sell offers and accepts.
   */
  function ListOmniTokensByAddressRI(balance, frozen, name, propertyId, reserved) {
    _classCallCheck(this, ListOmniTokensByAddressRI);

    ListOmniTokensByAddressRI.initialize(this, balance, frozen, name, propertyId, reserved);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListOmniTokensByAddressRI, null, [{
    key: "initialize",
    value: function initialize(obj, balance, frozen, name, propertyId, reserved) {
      obj['balance'] = balance;
      obj['frozen'] = frozen;
      obj['name'] = name;
      obj['propertyId'] = propertyId;
      obj['reserved'] = reserved;
    }
    /**
     * Constructs a <code>ListOmniTokensByAddressRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListOmniTokensByAddressRI} obj Optional instance to populate.
     * @return {module:model/ListOmniTokensByAddressRI} The populated <code>ListOmniTokensByAddressRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListOmniTokensByAddressRI();

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'String');
        }

        if (data.hasOwnProperty('frozen')) {
          obj['frozen'] = _ApiClient["default"].convertToType(data['frozen'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('propertyId')) {
          obj['propertyId'] = _ApiClient["default"].convertToType(data['propertyId'], 'Number');
        }

        if (data.hasOwnProperty('reserved')) {
          obj['reserved'] = _ApiClient["default"].convertToType(data['reserved'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListOmniTokensByAddressRI;
}();
/**
 * Defines the balance of the Omni tokens to send in the address.
 * @member {String} balance
 */


ListOmniTokensByAddressRI.prototype['balance'] = undefined;
/**
 * Defines the amount frozen by the issuer (applies to managed properties only).
 * @member {String} frozen
 */

ListOmniTokensByAddressRI.prototype['frozen'] = undefined;
/**
 * Defines the name of the Omni tokens to send.
 * @member {String} name
 */

ListOmniTokensByAddressRI.prototype['name'] = undefined;
/**
 * Represents the identifier of the tokens to send.
 * @member {Number} propertyId
 */

ListOmniTokensByAddressRI.prototype['propertyId'] = undefined;
/**
 * Represents the amount reserved by sell offers and accepts.
 * @member {String} reserved
 */

ListOmniTokensByAddressRI.prototype['reserved'] = undefined;
var _default = ListOmniTokensByAddressRI;
exports["default"] = _default;