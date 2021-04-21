"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAddressDetailsResponseItemConfirmedBalance = _interopRequireDefault(require("./GetAddressDetailsResponseItemConfirmedBalance"));

var _GetAddressDetailsResponseItemTotalReceived = _interopRequireDefault(require("./GetAddressDetailsResponseItemTotalReceived"));

var _GetAddressDetailsResponseItemTotalSpent = _interopRequireDefault(require("./GetAddressDetailsResponseItemTotalSpent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetAddressDetailsResponseItem model module.
 * @module model/GetAddressDetailsResponseItem
 * @version 2.0.0
 */
var GetAddressDetailsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsResponseItem</code>.
   * @alias module:model/GetAddressDetailsResponseItem
   * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
   * @param confirmedBalance {module:model/GetAddressDetailsResponseItemConfirmedBalance} 
   * @param totalReceived {module:model/GetAddressDetailsResponseItemTotalReceived} 
   * @param totalSpent {module:model/GetAddressDetailsResponseItemTotalSpent} 
   * @param incomingTransactionsCount {Number} Defines the count of all confirmed incoming transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
   * @param outgoingTransactionsCount {Number} Defines the count of all confirmed outgoing transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
   */
  function GetAddressDetailsResponseItem(transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount) {
    _classCallCheck(this, GetAddressDetailsResponseItem);

    GetAddressDetailsResponseItem.initialize(this, transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAddressDetailsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount) {
      obj['transactionsCount'] = transactionsCount;
      obj['confirmedBalance'] = confirmedBalance;
      obj['totalReceived'] = totalReceived;
      obj['totalSpent'] = totalSpent;
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
    }
    /**
     * Constructs a <code>GetAddressDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsResponseItem} The populated <code>GetAddressDetailsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsResponseItem();

        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _GetAddressDetailsResponseItemConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }

        if (data.hasOwnProperty('totalReceived')) {
          obj['totalReceived'] = _GetAddressDetailsResponseItemTotalReceived["default"].constructFromObject(data['totalReceived']);
        }

        if (data.hasOwnProperty('totalSpent')) {
          obj['totalSpent'] = _GetAddressDetailsResponseItemTotalSpent["default"].constructFromObject(data['totalSpent']);
        }

        if (data.hasOwnProperty('incomingTransactionsCount')) {
          obj['incomingTransactionsCount'] = _ApiClient["default"].convertToType(data['incomingTransactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('outgoingTransactionsCount')) {
          obj['outgoingTransactionsCount'] = _ApiClient["default"].convertToType(data['outgoingTransactionsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetAddressDetailsResponseItem;
}();
/**
 * Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
 * @member {Number} transactionsCount
 */


GetAddressDetailsResponseItem.prototype['transactionsCount'] = undefined;
/**
 * @member {module:model/GetAddressDetailsResponseItemConfirmedBalance} confirmedBalance
 */

GetAddressDetailsResponseItem.prototype['confirmedBalance'] = undefined;
/**
 * @member {module:model/GetAddressDetailsResponseItemTotalReceived} totalReceived
 */

GetAddressDetailsResponseItem.prototype['totalReceived'] = undefined;
/**
 * @member {module:model/GetAddressDetailsResponseItemTotalSpent} totalSpent
 */

GetAddressDetailsResponseItem.prototype['totalSpent'] = undefined;
/**
 * Defines the count of all confirmed incoming transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
 * @member {Number} incomingTransactionsCount
 */

GetAddressDetailsResponseItem.prototype['incomingTransactionsCount'] = undefined;
/**
 * Defines the count of all confirmed outgoing transactions from the address for coins. This applies to **coins** only, **not** to tokens transfers e.g. for Ethereum.
 * @member {Number} outgoingTransactionsCount
 */

GetAddressDetailsResponseItem.prototype['outgoingTransactionsCount'] = undefined;
var _default = GetAddressDetailsResponseItem;
exports["default"] = _default;