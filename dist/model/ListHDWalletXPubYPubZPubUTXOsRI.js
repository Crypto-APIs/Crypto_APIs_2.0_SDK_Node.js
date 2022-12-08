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
 * The ListHDWalletXPubYPubZPubUTXOsRI model module.
 * @module model/ListHDWalletXPubYPubZPubUTXOsRI
 * @version 1.11.0
 */
var ListHDWalletXPubYPubZPubUTXOsRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListHDWalletXPubYPubZPubUTXOsRI</code>.
   * @alias module:model/ListHDWalletXPubYPubZPubUTXOsRI
   * @param address {String} Represents the public address, which is a compressed and shortened form of a public key.
   * @param addressPath {String} Defines a data which tells a Hierarchical Deterministic wallet how to derive a specific key within a tree of keys.
   * @param amount {String} Represents the UTXO amount value.
   * @param derivation {String} The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
   * @param index {Number} Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
   * @param isAvailable {Boolean} Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \"false\".
   * @param isConfirmed {Boolean} Represents the state of the transaction whether it is confirmed or not confirmed.
   * @param referenceId {String} Represents the reference id of the record. It may be used for the startingAfter pagination attribute.
   * @param transactionId {String} Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
   */
  function ListHDWalletXPubYPubZPubUTXOsRI(address, addressPath, amount, derivation, index, isAvailable, isConfirmed, referenceId, transactionId) {
    _classCallCheck(this, ListHDWalletXPubYPubZPubUTXOsRI);
    ListHDWalletXPubYPubZPubUTXOsRI.initialize(this, address, addressPath, amount, derivation, index, isAvailable, isConfirmed, referenceId, transactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListHDWalletXPubYPubZPubUTXOsRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, addressPath, amount, derivation, index, isAvailable, isConfirmed, referenceId, transactionId) {
      obj['address'] = address;
      obj['addressPath'] = addressPath;
      obj['amount'] = amount;
      obj['derivation'] = derivation;
      obj['index'] = index;
      obj['isAvailable'] = isAvailable;
      obj['isConfirmed'] = isConfirmed;
      obj['referenceId'] = referenceId;
      obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>ListHDWalletXPubYPubZPubUTXOsRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListHDWalletXPubYPubZPubUTXOsRI} obj Optional instance to populate.
     * @return {module:model/ListHDWalletXPubYPubZPubUTXOsRI} The populated <code>ListHDWalletXPubYPubZPubUTXOsRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListHDWalletXPubYPubZPubUTXOsRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('addressPath')) {
          obj['addressPath'] = _ApiClient["default"].convertToType(data['addressPath'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }
        if (data.hasOwnProperty('derivation')) {
          obj['derivation'] = _ApiClient["default"].convertToType(data['derivation'], 'String');
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }
        if (data.hasOwnProperty('isAvailable')) {
          obj['isAvailable'] = _ApiClient["default"].convertToType(data['isAvailable'], 'Boolean');
        }
        if (data.hasOwnProperty('isConfirmed')) {
          obj['isConfirmed'] = _ApiClient["default"].convertToType(data['isConfirmed'], 'Boolean');
        }
        if (data.hasOwnProperty('referenceId')) {
          obj['referenceId'] = _ApiClient["default"].convertToType(data['referenceId'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListHDWalletXPubYPubZPubUTXOsRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListHDWalletXPubYPubZPubUTXOsRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListHDWalletXPubYPubZPubUTXOsRI.RequiredProperties),
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
      if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
        throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
      }
      // ensure the json data is a string
      if (data['addressPath'] && !(typeof data['addressPath'] === 'string' || data['addressPath'] instanceof String)) {
        throw new Error("Expected the field `addressPath` to be a primitive type in the JSON string but got " + data['addressPath']);
      }
      // ensure the json data is a string
      if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
        throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
      }
      // ensure the json data is a string
      if (data['derivation'] && !(typeof data['derivation'] === 'string' || data['derivation'] instanceof String)) {
        throw new Error("Expected the field `derivation` to be a primitive type in the JSON string but got " + data['derivation']);
      }
      // ensure the json data is a string
      if (data['referenceId'] && !(typeof data['referenceId'] === 'string' || data['referenceId'] instanceof String)) {
        throw new Error("Expected the field `referenceId` to be a primitive type in the JSON string but got " + data['referenceId']);
      }
      // ensure the json data is a string
      if (data['transactionId'] && !(typeof data['transactionId'] === 'string' || data['transactionId'] instanceof String)) {
        throw new Error("Expected the field `transactionId` to be a primitive type in the JSON string but got " + data['transactionId']);
      }
      return true;
    }
  }]);
  return ListHDWalletXPubYPubZPubUTXOsRI;
}();
ListHDWalletXPubYPubZPubUTXOsRI.RequiredProperties = ["address", "addressPath", "amount", "derivation", "index", "isAvailable", "isConfirmed", "referenceId", "transactionId"];

/**
 * Represents the public address, which is a compressed and shortened form of a public key.
 * @member {String} address
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['address'] = undefined;

/**
 * Defines a data which tells a Hierarchical Deterministic wallet how to derive a specific key within a tree of keys.
 * @member {String} addressPath
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['addressPath'] = undefined;

/**
 * Represents the UTXO amount value.
 * @member {String} amount
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['amount'] = undefined;

/**
 * The way how the HD walled derives, for example when the type is ACCOUNT, it derives change and receive addresses while when the type is BIP32 it derives directly.
 * @member {String} derivation
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['derivation'] = undefined;

/**
 * Represents the output index. It refers to the UTXO sequence in the transaction outputs (vout).
 * @member {Number} index
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['index'] = undefined;

/**
 * Represents if the UTXO has been used from another unconfirmed transaction. If it is - the value will be \"false\".
 * @member {Boolean} isAvailable
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['isAvailable'] = undefined;

/**
 * Represents the state of the transaction whether it is confirmed or not confirmed.
 * @member {Boolean} isConfirmed
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['isConfirmed'] = undefined;

/**
 * Represents the reference id of the record. It may be used for the startingAfter pagination attribute.
 * @member {String} referenceId
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['referenceId'] = undefined;

/**
 * Represents the unique identifier of a transaction, i.e. it could be transactionId in UTXO-based protocols like Bitcoin, and transaction hash in Ethereum blockchain.
 * @member {String} transactionId
 */
ListHDWalletXPubYPubZPubUTXOsRI.prototype['transactionId'] = undefined;
var _default = ListHDWalletXPubYPubZPubUTXOsRI;
exports["default"] = _default;