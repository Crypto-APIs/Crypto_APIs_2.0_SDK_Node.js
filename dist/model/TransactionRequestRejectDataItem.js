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
 * The TransactionRequestRejectDataItem model module.
 * @module model/TransactionRequestRejectDataItem
 * @version 1.1.0
 */
var TransactionRequestRejectDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionRequestRejectDataItem</code>.
   * @alias module:model/TransactionRequestRejectDataItem
   * @param blockchain {String} 
   * @param network {String} 
   * @param requiredApproves {Number} 
   * @param requiredRejects {Number} 
   * @param currentApproves {Number} 
   * @param currentRejects {Number} 
   */
  function TransactionRequestRejectDataItem(blockchain, network, requiredApproves, requiredRejects, currentApproves, currentRejects) {
    _classCallCheck(this, TransactionRequestRejectDataItem);

    TransactionRequestRejectDataItem.initialize(this, blockchain, network, requiredApproves, requiredRejects, currentApproves, currentRejects);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionRequestRejectDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, requiredApproves, requiredRejects, currentApproves, currentRejects) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['requiredApproves'] = requiredApproves;
      obj['requiredRejects'] = requiredRejects;
      obj['currentApproves'] = currentApproves;
      obj['currentRejects'] = currentRejects;
    }
    /**
     * Constructs a <code>TransactionRequestRejectDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestRejectDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionRequestRejectDataItem} The populated <code>TransactionRequestRejectDataItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionRequestRejectDataItem();

        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('requiredApproves')) {
          obj['requiredApproves'] = _ApiClient["default"].convertToType(data['requiredApproves'], 'Number');
        }

        if (data.hasOwnProperty('requiredRejects')) {
          obj['requiredRejects'] = _ApiClient["default"].convertToType(data['requiredRejects'], 'Number');
        }

        if (data.hasOwnProperty('currentApproves')) {
          obj['currentApproves'] = _ApiClient["default"].convertToType(data['currentApproves'], 'Number');
        }

        if (data.hasOwnProperty('currentRejects')) {
          obj['currentRejects'] = _ApiClient["default"].convertToType(data['currentRejects'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TransactionRequestRejectDataItem;
}();
/**
 * @member {String} blockchain
 */


TransactionRequestRejectDataItem.prototype['blockchain'] = undefined;
/**
 * @member {String} network
 */

TransactionRequestRejectDataItem.prototype['network'] = undefined;
/**
 * @member {Number} requiredApproves
 */

TransactionRequestRejectDataItem.prototype['requiredApproves'] = undefined;
/**
 * @member {Number} requiredRejects
 */

TransactionRequestRejectDataItem.prototype['requiredRejects'] = undefined;
/**
 * @member {Number} currentApproves
 */

TransactionRequestRejectDataItem.prototype['currentApproves'] = undefined;
/**
 * @member {Number} currentRejects
 */

TransactionRequestRejectDataItem.prototype['currentRejects'] = undefined;
var _default = TransactionRequestRejectDataItem;
exports["default"] = _default;