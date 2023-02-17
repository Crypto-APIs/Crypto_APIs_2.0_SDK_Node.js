"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee"));
var _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner = _interopRequireDefault(require("./PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
 * @version 1.13.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem
   * @param xpub {String} Defines the account extended publicly known key which is used to derive all child public keys.
   * @param fee {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} 
   * @param recipients {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner>} Object Array representation of transaction receivers
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem(xpub, fee, recipients) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.initialize(this, xpub, fee, recipients);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, xpub, fee, recipients) {
      obj['xpub'] = xpub;
      obj['fee'] = fee;
      obj['recipients'] = recipients;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('xpub')) {
          obj['xpub'] = _ApiClient["default"].convertToType(data['xpub'], 'String');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee["default"].constructFromObject(data['fee']);
        }
        if (data.hasOwnProperty('prepareStrategy')) {
          obj['prepareStrategy'] = _ApiClient["default"].convertToType(data['prepareStrategy'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('replaceable')) {
          obj['replaceable'] = _ApiClient["default"].convertToType(data['replaceable'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem;
}();
/**
 * Representation of the additional data.
 * @member {String} additionalData
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['additionalData'] = undefined;

/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['locktime'] = undefined;

/**
 * Defines the account extended publicly known key which is used to derive all child public keys.
 * @member {String} xpub
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['xpub'] = undefined;

/**
 * @member {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemFee} fee
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['fee'] = undefined;

/**
 * Representation of the transaction's strategy type
 * @member {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.PrepareStrategyEnum} prepareStrategy
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['prepareStrategy'] = undefined;

/**
 * Object Array representation of transaction receivers
 * @member {Array.<module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItemRecipientsInner>} recipients
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['recipients'] = undefined;

/**
 * Representation of whether the transaction is replaceable. This is an Optional attribute that is not supported for Dogecoin, Dash and Bitcoin-Cash.
 * @member {Boolean} replaceable
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem.prototype['replaceable'] = undefined;

/**
 * Allowed values for the <code>prepareStrategy</code> property.
 * @enum {String}
 * @readonly
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem['PrepareStrategyEnum'] = {
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
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRBDataItem;
exports["default"] = _default;