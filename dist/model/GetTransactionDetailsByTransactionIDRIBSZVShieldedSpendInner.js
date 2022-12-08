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
 * The GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner model module.
 * @module model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner
 * @version 1.11.0
 */
var GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner</code>.
   * @alias module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner
   * @param anchor {String} Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
   * @param cv {String} Defines a value commitment to the value of the input note.
   * @param nullifier {String} Represents a sequence of nullifiers of the input notes.
   * @param proof {String} Represents the proof.
   * @param rk {String} Represents the randomized validating key for spendAuthSig.
   * @param spendAuthSig {String} Used to prove knowledge of the spending key authorizing spending of an input note.
   */
  function GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner(anchor, cv, nullifier, proof, rk, spendAuthSig) {
    _classCallCheck(this, GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner);
    GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.initialize(this, anchor, cv, nullifier, proof, rk, spendAuthSig);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner, null, [{
    key: "initialize",
    value: function initialize(obj, anchor, cv, nullifier, proof, rk, spendAuthSig) {
      obj['anchor'] = anchor;
      obj['cv'] = cv;
      obj['nullifier'] = nullifier;
      obj['proof'] = proof;
      obj['rk'] = rk;
      obj['spendAuthSig'] = spendAuthSig;
    }

    /**
     * Constructs a <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner} obj Optional instance to populate.
     * @return {module:model/GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner} The populated <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner();
        if (data.hasOwnProperty('anchor')) {
          obj['anchor'] = _ApiClient["default"].convertToType(data['anchor'], 'String');
        }
        if (data.hasOwnProperty('cv')) {
          obj['cv'] = _ApiClient["default"].convertToType(data['cv'], 'String');
        }
        if (data.hasOwnProperty('nullifier')) {
          obj['nullifier'] = _ApiClient["default"].convertToType(data['nullifier'], 'String');
        }
        if (data.hasOwnProperty('proof')) {
          obj['proof'] = _ApiClient["default"].convertToType(data['proof'], 'String');
        }
        if (data.hasOwnProperty('rk')) {
          obj['rk'] = _ApiClient["default"].convertToType(data['rk'], 'String');
        }
        if (data.hasOwnProperty('spendAuthSig')) {
          obj['spendAuthSig'] = _ApiClient["default"].convertToType(data['spendAuthSig'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.RequiredProperties),
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
      // ensure the json data is a string
      if (data['cv'] && !(typeof data['cv'] === 'string' || data['cv'] instanceof String)) {
        throw new Error("Expected the field `cv` to be a primitive type in the JSON string but got " + data['cv']);
      }
      // ensure the json data is a string
      if (data['nullifier'] && !(typeof data['nullifier'] === 'string' || data['nullifier'] instanceof String)) {
        throw new Error("Expected the field `nullifier` to be a primitive type in the JSON string but got " + data['nullifier']);
      }
      // ensure the json data is a string
      if (data['proof'] && !(typeof data['proof'] === 'string' || data['proof'] instanceof String)) {
        throw new Error("Expected the field `proof` to be a primitive type in the JSON string but got " + data['proof']);
      }
      // ensure the json data is a string
      if (data['rk'] && !(typeof data['rk'] === 'string' || data['rk'] instanceof String)) {
        throw new Error("Expected the field `rk` to be a primitive type in the JSON string but got " + data['rk']);
      }
      // ensure the json data is a string
      if (data['spendAuthSig'] && !(typeof data['spendAuthSig'] === 'string' || data['spendAuthSig'] instanceof String)) {
        throw new Error("Expected the field `spendAuthSig` to be a primitive type in the JSON string but got " + data['spendAuthSig']);
      }
      return true;
    }
  }]);
  return GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner;
}();
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.RequiredProperties = ["anchor", "cv", "nullifier", "proof", "rk", "spendAuthSig"];

/**
 * Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
 * @member {String} anchor
 */
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.prototype['anchor'] = undefined;

/**
 * Defines a value commitment to the value of the input note.
 * @member {String} cv
 */
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.prototype['cv'] = undefined;

/**
 * Represents a sequence of nullifiers of the input notes.
 * @member {String} nullifier
 */
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.prototype['nullifier'] = undefined;

/**
 * Represents the proof.
 * @member {String} proof
 */
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.prototype['proof'] = undefined;

/**
 * Represents the randomized validating key for spendAuthSig.
 * @member {String} rk
 */
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.prototype['rk'] = undefined;

/**
 * Used to prove knowledge of the spending key authorizing spending of an input note.
 * @member {String} spendAuthSig
 */
GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner.prototype['spendAuthSig'] = undefined;
var _default = GetTransactionDetailsByTransactionIDRIBSZVShieldedSpendInner;
exports["default"] = _default;