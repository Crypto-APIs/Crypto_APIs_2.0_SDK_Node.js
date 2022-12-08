"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The CoinsForwardingFailDataItem model module.
 * @module model/CoinsForwardingFailDataItem
 * @version 1.11.0
 */
var CoinsForwardingFailDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CoinsForwardingFailDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/CoinsForwardingFailDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param fromAddress {String} Represents the hash of the address that provides the coins.
   * @param toAddress {String} Represents the hash of the address to forward the coins to.
   * @param triggerTransactionId {String} Defines the unique Transaction ID that triggered the coin forwarding.
   * @param errorCode {module:model/CoinsForwardingFailDataItem.ErrorCodeEnum} Represents the error code received for the failed coin forwarding.
   * @param errorMessage {String} Represents the error message received for the failed coin forwarding.
   */
  function CoinsForwardingFailDataItem(blockchain, network, fromAddress, toAddress, triggerTransactionId, errorCode, errorMessage) {
    _classCallCheck(this, CoinsForwardingFailDataItem);
    CoinsForwardingFailDataItem.initialize(this, blockchain, network, fromAddress, toAddress, triggerTransactionId, errorCode, errorMessage);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CoinsForwardingFailDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, fromAddress, toAddress, triggerTransactionId, errorCode, errorMessage) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['fromAddress'] = fromAddress;
      obj['toAddress'] = toAddress;
      obj['triggerTransactionId'] = triggerTransactionId;
      obj['errorCode'] = errorCode;
      obj['errorMessage'] = errorMessage;
    }

    /**
     * Constructs a <code>CoinsForwardingFailDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CoinsForwardingFailDataItem} obj Optional instance to populate.
     * @return {module:model/CoinsForwardingFailDataItem} The populated <code>CoinsForwardingFailDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CoinsForwardingFailDataItem();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('fromAddress')) {
          obj['fromAddress'] = _ApiClient["default"].convertToType(data['fromAddress'], 'String');
        }
        if (data.hasOwnProperty('toAddress')) {
          obj['toAddress'] = _ApiClient["default"].convertToType(data['toAddress'], 'String');
        }
        if (data.hasOwnProperty('triggerTransactionId')) {
          obj['triggerTransactionId'] = _ApiClient["default"].convertToType(data['triggerTransactionId'], 'String');
        }
        if (data.hasOwnProperty('errorCode')) {
          obj['errorCode'] = _ApiClient["default"].convertToType(data['errorCode'], 'String');
        }
        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CoinsForwardingFailDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CoinsForwardingFailDataItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CoinsForwardingFailDataItem.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['blockchain'] && !(typeof data['blockchain'] === 'string' || data['blockchain'] instanceof String)) {
        throw new Error("Expected the field `blockchain` to be a primitive type in the JSON string but got " + data['blockchain']);
      }
      // ensure the json data is a string
      if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
        throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
      }
      // ensure the json data is a string
      if (data['fromAddress'] && !(typeof data['fromAddress'] === 'string' || data['fromAddress'] instanceof String)) {
        throw new Error("Expected the field `fromAddress` to be a primitive type in the JSON string but got " + data['fromAddress']);
      }
      // ensure the json data is a string
      if (data['toAddress'] && !(typeof data['toAddress'] === 'string' || data['toAddress'] instanceof String)) {
        throw new Error("Expected the field `toAddress` to be a primitive type in the JSON string but got " + data['toAddress']);
      }
      // ensure the json data is a string
      if (data['triggerTransactionId'] && !(typeof data['triggerTransactionId'] === 'string' || data['triggerTransactionId'] instanceof String)) {
        throw new Error("Expected the field `triggerTransactionId` to be a primitive type in the JSON string but got " + data['triggerTransactionId']);
      }
      // ensure the json data is a string
      if (data['errorCode'] && !(typeof data['errorCode'] === 'string' || data['errorCode'] instanceof String)) {
        throw new Error("Expected the field `errorCode` to be a primitive type in the JSON string but got " + data['errorCode']);
      }
      // ensure the json data is a string
      if (data['errorMessage'] && !(typeof data['errorMessage'] === 'string' || data['errorMessage'] instanceof String)) {
        throw new Error("Expected the field `errorMessage` to be a primitive type in the JSON string but got " + data['errorMessage']);
      }
      return true;
    }
  }]);
  return CoinsForwardingFailDataItem;
}();
CoinsForwardingFailDataItem.RequiredProperties = ["blockchain", "network", "fromAddress", "toAddress", "triggerTransactionId", "errorCode", "errorMessage"];

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
CoinsForwardingFailDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
CoinsForwardingFailDataItem.prototype['network'] = undefined;

/**
 * Represents the hash of the address that provides the coins.
 * @member {String} fromAddress
 */
CoinsForwardingFailDataItem.prototype['fromAddress'] = undefined;

/**
 * Represents the hash of the address to forward the coins to.
 * @member {String} toAddress
 */
CoinsForwardingFailDataItem.prototype['toAddress'] = undefined;

/**
 * Defines the unique Transaction ID that triggered the coin forwarding.
 * @member {String} triggerTransactionId
 */
CoinsForwardingFailDataItem.prototype['triggerTransactionId'] = undefined;

/**
 * Represents the error code received for the failed coin forwarding.
 * @member {module:model/CoinsForwardingFailDataItem.ErrorCodeEnum} errorCode
 */
CoinsForwardingFailDataItem.prototype['errorCode'] = undefined;

/**
 * Represents the error message received for the failed coin forwarding.
 * @member {String} errorMessage
 */
CoinsForwardingFailDataItem.prototype['errorMessage'] = undefined;

/**
 * Allowed values for the <code>errorCode</code> property.
 * @enum {String}
 * @readonly
 */
CoinsForwardingFailDataItem['ErrorCodeEnum'] = {
  /**
   * value: "NOT_ENOUGH_CREDITS"
   * @const
   */
  "NOT_ENOUGH_CREDITS": "NOT_ENOUGH_CREDITS",
  /**
   * value: "WRONG_ADDRESS_CREDENTIALS"
   * @const
   */
  "WRONG_ADDRESS_CREDENTIALS": "WRONG_ADDRESS_CREDENTIALS"
};
var _default = CoinsForwardingFailDataItem;
exports["default"] = _default;