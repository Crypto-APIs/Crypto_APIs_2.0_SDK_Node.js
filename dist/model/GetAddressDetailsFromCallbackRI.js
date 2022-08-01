"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetAddressDetailsFromCallbackRITotalReceived = _interopRequireDefault(require("./GetAddressDetailsFromCallbackRITotalReceived"));

var _GetAddressDetailsFromCallbackRITotalSpent = _interopRequireDefault(require("./GetAddressDetailsFromCallbackRITotalSpent"));

var _GetAddressDetailsRIConfirmedBalance = _interopRequireDefault(require("./GetAddressDetailsRIConfirmedBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetAddressDetailsFromCallbackRI model module.
 * @module model/GetAddressDetailsFromCallbackRI
 * @version 1.7.2
 */
var GetAddressDetailsFromCallbackRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsFromCallbackRI</code>.
   * @alias module:model/GetAddressDetailsFromCallbackRI
   * @param incomingTransactionsCount {Number} Defines the count of the incoming transactions.
   * @param outgoingTransactionsCount {Number} Defines the count of the outgoing transactions.
   * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only and not tokens transfers e.g. for Ethereum. transactionsCount could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
   * @param confirmedBalance {module:model/GetAddressDetailsRIConfirmedBalance} 
   */
  function GetAddressDetailsFromCallbackRI(incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance) {
    _classCallCheck(this, GetAddressDetailsFromCallbackRI);

    GetAddressDetailsFromCallbackRI.initialize(this, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetAddressDetailsFromCallbackRI, null, [{
    key: "initialize",
    value: function initialize(obj, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance) {
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
      obj['transactionsCount'] = transactionsCount;
      obj['confirmedBalance'] = confirmedBalance;
    }
    /**
     * Constructs a <code>GetAddressDetailsFromCallbackRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsFromCallbackRI} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsFromCallbackRI} The populated <code>GetAddressDetailsFromCallbackRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsFromCallbackRI();

        if (data.hasOwnProperty('incomingTransactionsCount')) {
          obj['incomingTransactionsCount'] = _ApiClient["default"].convertToType(data['incomingTransactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('outgoingTransactionsCount')) {
          obj['outgoingTransactionsCount'] = _ApiClient["default"].convertToType(data['outgoingTransactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }

        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _GetAddressDetailsRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }

        if (data.hasOwnProperty('totalReceived')) {
          obj['totalReceived'] = _GetAddressDetailsFromCallbackRITotalReceived["default"].constructFromObject(data['totalReceived']);
        }

        if (data.hasOwnProperty('totalSpent')) {
          obj['totalSpent'] = _GetAddressDetailsFromCallbackRITotalSpent["default"].constructFromObject(data['totalSpent']);
        }

        if (data.hasOwnProperty('sequence')) {
          obj['sequence'] = _ApiClient["default"].convertToType(data['sequence'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GetAddressDetailsFromCallbackRI;
}();
/**
 * Defines the count of the incoming transactions.
 * @member {Number} incomingTransactionsCount
 */


GetAddressDetailsFromCallbackRI.prototype['incomingTransactionsCount'] = undefined;
/**
 * Defines the count of the outgoing transactions.
 * @member {Number} outgoingTransactionsCount
 */

GetAddressDetailsFromCallbackRI.prototype['outgoingTransactionsCount'] = undefined;
/**
 * Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only and not tokens transfers e.g. for Ethereum. transactionsCount could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
 * @member {Number} transactionsCount
 */

GetAddressDetailsFromCallbackRI.prototype['transactionsCount'] = undefined;
/**
 * @member {module:model/GetAddressDetailsRIConfirmedBalance} confirmedBalance
 */

GetAddressDetailsFromCallbackRI.prototype['confirmedBalance'] = undefined;
/**
 * @member {module:model/GetAddressDetailsFromCallbackRITotalReceived} totalReceived
 */

GetAddressDetailsFromCallbackRI.prototype['totalReceived'] = undefined;
/**
 * @member {module:model/GetAddressDetailsFromCallbackRITotalSpent} totalSpent
 */

GetAddressDetailsFromCallbackRI.prototype['totalSpent'] = undefined;
/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */

GetAddressDetailsFromCallbackRI.prototype['sequence'] = undefined;
var _default = GetAddressDetailsFromCallbackRI;
exports["default"] = _default;