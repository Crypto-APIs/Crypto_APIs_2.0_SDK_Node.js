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
 * The GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner
 * @version 1.11.0
 */
var GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner
   * @param anchor {String} Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
   * @param cipherTexts {Array.<String>} 
   * @param commitments {Array.<String>} 
   * @param macs {Array.<String>} 
   * @param nullifiers {Array.<String>} 
   * @param oneTimePubKey {String} Defines the one time public key.
   * @param proof {String} Defines the proof.
   * @param randomSeed {String} Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
   * @param vPubNew {String} Defines the value that the joinSplit transfer will insert into the transparent transaction value pool
   * @param vPubOld {String} Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
   */
  function GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner(anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner);
    GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.initialize(this, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner, null, [{
    key: "initialize",
    value: function initialize(obj, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) {
      obj['anchor'] = anchor;
      obj['cipherTexts'] = cipherTexts;
      obj['commitments'] = commitments;
      obj['macs'] = macs;
      obj['nullifiers'] = nullifiers;
      obj['oneTimePubKey'] = oneTimePubKey;
      obj['proof'] = proof;
      obj['randomSeed'] = randomSeed;
      obj['vPubNew'] = vPubNew;
      obj['vPubOld'] = vPubOld;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner} The populated <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner();
        if (data.hasOwnProperty('anchor')) {
          obj['anchor'] = _ApiClient["default"].convertToType(data['anchor'], 'String');
        }
        if (data.hasOwnProperty('cipherTexts')) {
          obj['cipherTexts'] = _ApiClient["default"].convertToType(data['cipherTexts'], ['String']);
        }
        if (data.hasOwnProperty('commitments')) {
          obj['commitments'] = _ApiClient["default"].convertToType(data['commitments'], ['String']);
        }
        if (data.hasOwnProperty('macs')) {
          obj['macs'] = _ApiClient["default"].convertToType(data['macs'], ['String']);
        }
        if (data.hasOwnProperty('nullifiers')) {
          obj['nullifiers'] = _ApiClient["default"].convertToType(data['nullifiers'], ['String']);
        }
        if (data.hasOwnProperty('oneTimePubKey')) {
          obj['oneTimePubKey'] = _ApiClient["default"].convertToType(data['oneTimePubKey'], 'String');
        }
        if (data.hasOwnProperty('proof')) {
          obj['proof'] = _ApiClient["default"].convertToType(data['proof'], 'String');
        }
        if (data.hasOwnProperty('randomSeed')) {
          obj['randomSeed'] = _ApiClient["default"].convertToType(data['randomSeed'], 'String');
        }
        if (data.hasOwnProperty('vPubNew')) {
          obj['vPubNew'] = _ApiClient["default"].convertToType(data['vPubNew'], 'String');
        }
        if (data.hasOwnProperty('vPubOld')) {
          obj['vPubOld'] = _ApiClient["default"].convertToType(data['vPubOld'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.RequiredProperties),
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
      if (data['anchor'] && !(typeof data['anchor'] === 'string' || data['anchor'] instanceof String)) {
        throw new Error("Expected the field `anchor` to be a primitive type in the JSON string but got " + data['anchor']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['cipherTexts'])) {
        throw new Error("Expected the field `cipherTexts` to be an array in the JSON data but got " + data['cipherTexts']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['commitments'])) {
        throw new Error("Expected the field `commitments` to be an array in the JSON data but got " + data['commitments']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['macs'])) {
        throw new Error("Expected the field `macs` to be an array in the JSON data but got " + data['macs']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['nullifiers'])) {
        throw new Error("Expected the field `nullifiers` to be an array in the JSON data but got " + data['nullifiers']);
      }
      // ensure the json data is a string
      if (data['oneTimePubKey'] && !(typeof data['oneTimePubKey'] === 'string' || data['oneTimePubKey'] instanceof String)) {
        throw new Error("Expected the field `oneTimePubKey` to be a primitive type in the JSON string but got " + data['oneTimePubKey']);
      }
      // ensure the json data is a string
      if (data['proof'] && !(typeof data['proof'] === 'string' || data['proof'] instanceof String)) {
        throw new Error("Expected the field `proof` to be a primitive type in the JSON string but got " + data['proof']);
      }
      // ensure the json data is a string
      if (data['randomSeed'] && !(typeof data['randomSeed'] === 'string' || data['randomSeed'] instanceof String)) {
        throw new Error("Expected the field `randomSeed` to be a primitive type in the JSON string but got " + data['randomSeed']);
      }
      // ensure the json data is a string
      if (data['vPubNew'] && !(typeof data['vPubNew'] === 'string' || data['vPubNew'] instanceof String)) {
        throw new Error("Expected the field `vPubNew` to be a primitive type in the JSON string but got " + data['vPubNew']);
      }
      // ensure the json data is a string
      if (data['vPubOld'] && !(typeof data['vPubOld'] === 'string' || data['vPubOld'] instanceof String)) {
        throw new Error("Expected the field `vPubOld` to be a primitive type in the JSON string but got " + data['vPubOld']);
      }
      return true;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner;
}();
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.RequiredProperties = ["anchor", "cipherTexts", "commitments", "macs", "nullifiers", "oneTimePubKey", "proof", "randomSeed", "vPubNew", "vPubOld"];

/**
 * Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
 * @member {String} anchor
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['anchor'] = undefined;

/**
 * @member {Array.<String>} cipherTexts
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['cipherTexts'] = undefined;

/**
 * @member {Array.<String>} commitments
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['commitments'] = undefined;

/**
 * @member {Array.<String>} macs
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['macs'] = undefined;

/**
 * @member {Array.<String>} nullifiers
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['nullifiers'] = undefined;

/**
 * Defines the one time public key.
 * @member {String} oneTimePubKey
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['oneTimePubKey'] = undefined;

/**
 * Defines the proof.
 * @member {String} proof
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['proof'] = undefined;

/**
 * Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
 * @member {String} randomSeed
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['randomSeed'] = undefined;

/**
 * Defines the value that the joinSplit transfer will insert into the transparent transaction value pool
 * @member {String} vPubNew
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['vPubNew'] = undefined;

/**
 * Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
 * @member {String} vPubOld
 */
GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner.prototype['vPubOld'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSZVJoinSplitInner;
exports["default"] = _default;