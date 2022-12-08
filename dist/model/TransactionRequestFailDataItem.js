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
 * The TransactionRequestFailDataItem model module.
 * @module model/TransactionRequestFailDataItem
 * @version 1.11.0
 */
var TransactionRequestFailDataItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionRequestFailDataItem</code>.
   * Defines an &#x60;item&#x60; as one result.
   * @alias module:model/TransactionRequestFailDataItem
   * @param blockchain {String} Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
   * @param network {String} Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
   * @param requiredApprovals {Number} The required number of approvals needed to approve the transaction.
   * @param requiredRejections {Number} The required number of rejections needed to reject the transaction.
   * @param currentApprovals {Number} The current number of approvals given for the transaction.
   * @param currentRejections {Number} The current number of rejections given for the transaction.
   * @param errorMessage {String} Represents the error message received for the transaction.
   */
  function TransactionRequestFailDataItem(blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, errorMessage) {
    _classCallCheck(this, TransactionRequestFailDataItem);
    TransactionRequestFailDataItem.initialize(this, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, errorMessage);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(TransactionRequestFailDataItem, null, [{
    key: "initialize",
    value: function initialize(obj, blockchain, network, requiredApprovals, requiredRejections, currentApprovals, currentRejections, errorMessage) {
      obj['blockchain'] = blockchain;
      obj['network'] = network;
      obj['requiredApprovals'] = requiredApprovals;
      obj['requiredRejections'] = requiredRejections;
      obj['currentApprovals'] = currentApprovals;
      obj['currentRejections'] = currentRejections;
      obj['errorMessage'] = errorMessage;
    }

    /**
     * Constructs a <code>TransactionRequestFailDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRequestFailDataItem} obj Optional instance to populate.
     * @return {module:model/TransactionRequestFailDataItem} The populated <code>TransactionRequestFailDataItem</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionRequestFailDataItem();
        if (data.hasOwnProperty('blockchain')) {
          obj['blockchain'] = _ApiClient["default"].convertToType(data['blockchain'], 'String');
        }
        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
        if (data.hasOwnProperty('requiredApprovals')) {
          obj['requiredApprovals'] = _ApiClient["default"].convertToType(data['requiredApprovals'], 'Number');
        }
        if (data.hasOwnProperty('requiredRejections')) {
          obj['requiredRejections'] = _ApiClient["default"].convertToType(data['requiredRejections'], 'Number');
        }
        if (data.hasOwnProperty('currentApprovals')) {
          obj['currentApprovals'] = _ApiClient["default"].convertToType(data['currentApprovals'], 'Number');
        }
        if (data.hasOwnProperty('currentRejections')) {
          obj['currentRejections'] = _ApiClient["default"].convertToType(data['currentRejections'], 'Number');
        }
        if (data.hasOwnProperty('errorMessage')) {
          obj['errorMessage'] = _ApiClient["default"].convertToType(data['errorMessage'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionRequestFailDataItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionRequestFailDataItem</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TransactionRequestFailDataItem.RequiredProperties),
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
      if (data['errorMessage'] && !(typeof data['errorMessage'] === 'string' || data['errorMessage'] instanceof String)) {
        throw new Error("Expected the field `errorMessage` to be a primitive type in the JSON string but got " + data['errorMessage']);
      }
      return true;
    }
  }]);
  return TransactionRequestFailDataItem;
}();
TransactionRequestFailDataItem.RequiredProperties = ["blockchain", "network", "requiredApprovals", "requiredRejections", "currentApprovals", "currentRejections", "errorMessage"];

/**
 * Represents the specific blockchain protocol name, e.g. Ethereum, Bitcoin, etc.
 * @member {String} blockchain
 */
TransactionRequestFailDataItem.prototype['blockchain'] = undefined;

/**
 * Represents the name of the blockchain network used; blockchain networks are usually identical as technology and software, but they differ in data, e.g. - \"mainnet\" is the live network with actual data while networks like \"testnet\", \"ropsten\", \"rinkeby\" are test networks.
 * @member {String} network
 */
TransactionRequestFailDataItem.prototype['network'] = undefined;

/**
 * The required number of approvals needed to approve the transaction.
 * @member {Number} requiredApprovals
 */
TransactionRequestFailDataItem.prototype['requiredApprovals'] = undefined;

/**
 * The required number of rejections needed to reject the transaction.
 * @member {Number} requiredRejections
 */
TransactionRequestFailDataItem.prototype['requiredRejections'] = undefined;

/**
 * The current number of approvals given for the transaction.
 * @member {Number} currentApprovals
 */
TransactionRequestFailDataItem.prototype['currentApprovals'] = undefined;

/**
 * The current number of rejections given for the transaction.
 * @member {Number} currentRejections
 */
TransactionRequestFailDataItem.prototype['currentRejections'] = undefined;

/**
 * Represents the error message received for the transaction.
 * @member {String} errorMessage
 */
TransactionRequestFailDataItem.prototype['errorMessage'] = undefined;
var _default = TransactionRequestFailDataItem;
exports["default"] = _default;