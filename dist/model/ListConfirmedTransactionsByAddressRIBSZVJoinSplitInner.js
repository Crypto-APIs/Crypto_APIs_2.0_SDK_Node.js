"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner model module.
 * @module model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner
 * @version 1.7.2
 */
var ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code>.
   * @alias module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner
   * @param anchor {String} Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
   * @param cipherTexts {Array.<String>} 
   * @param commitments {Array.<String>} 
   * @param macs {Array.<String>} 
   * @param nullifiers {Array.<String>} 
   * @param oneTimePubKey {String} Defines the one time public key.
   * @param proof {String} Defines the proof.
   * @param randomSeed {String} Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
   * @param vPubNew {String} Defines the value that the joinSplit transfer will insert into the transparent transaction value pool.
   * @param vPubOld {String} Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
   */
  function ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner(anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld) {
    _classCallCheck(this, ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner);

    ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.initialize(this, anchor, cipherTexts, commitments, macs, nullifiers, oneTimePubKey, proof, randomSeed, vPubNew, vPubOld);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner, null, [{
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
     * Constructs a <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner} obj Optional instance to populate.
     * @return {module:model/ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner} The populated <code>ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner();

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
  }]);

  return ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner;
}();
/**
 * Defines a Merkle tree root of a note commitment tree which uniquely identifies a note commitment tree state given the assumed security properties of the Merkle tree’s  hash function.
 * @member {String} anchor
 */


ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['anchor'] = undefined;
/**
 * @member {Array.<String>} cipherTexts
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['cipherTexts'] = undefined;
/**
 * @member {Array.<String>} commitments
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['commitments'] = undefined;
/**
 * @member {Array.<String>} macs
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['macs'] = undefined;
/**
 * @member {Array.<String>} nullifiers
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['nullifiers'] = undefined;
/**
 * Defines the one time public key.
 * @member {String} oneTimePubKey
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['oneTimePubKey'] = undefined;
/**
 * Defines the proof.
 * @member {String} proof
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['proof'] = undefined;
/**
 * Represents a 256-bit seed that must be chosen independently at random for each JoinSplit description.
 * @member {String} randomSeed
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['randomSeed'] = undefined;
/**
 * Defines the value that the joinSplit transfer will insert into the transparent transaction value pool.
 * @member {String} vPubNew
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['vPubNew'] = undefined;
/**
 * Defines the value that the joinSplit transfer will remove from the transparent transaction value pool.
 * @member {String} vPubOld
 */

ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner.prototype['vPubOld'] = undefined;
var _default = ListConfirmedTransactionsByAddressRIBSZVJoinSplitInner;
exports["default"] = _default;