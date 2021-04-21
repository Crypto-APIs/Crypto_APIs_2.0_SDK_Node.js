"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVin = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVin"));

var _ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout = _interopRequireDefault(require("./ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash model module.
 * @module model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash
 * @version 2.0.0
 */
var ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash</code>.
   * Dash
   * @alias module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash
   * @param locktime {Number} Represents the time at which a particular transaction can be added to the blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param version {Number} Represents transaction version number.
   * @param vin {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVin>} Represents the transaction inputs.
   * @param vout {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout>} Represents the transaction outputs.
   */
  function ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash(locktime, size, version, vin, vout) {
    _classCallCheck(this, ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash);

    ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash.initialize(this, locktime, size, version, vin, vout);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash, null, [{
    key: "initialize",
    value: function initialize(obj, locktime, size, version, vin, vout) {
      obj['locktime'] = locktime;
      obj['size'] = size;
      obj['version'] = version;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }
    /**
     * Constructs a <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash} The populated <code>ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash();

        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVin["default"]]);
        }

        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash;
}();
/**
 * Represents the time at which a particular transaction can be added to the blockchain.
 * @member {Number} locktime
 */


ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash.prototype['locktime'] = undefined;
/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash.prototype['size'] = undefined;
/**
 * Represents transaction version number.
 * @member {Number} version
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash.prototype['version'] = undefined;
/**
 * Represents the transaction inputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVin>} vin
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash.prototype['vin'] = undefined;
/**
 * Represents the transaction outputs.
 * @member {Array.<module:model/ListTransactionsByBlockHeightResponseItemBlockchainSpecificDashVout>} vout
 */

ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash.prototype['vout'] = undefined;
var _default = ListTransactionsByBlockHeightResponseItemBlockchainSpecificDash;
exports["default"] = _default;