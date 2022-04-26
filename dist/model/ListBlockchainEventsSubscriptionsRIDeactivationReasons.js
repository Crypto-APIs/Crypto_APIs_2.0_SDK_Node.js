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
 * The ListBlockchainEventsSubscriptionsRIDeactivationReasons model module.
 * @module model/ListBlockchainEventsSubscriptionsRIDeactivationReasons
 * @version 1.5.0
 */
var ListBlockchainEventsSubscriptionsRIDeactivationReasons = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBlockchainEventsSubscriptionsRIDeactivationReasons</code>.
   * @alias module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasons
   * @param reason {String} Defines the deactivation reason as a message.
   * @param timestamp {Number} Represents the time of the subscription deactivation.
   */
  function ListBlockchainEventsSubscriptionsRIDeactivationReasons(reason, timestamp) {
    _classCallCheck(this, ListBlockchainEventsSubscriptionsRIDeactivationReasons);

    ListBlockchainEventsSubscriptionsRIDeactivationReasons.initialize(this, reason, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListBlockchainEventsSubscriptionsRIDeactivationReasons, null, [{
    key: "initialize",
    value: function initialize(obj, reason, timestamp) {
      obj['reason'] = reason;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>ListBlockchainEventsSubscriptionsRIDeactivationReasons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasons} obj Optional instance to populate.
     * @return {module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasons} The populated <code>ListBlockchainEventsSubscriptionsRIDeactivationReasons</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBlockchainEventsSubscriptionsRIDeactivationReasons();

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ListBlockchainEventsSubscriptionsRIDeactivationReasons;
}();
/**
 * Defines the deactivation reason as a message.
 * @member {String} reason
 */


ListBlockchainEventsSubscriptionsRIDeactivationReasons.prototype['reason'] = undefined;
/**
 * Represents the time of the subscription deactivation.
 * @member {Number} timestamp
 */

ListBlockchainEventsSubscriptionsRIDeactivationReasons.prototype['timestamp'] = undefined;
var _default = ListBlockchainEventsSubscriptionsRIDeactivationReasons;
exports["default"] = _default;