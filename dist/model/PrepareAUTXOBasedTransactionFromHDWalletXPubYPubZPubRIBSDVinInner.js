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
 * The PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner model module.
 * @module model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner
 * @version 1.13.0
 */
var PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner</code>.
   * @alias module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner
   * @param address {String} Representation of the address
   * @param change {Number} Representation of the change value
   * @param derivationIndex {Number} Representation of the derivation index of the xpub address.
   * @param outputIndex {Number} Representation of the output index
   * @param satoshis {Number} Representation of the satoshis value
   * @param script {String} Representation of the script string
   * @param sighash {String} Representation of the hash that should be signed.
   * @param transactionId {String} Represents the reference transaction identifier.
   */
  function PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner(address, change, derivationIndex, outputIndex, satoshis, script, sighash, transactionId) {
    _classCallCheck(this, PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner);
    PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.initialize(this, address, change, derivationIndex, outputIndex, satoshis, script, sighash, transactionId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner, null, [{
    key: "initialize",
    value: function initialize(obj, address, change, derivationIndex, outputIndex, satoshis, script, sighash, transactionId) {
      obj['address'] = address;
      obj['change'] = change;
      obj['derivationIndex'] = derivationIndex;
      obj['outputIndex'] = outputIndex;
      obj['satoshis'] = satoshis;
      obj['script'] = script;
      obj['sighash'] = sighash;
      obj['transactionId'] = transactionId;
    }

    /**
     * Constructs a <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner} obj Optional instance to populate.
     * @return {module:model/PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner} The populated <code>PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('change')) {
          obj['change'] = _ApiClient["default"].convertToType(data['change'], 'Number');
        }
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'Number');
        }
        if (data.hasOwnProperty('outputIndex')) {
          obj['outputIndex'] = _ApiClient["default"].convertToType(data['outputIndex'], 'Number');
        }
        if (data.hasOwnProperty('satoshis')) {
          obj['satoshis'] = _ApiClient["default"].convertToType(data['satoshis'], 'Number');
        }
        if (data.hasOwnProperty('script')) {
          obj['script'] = _ApiClient["default"].convertToType(data['script'], 'String');
        }
        if (data.hasOwnProperty('sighash')) {
          obj['sighash'] = _ApiClient["default"].convertToType(data['sighash'], 'String');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
      }
      return obj;
    }
  }]);
  return PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner;
}();
/**
 * Representation of the address
 * @member {String} address
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['address'] = undefined;

/**
 * Representation of the change value
 * @member {Number} change
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['change'] = undefined;

/**
 * Representation of the derivation index of the xpub address.
 * @member {Number} derivationIndex
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['derivationIndex'] = undefined;

/**
 * Representation of the output index
 * @member {Number} outputIndex
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['outputIndex'] = undefined;

/**
 * Representation of the satoshis value
 * @member {Number} satoshis
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['satoshis'] = undefined;

/**
 * Representation of the script string
 * @member {String} script
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['script'] = undefined;

/**
 * Representation of the hash that should be signed.
 * @member {String} sighash
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['sighash'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} transactionId
 */
PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner.prototype['transactionId'] = undefined;
var _default = PrepareAUTXOBasedTransactionFromHDWalletXPubYPubZPubRIBSDVinInner;
exports["default"] = _default;