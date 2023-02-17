"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetAddressDetailsRIConfirmedBalance = _interopRequireDefault(require("./GetAddressDetailsRIConfirmedBalance"));
var _GetAddressDetailsRITotalReceived = _interopRequireDefault(require("./GetAddressDetailsRITotalReceived"));
var _GetAddressDetailsRITotalSpent = _interopRequireDefault(require("./GetAddressDetailsRITotalSpent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetAddressDetailsRI model module.
 * @module model/GetAddressDetailsRI
 * @version 1.13.0
 */
var GetAddressDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetAddressDetailsRI</code>.
   * @alias module:model/GetAddressDetailsRI
   * @param transactionsCount {Number} Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
   * @param confirmedBalance {module:model/GetAddressDetailsRIConfirmedBalance} 
   * @param totalReceived {module:model/GetAddressDetailsRITotalReceived} 
   * @param totalSpent {module:model/GetAddressDetailsRITotalSpent} 
   * @param incomingTransactionsCount {Number} Numeric representation of the received transaction count of the address
   * @param outgoingTransactionsCount {Number} Numeric representation of the sent transaction count of the address
   */
  function GetAddressDetailsRI(transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount) {
    _classCallCheck(this, GetAddressDetailsRI);
    GetAddressDetailsRI.initialize(this, transactionsCount, confirmedBalance, totalReceived, totalSpent, incomingTransactionsCount, outgoingTransactionsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetAddressDetailsRI, null, [{
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
     * Constructs a <code>GetAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetAddressDetailsRI} The populated <code>GetAddressDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetAddressDetailsRI();
        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _GetAddressDetailsRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }
        if (data.hasOwnProperty('totalReceived')) {
          obj['totalReceived'] = _GetAddressDetailsRITotalReceived["default"].constructFromObject(data['totalReceived']);
        }
        if (data.hasOwnProperty('totalSpent')) {
          obj['totalSpent'] = _GetAddressDetailsRITotalSpent["default"].constructFromObject(data['totalSpent']);
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
  return GetAddressDetailsRI;
}();
/**
 * Represents the total number of confirmed coins transactions for this address, both incoming and outgoing. Applies for coins only **and not** tokens transfers e.g. for Ethereum. `transactionsCount` could result as less than incoming and outgoing transactions put together (e.g. in Bitcoin), due to the fact that one and the same address could be in senders and receivers addresses.
 * @member {Number} transactionsCount
 */
GetAddressDetailsRI.prototype['transactionsCount'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRIConfirmedBalance} confirmedBalance
 */
GetAddressDetailsRI.prototype['confirmedBalance'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRITotalReceived} totalReceived
 */
GetAddressDetailsRI.prototype['totalReceived'] = undefined;

/**
 * @member {module:model/GetAddressDetailsRITotalSpent} totalSpent
 */
GetAddressDetailsRI.prototype['totalSpent'] = undefined;

/**
 * Numeric representation of the received transaction count of the address
 * @member {Number} incomingTransactionsCount
 */
GetAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Numeric representation of the sent transaction count of the address
 * @member {Number} outgoingTransactionsCount
 */
GetAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;
var _default = GetAddressDetailsRI;
exports["default"] = _default;