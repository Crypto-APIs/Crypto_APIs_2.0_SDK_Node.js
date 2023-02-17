"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetAddressDetailsFromCallbackRIConfirmedBalance = _interopRequireDefault(require("./GetAddressDetailsFromCallbackRIConfirmedBalance"));
var _GetAddressDetailsFromCallbackRITotalReceived = _interopRequireDefault(require("./GetAddressDetailsFromCallbackRITotalReceived"));
var _GetAddressDetailsFromCallbackRITotalSpent = _interopRequireDefault(require("./GetAddressDetailsFromCallbackRITotalSpent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAddressDetailsFromCallbackRI model module.
 * @module model/GetAddressDetailsFromCallbackRI
 * @version 1.13.0
 */
var GetAddressDetailsFromCallbackRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsFromCallbackRI</code>.
   * @alias module:model/GetAddressDetailsFromCallbackRI
   * @param incomingTransactionsCount {Number} Defines the received transaction count to the address.
   * @param outgoingTransactionsCount {Number} Defines the sent transaction count from the address.
   * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only and not tokens transfers e.g. for Ethereum. transactionsCount could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
   * @param confirmedBalance {module:model/GetAddressDetailsFromCallbackRIConfirmedBalance} 
   * @param totalReceived {module:model/GetAddressDetailsFromCallbackRITotalReceived} 
   * @param totalSpent {module:model/GetAddressDetailsFromCallbackRITotalSpent} 
   */
  function GetAddressDetailsFromCallbackRI(incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance, totalReceived, totalSpent) {
    _classCallCheck(this, GetAddressDetailsFromCallbackRI);
    GetAddressDetailsFromCallbackRI.initialize(this, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance, totalReceived, totalSpent);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAddressDetailsFromCallbackRI, null, [{
    key: "initialize",
    value: function initialize(obj, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount, confirmedBalance, totalReceived, totalSpent) {
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
      obj['transactionsCount'] = transactionsCount;
      obj['confirmedBalance'] = confirmedBalance;
      obj['totalReceived'] = totalReceived;
      obj['totalSpent'] = totalSpent;
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
          obj['confirmedBalance'] = _GetAddressDetailsFromCallbackRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
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
 * Defines the received transaction count to the address.
 * @member {Number} incomingTransactionsCount
 */
GetAddressDetailsFromCallbackRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the sent transaction count from the address.
 * @member {Number} outgoingTransactionsCount
 */
GetAddressDetailsFromCallbackRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only and not tokens transfers e.g. for Ethereum. transactionsCount could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
 * @member {Number} transactionsCount
 */
GetAddressDetailsFromCallbackRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetAddressDetailsFromCallbackRIConfirmedBalance} confirmedBalance
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