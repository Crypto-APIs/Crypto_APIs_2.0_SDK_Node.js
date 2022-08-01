"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 model module.
 * @module model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2
 * @version 1.7.2
 */
var GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code>.
   * Zilliqa
   * @alias module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2
   * @param gasLimit {Number} Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
   * @param gasPrice {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} 
   * @param gasUsed {Number} Defines how much of the gas for the block has been used.
   * @param nonce {Number} Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
   * @param transactionStatus {String} Represents the status of this transaction.
   */
  function GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2(gasLimit, gasPrice, gasUsed, nonce, transactionStatus) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2);

    GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.initialize(this, gasLimit, gasPrice, gasUsed, nonce, transactionStatus);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2, null, [{
    key: "initialize",
    value: function initialize(obj, gasLimit, gasPrice, gasUsed, nonce, transactionStatus) {
      obj['gasLimit'] = gasLimit;
      obj['gasPrice'] = gasPrice;
      obj['gasUsed'] = gasUsed;
      obj['nonce'] = nonce;
      obj['transactionStatus'] = transactionStatus;
    }
    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2} The populated <code>GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2();

        if (data.hasOwnProperty('gasLimit')) {
          obj['gasLimit'] = _ApiClient["default"].convertToType(data['gasLimit'], 'Number');
        }

        if (data.hasOwnProperty('gasPrice')) {
          obj['gasPrice'] = _GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice["default"].constructFromObject(data['gasPrice']);
        }

        if (data.hasOwnProperty('gasUsed')) {
          obj['gasUsed'] = _ApiClient["default"].convertToType(data['gasUsed'], 'Number');
        }

        if (data.hasOwnProperty('nonce')) {
          obj['nonce'] = _ApiClient["default"].convertToType(data['nonce'], 'Number');
        }

        if (data.hasOwnProperty('transactionStatus')) {
          obj['transactionStatus'] = _ApiClient["default"].convertToType(data['transactionStatus'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2;
}();
/**
 * Represents the maximum amount of gas allowed in the block in order to determine how many transactions it can fit.
 * @member {Number} gasLimit
 */


GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.prototype['gasLimit'] = undefined;
/**
 * @member {module:model/GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2GasPrice} gasPrice
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.prototype['gasPrice'] = undefined;
/**
 * Defines how much of the gas for the block has been used.
 * @member {Number} gasUsed
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.prototype['gasUsed'] = undefined;
/**
 * Represents the sequential running number for an address, starting from 0 for the first transaction. E.g., if the nonce of a transaction is 10, it would be the 11th transaction sent from the sender's address.
 * @member {Number} nonce
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.prototype['nonce'] = undefined;
/**
 * Represents the status of this transaction.
 * @member {String} transactionStatus
 */

GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2.prototype['transactionStatus'] = undefined;
var _default = GetTransactionDetailsByTransactionIDFromCallbackRIBSZ2;
exports["default"] = _default;