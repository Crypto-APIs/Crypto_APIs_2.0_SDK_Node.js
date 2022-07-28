"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAnAccountBasedTransactionFromXPubRBDataItemFee model module.
 * @module model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee
 * @version 1.7.0
 */
var PrepareAnAccountBasedTransactionFromXPubRBDataItemFee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAnAccountBasedTransactionFromXPubRBDataItemFee</code>.
   * @alias module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee
   * @param priority {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee.PriorityEnum} Represents the fee priority
   */
  function PrepareAnAccountBasedTransactionFromXPubRBDataItemFee(priority) {
    _classCallCheck(this, PrepareAnAccountBasedTransactionFromXPubRBDataItemFee);

    PrepareAnAccountBasedTransactionFromXPubRBDataItemFee.initialize(this, priority);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAnAccountBasedTransactionFromXPubRBDataItemFee, null, [{
    key: "initialize",
    value: function initialize(obj, priority) {
      obj['priority'] = priority;
    }
    /**
     * Constructs a <code>PrepareAnAccountBasedTransactionFromXPubRBDataItemFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee} obj Optional instance to populate.
     * @return {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee} The populated <code>PrepareAnAccountBasedTransactionFromXPubRBDataItemFee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAnAccountBasedTransactionFromXPubRBDataItemFee();

        if (data.hasOwnProperty('exactAmount')) {
          obj['exactAmount'] = _ApiClient["default"].convertToType(data['exactAmount'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAnAccountBasedTransactionFromXPubRBDataItemFee;
}();
/**
 * Representation of the exact amount value
 * @member {String} exactAmount
 */


PrepareAnAccountBasedTransactionFromXPubRBDataItemFee.prototype['exactAmount'] = undefined;
/**
 * Represents the fee priority
 * @member {module:model/PrepareAnAccountBasedTransactionFromXPubRBDataItemFee.PriorityEnum} priority
 */

PrepareAnAccountBasedTransactionFromXPubRBDataItemFee.prototype['priority'] = undefined;
/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */

PrepareAnAccountBasedTransactionFromXPubRBDataItemFee['PriorityEnum'] = {
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
var _default = PrepareAnAccountBasedTransactionFromXPubRBDataItemFee;
exports["default"] = _default;