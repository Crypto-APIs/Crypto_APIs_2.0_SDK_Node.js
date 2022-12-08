"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData"));
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
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST
 * @version 1.11.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code>.
   * Tron
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST
   * @param data {String} String representation of the data
   * @param derivationIndex {String} Representation of the derivation index of the xpub address
   * @param expiration {Number} Rrepresentation of the expiration value
   * @param rawDataHex {String} Representation of the raw data in hex format
   * @param recipient {String} Rrepresentation of the recipients' address
   * @param refBlockBytes {String} Representation of the block bytes
   * @param refBlockHash {String} Representation of the block hash refference
   * @param sender {String} Representation of the sender
   * @param timestamp {Number} Representation of the timestamp
   * @param transactionId {String} Represents the reference transaction identifier.
   * @param type {String} Representation of the transfer type.
   * @param typeUrl {String} Representation of the URL
   * @param unit {String} Represents the unit of the amount to be sent.
   * @param visible {Boolean} Representation of the address visibility
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST(data, derivationIndex, expiration, rawDataHex, recipient, refBlockBytes, refBlockHash, sender, timestamp, transactionId, type, typeUrl, unit, visible) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.initialize(this, data, derivationIndex, expiration, rawDataHex, recipient, refBlockBytes, refBlockHash, sender, timestamp, transactionId, type, typeUrl, unit, visible);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, data, derivationIndex, expiration, rawDataHex, recipient, refBlockBytes, refBlockHash, sender, timestamp, transactionId, type, typeUrl, unit, visible) {
      obj['data'] = data;
      obj['derivationIndex'] = derivationIndex;
      obj['expiration'] = expiration;
      obj['rawDataHex'] = rawDataHex;
      obj['recipient'] = recipient;
      obj['refBlockBytes'] = refBlockBytes;
      obj['refBlockHash'] = refBlockHash;
      obj['sender'] = sender;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
      obj['type'] = type;
      obj['typeUrl'] = typeUrl;
      obj['unit'] = unit;
      obj['visible'] = visible;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST();
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'String');
        }
        if (data.hasOwnProperty('expiration')) {
          obj['expiration'] = _ApiClient["default"].convertToType(data['expiration'], 'Number');
        }
        if (data.hasOwnProperty('rawData')) {
          obj['rawData'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData["default"].constructFromObject(data['rawData']);
        }
        if (data.hasOwnProperty('rawDataHex')) {
          obj['rawDataHex'] = _ApiClient["default"].convertToType(data['rawDataHex'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('refBlockBytes')) {
          obj['refBlockBytes'] = _ApiClient["default"].convertToType(data['refBlockBytes'], 'String');
        }
        if (data.hasOwnProperty('refBlockHash')) {
          obj['refBlockHash'] = _ApiClient["default"].convertToType(data['refBlockHash'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('typeUrl')) {
          obj['typeUrl'] = _ApiClient["default"].convertToType(data['typeUrl'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('visible')) {
          obj['visible'] = _ApiClient["default"].convertToType(data['visible'], 'Boolean');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.RequiredProperties),
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
      if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
        throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
      }
      // ensure the json data is a string
      if (data['derivationIndex'] && !(typeof data['derivationIndex'] === 'string' || data['derivationIndex'] instanceof String)) {
        throw new Error("Expected the field `derivationIndex` to be a primitive type in the JSON string but got " + data['derivationIndex']);
      }
      // validate the optional field `rawData`
      if (data['rawData']) {
        // data not null
        _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData["default"].validateJSON(data['rawData']);
      }
      // ensure the json data is a string
      if (data['rawDataHex'] && !(typeof data['rawDataHex'] === 'string' || data['rawDataHex'] instanceof String)) {
        throw new Error("Expected the field `rawDataHex` to be a primitive type in the JSON string but got " + data['rawDataHex']);
      }
      // ensure the json data is a string
      if (data['recipient'] && !(typeof data['recipient'] === 'string' || data['recipient'] instanceof String)) {
        throw new Error("Expected the field `recipient` to be a primitive type in the JSON string but got " + data['recipient']);
      }
      // ensure the json data is a string
      if (data['refBlockBytes'] && !(typeof data['refBlockBytes'] === 'string' || data['refBlockBytes'] instanceof String)) {
        throw new Error("Expected the field `refBlockBytes` to be a primitive type in the JSON string but got " + data['refBlockBytes']);
      }
      // ensure the json data is a string
      if (data['refBlockHash'] && !(typeof data['refBlockHash'] === 'string' || data['refBlockHash'] instanceof String)) {
        throw new Error("Expected the field `refBlockHash` to be a primitive type in the JSON string but got " + data['refBlockHash']);
      }
      // ensure the json data is a string
      if (data['sender'] && !(typeof data['sender'] === 'string' || data['sender'] instanceof String)) {
        throw new Error("Expected the field `sender` to be a primitive type in the JSON string but got " + data['sender']);
      }
      // ensure the json data is a string
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      // ensure the json data is a string
      if (data['typeUrl'] && !(typeof data['typeUrl'] === 'string' || data['typeUrl'] instanceof String)) {
        throw new Error("Expected the field `typeUrl` to be a primitive type in the JSON string but got " + data['typeUrl']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      return true;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST;
}();
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.RequiredProperties = ["data", "derivationIndex", "expiration", "rawDataHex", "recipient", "refBlockBytes", "refBlockHash", "sender", "timestamp", "transactionId", "type", "typeUrl", "unit", "visible"];

/**
 * String representation of the data
 * @member {String} data
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['data'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {String} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['derivationIndex'] = undefined;

/**
 * Rrepresentation of the expiration value
 * @member {Number} expiration
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['expiration'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData} rawData
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['rawData'] = undefined;

/**
 * Representation of the raw data in hex format
 * @member {String} rawDataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['rawDataHex'] = undefined;

/**
 * Rrepresentation of the recipients' address
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['recipient'] = undefined;

/**
 * Representation of the block bytes
 * @member {String} refBlockBytes
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['refBlockBytes'] = undefined;

/**
 * Representation of the block hash refference
 * @member {String} refBlockHash
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['refBlockHash'] = undefined;

/**
 * Representation of the sender
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['sender'] = undefined;

/**
 * Representation of the timestamp
 * @member {Number} timestamp
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['timestamp'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} transactionId
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['transactionId'] = undefined;

/**
 * Representation of the transfer type.
 * @member {String} type
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['type'] = undefined;

/**
 * Representation of the URL
 * @member {String} typeUrl
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['typeUrl'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['unit'] = undefined;

/**
 * Representation of the address visibility
 * @member {Boolean} visible
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['visible'] = undefined;
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST;
exports["default"] = _default;