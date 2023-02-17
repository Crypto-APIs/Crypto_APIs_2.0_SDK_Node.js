"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData = _interopRequireDefault(require("./PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST model module.
 * @module model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST
 * @version 1.13.0
 */
var PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code>.
   * Tron
   * @alias module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST
   * @param data {String} String representation of the data
   * @param derivationIndex {String} Representation of the derivation index of the xpub address
   * @param expiration {Number} Rrepresentation of the expiration value
   * @param rawDataHex {String} Representation of the raw data in hex format
   * @param recipient {String} Rrepresentation of the recipients' address
   * @param refBlockBytes {String} Representation of the block bytes
   * @param refBlockHash {String} Representation of the block hash refference
   * @param sender {String} Representation of the sender
   * @param timestamp {Number} Representation of the timestamp
   * @param transactionId {String} Represents the reference transaction identifier.
   * @param type {String} Representation of the transfer type.
   * @param typeUrl {String} Representation of the URL
   * @param unit {String} Represents the unit of the amount to be sent.
   * @param visible {Boolean} Representation of the address visibility
   */
  function PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST(data, derivationIndex, expiration, rawDataHex, recipient, refBlockBytes, refBlockHash, sender, timestamp, transactionId, type, typeUrl, unit, visible) {
    _classCallCheck(this, PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST);
    PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.initialize(this, data, derivationIndex, expiration, rawDataHex, recipient, refBlockBytes, refBlockHash, sender, timestamp, transactionId, type, typeUrl, unit, visible);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST, null, [{
    key: "initialize",
    value: function initialize(obj, data, derivationIndex, expiration, rawDataHex, recipient, refBlockBytes, refBlockHash, sender, timestamp, transactionId, type, typeUrl, unit, visible) {
      obj['data'] = data;
      obj['derivationIndex'] = derivationIndex;
      obj['expiration'] = expiration;
      obj['rawDataHex'] = rawDataHex;
      obj['recipient'] = recipient;
      obj['refBlockBytes'] = refBlockBytes;
      obj['refBlockHash'] = refBlockHash;
      obj['sender'] = sender;
      obj['timestamp'] = timestamp;
      obj['transactionId'] = transactionId;
      obj['type'] = type;
      obj['typeUrl'] = typeUrl;
      obj['unit'] = unit;
      obj['visible'] = visible;
    }

    /**
     * Constructs a <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST} obj Optional instance to populate.
     * @return {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST} The populated <code>PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST();
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
        if (data.hasOwnProperty('derivationIndex')) {
          obj['derivationIndex'] = _ApiClient["default"].convertToType(data['derivationIndex'], 'String');
        }
        if (data.hasOwnProperty('expiration')) {
          obj['expiration'] = _ApiClient["default"].convertToType(data['expiration'], 'Number');
        }
        if (data.hasOwnProperty('rawData')) {
          obj['rawData'] = _PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData["default"].constructFromObject(data['rawData']);
        }
        if (data.hasOwnProperty('rawDataHex')) {
          obj['rawDataHex'] = _ApiClient["default"].convertToType(data['rawDataHex'], 'String');
        }
        if (data.hasOwnProperty('recipient')) {
          obj['recipient'] = _ApiClient["default"].convertToType(data['recipient'], 'String');
        }
        if (data.hasOwnProperty('refBlockBytes')) {
          obj['refBlockBytes'] = _ApiClient["default"].convertToType(data['refBlockBytes'], 'String');
        }
        if (data.hasOwnProperty('refBlockHash')) {
          obj['refBlockHash'] = _ApiClient["default"].convertToType(data['refBlockHash'], 'String');
        }
        if (data.hasOwnProperty('sender')) {
          obj['sender'] = _ApiClient["default"].convertToType(data['sender'], 'String');
        }
        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }
        if (data.hasOwnProperty('transactionId')) {
          obj['transactionId'] = _ApiClient["default"].convertToType(data['transactionId'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
        if (data.hasOwnProperty('typeUrl')) {
          obj['typeUrl'] = _ApiClient["default"].convertToType(data['typeUrl'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('visible')) {
          obj['visible'] = _ApiClient["default"].convertToType(data['visible'], 'Boolean');
        }
      }
      return obj;
    }
  }]);
  return PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST;
}();
/**
 * String representation of the data
 * @member {String} data
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['data'] = undefined;

/**
 * Representation of the derivation index of the xpub address
 * @member {String} derivationIndex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['derivationIndex'] = undefined;

/**
 * Rrepresentation of the expiration value
 * @member {Number} expiration
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['expiration'] = undefined;

/**
 * @member {module:model/PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBSTRawData} rawData
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['rawData'] = undefined;

/**
 * Representation of the raw data in hex format
 * @member {String} rawDataHex
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['rawDataHex'] = undefined;

/**
 * Rrepresentation of the recipients' address
 * @member {String} recipient
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['recipient'] = undefined;

/**
 * Representation of the block bytes
 * @member {String} refBlockBytes
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['refBlockBytes'] = undefined;

/**
 * Representation of the block hash refference
 * @member {String} refBlockHash
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['refBlockHash'] = undefined;

/**
 * Representation of the sender
 * @member {String} sender
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['sender'] = undefined;

/**
 * Representation of the timestamp
 * @member {Number} timestamp
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['timestamp'] = undefined;

/**
 * Represents the reference transaction identifier.
 * @member {String} transactionId
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['transactionId'] = undefined;

/**
 * Representation of the transfer type.
 * @member {String} type
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['type'] = undefined;

/**
 * Representation of the URL
 * @member {String} typeUrl
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['typeUrl'] = undefined;

/**
 * Represents the unit of the amount to be sent.
 * @member {String} unit
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['unit'] = undefined;

/**
 * Representation of the address visibility
 * @member {Boolean} visible
 */
PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST.prototype['visible'] = undefined;
var _default = PrepareATransactionFromAnAddressInHDWalletXPubYPubZPubRIBST;
exports["default"] = _default;