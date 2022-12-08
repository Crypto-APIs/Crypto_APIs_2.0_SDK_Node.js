"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVinInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVinInner"));
var _GetTransactionDetailsByTransactionIDRIBSZVoutInner = _interopRequireDefault(require("./GetTransactionDetailsByTransactionIDRIBSZVoutInner"));
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
 * The GetTransactionDetailsByTransactionIDRIBSZ model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSZ
 * @version 1.11.0
 */
var GetTransactionDetailsByTransactionIDRIBSZ = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSZ</code>.
   * Zcash
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSZ
   * @param bindingSig {String} It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
   * @param expiryHeight {Number} Represents a block height after which the transaction will expire.
   * @param joinSplitPubKey {String} Represents an encoding of a JoinSplitSig public validating key.
   * @param joinSplitSig {String} Is used to sign transactions that contain at least one JoinSplit description.
   * @param locktime {Number} Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
   * @param overwintered {Boolean} \"Overwinter\" is the network upgrade for the Zcash blockchain.
   * @param size {Number} Represents the total size of this transaction.
   * @param vJoinSplit {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
   * @param vShieldedOutput {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} Object Array representation of transaction output descriptions
   * @param vShieldedSpend {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} Object Array representation of transaction spend descriptions
   * @param valueBalance {String} String representation of the transaction value balance
   * @param version {Number} Defines the version of the transaction.
   * @param versionGroupId {String} Represents the transaction version group ID.
   * @param vin {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} Object Array representation of transaction inputs
   * @param vout {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} Object Array representation of transaction outputs
   */
  function GetTransactionDetailsByTransactionIDRIBSZ(bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSZ);
    GetTransactionDetailsByTransactionIDRIBSZ.initialize(this, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBSZ, null, [{
    key: "initialize",
    value: function initialize(obj, bindingSig, expiryHeight, joinSplitPubKey, joinSplitSig, locktime, overwintered, size, vJoinSplit, vShieldedOutput, vShieldedSpend, valueBalance, version, versionGroupId, vin, vout) {
      obj['bindingSig'] = bindingSig;
      obj['expiryHeight'] = expiryHeight;
      obj['joinSplitPubKey'] = joinSplitPubKey;
      obj['joinSplitSig'] = joinSplitSig;
      obj['locktime'] = locktime;
      obj['overwintered'] = overwintered;
      obj['size'] = size;
      obj['vJoinSplit'] = vJoinSplit;
      obj['vShieldedOutput'] = vShieldedOutput;
      obj['vShieldedSpend'] = vShieldedSpend;
      obj['valueBalance'] = valueBalance;
      obj['version'] = version;
      obj['versionGroupId'] = versionGroupId;
      obj['vin'] = vin;
      obj['vout'] = vout;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSZ</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSZ} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSZ} The populated <code>GetTransactionDetailsByTransactionIDRIBSZ</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSZ();
        if (data.hasOwnProperty('bindingSig')) {
          obj['bindingSig'] = _ApiClient["default"].convertToType(data['bindingSig'], 'String');
        }
        if (data.hasOwnProperty('expiryHeight')) {
          obj['expiryHeight'] = _ApiClient["default"].convertToType(data['expiryHeight'], 'Number');
        }
        if (data.hasOwnProperty('joinSplitPubKey')) {
          obj['joinSplitPubKey'] = _ApiClient["default"].convertToType(data['joinSplitPubKey'], 'String');
        }
        if (data.hasOwnProperty('joinSplitSig')) {
          obj['joinSplitSig'] = _ApiClient["default"].convertToType(data['joinSplitSig'], 'String');
        }
        if (data.hasOwnProperty('locktime')) {
          obj['locktime'] = _ApiClient["default"].convertToType(data['locktime'], 'Number');
        }
        if (data.hasOwnProperty('overwintered')) {
          obj['overwintered'] = _ApiClient["default"].convertToType(data['overwintered'], 'Boolean');
        }
        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
        if (data.hasOwnProperty('vJoinSplit')) {
          obj['vJoinSplit'] = _ApiClient["default"].convertToType(data['vJoinSplit'], [_GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner["default"]]);
        }
        if (data.hasOwnProperty('vShieldedOutput')) {
          obj['vShieldedOutput'] = _ApiClient["default"].convertToType(data['vShieldedOutput'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner["default"]]);
        }
        if (data.hasOwnProperty('vShieldedSpend')) {
          obj['vShieldedSpend'] = _ApiClient["default"].convertToType(data['vShieldedSpend'], [_GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner["default"]]);
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
          obj['vin'] = _ApiClient["default"].convertToType(data['vin'], [_GetTransactionDetailsByTransactionIDRIBSZVinInner["default"]]);
        }
        if (data.hasOwnProperty('vout')) {
          obj['vout'] = _ApiClient["default"].convertToType(data['vout'], [_GetTransactionDetailsByTransactionIDRIBSZVoutInner["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTransactionDetailsByTransactionIDRIBSZ</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTransactionDetailsByTransactionIDRIBSZ</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetTransactionDetailsByTransactionIDRIBSZ.RequiredProperties),
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
      if (data['bindingSig'] && !(typeof data['bindingSig'] === 'string' || data['bindingSig'] instanceof String)) {
        throw new Error("Expected the field `bindingSig` to be a primitive type in the JSON string but got " + data['bindingSig']);
      }
      // ensure the json data is a string
      if (data['joinSplitPubKey'] && !(typeof data['joinSplitPubKey'] === 'string' || data['joinSplitPubKey'] instanceof String)) {
        throw new Error("Expected the field `joinSplitPubKey` to be a primitive type in the JSON string but got " + data['joinSplitPubKey']);
      }
      // ensure the json data is a string
      if (data['joinSplitSig'] && !(typeof data['joinSplitSig'] === 'string' || data['joinSplitSig'] instanceof String)) {
        throw new Error("Expected the field `joinSplitSig` to be a primitive type in the JSON string but got " + data['joinSplitSig']);
      }
      if (data['vJoinSplit']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['vJoinSplit'])) {
          throw new Error("Expected the field `vJoinSplit` to be an array in the JSON data but got " + data['vJoinSplit']);
        }
        // validate the optional field `vJoinSplit` (array)
        var _iterator2 = _createForOfIteratorHelper(data['vJoinSplit']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      if (data['vShieldedOutput']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['vShieldedOutput'])) {
          throw new Error("Expected the field `vShieldedOutput` to be an array in the JSON data but got " + data['vShieldedOutput']);
        }
        // validate the optional field `vShieldedOutput` (array)
        var _iterator3 = _createForOfIteratorHelper(data['vShieldedOutput']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      if (data['vShieldedSpend']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['vShieldedSpend'])) {
          throw new Error("Expected the field `vShieldedSpend` to be an array in the JSON data but got " + data['vShieldedSpend']);
        }
        // validate the optional field `vShieldedSpend` (array)
        var _iterator4 = _createForOfIteratorHelper(data['vShieldedSpend']),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item2 = _step4.value;
            _GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner["default"].validateJsonObject(_item2);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        ;
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
        var _iterator5 = _createForOfIteratorHelper(data['vin']),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _item3 = _step5.value;
            _GetTransactionDetailsByTransactionIDRIBSZVinInner["default"].validateJsonObject(_item3);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
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
        var _iterator6 = _createForOfIteratorHelper(data['vout']),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _item4 = _step6.value;
            _GetTransactionDetailsByTransactionIDRIBSZVoutInner["default"].validateJsonObject(_item4);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        ;
      }
      return true;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBSZ;
}();
GetTransactionDetailsByTransactionIDRIBSZ.RequiredProperties = ["bindingSig", "expiryHeight", "joinSplitPubKey", "joinSplitSig", "locktime", "overwintered", "size", "vJoinSplit", "vShieldedOutput", "vShieldedSpend", "valueBalance", "version", "versionGroupId", "vin", "vout"];

/**
 * It is used to enforce balance of Spend and Output transfers, in order to prevent their replay across transactions.
 * @member {String} bindingSig
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['bindingSig'] = undefined;

/**
 * Represents a block height after which the transaction will expire.
 * @member {Number} expiryHeight
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['expiryHeight'] = undefined;

/**
 * Represents an encoding of a JoinSplitSig public validating key.
 * @member {String} joinSplitPubKey
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['joinSplitPubKey'] = undefined;

/**
 * Is used to sign transactions that contain at least one JoinSplit description.
 * @member {String} joinSplitSig
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['joinSplitSig'] = undefined;

/**
 * Represents the locktime on the transaction on the specific blockchain, i.e. the blockheight at which the transaction is valid.
 * @member {Number} locktime
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['locktime'] = undefined;

/**
 * \"Overwinter\" is the network upgrade for the Zcash blockchain.
 * @member {Boolean} overwintered
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['overwintered'] = undefined;

/**
 * Represents the total size of this transaction.
 * @member {Number} size
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['size'] = undefined;

/**
 * Represents a sequence of JoinSplit descriptions using BCTV14 proofs.
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner>} vJoinSplit
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vJoinSplit'] = undefined;

/**
 * Object Array representation of transaction output descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedOutputInner>} vShieldedOutput
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vShieldedOutput'] = undefined;

/**
 * Object Array representation of transaction spend descriptions
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner>} vShieldedSpend
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vShieldedSpend'] = undefined;

/**
 * String representation of the transaction value balance
 * @member {String} valueBalance
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['valueBalance'] = undefined;

/**
 * Defines the version of the transaction.
 * @member {Number} version
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['version'] = undefined;

/**
 * Represents the transaction version group ID.
 * @member {String} versionGroupId
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['versionGroupId'] = undefined;

/**
 * Object Array representation of transaction inputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVinInner>} vin
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vin'] = undefined;

/**
 * Object Array representation of transaction outputs
 * @member {Array.<module:model/GetTransactionDetailsByTransactionIDRIBSZVoutInner>} vout
 */
GetTransactionDetailsByTransactionIDRIBSZ.prototype['vout'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSZ;
exports["default"] = _default;