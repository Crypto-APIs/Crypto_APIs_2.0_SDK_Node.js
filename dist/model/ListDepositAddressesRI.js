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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * The ListDepositAddressesRI model module.
 * @module model/ListDepositAddressesRI
 * @version 1.11.0
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

    /**
     * Validates the JSON data with respect to <code>ListDepositAddressesRI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListDepositAddressesRI</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ListDepositAddressesRI.RequiredProperties),
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
      if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
        throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
      }
      // validate the optional field `confirmedBalance`
      if (data['confirmedBalance']) {
        // data not null
        _ListDepositAddressesRIConfirmedBalance["default"].validateJSON(data['confirmedBalance']);
      }
      if (data['fungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['fungibleTokens'])) {
          throw new Error("Expected the field `fungibleTokens` to be an array in the JSON data but got " + data['fungibleTokens']);
        }
        // validate the optional field `fungibleTokens` (array)
        var _iterator2 = _createForOfIteratorHelper(data['fungibleTokens']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _ListDepositAddressesRIFungibleTokensInner["default"].validateJsonObject(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['index'] && !(typeof data['index'] === 'string' || data['index'] instanceof String)) {
        throw new Error("Expected the field `index` to be a primitive type in the JSON string but got " + data['index']);
      }
      // ensure the json data is a string
      if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
        throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
      }
      if (data['nonFungibleTokens']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['nonFungibleTokens'])) {
          throw new Error("Expected the field `nonFungibleTokens` to be an array in the JSON data but got " + data['nonFungibleTokens']);
        }
        // validate the optional field `nonFungibleTokens` (array)
        var _iterator3 = _createForOfIteratorHelper(data['nonFungibleTokens']),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _item = _step3.value;
            _ListDepositAddressesRINonFungibleTokensInner["default"].validateJsonObject(_item);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        ;
      }
      return true;
    }
  }]);
  return ListDepositAddressesRI;
}();
ListDepositAddressesRI.RequiredProperties = ["address", "confirmedBalance", "createdTimestamp", "fungibleTokens", "index", "label", "nonFungibleTokens"];

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