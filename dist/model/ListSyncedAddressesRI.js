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
 * The ListSyncedAddressesRI model module.
 * @module model/ListSyncedAddressesRI
 * @version 1.7.2
 */
var ListSyncedAddressesRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSyncedAddressesRI</code>.
   * @alias module:model/ListSyncedAddressesRI
   * @param address {String} Represents the address.
   * @param index {Number} Represents the index position of the transaction in the specific block.
   */
  function ListSyncedAddressesRI(address, index) {
    _classCallCheck(this, ListSyncedAddressesRI);

    ListSyncedAddressesRI.initialize(this, address, index);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSyncedAddressesRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, index) {
      obj['address'] = address;
      obj['index'] = index;
    }
    /**
     * Constructs a <code>ListSyncedAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRI} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRI} The populated <code>ListSyncedAddressesRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSyncedAddressesRI();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListSyncedAddressesRI;
}();
/**
 * Represents the address.
 * @member {String} address
 */


ListSyncedAddressesRI.prototype['address'] = undefined;
/**
 * Represents the index position of the transaction in the specific block.
 * @member {Number} index
 */

ListSyncedAddressesRI.prototype['index'] = undefined;
var _default = ListSyncedAddressesRI;
exports["default"] = _default;