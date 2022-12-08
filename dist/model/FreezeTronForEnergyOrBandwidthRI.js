"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _FreezeTronForEnergyOrBandwidthRIDestinationsInner = _interopRequireDefault(require("./FreezeTronForEnergyOrBandwidthRIDestinationsInner"));
var _FreezeTronForEnergyOrBandwidthRITransactionAmount = _interopRequireDefault(require("./FreezeTronForEnergyOrBandwidthRITransactionAmount"));
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
 * The FreezeTronForEnergyOrBandwidthRI model module.
 * @module model/FreezeTronForEnergyOrBandwidthRI
 * @version 1.11.0
 */
var FreezeTronForEnergyOrBandwidthRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FreezeTronForEnergyOrBandwidthRI</code>.
   * @alias module:model/FreezeTronForEnergyOrBandwidthRI
   * @param address {String} Defines the sender's public address.
   * @param destinations {Array.<module:model/FreezeTronForEnergyOrBandwidthRIDestinationsInner>} Defines the destination of the transaction
   * @param resource {String} Defines the resource staking for (eg. Bandwidth, Energy)
   * @param status {module:model/FreezeTronForEnergyOrBandwidthRI.StatusEnum} Represents the status of the transaction.
   * @param transactionId {String} Defines the created transaction
   * @param transactionType {module:model/FreezeTronForEnergyOrBandwidthRI.TransactionTypeEnum} Defines the type of the transacted units.
   * @param walletId {String} Represents the sender's specific and unique Wallet ID of the sender.
   * @param transactionAmount {module:model/FreezeTronForEnergyOrBandwidthRITransactionAmount} 
   */
  function FreezeTronForEnergyOrBandwidthRI(address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount) {
    _classCallCheck(this, FreezeTronForEnergyOrBandwidthRI);
    FreezeTronForEnergyOrBandwidthRI.initialize(this, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(FreezeTronForEnergyOrBandwidthRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, destinations, resource, status, transactionId, transactionType, walletId, transactionAmount) {
      obj['address'] = address;
      obj['destinations'] = destinations;
      obj['resource'] = resource;
      obj['status'] = status;
      obj['transactionId'] = transactionId;
      obj['transactionType'] = transactionType;
      obj['walletId'] = walletId;
      obj['transactionAmount'] = transactionAmount;
    }

    /**
     * Constructs a <code>FreezeTronForEnergyOrBandwidthRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FreezeTronForEnergyOrBandwidthRI} obj Optional instance to populate.
     * @return {module:model/FreezeTronForEnergyOrBandwidthRI} The populated <code>FreezeTronForEnergyOrBandwidthRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FreezeTronForEnergyOrBandwidthRI();
        if (data.hasOwnProperty('additionalData')) {
          obj['additionalData'] = _ApiClient["default"].convertToType(data['additionalData'], 'String');
        }
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('destinations')) {
          obj['destinations'] = _ApiClient["default"].convertToType(data['destinations'], [_FreezeTronForEnergyOrBandwidthRIDestinationsInner["default"]]);
        }
        if (data.hasOwnProperty('resource')) {
          obj['resource'] = _ApiClient["default"].convertToType(data['resource'], 'String');
        }
        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('transactionType')) {
          obj['transactionType'] = _ApiClient["default"].convertToType(data['transactionType'], 'String');
        }
        if (data.hasOwnProperty('walletId')) {
          obj['walletId'] = _ApiClient["default"].convertToType(data['walletId'], 'String');
        }
        if (data.hasOwnProperty('transactionAmount')) {
          obj['transactionAmount'] = _FreezeTronForEnergyOrBandwidthRITransactionAmount["default"].constructFromObject(data['transactionAmount']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FreezeTronForEnergyOrBandwidthRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FreezeTronForEnergyOrBandwidthRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(FreezeTronForEnergyOrBandwidthRI.RequiredProperties),
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
      if (data['additionalData'] && !(typeof data['additionalData'] === 'string' || data['additionalData'] instanceof String)) {
        throw new Error("Expected the field `additionalData` to be a primitive type in the JSON string but got " + data['additionalData']);
      }
      // ensure the json data is a string
      if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
        throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
      }
      // ensure the json data is a string
      if (data['callbackSecretKey'] && !(typeof data['callbackSecretKey'] === 'string' || data['callbackSecretKey'] instanceof String)) {
        throw new Error("Expected the field `callbackSecretKey` to be a primitive type in the JSON string but got " + data['callbackSecretKey']);
      }
      // ensure the json data is a string
      if (data['callbackUrl'] && !(typeof data['callbackUrl'] === 'string' || data['callbackUrl'] instanceof String)) {
        throw new Error("Expected the field `callbackUrl` to be a primitive type in the JSON string but got " + data['callbackUrl']);
      }
      if (data['destinations']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['destinations'])) {
          throw new Error("Expected the field `destinations` to be an array in the JSON data but got " + data['destinations']);
        }
        // validate the optional field `destinations` (array)
        var _iterator2 = _createForOfIteratorHelper(data['destinations']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _FreezeTronForEnergyOrBandwidthRIDestinationsInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['resource'] && !(typeof data['resource'] === 'string' || data['resource'] instanceof String)) {
        throw new Error("Expected the field `resource` to be a primitive type in the JSON string but got " + data['resource']);
      }
      // ensure the json data is a string
      if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
        throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
      }
      // ensure the json data is a string
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
      }
      // ensure the json data is a string
      if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
        throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
      }
      // ensure the json data is a string
      if (data['walletId'] && !(typeof data['walletId'] === 'string' || data['walletId'] instanceof String)) {
        throw new Error("Expected the field `walletId` to be a primitive type in the JSON string but got " + data['walletId']);
      }
      // validate the optional field `transactionAmount`
      if (data['transactionAmount']) {
        // data not null
        _FreezeTronForEnergyOrBandwidthRITransactionAmount["default"].validateJSON(data['transactionAmount']);
      }
      return true;
    }
  }]);
  return FreezeTronForEnergyOrBandwidthRI;
}();
FreezeTronForEnergyOrBandwidthRI.RequiredProperties = ["address", "destinations", "resource", "status", "transactionId", "transactionType", "walletId", "transactionAmount"];

/**
 * Defines a transaction note with additional details
 * @member {String} additionalData
 */
FreezeTronForEnergyOrBandwidthRI.prototype['additionalData'] = undefined;

/**
 * Defines the sender's public address.
 * @member {String} address
 */
FreezeTronForEnergyOrBandwidthRI.prototype['address'] = undefined;

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our Documentation.
 * @member {String} callbackSecretKey
 */
FreezeTronForEnergyOrBandwidthRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. We support ONLY httpS type of protocol.
 * @member {String} callbackUrl
 */
FreezeTronForEnergyOrBandwidthRI.prototype['callbackUrl'] = undefined;

/**
 * Defines the destination of the transaction
 * @member {Array.<module:model/FreezeTronForEnergyOrBandwidthRIDestinationsInner>} destinations
 */
FreezeTronForEnergyOrBandwidthRI.prototype['destinations'] = undefined;

/**
 * Defines the resource staking for (eg. Bandwidth, Energy)
 * @member {String} resource
 */
FreezeTronForEnergyOrBandwidthRI.prototype['resource'] = undefined;

/**
 * Represents the status of the transaction.
 * @member {module:model/FreezeTronForEnergyOrBandwidthRI.StatusEnum} status
 */
FreezeTronForEnergyOrBandwidthRI.prototype['status'] = undefined;

/**
 * Defines the created transaction
 * @member {String} transactionId
 */
FreezeTronForEnergyOrBandwidthRI.prototype['transactionId'] = undefined;

/**
 * Defines the type of the transacted units.
 * @member {module:model/FreezeTronForEnergyOrBandwidthRI.TransactionTypeEnum} transactionType
 */
FreezeTronForEnergyOrBandwidthRI.prototype['transactionType'] = undefined;

/**
 * Represents the sender's specific and unique Wallet ID of the sender.
 * @member {String} walletId
 */
FreezeTronForEnergyOrBandwidthRI.prototype['walletId'] = undefined;

/**
 * @member {module:model/FreezeTronForEnergyOrBandwidthRITransactionAmount} transactionAmount
 */
FreezeTronForEnergyOrBandwidthRI.prototype['transactionAmount'] = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
FreezeTronForEnergyOrBandwidthRI['StatusEnum'] = {
  /**
   * value: "created"
   * @const
   */
  "created": "created",
  /**
   * value: "await-approval"
   * @const
   */
  "await-approval": "await-approval",
  /**
   * value: "pending"
   * @const
   */
  "pending": "pending",
  /**
   * value: "prepared"
   * @const
   */
  "prepared": "prepared",
  /**
   * value: "signed"
   * @const
   */
  "signed": "signed",
  /**
   * value: "broadcasted"
   * @const
   */
  "broadcasted": "broadcasted",
  /**
   * value: "success"
   * @const
   */
  "success": "success",
  /**
   * value: "failed"
   * @const
   */
  "failed": "failed",
  /**
   * value: "rejected"
   * @const
   */
  "rejected": "rejected",
  /**
   * value: "mined"
   * @const
   */
  "mined": "mined",
  /**
   * value: "mined-with-errors"
   * @const
   */
  "mined-with-errors": "mined-with-errors"
};

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
FreezeTronForEnergyOrBandwidthRI['TransactionTypeEnum'] = {
  /**
   * value: "staking"
   * @const
   */
  "staking": "staking",
  /**
   * value: "unstaking"
   * @const
   */
  "unstaking": "unstaking"
};
var _default = FreezeTronForEnergyOrBandwidthRI;
exports["default"] = _default;