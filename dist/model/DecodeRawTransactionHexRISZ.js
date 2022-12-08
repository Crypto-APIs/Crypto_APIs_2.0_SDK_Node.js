"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _DecodeRawTransactionHexRISZVinInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVinInner"));
var _DecodeRawTransactionHexRISZVoutInner = _interopRequireDefault(require("./DecodeRawTransactionHexRISZVoutInner"));
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
 * The DecodeRawTransactionHexRISZ model module.
 * @module model/DecodeRawTransactionHexRISZ
 * @version 1.11.0
 */
var DecodeRawTransactionHexRISZ = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodeRawTransactionHexRISZ</code>.
   * Zcash
   * @alias module:model/DecodeRawTransactionHexRISZ
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param saplinged {Boolean} Defines if the transaction includes sapling or not.
   * @param transactionHash {String} Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
   * @param valueBalance {String} Defines the transaction value balance.
   * @param version {Number} Represents the transaction version number.
   * @param versionGroupId {String} Represents the transaction version group ID
   * @param vin {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} Represents the Inputs of the transaction
   * @param vout {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} Represents the Inputs of the transaction
   */
  function DecodeRawTransactionHexRISZ(expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout) {
    _classCallCheck(this, DecodeRawTransactionHexRISZ);
    DecodeRawTransactionHexRISZ.initialize(this, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodeRawTransactionHexRISZ, null, [{
    key: "initialize",
    value: function initialize(obj, expiryHeight, locktime, overwintered, saplinged, transactionHash, valueBalance, version, versionGroupId, vin, vout) {
      obj['expiryHeight'] = expiryHeight;
      obj['locktime'] = locktime;
      obj['overwintered'] = overwintered;
      obj['saplinged'] = saplinged;
      obj['transactionHash'] = transactionHash;
      obj['valueBalance'] = valueBalance;
      obj['version'] = version;
      obj['versionGroupId'] = versionGroupId;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>DecodeRawTransactionHexRISZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodeRawTransactionHexRISZ} obj Optional instance to populate.
     * @return {module:model/DecodeRawTransactionHexRISZ} The populated <code>DecodeRawTransactionHexRISZ</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodeRawTransactionHexRISZ();
        if (data.hasOwnProperty('expiryHeight')) {
          obj['expiryHeight'] = _ApiClient["default"].convertToType(data['expiryHeight'], 'Number');
        }
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }
        if (data.hasOwnProperty('saplinged')) {
          obj['saplinged'] = _ApiClient["default"].convertToType(data['saplinged'], 'Boolean');
        }
        if (data.hasOwnProperty('transactionHash')) {
          obj['transactionHash'] = _ApiClient["default"].convertToType(data['transactionHash'], 'String');
        }
        if (data.hasOwnProperty('valueBalance')) {
          obj['valueBalance'] = _ApiClient["default"].convertToType(data['valueBalance'], 'String');
        }
        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
        if (data.hasOwnProperty('versionGroupId')) {
          obj['versionGroupId'] = _ApiClient["default"].convertToType(data['versionGroupId'], 'String');
        }
        if (data.hasOwnProperty('vin')) {
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_DecodeRawTransactionHexRISZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_DecodeRawTransactionHexRISZVoutInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodeRawTransactionHexRISZ</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodeRawTransactionHexRISZ</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(DecodeRawTransactionHexRISZ.RequiredProperties),
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
      if (data['transactionHash'] && !(typeof data['transactionHash'] === 'string' || data['transactionHash'] instanceof String)) {
        throw new Error("Expected the field `transactionHash` to be a primitive type in the JSON string but got " + data['transactionHash']);
      }
      // ensure the json data is a string
      if (data['valueBalance'] && !(typeof data['valueBalance'] === 'string' || data['valueBalance'] instanceof String)) {
        throw new Error("Expected the field `valueBalance` to be a primitive type in the JSON string but got " + data['valueBalance']);
      }
      // ensure the json data is a string
      if (data['versionGroupId'] && !(typeof data['versionGroupId'] === 'string' || data['versionGroupId'] instanceof String)) {
        throw new Error("Expected the field `versionGroupId` to be a primitive type in the JSON string but got " + data['versionGroupId']);
      }
      if (data['vin']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['vin'])) {
          throw new Error("Expected the field `vin` to be an array in the JSON data but got " + data['vin']);
        }
        // validate the optional field `vin` (array)
        var _iterator2 = _createForOfIteratorHelper(data['vin']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _DecodeRawTransactionHexRISZVinInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['vout']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['vout'])) {
          throw new Error("Expected the field `vout` to be an array in the JSON data but got " + data['vout']);
        }
        // validate the optional field `vout` (array)
        var _iterator3 = _createForOfIteratorHelper(data['vout']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _DecodeRawTransactionHexRISZVoutInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      return true;
    }
  }]);
  return DecodeRawTransactionHexRISZ;
}();
DecodeRawTransactionHexRISZ.RequiredProperties = ["expiryHeight", "locktime", "overwintered", "saplinged", "transactionHash", "valueBalance", "version", "versionGroupId", "vin", "vout"];

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
DecodeRawTransactionHexRISZ.prototype['expiryHeight'] = undefined;

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
DecodeRawTransactionHexRISZ.prototype['locktime'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
DecodeRawTransactionHexRISZ.prototype['overwintered'] = undefined;

/**
 * Defines if the transaction includes sapling or not.
 * @member {Boolean} saplinged
 */
DecodeRawTransactionHexRISZ.prototype['saplinged'] = undefined;

/**
 * Represents the same as transactionId for account-based protocols like Ethereum, while it could be different in UTXO-based protocols like Bitcoin. E.g., in UTXO-based protocols hash is different from transactionId for SegWit transactions.
 * @member {String} transactionHash
 */
DecodeRawTransactionHexRISZ.prototype['transactionHash'] = undefined;

/**
 * Defines the transaction value balance.
 * @member {String} valueBalance
 */
DecodeRawTransactionHexRISZ.prototype['valueBalance'] = undefined;

/**
 * Represents the transaction version number.
 * @member {Number} version
 */
DecodeRawTransactionHexRISZ.prototype['version'] = undefined;

/**
 * Represents the transaction version group ID
 * @member {String} versionGroupId
 */
DecodeRawTransactionHexRISZ.prototype['versionGroupId'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVinInner>} vin
 */
DecodeRawTransactionHexRISZ.prototype['vin'] = undefined;

/**
 * Represents the Inputs of the transaction
 * @member {Array.<module:model/DecodeRawTransactionHexRISZVoutInner>} vout
 */
DecodeRawTransactionHexRISZ.prototype['vout'] = undefined;
var _default = DecodeRawTransactionHexRISZ;
exports["default"] = _default;