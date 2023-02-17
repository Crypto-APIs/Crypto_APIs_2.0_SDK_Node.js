"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListTransactionsByBlockHeightRIBSZVShieldedOutputInner model module.
 * @module model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner
 * @version 1.13.0
 */
var ListTransactionsByBlockHeightRIBSZVShieldedOutputInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSZVShieldedOutputInner</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner
   * @param cmu {String} Represents the 𝑢-coordinate of the note commitment for the output note.
   * @param cv {String} Defines a value commitment to the value of the input note.
   * @param encCipherText {String} Represents a ciphertext component for the encrypted output note.
   * @param ephemeralKey {String} Represents an encoding of an ephemeral Jubjub public key.
   * @param outCipherText {String} Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
   * @param proof {String} Represents the proof
   */
  function ListTransactionsByBlockHeightRIBSZVShieldedOutputInner(cmu, cv, encCipherText, ephemeralKey, outCipherText, proof) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSZVShieldedOutputInner);
    ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.initialize(this, cmu, cv, encCipherText, ephemeralKey, outCipherText, proof);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListTransactionsByBlockHeightRIBSZVShieldedOutputInner, null, [{
    key: "initialize",
    value: function initialize(obj, cmu, cv, encCipherText, ephemeralKey, outCipherText, proof) {
      obj['cmu'] = cmu;
      obj['cv'] = cv;
      obj['encCipherText'] = encCipherText;
      obj['ephemeralKey'] = ephemeralKey;
      obj['outCipherText'] = outCipherText;
      obj['proof'] = proof;
    }

    /**
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZVShieldedOutputInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutputInner} The populated <code>ListTransactionsByBlockHeightRIBSZVShieldedOutputInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSZVShieldedOutputInner();
        if (data.hasOwnProperty('cmu')) {
          obj['cmu'] = _ApiClient["default"].convertToType(data['cmu'], 'String');
        }
        if (data.hasOwnProperty('cv')) {
          obj['cv'] = _ApiClient["default"].convertToType(data['cv'], 'String');
        }
        if (data.hasOwnProperty('encCipherText')) {
          obj['encCipherText'] = _ApiClient["default"].convertToType(data['encCipherText'], 'String');
        }
        if (data.hasOwnProperty('ephemeralKey')) {
          obj['ephemeralKey'] = _ApiClient["default"].convertToType(data['ephemeralKey'], 'String');
        }
        if (data.hasOwnProperty('outCipherText')) {
          obj['outCipherText'] = _ApiClient["default"].convertToType(data['outCipherText'], 'String');
        }
        if (data.hasOwnProperty('proof')) {
          obj['proof'] = _ApiClient["default"].convertToType(data['proof'], 'String');
        }
      }
      return obj;
    }
  }]);
  return ListTransactionsByBlockHeightRIBSZVShieldedOutputInner;
}();
/**
 * Represents the 𝑢-coordinate of the note commitment for the output note.
 * @member {String} cmu
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['cmu'] = undefined;

/**
 * Defines a value commitment to the value of the input note.
 * @member {String} cv
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['cv'] = undefined;

/**
 * Represents a ciphertext component for the encrypted output note.
 * @member {String} encCipherText
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['encCipherText'] = undefined;

/**
 * Represents an encoding of an ephemeral Jubjub public key.
 * @member {String} ephemeralKey
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['ephemeralKey'] = undefined;

/**
 * Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
 * @member {String} outCipherText
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['outCipherText'] = undefined;

/**
 * Represents the proof
 * @member {String} proof
 */
ListTransactionsByBlockHeightRIBSZVShieldedOutputInner.prototype['proof'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSZVShieldedOutputInner;
exports["default"] = _default;