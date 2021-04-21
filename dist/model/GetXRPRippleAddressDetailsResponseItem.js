"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetXRPRippleAddressDetailsResponseItemBalance = _interopRequireDefault(require("./GetXRPRippleAddressDetailsResponseItemBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetXRPRippleAddressDetailsResponseItem model module.
 * @module model/GetXRPRippleAddressDetailsResponseItem
 * @version 2.0.0
 */
var GetXRPRippleAddressDetailsResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleAddressDetailsResponseItem</code>.
   * @alias module:model/GetXRPRippleAddressDetailsResponseItem
   * @param balance {module:model/GetXRPRippleAddressDetailsResponseItemBalance} 
   * @param incomingTransactionsCount {Number} Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
   * @param outgoingTransactionsCount {Number} Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   */
  function GetXRPRippleAddressDetailsResponseItem(balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) {
    _classCallCheck(this, GetXRPRippleAddressDetailsResponseItem);

    GetXRPRippleAddressDetailsResponseItem.initialize(this, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetXRPRippleAddressDetailsResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) {
      obj['balance'] = balance;
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
      obj['sequence'] = sequence;
      obj['transactionsCount'] = transactionsCount;
    }
    /**
     * Constructs a <code>GetXRPRippleAddressDetailsResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleAddressDetailsResponseItem} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleAddressDetailsResponseItem} The populated <code>GetXRPRippleAddressDetailsResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleAddressDetailsResponseItem();

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _GetXRPRippleAddressDetailsResponseItemBalance["default"].constructFromObject(data['balance']);
        }

        if (data.hasOwnProperty('incomingTransactionsCount')) {
          obj['incomingTransactionsCount'] = _ApiClient["default"].convertToType(data['incomingTransactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('outgoingTransactionsCount')) {
          obj['outgoingTransactionsCount'] = _ApiClient["default"].convertToType(data['outgoingTransactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }

        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetXRPRippleAddressDetailsResponseItem;
}();
/**
 * @member {module:model/GetXRPRippleAddressDetailsResponseItemBalance} balance
 */


GetXRPRippleAddressDetailsResponseItem.prototype['balance'] = undefined;
/**
 * Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
 * @member {Number} incomingTransactionsCount
 */

GetXRPRippleAddressDetailsResponseItem.prototype['incomingTransactionsCount'] = undefined;
/**
 * Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
 * @member {Number} outgoingTransactionsCount
 */

GetXRPRippleAddressDetailsResponseItem.prototype['outgoingTransactionsCount'] = undefined;
/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */

GetXRPRippleAddressDetailsResponseItem.prototype['sequence'] = undefined;
/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */

GetXRPRippleAddressDetailsResponseItem.prototype['transactionsCount'] = undefined;
var _default = GetXRPRippleAddressDetailsResponseItem;
exports["default"] = _default;