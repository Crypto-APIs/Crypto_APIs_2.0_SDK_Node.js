"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ListDepositAddressesRIConfirmedBalance = _interopRequireDefault(require("./ListDepositAddressesRIConfirmedBalance"));
var _ListDepositAddressesRIFungibleTokensInner = _interopRequireDefault(require("./ListDepositAddressesRIFungibleTokensInner"));
var _ListDepositAddressesRINonFungibleTokensInner = _interopRequireDefault(require("./ListDepositAddressesRINonFungibleTokensInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListDepositAddressesRI model module.
 * @module model/ListDepositAddressesRI
 * @version 1.13.0
 */
var ListDepositAddressesRI = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListDepositAddressesRI</code>.
   * @alias module:model/ListDepositAddressesRI
   * @param address {String} Specifies the specific address's unique string value.
   * @param confirmedBalance {module:model/ListDepositAddressesRIConfirmedBalance} 
   * @param createdTimestamp {Number} Defines the specific UNIX time when the deposit address was created.
   * @param fungibleTokens {Array.<module:model/ListDepositAddressesRIFungibleTokensInner>} Represents fungible tokens'es detailed information
   * @param index {String} Represents the index of the address in the wallet.
   * @param label {String} Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
   * @param nonFungibleTokens {Array.<module:model/ListDepositAddressesRINonFungibleTokensInner>} Represents non-fungible tokens'es detailed information.
   */
  function ListDepositAddressesRI(address, confirmedBalance, createdTimestamp, fungibleTokens, index, label, nonFungibleTokens) {
    _classCallCheck(this, ListDepositAddressesRI);
    ListDepositAddressesRI.initialize(this, address, confirmedBalance, createdTimestamp, fungibleTokens, index, label, nonFungibleTokens);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ListDepositAddressesRI, null, [{
    key: "initialize",
    value: function initialize(obj, address, confirmedBalance, createdTimestamp, fungibleTokens, index, label, nonFungibleTokens) {
      obj['address'] = address;
      obj['confirmedBalance'] = confirmedBalance;
      obj['createdTimestamp'] = createdTimestamp;
      obj['fungibleTokens'] = fungibleTokens;
      obj['index'] = index;
      obj['label'] = label;
      obj['nonFungibleTokens'] = nonFungibleTokens;
    }

    /**
     * Constructs a <code>ListDepositAddressesRI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListDepositAddressesRI} obj Optional instance to populate.
     * @return {module:model/ListDepositAddressesRI} The populated <code>ListDepositAddressesRI</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListDepositAddressesRI();
        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
        if (data.hasOwnProperty('confirmedBalance')) {
          obj['confirmedBalance'] = _ListDepositAddressesRIConfirmedBalance["default"].constructFromObject(data['confirmedBalance']);
        }
        if (data.hasOwnProperty('createdTimestamp')) {
          obj['createdTimestamp'] = _ApiClient["default"].convertToType(data['createdTimestamp'], 'Number');
        }
        if (data.hasOwnProperty('fungibleTokens')) {
          obj['fungibleTokens'] = _ApiClient["default"].convertToType(data['fungibleTokens'], [_ListDepositAddressesRIFungibleTokensInner["default"]]);
        }
        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'String');
        }
        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
        if (data.hasOwnProperty('nonFungibleTokens')) {
          obj['nonFungibleTokens'] = _ApiClient["default"].convertToType(data['nonFungibleTokens'], [_ListDepositAddressesRINonFungibleTokensInner["default"]]);
        }
      }
      return obj;
    }
  }]);
  return ListDepositAddressesRI;
}();
/**
 * Specifies the specific address's unique string value.
 * @member {String} address
 */
ListDepositAddressesRI.prototype['address'] = undefined;

/**
 * @member {module:model/ListDepositAddressesRIConfirmedBalance} confirmedBalance
 */
ListDepositAddressesRI.prototype['confirmedBalance'] = undefined;

/**
 * Defines the specific UNIX time when the deposit address was created.
 * @member {Number} createdTimestamp
 */
ListDepositAddressesRI.prototype['createdTimestamp'] = undefined;

/**
 * Represents fungible tokens'es detailed information
 * @member {Array.<module:model/ListDepositAddressesRIFungibleTokensInner>} fungibleTokens
 */
ListDepositAddressesRI.prototype['fungibleTokens'] = undefined;

/**
 * Represents the index of the address in the wallet.
 * @member {String} index
 */
ListDepositAddressesRI.prototype['index'] = undefined;

/**
 * Represents a custom tag that customers can set up for their Wallets and addresses. E.g. custom label named \"Special addresses\".
 * @member {String} label
 */
ListDepositAddressesRI.prototype['label'] = undefined;

/**
 * Represents non-fungible tokens'es detailed information.
 * @member {Array.<module:model/ListDepositAddressesRINonFungibleTokensInner>} nonFungibleTokens
 */
ListDepositAddressesRI.prototype['nonFungibleTokens'] = undefined;
var _default = ListDepositAddressesRI;
exports["default"] = _default;