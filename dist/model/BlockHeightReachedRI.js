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
 * The BlockHeightReachedRI model module.
 * @module model/BlockHeightReachedRI
 * @version 1.7.2
 */
var BlockHeightReachedRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BlockHeightReachedRI</code>.
   * @alias module:model/BlockHeightReachedRI
   * @param blockHeightReached {Number} Represents the specified value of block height for which the callback will be received.
   * @param callbackSecretKey {String} Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
   * @param callbackUrl {String} Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
   * @param createdTimestamp {Number} Defines the specific time/date when the subscription was created in Unix Timestamp.
   * @param isActive {Boolean} Defines whether the subscription is active or not. Set as boolean.
   * @param referenceId {String} Represents a unique ID used to reference the specific callback subscription.
   */
  function BlockHeightReachedRI(blockHeightReached, callbackSecretKey, callbackUrl, createdTimestamp, isActive, referenceId) {
    _classCallCheck(this, BlockHeightReachedRI);

    BlockHeightReachedRI.initialize(this, blockHeightReached, callbackSecretKey, callbackUrl, createdTimestamp, isActive, referenceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BlockHeightReachedRI, null, [{
    key: "initialize",
    value: function initialize(obj, blockHeightReached, callbackSecretKey, callbackUrl, createdTimestamp, isActive, referenceId) {
      obj['blockHeightReached'] = blockHeightReached;
      obj['callbackSecretKey'] = callbackSecretKey;
      obj['callbackUrl'] = callbackUrl;
      obj['createdTimestamp'] = createdTimestamp;
      obj['isActive'] = isActive;
      obj['referenceId'] = referenceId;
    }
    /**
     * Constructs a <code>BlockHeightReachedRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockHeightReachedRI} obj Optional instance to populate.
     * @return {module:model/BlockHeightReachedRI} The populated <code>BlockHeightReachedRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BlockHeightReachedRI();

        if (data.hasOwnProperty('blockHeightReached')) {
          obj['blockHeightReached'] = _ApiClient["default"].convertToType(data['blockHeightReached'], 'Number');
        }

        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }

        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }

        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }

        if (data.hasOwnProperty('isActive')) {
          obj['isActive'] = _ApiClient["default"].convertToType(data['isActive'], 'Boolean');
        }

        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BlockHeightReachedRI;
}();
/**
 * Represents the specified value of block height for which the callback will be received.
 * @member {Number} blockHeightReached
 */


BlockHeightReachedRI.prototype['blockHeightReached'] = undefined;
/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */

BlockHeightReachedRI.prototype['callbackSecretKey'] = undefined;
/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */

BlockHeightReachedRI.prototype['callbackUrl'] = undefined;
/**
 * Defines the specific time/date when the subscription was created in Unix Timestamp.
 * @member {Number} createdTimestamp
 */

BlockHeightReachedRI.prototype['createdTimestamp'] = undefined;
/**
 * Defines whether the subscription is active or not. Set as boolean.
 * @member {Boolean} isActive
 */

BlockHeightReachedRI.prototype['isActive'] = undefined;
/**
 * Represents a unique ID used to reference the specific callback subscription.
 * @member {String} referenceId
 */

BlockHeightReachedRI.prototype['referenceId'] = undefined;
var _default = BlockHeightReachedRI;
exports["default"] = _default;