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
 * The ListHDWalletXPubYPubZPubUTXOsRI model module.
 * @module model/ListHDWalletXPubYPubZPubUTXOsRI
 * @version 1.13.0
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
  }]);
  return ListHDWalletXPubYPubZPubUTXOsRI;
}();
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