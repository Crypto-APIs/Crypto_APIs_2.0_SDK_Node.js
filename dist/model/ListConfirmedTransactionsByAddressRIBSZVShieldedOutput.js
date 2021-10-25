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
 * The ListConfirmedTransactionsByAddressRIBSZVShieldedOutput model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput
 * @version 1.3.0
 */
var ListConfirmedTransactionsByAddressRIBSZVShieldedOutput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSZVShieldedOutput</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput
   * @param cmu {String} Represents the 𝑢-coordinate of the note commitment for the output note.
   * @param cv {String} Defines a value commitment to the value of the input note.
   * @param encCipherText {String} Represents a ciphertext component for the encrypted output note.
   * @param ephemeralKey {String} Represents an encoding of an ephemeral Jubjub public key.
   * @param outCipherText {String} Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
   * @param proof {String} Represents the proof.
   */
  function ListConfirmedTransactionsByAddressRIBSZVShieldedOutput(cmu, cv, encCipherText, ephemeralKey, outCipherText, proof) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSZVShieldedOutput);

    ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.initialize(this, cmu, cv, encCipherText, ephemeralKey, outCipherText, proof);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSZVShieldedOutput, null, [{
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
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSZVShieldedOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSZVShieldedOutput} The populated <code>ListConfirmedTransactionsByAddressRIBSZVShieldedOutput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSZVShieldedOutput();

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

  return ListConfirmedTransactionsByAddressRIBSZVShieldedOutput;
}();
/**
 * Represents the 𝑢-coordinate of the note commitment for the output note.
 * @member {String} cmu
 */


ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.prototype['cmu'] = undefined;
/**
 * Defines a value commitment to the value of the input note.
 * @member {String} cv
 */

ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.prototype['cv'] = undefined;
/**
 * Represents a ciphertext component for the encrypted output note.
 * @member {String} encCipherText
 */

ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.prototype['encCipherText'] = undefined;
/**
 * Represents an encoding of an ephemeral Jubjub public key.
 * @member {String} ephemeralKey
 */

ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.prototype['ephemeralKey'] = undefined;
/**
 * Represents a ciphertext component that allows the holder of the outgoing cipher key to recover the diversified transmission key pkd and ephemeral private key esk, hence the entire note plaintext.
 * @member {String} outCipherText
 */

ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.prototype['outCipherText'] = undefined;
/**
 * Represents the proof.
 * @member {String} proof
 */

ListConfirmedTransactionsByAddressRIBSZVShieldedOutput.prototype['proof'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSZVShieldedOutput;
exports["default"] = _default;