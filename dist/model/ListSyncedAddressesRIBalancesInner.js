"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListSyncedAddressesRIS = _interopRequireDefault(require("./ListSyncedAddressesRIS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListSyncedAddressesRIBalancesInner model module.
 * @module model/ListSyncedAddressesRIBalancesInner
 * @version 1.7.1
 */
var ListSyncedAddressesRIBalancesInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSyncedAddressesRIBalancesInner</code>.
   * @alias module:model/ListSyncedAddressesRIBalancesInner
   * @param assetData {module:model/ListSyncedAddressesRIS} 
   * @param symbol {String} Defines the symbol of the asset.
   * @param type {String} Defines the type of the asset. (If its COIN or Token)
   */
  function ListSyncedAddressesRIBalancesInner(assetData, symbol, type) {
    _classCallCheck(this, ListSyncedAddressesRIBalancesInner);

    ListSyncedAddressesRIBalancesInner.initialize(this, assetData, symbol, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListSyncedAddressesRIBalancesInner, null, [{
    key: "initialize",
    value: function initialize(obj, assetData, symbol, type) {
      obj['assetData'] = assetData;
      obj['symbol'] = symbol;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>ListSyncedAddressesRIBalancesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSyncedAddressesRIBalancesInner} obj Optional instance to populate.
     * @return {module:model/ListSyncedAddressesRIBalancesInner} The populated <code>ListSyncedAddressesRIBalancesInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSyncedAddressesRIBalancesInner();

        if (data.hasOwnProperty('assetData')) {
          obj['assetData'] = _ListSyncedAddressesRIS["default"].constructFromObject(data['assetData']);
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ListSyncedAddressesRIBalancesInner;
}();
/**
 * @member {module:model/ListSyncedAddressesRIS} assetData
 */


ListSyncedAddressesRIBalancesInner.prototype['assetData'] = undefined;
/**
 * Defines the symbol of the asset.
 * @member {String} symbol
 */

ListSyncedAddressesRIBalancesInner.prototype['symbol'] = undefined;
/**
 * Defines the type of the asset. (If its COIN or Token)
 * @member {String} type
 */

ListSyncedAddressesRIBalancesInner.prototype['type'] = undefined;
var _default = ListSyncedAddressesRIBalancesInner;
exports["default"] = _default;