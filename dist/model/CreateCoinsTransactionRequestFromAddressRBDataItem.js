"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromAddressRBDataItem model module.
 * @module model/CreateCoinsTransactionRequestFromAddressRBDataItem
 * @version 1.1.0
 */
var CreateCoinsTransactionRequestFromAddressRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromAddressRBDataItem</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromAddressRBDataItem
   * @param amount {String} Represents the specific amount of the transaction.
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromAddressRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param toAddress {String} Defines the specific recipient address for the transaction.
   */
  function CreateCoinsTransactionRequestFromAddressRBDataItem(amount, feePriority, toAddress) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromAddressRBDataItem);

    CreateCoinsTransactionRequestFromAddressRBDataItem.initialize(this, amount, feePriority, toAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromAddressRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, amount, feePriority, toAddress) {
      obj['amount'] = amount;
      obj['feePriority'] = feePriority;
      obj['toAddress'] = toAddress;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromAddressRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromAddressRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromAddressRBDataItem} The populated <code>CreateCoinsTransactionRequestFromAddressRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromAddressRBDataItem();

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }

        if (data.hasOwnProperty('toAddress')) {
          obj['toAddress'] = _ApiClient["default"].convertToType(data['toAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromAddressRBDataItem;
}();
/**
 * Represents the specific amount of the transaction.
 * @member {String} amount
 */


CreateCoinsTransactionRequestFromAddressRBDataItem.prototype['amount'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromAddressRBDataItem.FeePriorityEnum} feePriority
 */

CreateCoinsTransactionRequestFromAddressRBDataItem.prototype['feePriority'] = undefined;
/**
 * Defines the specific recipient address for the transaction.
 * @member {String} toAddress
 */

CreateCoinsTransactionRequestFromAddressRBDataItem.prototype['toAddress'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateCoinsTransactionRequestFromAddressRBDataItem['FeePriorityEnum'] = {
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
var _default = CreateCoinsTransactionRequestFromAddressRBDataItem;
exports["default"] = _default;