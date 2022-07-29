"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PrepareAUTXOBasedTransactionFromXPubRBDataItemFee = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromXPubRBDataItemFee"));

var _PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PrepareAUTXOBasedTransactionFromXPubRBDataItem model module.
 * @module model/PrepareAUTXOBasedTransactionFromXPubRBDataItem
 * @version 1.7.1
 */
var PrepareAUTXOBasedTransactionFromXPubRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromXPubRBDataItem</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItem
   * @param fee {module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItemFee} 
   * @param prepareStrategy {module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItem.PrepareStrategyEnum} Representation of the transaction's strategy type
   * @param recipients {Array.<module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner>} Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
   * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
   */
  function PrepareAUTXOBasedTransactionFromXPubRBDataItem(fee, prepareStrategy, recipients, xpub) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromXPubRBDataItem);

    PrepareAUTXOBasedTransactionFromXPubRBDataItem.initialize(this, fee, prepareStrategy, recipients, xpub);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PrepareAUTXOBasedTransactionFromXPubRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, fee, prepareStrategy, recipients, xpub) {
      obj['fee'] = fee;
      obj['prepareStrategy'] = prepareStrategy;
      obj['recipients'] = recipients;
      obj['xpub'] = xpub;
    }
    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromXPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItem} The populated <code>PrepareAUTXOBasedTransactionFromXPubRBDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromXPubRBDataItem();

        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAUTXOBasedTransactionFromXPubRBDataItemFee["default"].constructFromObject(data['fee']);
        }

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('prepareStrategy')) {
          obj['prepareStrategy'] = _ApiClient["default"].convertToType(data['prepareStrategy'], 'String');
        }

        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner["default"]]);
        }

        if (data.hasOwnProperty('replaceable')) {
          obj['replaceable'] = _ApiClient["default"].convertToType(data['replaceable'], 'Boolean');
        }

        if (data.hasOwnProperty('xpub')) {
          obj['xpub'] = _ApiClient["default"].convertToType(data['xpub'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PrepareAUTXOBasedTransactionFromXPubRBDataItem;
}();
/**
 * Representation of the additional data.
 * @member {String} additionalData
 */


PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['additionalData'] = undefined;
/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItemFee} fee
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['fee'] = undefined;
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['locktime'] = undefined;
/**
 * Representation of the transaction's strategy type
 * @member {module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItem.PrepareStrategyEnum} prepareStrategy
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['prepareStrategy'] = undefined;
/**
 * Represents a list of recipient addresses with the respective amounts. In account-based protocols like Ethereum there is only one address in this list.
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromXPubRBDataItemRecipientsInner>} recipients
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['recipients'] = undefined;
/**
 * Representation of whether the transaction is replaceable
 * @member {Boolean} replaceable
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['replaceable'] = undefined;
/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem.prototype['xpub'] = undefined;
/**
 * Allowed values for the <code>prepareStrategy</code> property.
 * @enum {String}
 * @readonly
 */

PrepareAUTXOBasedTransactionFromXPubRBDataItem['PrepareStrategyEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "minimize-dust"
   * @const
   */
  "minimize-dust": "minimize-dust",

  /**
   * value: "optimize-size"
   * @const
   */
  "optimize-size": "optimize-size"
};
var _default = PrepareAUTXOBasedTransactionFromXPubRBDataItem;
exports["default"] = _default;