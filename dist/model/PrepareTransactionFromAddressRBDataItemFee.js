"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareTransactionFromAddressRBDataItemFee model module.
 * @module model/PrepareTransactionFromAddressRBDataItemFee
 * @version 1.13.0
 */
var PrepareTransactionFromAddressRBDataItemFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareTransactionFromAddressRBDataItemFee</code>.
   * Defines the amount of the transaction fee.
   * @alias module:model/PrepareTransactionFromAddressRBDataItemFee
   * @param priority {module:model/PrepareTransactionFromAddressRBDataItemFee.PriorityEnum} Enum representation of the fee priority
   */
  function PrepareTransactionFromAddressRBDataItemFee(priority) {
    _classCallCheck(this, PrepareTransactionFromAddressRBDataItemFee);
    PrepareTransactionFromAddressRBDataItemFee.initialize(this, priority);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareTransactionFromAddressRBDataItemFee, null, [{
    key: "initialize",
    value: function initialize(obj, priority) {
      obj['priority'] = priority;
    }

    /**
     * Constructs a <code>PrepareTransactionFromAddressRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareTransactionFromAddressRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareTransactionFromAddressRBDataItemFee} The populated <code>PrepareTransactionFromAddressRBDataItemFee</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareTransactionFromAddressRBDataItemFee();
        if (data.hasOwnProperty('exactAmount')) {
          obj['exactAmount'] = _ApiClient["default"].convertToType(data['exactAmount'], 'String');
        }
        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
        if (data.hasOwnProperty('substractFromAmount')) {
          obj['substractFromAmount'] = _ApiClient["default"].convertToType(data['substractFromAmount'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return PrepareTransactionFromAddressRBDataItemFee;
}();
/**
 * String representation of the exact amount
 * @member {String} exactAmount
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['exactAmount'] = undefined;

/**
 * Enum representation of the fee priority
 * @member {module:model/PrepareTransactionFromAddressRBDataItemFee.PriorityEnum} priority
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['priority'] = undefined;

/**
 * Representation of the subtract from amount whether it is \"true\",  or \"false\".
 * @member {Boolean} substractFromAmount
 */
PrepareTransactionFromAddressRBDataItemFee.prototype['substractFromAmount'] = undefined;

/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
PrepareTransactionFromAddressRBDataItemFee['PriorityEnum'] = {
  /**
   * value: "slow"
   * @const
   */
  "slow": "slow",
  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",
  /**
   * value: "fast"
   * @const
   */
  "fast": "fast"
};
var _default = PrepareTransactionFromAddressRBDataItemFee;
exports["default"] = _default;