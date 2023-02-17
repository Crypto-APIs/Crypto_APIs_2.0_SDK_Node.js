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
 * The AddressTokensTransactionConfirmedDataItemMinedInBlock model module.
 * @module model/AddressTokensTransactionConfirmedDataItemMinedInBlock
 * @version 1.13.0
 */
var AddressTokensTransactionConfirmedDataItemMinedInBlock = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressTokensTransactionConfirmedDataItemMinedInBlock</code>.
   * Refers to the specific block the transaction was mined in.
   * @alias module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock
   * @param height {Number} Defines the number of blocks in the blockchain preceding this specific block.
   * @param hash {String} Represents the hash of the block's header, i.e. an output that has a fixed length.
   * @param timestamp {Number} Defines the exact date/time when this transaction was mined in seconds since Unix Epoch time.
   */
  function AddressTokensTransactionConfirmedDataItemMinedInBlock(height, hash, timestamp) {
    _classCallCheck(this, AddressTokensTransactionConfirmedDataItemMinedInBlock);
    AddressTokensTransactionConfirmedDataItemMinedInBlock.initialize(this, height, hash, timestamp);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressTokensTransactionConfirmedDataItemMinedInBlock, null, [{
    key: "initialize",
    value: function initialize(obj, height, hash, timestamp) {
      obj['height'] = height;
      obj['hash'] = hash;
      obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>AddressTokensTransactionConfirmedDataItemMinedInBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} obj Optional instance to populate.
     * @return {module:model/AddressTokensTransactionConfirmedDataItemMinedInBlock} The populated <code>AddressTokensTransactionConfirmedDataItemMinedInBlock</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressTokensTransactionConfirmedDataItemMinedInBlock();
        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }
        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
      }
      return obj;
    }
  }]);
  return AddressTokensTransactionConfirmedDataItemMinedInBlock;
}();
/**
 * Defines the number of blocks in the blockchain preceding this specific block.
 * @member {Number} height
 */
AddressTokensTransactionConfirmedDataItemMinedInBlock.prototype['height'] = undefined;

/**
 * Represents the hash of the block's header, i.e. an output that has a fixed length.
 * @member {String} hash
 */
AddressTokensTransactionConfirmedDataItemMinedInBlock.prototype['hash'] = undefined;

/**
 * Defines the exact date/time when this transaction was mined in seconds since Unix Epoch time.
 * @member {Number} timestamp
 */
AddressTokensTransactionConfirmedDataItemMinedInBlock.prototype['timestamp'] = undefined;
var _default = AddressTokensTransactionConfirmedDataItemMinedInBlock;
exports["default"] = _default;