"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetXRPRippleAddressDetailsRIBalance = _interopRequireDefault(require("./GetXRPRippleAddressDetailsRIBalance"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The GetXRPRippleAddressDetailsRI model module.
 * @module model/GetXRPRippleAddressDetailsRI
 * @version 1.13.0
 */
var GetXRPRippleAddressDetailsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetXRPRippleAddressDetailsRI</code>.
   * @alias module:model/GetXRPRippleAddressDetailsRI
   * @param balance {module:model/GetXRPRippleAddressDetailsRIBalance} 
   * @param incomingTransactionsCount {Number} Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
   * @param outgoingTransactionsCount {Number} Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
   * @param sequence {Number} Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
   * @param transactionsCount {Number} Represents the total number of all transactions as part of this block.
   */
  function GetXRPRippleAddressDetailsRI(balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) {
    _classCallCheck(this, GetXRPRippleAddressDetailsRI);
    GetXRPRippleAddressDetailsRI.initialize(this, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetXRPRippleAddressDetailsRI, null, [{
    key: "initialize",
    value: function initialize(obj, balance, incomingTransactionsCount, outgoingTransactionsCount, sequence, transactionsCount) {
      obj['balance'] = balance;
      obj['incomingTransactionsCount'] = incomingTransactionsCount;
      obj['outgoingTransactionsCount'] = outgoingTransactionsCount;
      obj['sequence'] = sequence;
      obj['transactionsCount'] = transactionsCount;
    }

    /**
     * Constructs a <code>GetXRPRippleAddressDetailsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXRPRippleAddressDetailsRI} obj Optional instance to populate.
     * @return {module:model/GetXRPRippleAddressDetailsRI} The populated <code>GetXRPRippleAddressDetailsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetXRPRippleAddressDetailsRI();
        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _GetXRPRippleAddressDetailsRIBalance["default"].constructFromObject(data['balance']);
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
  return GetXRPRippleAddressDetailsRI;
}();
/**
 * @member {module:model/GetXRPRippleAddressDetailsRIBalance} balance
 */
GetXRPRippleAddressDetailsRI.prototype['balance'] = undefined;

/**
 * Defines the count of all confirmed incoming transactions from the address for coins. This applies to coins only, not to tokens transfers
 * @member {Number} incomingTransactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['incomingTransactionsCount'] = undefined;

/**
 * Defines the count of all confirmed outgoing transactions for coins. This applies to coins only, not to tokens transfers
 * @member {Number} outgoingTransactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['outgoingTransactionsCount'] = undefined;

/**
 * Defines the transaction input's sequence as an integer, which is is used when transactions are replaced with newer versions before LockTime.
 * @member {Number} sequence
 */
GetXRPRippleAddressDetailsRI.prototype['sequence'] = undefined;

/**
 * Represents the total number of all transactions as part of this block.
 * @member {Number} transactionsCount
 */
GetXRPRippleAddressDetailsRI.prototype['transactionsCount'] = undefined;
var _default = GetXRPRippleAddressDetailsRI;
exports["default"] = _default;