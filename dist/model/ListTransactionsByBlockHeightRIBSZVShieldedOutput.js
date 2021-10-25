"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ListTransactionsByBlockHeightRIBSZVShieldedOutput model module.
 * @module model/ListTransactionsByBlockHeightRIBSZVShieldedOutput
 * @version 1.3.0
 */
var ListTransactionsByBlockHeightRIBSZVShieldedOutput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListTransactionsByBlockHeightRIBSZVShieldedOutput</code>.
   * @alias module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutput
   * @param cmu {String} Represents the 𝑢-coordinate of the note commitment for the output note.
   * @param cv {String} Defines a value commitment to the value of the input note.
   * @param encCipherText {String} Represents a ciphertext component for the encrypted output note.
   * @param ephemeralKey {String} Represents an encoding of an ephemeral Jubjub public key.
   * @param outCipherText {String} Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
   * @param proof {String} Represents the proof
   */
  function ListTransactionsByBlockHeightRIBSZVShieldedOutput(cmu, cv, encCipherText, ephemeralKey, outCipherText, proof) {
    _classCallCheck(this, ListTransactionsByBlockHeightRIBSZVShieldedOutput);

    ListTransactionsByBlockHeightRIBSZVShieldedOutput.initialize(this, cmu, cv, encCipherText, ephemeralKey, outCipherText, proof);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListTransactionsByBlockHeightRIBSZVShieldedOutput, null, [{
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
     * Constructs a <code>ListTransactionsByBlockHeightRIBSZVShieldedOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutput} obj Optional instance to populate.
     * @return {module:model/ListTransactionsByBlockHeightRIBSZVShieldedOutput} The populated <code>ListTransactionsByBlockHeightRIBSZVShieldedOutput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListTransactionsByBlockHeightRIBSZVShieldedOutput();

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

  return ListTransactionsByBlockHeightRIBSZVShieldedOutput;
}();
/**
 * Represents the 𝑢-coordinate of the note commitment for the output note.
 * @member {String} cmu
 */


ListTransactionsByBlockHeightRIBSZVShieldedOutput.prototype['cmu'] = undefined;
/**
 * Defines a value commitment to the value of the input note.
 * @member {String} cv
 */

ListTransactionsByBlockHeightRIBSZVShieldedOutput.prototype['cv'] = undefined;
/**
 * Represents a ciphertext component for the encrypted output note.
 * @member {String} encCipherText
 */

ListTransactionsByBlockHeightRIBSZVShieldedOutput.prototype['encCipherText'] = undefined;
/**
 * Represents an encoding of an ephemeral Jubjub public key.
 * @member {String} ephemeralKey
 */

ListTransactionsByBlockHeightRIBSZVShieldedOutput.prototype['ephemeralKey'] = undefined;
/**
 * Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
 * @member {String} outCipherText
 */

ListTransactionsByBlockHeightRIBSZVShieldedOutput.prototype['outCipherText'] = undefined;
/**
 * Represents the proof
 * @member {String} proof
 */

ListTransactionsByBlockHeightRIBSZVShieldedOutput.prototype['proof'] = undefined;
var _default = ListTransactionsByBlockHeightRIBSZVShieldedOutput;
exports["default"] = _default;