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
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount
 * @version 1.7.2
 */
var CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount</code>.
   * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount
   */
  function CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount() {
    _classCallCheck(this, CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount);

    CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount();

        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount;
}();
/**
 * Defines the unit of the total amount transacted.
 * @member {String} unit
 */


CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.prototype['unit'] = undefined;
/**
 * Total amount of the transaction
 * @member {String} value
 */

CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount.prototype['value'] = undefined;
var _default = CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount;
exports["default"] = _default;