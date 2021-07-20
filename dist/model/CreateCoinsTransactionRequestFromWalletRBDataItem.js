"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateCoinsTransactionRequestFromWalletRBDataItemDestinations = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromWalletRBDataItemDestinations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCoinsTransactionRequestFromWalletRBDataItem model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRBDataItem
 * @version 1.1.0
 */
var CreateCoinsTransactionRequestFromWalletRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRBDataItem
   * @param destinations {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemDestinations>} Defines the destination of the transaction, whether it is incoming or outgoing.
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   */
  function CreateCoinsTransactionRequestFromWalletRBDataItem(destinations, feePriority) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRBDataItem);

    CreateCoinsTransactionRequestFromWalletRBDataItem.initialize(this, destinations, feePriority);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCoinsTransactionRequestFromWalletRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, destinations, feePriority) {
      obj['destinations'] = destinations;
      obj['feePriority'] = feePriority;
    }
    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem} The populated <code>CreateCoinsTransactionRequestFromWalletRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRBDataItem();

        if (data.hasOwnProperty('destinations')) {
          obj['destinations'] = _ApiClient["default"].convertToType(data['destinations'], [_CreateCoinsTransactionRequestFromWalletRBDataItemDestinations["default"]]);
        }

        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateCoinsTransactionRequestFromWalletRBDataItem;
}();
/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRBDataItemDestinations>} destinations
 */


CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['destinations'] = undefined;
/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRBDataItem.FeePriorityEnum} feePriority
 */

CreateCoinsTransactionRequestFromWalletRBDataItem.prototype['feePriority'] = undefined;
/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */

CreateCoinsTransactionRequestFromWalletRBDataItem['FeePriorityEnum'] = {
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
var _default = CreateCoinsTransactionRequestFromWalletRBDataItem;
exports["default"] = _default;