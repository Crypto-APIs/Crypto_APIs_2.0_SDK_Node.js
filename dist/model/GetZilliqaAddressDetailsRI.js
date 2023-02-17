"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetZilliqaAddressDetailsRIBalance = _interopRequireDefault(require("./GetZilliqaAddressDetailsRIBalance"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetZilliqaAddressDetailsRI model module.
 * @module model/GetZilliqaAddressDetailsRI
 * @version 1.13.0
 */
var GetZilliqaAddressDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetZilliqaAddressDetailsRI</code>.
   * @alias module:model/GetZilliqaAddressDetailsRI
   * @param balance {module:model/GetZilliqaAddressDetailsRIBalance} 
   * @param incomingTransactionsCount {Number} Defines the received transaction count to the address.
   * @param outgoingTransactionsCount {Number} Defines the sent transaction count from the address.
   * @param transactionsCount {Number} Defines the entire count of the transactions.
   */
  function GetZilliqaAddressDetailsRI(balance, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount) {
    _classCallCheck(this, GetZilliqaAddressDetailsRI);
    GetZilliqaAddressDetailsRI.initialize(this, balance, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetZilliqaAddressDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, balance, incomingTransactionsCount, outgoingTransactionsCount, transactionsCount) {
      obj['balance'] = balance;
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
      obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetZilliqaAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetZilliqaAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetZilliqaAddressDetailsRI} The populated <code>GetZilliqaAddressDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetZilliqaAddressDetailsRI();
        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _GetZilliqaAddressDetailsRIBalance["default"].constructFromObject(data['balance']);
        }
        if (data.hasOwnProperty('incomingTransactionsCount')) {
          obj['incomingTransactionsCount'] = _ApiClient["default"].convertToType(data['incomingTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('outgoingTransactionsCount')) {
          obj['outgoingTransactionsCount'] = _ApiClient["default"].convertToType(data['outgoingTransactionsCount'], 'Number');
        }
        if (data.hasOwnProperty('transactionsCount')) {
          obj['transactionsCount'] = _ApiClient["default"].convertToType(data['transactionsCount'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return GetZilliqaAddressDetailsRI;
}();
/**
 * @member {module:model/GetZilliqaAddressDetailsRIBalance} balance
 */
GetZilliqaAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Defines the received transaction count to the address.
 * @member {Number} incomingTransactionsCount
 */
GetZilliqaAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the sent transaction count from the address.
 * @member {Number} outgoingTransactionsCount
 */
GetZilliqaAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Defines the entire count of the transactions.
 * @member {Number} transactionsCount
 */
GetZilliqaAddressDetailsRI.prototype['transactionsCount'] = undefined;
var _default = GetZilliqaAddressDetailsRI;
exports["default"] = _default;