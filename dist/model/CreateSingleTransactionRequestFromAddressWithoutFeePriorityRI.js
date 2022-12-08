"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender"));
var _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount = _interopRequireDefault(require("./CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount"));
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
 * The CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI model module.
 * @module model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI
 * @version 1.11.0
 */
var CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
   * @alias module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI
   * @param recipient {Array.<module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} Defines the destination for the transaction, i.e. the recipient(s).
   * @param sender {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} 
   * @param transactionRequestId {String} Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
   * @param transactionRequestStatus {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.TransactionRequestStatusEnum} Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
   */
  function CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI(recipient, sender, transactionRequestId, transactionRequestStatus) {
    _classCallCheck(this, CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI);
    CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.initialize(this, recipient, sender, transactionRequestId, transactionRequestStatus);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI, null, [{
    key: "initialize",
    value: function initialize(obj, recipient, sender, transactionRequestId, transactionRequestStatus) {
      obj['recipient'] = recipient;
      obj['sender'] = sender;
      obj['transactionRequestId'] = transactionRequestId;
      obj['transactionRequestStatus'] = transactionRequestStatus;
    }

    /**
     * Constructs a <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI} obj Optional instance to populate.
     * @return {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI} The populated <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI();
        if (data.hasOwnProperty('callbackSecretKey')) {
          obj['callbackSecretKey'] = _ApiClient["default"].convertToType(data['callbackSecretKey'], 'String');
        }
        if (data.hasOwnProperty('callbackUrl')) {
          obj['callbackUrl'] = _ApiClient["default"].convertToType(data['callbackUrl'], 'String');
        }
        if (data.hasOwnProperty('classicAddress')) {
          obj['classicAddress'] = _ApiClient["default"].convertToType(data['classicAddress'], 'String');
        }
        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], [_CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner["default"]]);
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender["default"].constructFromObject(data['sender']);
        }
        if (data.hasOwnProperty('transactionRequestId')) {
          obj['transactionRequestId'] = _ApiClient["default"].convertToType(data['transactionRequestId'], 'String');
        }
        if (data.hasOwnProperty('transactionRequestStatus')) {
          obj['transactionRequestStatus'] = _ApiClient["default"].convertToType(data['transactionRequestStatus'], 'String');
        }
        if (data.hasOwnProperty('totalAmount')) {
          obj['totalAmount'] = _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount["default"].constructFromObject(data['totalAmount']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.RequiredProperties),
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
      if (data['classicAddress'] && !(typeof data['classicAddress'] === 'string' || data['classicAddress'] instanceof String)) {
        throw new Error("Expected the field `classicAddress` to be a primitive type in the JSON string but got " + data['classicAddress']);
      }
      // ensure the json data is a string
      if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
        throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
      }
      if (data['recipient']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['recipient'])) {
          throw new Error("Expected the field `recipient` to be an array in the JSON data but got " + data['recipient']);
        }
        // validate the optional field `recipient` (array)
        var _iterator2 = _createForOfIteratorHelper(data['recipient']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // validate the optional field `sender`
      if (data['sender']) {
        // data not null
        _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender["default"].validateJSON(data['sender']);
      }
      // ensure the json data is a string
      if (data['transactionRequestId'] && !(typeof data['transactionRequestId'] === 'string' || data['transactionRequestId'] instanceof String)) {
        throw new Error("Expected the field `transactionRequestId` to be a primitive type in the JSON string but got " + data['transactionRequestId']);
      }
      // ensure the json data is a string
      if (data['transactionRequestStatus'] && !(typeof data['transactionRequestStatus'] === 'string' || data['transactionRequestStatus'] instanceof String)) {
        throw new Error("Expected the field `transactionRequestStatus` to be a primitive type in the JSON string but got " + data['transactionRequestStatus']);
      }
      // validate the optional field `totalAmount`
      if (data['totalAmount']) {
        // data not null
        _CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount["default"].validateJSON(data['totalAmount']);
      }
      return true;
    }
  }]);
  return CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI;
}();
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.RequiredProperties = ["recipient", "sender", "transactionRequestId", "transactionRequestStatus"];

/**
 * Represents the Secret Key value provided by the customer. This field is used for security purposes during the callback notification, in order to prove the sender of the callback as Crypto APIs. For more information please see our [Documentation](https://developers.cryptoapis.io/technical-documentation/general-information/callbacks#callback-security).
 * @member {String} callbackSecretKey
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackSecretKey'] = undefined;

/**
 * Represents the URL that is set by the customer where the callback will be received at. The callback notification will be received only if and when the event occurs. `We support ONLY httpS type of protocol`.
 * @member {String} callbackUrl
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['callbackUrl'] = undefined;

/**
 * Represents the public address, which is a compressed and shortened form of a public key. The classic address is shown when the source address is an x-Address.
 * @member {String} classicAddress
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['classicAddress'] = undefined;

/**
 * Represents an optional note to add a free text in, explaining or providing additional detail on the transaction request.
 * @member {String} note
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['note'] = undefined;

/**
 * Defines the destination for the transaction, i.e. the recipient(s).
 * @member {Array.<module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRIRecipientInner>} recipient
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['recipient'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRISender} sender
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['sender'] = undefined;

/**
 * Represents a unique identifier of the transaction request (the request sent to make a transaction), which helps in identifying which callback and which `referenceId` concern that specific transaction request.
 * @member {String} transactionRequestId
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestId'] = undefined;

/**
 * Defines the status of the transaction, e.g. \"created, \"await_approval\", \"pending\", \"prepared\", \"signed\", \"broadcasted\", \"success\", \"failed\", \"rejected\", mined\".
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.TransactionRequestStatusEnum} transactionRequestStatus
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['transactionRequestStatus'] = undefined;

/**
 * @member {module:model/CreateSingleTransactionRequestFromAddressWithoutFeePriorityRITotalAmount} totalAmount
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI.prototype['totalAmount'] = undefined;

/**
 * Allowed values for the <code>transactionRequestStatus</code> property.
 * @enum {String}
 * @readonly
 */
CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI['TransactionRequestStatusEnum'] = {
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
var _default = CreateSingleTransactionRequestFromAddressWithoutFeePriorityRI;
exports["default"] = _default;