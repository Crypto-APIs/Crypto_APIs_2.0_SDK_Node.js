"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddressCoinsTransactionConfirmedData = _interopRequireDefault(require("./AddressCoinsTransactionConfirmedData"));
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
 * The AddressCoinsTransactionConfirmed model module.
 * @module model/AddressCoinsTransactionConfirmed
 * @version 1.11.0
 */
var AddressCoinsTransactionConfirmed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddressCoinsTransactionConfirmed</code>.
   * @alias module:model/AddressCoinsTransactionConfirmed
   * @param apiVersion {String} Specifies the version of the API that incorporates this endpoint.
   * @param referenceId {String} Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
   * @param idempotencyKey {String} Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
   * @param data {module:model/AddressCoinsTransactionConfirmedData} 
   */
  function AddressCoinsTransactionConfirmed(apiVersion, referenceId, idempotencyKey, data) {
    _classCallCheck(this, AddressCoinsTransactionConfirmed);
    AddressCoinsTransactionConfirmed.initialize(this, apiVersion, referenceId, idempotencyKey, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(AddressCoinsTransactionConfirmed, null, [{
    key: "initialize",
    value: function initialize(obj, apiVersion, referenceId, idempotencyKey, data) {
      obj['apiVersion'] = apiVersion;
      obj['referenceId'] = referenceId;
      obj['idempotencyKey'] = idempotencyKey;
      obj['data'] = data;
    }

    /**
     * Constructs a <code>AddressCoinsTransactionConfirmed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddressCoinsTransactionConfirmed} obj Optional instance to populate.
     * @return {module:model/AddressCoinsTransactionConfirmed} The populated <code>AddressCoinsTransactionConfirmed</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddressCoinsTransactionConfirmed();
        if (data.hasOwnProperty('apiVersion')) {
          obj['apiVersion'] = _ApiClient["default"].convertToType(data['apiVersion'], 'String');
        }
        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }
        if (data.hasOwnProperty('idempotencyKey')) {
          obj['idempotencyKey'] = _ApiClient["default"].convertToType(data['idempotencyKey'], 'String');
        }
        if (data.hasOwnProperty('data')) {
          obj['data'] = _AddressCoinsTransactionConfirmedData["default"].constructFromObject(data['data']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddressCoinsTransactionConfirmed</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddressCoinsTransactionConfirmed</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(AddressCoinsTransactionConfirmed.RequiredProperties),
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
      if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
        throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
      }
      // ensure the json data is a string
      if (data['referenceId'] && !(typeof data['referenceId'] === 'string' || data['referenceId'] instanceof String)) {
        throw new Error("Expected the field `referenceId` to be a primitive type in the JSON string but got " + data['referenceId']);
      }
      // ensure the json data is a string
      if (data['idempotencyKey'] && !(typeof data['idempotencyKey'] === 'string' || data['idempotencyKey'] instanceof String)) {
        throw new Error("Expected the field `idempotencyKey` to be a primitive type in the JSON string but got " + data['idempotencyKey']);
      }
      // validate the optional field `data`
      if (data['data']) {
        // data not null
        _AddressCoinsTransactionConfirmedData["default"].validateJSON(data['data']);
      }
      return true;
    }
  }]);
  return AddressCoinsTransactionConfirmed;
}();
AddressCoinsTransactionConfirmed.RequiredProperties = ["apiVersion", "referenceId", "idempotencyKey", "data"];

/**
 * Specifies the version of the API that incorporates this endpoint.
 * @member {String} apiVersion
 */
AddressCoinsTransactionConfirmed.prototype['apiVersion'] = undefined;

/**
 * Represents a unique identifier that serves as reference to the specific request which prompts a callback, e.g. Blockchain Events Subscription, Blockchain Automation, etc.
 * @member {String} referenceId
 */
AddressCoinsTransactionConfirmed.prototype['referenceId'] = undefined;

/**
 * Specifies a unique ID generated by the system and attached to each callback. It is used by the server to recognize consecutive requests with the same data with the purpose not to perform the same operation twice.
 * @member {String} idempotencyKey
 */
AddressCoinsTransactionConfirmed.prototype['idempotencyKey'] = undefined;

/**
 * @member {module:model/AddressCoinsTransactionConfirmedData} data
 */
AddressCoinsTransactionConfirmed.prototype['data'] = undefined;
var _default = AddressCoinsTransactionConfirmed;
exports["default"] = _default;