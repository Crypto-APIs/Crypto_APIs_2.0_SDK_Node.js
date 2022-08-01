"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddressCoinsTransactionUnconfirmedDataItem = _interopRequireDefault(require("./AddressCoinsTransactionUnconfirmedDataItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddressCoinsTransactionUnconfirmedData model module.
 * @module model/AddressCoinsTransactionUnconfirmedData
 * @version 1.7.2
 */
var AddressCoinsTransactionUnconfirmedData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressCoinsTransactionUnconfirmedData</code>.
   * Specifies all data, as attributes, included into the callback notification, which depends on the &#x60;event&#x60;.
   * @alias module:model/AddressCoinsTransactionUnconfirmedData
   * @param product {String} Represents the Crypto APIs 2.0 product which sends the callback.
   * @param event {String} Defines the specific event, for which a callback subscription is set.
   * @param item {module:model/AddressCoinsTransactionUnconfirmedDataItem} 
   */
  function AddressCoinsTransactionUnconfirmedData(product, event, item) {
    _classCallCheck(this, AddressCoinsTransactionUnconfirmedData);

    AddressCoinsTransactionUnconfirmedData.initialize(this, product, event, item);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddressCoinsTransactionUnconfirmedData, null, [{
    key: "initialize",
    value: function initialize(obj, product, event, item) {
      obj['product'] = product;
      obj['event'] = event;
      obj['item'] = item;
    }
    /**
     * Constructs a <code>AddressCoinsTransactionUnconfirmedData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionUnconfirmedData} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionUnconfirmedData} The populated <code>AddressCoinsTransactionUnconfirmedData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressCoinsTransactionUnconfirmedData();

        if (data.hasOwnProperty('product')) {
          obj['product'] = _ApiClient["default"].convertToType(data['product'], 'String');
        }

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('item')) {
          obj['item'] = _AddressCoinsTransactionUnconfirmedDataItem["default"].constructFromObject(data['item']);
        }
      }

      return obj;
    }
  }]);

  return AddressCoinsTransactionUnconfirmedData;
}();
/**
 * Represents the Crypto APIs 2.0 product which sends the callback.
 * @member {String} product
 */


AddressCoinsTransactionUnconfirmedData.prototype['product'] = undefined;
/**
 * Defines the specific event, for which a callback subscription is set.
 * @member {String} event
 */

AddressCoinsTransactionUnconfirmedData.prototype['event'] = undefined;
/**
 * @member {module:model/AddressCoinsTransactionUnconfirmedDataItem} item
 */

AddressCoinsTransactionUnconfirmedData.prototype['item'] = undefined;
var _default = AddressCoinsTransactionUnconfirmedData;
exports["default"] = _default;