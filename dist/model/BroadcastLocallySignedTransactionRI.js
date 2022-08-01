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
 * The BroadcastLocallySignedTransactionRI model module.
 * @module model/BroadcastLocallySignedTransactionRI
 * @version 1.7.2
 */
var BroadcastLocallySignedTransactionRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BroadcastLocallySignedTransactionRI</code>.
   * @alias module:model/BroadcastLocallySignedTransactionRI
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
   */
  function BroadcastLocallySignedTransactionRI(transactionId) {
    _classCallCheck(this, BroadcastLocallySignedTransactionRI);

    BroadcastLocallySignedTransactionRI.initialize(this, transactionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BroadcastLocallySignedTransactionRI, null, [{
    key: "initialize",
    value: function initialize(obj, transactionId) {
      obj['transactionId'] = transactionId;
    }
    /**
     * Constructs a <code>BroadcastLocallySignedTransactionRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BroadcastLocallySignedTransactionRI} obj Optional instance to populate.
     * @return {module:model/BroadcastLocallySignedTransactionRI} The populated <code>BroadcastLocallySignedTransactionRI</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BroadcastLocallySignedTransactionRI();

        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BroadcastLocallySignedTransactionRI;
}();
/**
 * Represents the unique identifier of a transaction, i.e. it could be `transactionId` in UTXO-based protocols like Bitcoin, and transaction `hash` in Ethereum blockchain.
 * @member {String} transactionId
 */


BroadcastLocallySignedTransactionRI.prototype['transactionId'] = undefined;
var _default = BroadcastLocallySignedTransactionRI;
exports["default"] = _default;