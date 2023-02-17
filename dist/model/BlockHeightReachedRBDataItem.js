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
 * The BlockHeightReachedRBDataItem model module.
 * @module model/BlockHeightReachedRBDataItem
 * @version 1.13.0
 */
var BlockHeightReachedRBDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockHeightReachedRBDataItem</code>.
   * @alias module:model/BlockHeightReachedRBDataItem
   * @param blockHeightReached {Number} Represents the specified value of block height for which the callback will be received.
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
   */
  function BlockHeightReachedRBDataItem(blockHeightReached, callbackUrl) {
    _classCallCheck(this, BlockHeightReachedRBDataItem);
    BlockHeightReachedRBDataItem.initialize(this, blockHeightReached, callbackUrl);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(BlockHeightReachedRBDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockHeightReached, callbackUrl) {
      obj['blockHeightReached'] = blockHeightReached;
      obj['callbackUrl'] = callbackUrl;
    }

    /**
     * Constructs a <code>BlockHeightReachedRBDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeightReachedRBDataItem} obj Optional instance to populate.
     * @return {module:model/BlockHeightReachedRBDataItem} The populated <code>BlockHeightReachedRBDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockHeightReachedRBDataItem();
        if (data.hasOwnProperty('allowDuplicates')) {
          obj['allowDuplicates'] = _ApiClient["default"].convertToType(data['allowDuplicates'], 'Boolean');
        }
        if (data.hasOwnProperty('blockHeightReached')) {
          obj['blockHeightReached'] = _ApiClient["default"].convertToType(data['blockHeightReached'], 'Number');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
      }
      return obj;
    }
  }]);
  return BlockHeightReachedRBDataItem;
}();
/**
 * Specifies a flag that permits or denies the creation of duplicate addresses.
 * @member {Boolean} allowDuplicates
 * @default false
 */
BlockHeightReachedRBDataItem.prototype['allowDuplicates'] = false;

/**
 * Represents the specified value of block height for which the callback will be received.
 * @member {Number} blockHeightReached
 */
BlockHeightReachedRBDataItem.prototype['blockHeightReached'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
BlockHeightReachedRBDataItem.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
BlockHeightReachedRBDataItem.prototype['callbackUrl'] = undefined;
var _default = BlockHeightReachedRBDataItem;
exports["default"] = _default;