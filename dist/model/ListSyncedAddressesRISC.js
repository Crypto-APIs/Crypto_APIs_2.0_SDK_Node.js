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
 * The ListSyncedAddressesRISC model module.
 * @module model/ListSyncedAddressesRISC
 * @version 1.7.0
 */
var ListSyncedAddressesRISC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSyncedAddressesRISC</code>.
   * Coin Asset Data
   * @alias module:model/ListSyncedAddressesRISC
   * @param amount {String} Defines the available coins amount in the specific address.
   */
  function ListSyncedAddressesRISC(amount) {
    _classCallCheck(this, ListSyncedAddressesRISC);

    ListSyncedAddressesRISC.initialize(this, amount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSyncedAddressesRISC, null, [{
    key: "initialize",
    value: function initialize(obj, amount) {
      obj['amount'] = amount;
    }
    /**
     * Constructs a <code>ListSyncedAddressesRISC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRISC} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRISC} The populated <code>ListSyncedAddressesRISC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSyncedAddressesRISC();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSyncedAddressesRISC;
}();
/**
 * Defines the available coins amount in the specific address.
 * @member {String} amount
 */


ListSyncedAddressesRISC.prototype['amount'] = undefined;
var _default = ListSyncedAddressesRISC;
exports["default"] = _default;