"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCoinsTransactionRequestFromWalletRIRecipientsInner = _interopRequireDefault(require("./CreateCoinsTransactionRequestFromWalletRIRecipientsInner"));
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
 * The CreateCoinsTransactionRequestFromWalletRI model module.
 * @module model/CreateCoinsTransactionRequestFromWalletRI
 * @version 1.11.0
 */
var CreateCoinsTransactionRequestFromWalletRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCoinsTransactionRequestFromWalletRI</code>.
   * @alias module:model/CreateCoinsTransactionRequestFromWalletRI
   * @param feePriority {module:model/CreateCoinsTransactionRequestFromWalletRI.FeePriorityEnum} Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
   * @param recipients {Array.<module:model/CreateCoinsTransactionRequestFromWalletRIRecipientsInner>} Defines the destination of the transaction, whether it is incoming or outgoing.
   * @param totalTransactionAmount {String} Represents the specific amount of the transaction.
   * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
   * @param transactionRequestStatus {module:model/CreateCoinsTransactionRequestFromWalletRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
   */
  function CreateCoinsTransactionRequestFromWalletRI(feePriority, recipients, totalTransactionAmount, transactionRequestId, transactionRequestStatus) {
    _classCallCheck(this, CreateCoinsTransactionRequestFromWalletRI);
    CreateCoinsTransactionRequestFromWalletRI.initialize(this, feePriority, recipients, totalTransactionAmount, transactionRequestId, transactionRequestStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateCoinsTransactionRequestFromWalletRI, null, [{
    key: "initialize",
    value: function initialize(obj, feePriority, recipients, totalTransactionAmount, transactionRequestId, transactionRequestStatus) {
      obj['feePriority'] = feePriority;
      obj['recipients'] = recipients;
      obj['totalTransactionAmount'] = totalTransactionAmount;
      obj['transactionRequestId'] = transactionRequestId;
      obj['transactionRequestStatus'] = transactionRequestStatus;
    }

    /**
     * Constructs a <code>CreateCoinsTransactionRequestFromWalletRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCoinsTransactionRequestFromWalletRI} obj Optional instance to populate.
     * @return {module:model/CreateCoinsTransactionRequestFromWalletRI} The populated <code>CreateCoinsTransactionRequestFromWalletRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCoinsTransactionRequestFromWalletRI();
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('feePriority')) {
          obj['feePriority'] = _ApiClient["default"].convertToType(data['feePriority'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('recipients')) {
          obj['recipients'] = _ApiClient["default"].convertToType(data['recipients'], [_CreateCoinsTransactionRequestFromWalletRIRecipientsInner["default"]]);
        }
        if (data.hasOwnProperty('totalTransactionAmount')) {
          obj['totalTransactionAmount'] = _ApiClient["default"].convertToType(data['totalTransactionAmount'], 'String');
        }
        if (data.hasOwnProperty('transactionRequestId')) {
          obj['transactionRequestId'] = _ApiClient["default"].convertToType(data['transactionRequestId'], 'String');
        }
        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCoinsTransactionRequestFromWalletRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCoinsTransactionRequestFromWalletRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateCoinsTransactionRequestFromWalletRI.RequiredProperties),
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
      if (data['callbackSecretKey'] && !(typeof data['callbackSecretKey'] === 'string' || data['callbackSecretKey'] instanceof String)) {
        throw new Error("Expected the field `callbackSecretKey` to be a primitive type in the JSON string but got " + data['callbackSecretKey']);
      }
      // ensure the json data is a string
      if (data['callbackUrl'] && !(typeof data['callbackUrl'] === 'string' || data['callbackUrl'] instanceof String)) {
        throw new Error("Expected the field `callbackUrl` to be a primitive type in the JSON string but got " + data['callbackUrl']);
      }
      // ensure the json data is a string
      if (data['feePriority'] && !(typeof data['feePriority'] === 'string' || data['feePriority'] instanceof String)) {
        throw new Error("Expected the field `feePriority` to be a primitive type in the JSON string but got " + data['feePriority']);
      }
      // ensure the json data is a string
      if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
        throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
      }
      if (data['recipients']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['recipients'])) {
          throw new Error("Expected the field `recipients` to be an array in the JSON data but got " + data['recipients']);
        }
        // validate the optional field `recipients` (array)
        var _iterator2 = _createForOfIteratorHelper(data['recipients']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _CreateCoinsTransactionRequestFromWalletRIRecipientsInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['totalTransactionAmount'] && !(typeof data['totalTransactionAmount'] === 'string' || data['totalTransactionAmount'] instanceof String)) {
        throw new Error("Expected the field `totalTransactionAmount` to be a primitive type in the JSON string but got " + data['totalTransactionAmount']);
      }
      // ensure the json data is a string
      if (data['transactionRequestId'] && !(typeof data['transactionRequestId'] === 'string' || data['transactionRequestId'] instanceof String)) {
        throw new Error("Expected the field `transactionRequestId` to be a primitive type in the JSON string but got " + data['transactionRequestId']);
      }
      // ensure the json data is a string
      if (data['transactionRequestStatus'] && !(typeof data['transactionRequestStatus'] === 'string' || data['transactionRequestStatus'] instanceof String)) {
        throw new Error("Expected the field `transactionRequestStatus` to be a primitive type in the JSON string but got " + data['transactionRequestStatus']);
      }
      return true;
    }
  }]);
  return CreateCoinsTransactionRequestFromWalletRI;
}();
CreateCoinsTransactionRequestFromWalletRI.RequiredProperties = ["feePriority", "recipients", "totalTransactionAmount", "transactionRequestId", "transactionRequestStatus"];

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs.  For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the fee priority of the automation, whether it is \"slow\", \"standard\" or \"fast\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRI.FeePriorityEnum} feePriority
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['feePriority'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['note'] = undefined;

/**
 * Defines the destination of the transaction, whether it is incoming or outgoing.
 * @member {Array.<module:model/CreateCoinsTransactionRequestFromWalletRIRecipientsInner>} recipients
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['recipients'] = undefined;

/**
 * Represents the specific amount of the transaction.
 * @member {String} totalTransactionAmount
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['totalTransactionAmount'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['transactionRequestId'] = undefined;

/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateCoinsTransactionRequestFromWalletRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
CreateCoinsTransactionRequestFromWalletRI.prototype['transactionRequestStatus'] = undefined;

/**
 * Allowed values for the <code>feePriority</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRI['FeePriorityEnum'] = {
  /**
   * value: "slow"
   * @const
   */
  "slow": "slow",
  /**
   * value: "standard"
   * @const
   */
  "standard": "standard",
  /**
   * value: "fast"
   * @const
   */
  "fast": "fast"
};

/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */
CreateCoinsTransactionRequestFromWalletRI['TransactionRequestStatusEnum'] = {
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
  "mined": "mined"
};
var _default = CreateCoinsTransactionRequestFromWalletRI;
exports["default"] = _default;