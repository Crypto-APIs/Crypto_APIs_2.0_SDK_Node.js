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
 * The ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner model module.
 * @module model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner
 * @version 1.7.2
 */
var ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner</code>.
   * @alias module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner
   * @param reason {String} Defines the deactivation reason as a message.
   * @param timestamp {Number} Represents the time of the subscription deactivation.
   */
  function ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner(reason, timestamp) {
    _classCallCheck(this, ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner);

    ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner.initialize(this, reason, timestamp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner, null, [{
    key: "initialize",
    value: function initialize(obj, reason, timestamp) {
      obj['reason'] = reason;
      obj['timestamp'] = timestamp;
    }
    /**
     * Constructs a <code>ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner} obj Optional instance to populate.
     * @return {module:model/ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner} The populated <code>ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner();

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

  return ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner;
}();
/**
 * Defines the deactivation reason as a message.
 * @member {String} reason
 */


ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner.prototype['reason'] = undefined;
/**
 * Represents the time of the subscription deactivation.
 * @member {Number} timestamp
 */

ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner.prototype['timestamp'] = undefined;
var _default = ListBlockchainEventsSubscriptionsRIDeactivationReasonsInner;
exports["default"] = _default;